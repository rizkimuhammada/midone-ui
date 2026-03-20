# Midone UI — Vanilla Package (Claude Context)

Panduan implementasi komponen vanilla JS agar 1:1 dengan Vue counterpart-nya.

---

## Struktur Project

```
packages/
  core/src/
    styles/          ← CVA style functions (buttonVariants, alertRootVariants, dst.)
    utils/cn.ts      ← twMerge + clsx wrapper
  vue/src/
    components/ui/   ← Source of truth untuk semua komponen
    pages/           ← Page showcase per komponen (Button.vue, Alert.vue, dst.)
  vanilla/
    src/
      *.ts           ← Init scripts per komponen
    *.html           ← Page showcase per komponen
```

---

## Wajib Dilakukan Sebelum Implementasi Vanilla

**Sebelum menulis logika JS atau HTML untuk komponen vanilla apapun, BACA DULU file Vue-nya:**

1. **Vue component sub-parts** di `packages/vue/src/components/ui/<component>/`
   - Setiap file `.vue` = satu sub-komponen (root, icon, title, description, dst.)
   - Perhatikan apakah komponen menggunakan `<Slot>` — jika ya, classes dan attributes di-apply langsung ke child element (bukan wrapper div)
   - Perhatikan `data-*` attributes yang di-set (misal: `data-part`, `data-scope`, `data-state`)

2. **Vue page showcase** di `packages/vue/src/pages/<Component>.vue`
   - Ini adalah referensi untuk struktur HTML di `*.html` vanilla

3. **Core styles** di `packages/core/src/styles/<component>.styles.ts`
   - Lihat semua exported class variables (bukan hanya variants utama)

**Contoh alur yang benar untuk komponen Alert:**
```
packages/vue/src/components/ui/alert/AlertRoot.vue     → struktur root
packages/vue/src/components/ui/alert/AlertIcon.vue     → Slot → apply ke SVG langsung
packages/vue/src/components/ui/alert/AlertTitle.vue    → apply class ke element
packages/vue/src/components/ui/alert/AlertDescription.vue
packages/vue/src/components/ui/alert/AlertCloseTrigger.vue
packages/core/src/styles/alert.styles.ts               → alertIcon, alertTitle, dst.
packages/vue/src/pages/Alert.vue                       → referensi HTML structure
```

---

## Pola Konversi Vue → Vanilla HTML

| Vue | Vanilla HTML |
|-----|-------------|
| `<ButtonRoot variant="primary">` | `<button class="button" data-variant="primary">` |
| `<AlertRoot variant="primary">` | `<div class="alert" data-variant="primary">` |
| `<AlertIcon><Compass /></AlertIcon>` | `<div class="alert-icon"><svg ...></svg></div>` |
| `<AlertTitle>text</AlertTitle>` | `<div class="alert-title">text</div>` |
| `<AlertDescription>text</AlertDescription>` | `<div class="alert-description">text</div>` |
| `<AlertCloseTrigger />` | `<button class="alert-close-trigger"></button>` |
| `<Box class="p-0">` | `<div class="box p-0">` |
| `<Box raised="single">` | `<div class="box" data-raised="single">` |

---

## Pola Init Script (TS)

```typescript
import { cn } from "@midoneui/core/src/utils/cn";
import { componentVariants } from "@midoneui/core/src/styles/component.styles";

function initComponents() {
    document.querySelectorAll(".component").forEach((el) => {
        const variant = el.getAttribute("data-variant") as any || "primary";
        const variantClasses = componentVariants({ variant });
        el.className = cn(variantClasses, el.className);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initComponents);
} else {
    initComponents();
}
```

---

## Komponen yang Menggunakan `<Slot>` — Butuh Perhatian Khusus

Vue `<Slot>` me-render child element LANGSUNG dengan classes di-apply ke child tersebut (bukan wrapper div). Dalam vanilla, ini harus direplikasi dengan:

1. Ambil `firstElementChild` dari wrapper div
2. Apply classes ke child element via `setAttribute("class", ...)`
3. Set `data-*` attributes ke child
4. `replaceWith(child)` — buang wrapper, child langsung jadi direct child dari parent

**Gunakan `setAttribute("class", ...)` untuk SVG** — bukan `.className =` karena SVGElement.className adalah read-only.

```typescript
// SALAH untuk SVG:
iconEl.className = cn(alertIcon, iconEl.className); // TypeError!

// BENAR untuk SVG:
iconEl.setAttribute("class", cn(alertIcon, iconEl.getAttribute("class") ?? ""));
```

**Komponen yang diketahui pakai Slot:**
- `AlertIcon` → apply ke inner SVG, unwrap div

---

## JS Harus Transform DOM — HTML Harus Semirip Vue Usage

HTML vanilla harus se-clean dan se-mirip Vue usage. JS yang bertanggung jawab transform DOM ke struktur yang dibutuhkan CSS.

**Contoh: MenuItem**

Vue usage:
```html
<MenuItem value="react"><svg .../> React</MenuItem>
```
HTML vanilla (harus sama minimnya):
```html
<div class="menu-item" data-value="react"><svg .../> React</div>
```
Bukan:
```html
<!-- SALAH: user tidak perlu tulis inner div wrapper -->
<div class="menu-item" data-value="react">
  <div><svg .../> React</div>
  <div></div>
</div>
```

**menu.ts** yang transform flat content → inner div structure yang dibutuhkan CSS `[&>div:nth-of-type(1)]`:
- Wrap semua children ke `contentDiv` (div:nth-of-type(1))
- Add shortcut `div` kosong (div:nth-of-type(2)) dari `data-shortcut` attribute
- Untuk checkbox/radio: prepend indicator `<span data-part="item-indicator" hidden>` via JS
- Untuk trigger item (submenu): append `<svg data-part="nested-menu-chevron">` sebagai sibling contentDiv

**Prinsip:** Vue component mengurus wrapping → vanilla JS yang mengurus wrapping. User hanya tulis konten.

---

## HTML Usage Harus Seminimal Mungkin

Class dan style yang bisa di-generate JS **jangan ditulis di HTML**. User hanya boleh nulis class komponen marker + props semantik.

**SALAH:**
```html
<!-- relative harusnya ditambah JS, bukan user -->
<div class="menu-root w-56 relative">
<!-- button class dan data-variant harusnya dihandle menu.ts, bukan button.ts -->
<button class="button menu-trigger" data-variant="ghost">
```

**BENAR:**
```html
<div class="menu-root w-56">
<button class="menu-trigger">
```

**Aturan:**
- Positioning styles (`relative`, `absolute`, dll) yang dibutuhkan untuk komponen → tambahkan via JS (`el.style.position = "relative"`)
- Jika sebuah komponen secara internal pakai komponen lain (misal `MenuTrigger` pakai `Button ghost`) → init script komponen itu yang apply semua classes-nya, **bukan** mengandalkan init script komponen lain (button.ts)
- HTML hanya berisi class marker dan data-* props yang memang perlu dikonfigurasi user

---

## Sub-Elemen Internal Harus Di-inject JS — Bukan Ditulis di HTML

Sub-elemen yang bukan bagian dari "Vue usage" (tidak ditulis user di template Vue, melainkan di-render otomatis oleh komponen Vue secara internal) **harus di-inject oleh JS**, bukan ditulis manual di HTML.

**Cara identifikasi:** Cek Vue page showcase (`pages/<Component>.vue`). Apapun yang tidak ada di sana tapi ada di sub-komponen Vue (internal render) → JS yang inject.

**Contoh: Switch**

Vue usage (di `pages/Switch.vue`):
```html
<SwitchRoot>
  <SwitchControl />
  <SwitchLabel>Airplane Mode</SwitchLabel>
</SwitchRoot>
```

`SwitchControl` secara internal render `<SwitchThumb>` di dalamnya. `SwitchRoot` secara internal append `<SwitchHiddenInput>`. Keduanya tidak ditulis user.

HTML vanilla (hanya apa yang ada di usage):
```html
<label class="switch-root">
  <span class="switch-control"></span>
  <span class="switch-label">Airplane Mode</span>
</label>
```

`switch.ts` yang inject:
```typescript
// Inject thumb ke dalam control
const thumb = document.createElement("span");
control.appendChild(thumb);

// Inject hidden input ke label
const input = document.createElement("input");
input.type = "checkbox";
input.style.display = "none";
root.appendChild(input);
```

**Aturan:** HTML usage = apa yang user tulis di Vue template. Internal render komponen Vue = tanggung jawab init script TS.

---

## Hirarki Elemen Harus 1:1 dengan Vue — Termasuk Wrapper Kosong

**Meskipun sebuah sub-komponen Vue tidak menghasilkan class apapun** (misal `comboboxItemText = ""`), tetap wajib ada padanannya di HTML vanilla. User minta struktur hirarki DOM persis sama dengan Vue, karena kode sudah ditulis konsisten dan mungkin ada kebutuhan JS/CSS di masa depan.

**Contoh: ComboboxItemText**

Vue usage:
```html
<ComboboxItem :item="item">
  <ComboboxItemText>React</ComboboxItemText>
</ComboboxItem>
```

Vanilla HTML (harus sama strukturnya):
```html
<div class="combobox-item" data-value="React">
  <div class="combobox-item-text">React</div>
</div>
```

**Bukan:**
```html
<!-- SALAH: menghilangkan wrapper karena "tidak ada class-nya" -->
<div class="combobox-item" data-value="React">React</div>
```

**Aturan:** Selalu buat wrapper element untuk setiap sub-komponen Vue, bahkan jika style-nya string kosong. JS tetap apply classnya (meski kosong), dan filter/query selector harus target `.combobox-item-text` bukan `firstChild`.

---

## Jumlah Example Harus 1:1 dengan Vue

**JANGAN tambah example ekstra** yang tidak ada di Vue page showcase. Jumlah kolom, variasi, dan konten di `*.html` vanilla harus sama persis dengan `packages/vue/src/pages/<Component>.vue`. Cek dulu Vue page-nya sebelum menulis HTML.

---

## Aturan Selector — WAJIB Diikuti

### Jangan pakai selector atribut yang terlalu luas
**SALAH:**
```typescript
document.querySelectorAll("[data-raised]") // kena SEMUA elemen dengan data-raised, termasuk <table>
```
**BENAR:**
```typescript
document.querySelectorAll(".box[data-raised]") // hanya elemen .box yang punya data-raised
```

**Aturan:** Setiap `querySelectorAll` harus **scope ke class komponen** dulu (`.box`, `.accordion-root`, `.table`, dst.) sebelum filter atribut. Atribut seperti `data-raised`, `data-variant`, `data-state` bisa muncul di banyak komponen berbeda — selector tanpa class prefix akan bocor ke komponen lain dan merusak tampilannya.

**Contoh nyata:** `accordion.ts` pakai `[data-raised]` → kena `<table data-raised="single">` → `boxVariants` classes ter-apply ke table element → layout table rusak.

### `boxVariants` pada accordion items — hanya ketika `variant === "boxed"`
Vue `AccordionItem` menggunakan `boxVariants({ raised })` **hanya ketika parent accordion punya `variant="boxed"`**. Di vanilla, logika ini harus ada di dalam loop `.accordion-root` (bukan querySelectorAll global), dengan check `variant === "boxed" && raised`:

```typescript
// BENAR — scoped di dalam loop root, ada kondisi variant check:
root.querySelectorAll(".accordion-item").forEach((item) => {
    const raised = item.getAttribute("data-raised") as any;
    if (variant === "boxed" && raised) {
        // Apply boxVariants + re-apply user classes (p-override pattern)
    } else {
        item.className += " " + accordionItemVariants({ variant });
    }
});

// SALAH — global, tidak cek variant:
document.querySelectorAll("[data-raised]").forEach((el) => { ... });
```

---

## Known Issues & Fixes

### tailwind-merge v2 + Tailwind v4: padding override tidak reliable

**Masalah:** `cn(variantClasses_dengan_p5, "box p-0")` kadang tidak resolve dengan benar untuk raised variants — `p-5` dari variantClasses tetap menang atas `p-0` user class.

**Fix di `box.ts`:** Gunakan classList manipulation langsung:
```typescript
// Setelah apply variant classes, re-apply user classes via classList
for (const cls of userClasses) {
    if (/^!?p-/.test(cls)) {
        Array.from(box.classList)
            .filter(c => /^p-\d/.test(c))
            .forEach(c => box.classList.remove(c));
    }
    box.classList.add(cls);
}
// Nuclear fallback untuk p-0:
if (userClasses.includes("p-0")) {
    (box as HTMLElement).style.padding = "0";
}
```

### Inline whitespace antar `inline-block` elements melebarkan container

**Masalah:** `<button>` default `display:inline-block`. Jika di HTML ada whitespace (newline/indentasi) antar elemen, browser render whitespace itu sebagai spasi ~4px. Container dengan `w-fit` ikut melebar.

**Contoh:**
```html
<!-- SALAH — ada whitespace, container lebih lebar dari semestinya -->
<div class="tabs-list">
  <button>Tab A</button>
  <button>Tab B</button>
</div>
```

**Fix:** Tambahkan `flex` via class (bukan inline style) ke container — flex items tidak terpengaruh whitespace antar elemen:
```typescript
// BENAR — tambah flex + gap via cn(), bukan style=""
list.className = cn(tabsList, "flex", list.className);
```

### Selector `[&>div]:flex [&>div]:gap-1` tanpa inner div — apply ke parent langsung

Beberapa komponen Vue pakai pola `[&>div]:flex [&>div]:gap-1` di class container, yang men-target **inner div child**. Jika di vanilla tidak ada inner div (karena JS tidak buat wrapper), selector itu tidak punya efek.

**Fix:** Apply `flex gap-1` langsung ke container element via `cn()`:
```typescript
// tabsList punya [&>div]:flex [&>div]:gap-1 — tapi vanilla tidak buat inner div
// Tambah flex gap-1 langsung ke list element
list.className = cn(tabsList, "flex", list.className);
```

Cek apakah CSS class komponen punya `[&>div]:*` selectors — jika ya, tanyakan apakah ada inner div di vanilla. Kalau tidak ada, apply utility class tersebut langsung ke parent.

### `data-part="icon"` harus ada di direct child alert

`alertRootVariants` menggunakan `has-[>[data-part='icon']]:ps-14` — selector `>` artinya **direct child**. Icon element harus langsung child dari `.alert`, bukan nested.

---

## File Referensi

| File | Keterangan |
|------|-----------|
| `packages/core/src/utils/cn.ts` | twMerge + clsx, ada custom extend untuk bg-background |
| `packages/core/src/styles/box.styles.ts` | boxVariants — base class selalu include `p-5` |
| `packages/core/src/styles/alert.styles.ts` | alertRootVariants, alertIcon, alertTitle, dst. |
| `packages/vanilla/src/main.ts` | Entry point, import order: accordion → button → alert → box |
| `packages/vanilla/src/alert.ts` | Alert init logic |
| `packages/vanilla/src/box.ts` | Box init logic dengan padding fix |
| `packages/vanilla/Alert.html` | Alert showcase (sudah dikonversi) |
| `packages/vanilla/Button.html` | Button showcase (referensi pola konversi) |
