import { createListCollection } from "@ark-ui/react/select";
import {
  SelectRoot,
  SelectLabel,
  SelectControl,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItem,
  SelectItemText,
} from "@/components/ui/select";

function Main() {
  const collection = createListCollection({
    items: ["React", "Solid", "Vue", "Svelte"],
  });

  const collectionTimezone = createListCollection({
    items: [
      {
        label: "North America",
        items: [
          { value: "est", label: "Eastern Standard Time (EST)" },
          { value: "cst", label: "Central Standard Time (CST)" },
          { value: "mst", label: "Mountain Standard Time (MST)" },
          { value: "pst", label: "Pacific Standard Time (PST)" },
          { value: "akst", label: "Alaska Standard Time (AKST)" },
          { value: "hst", label: "Hawaii Standard Time (HST)" },
        ],
      },
      {
        label: "Europe & Africa",
        items: [
          { value: "gmt", label: "Greenwich Mean Time (GMT)" },
          { value: "cet", label: "Central European Time (CET)" },
          { value: "eet", label: "Eastern European Time (EET)" },
          { value: "west", label: "Western European Summer Time (WEST)" },
          { value: "cat", label: "Central Africa Time (CAT)" },
          { value: "eat", label: "East Africa Time (EAT)" },
        ],
      },
      {
        label: "Asia",
        items: [
          { value: "msk", label: "Moscow Time (MSK)" },
          { value: "ist", label: "India Standard Time (IST)" },
          { value: "cst_china", label: "China Standard Time (CST)" },
          { value: "jst", label: "Japan Standard Time (JST)" },
          { value: "kst", label: "Korea Standard Time (KST)" },
          {
            value: "ist_indonesia",
            label: "Indonesia Central Standard Time (WITA)",
          },
        ],
      },
      {
        label: "Australia & Pacific",
        items: [
          { value: "awst", label: "Australian Western Standard Time (AWST)" },
          { value: "acst", label: "Australian Central Standard Time (ACST)" },
          { value: "aest", label: "Australian Eastern Standard Time (AEST)" },
          { value: "nzst", label: "New Zealand Standard Time (NZST)" },
          { value: "fjt", label: "Fiji Time (FJT)" },
        ],
      },
      {
        label: "South America",
        items: [
          { value: "art", label: "Argentina Time (ART)" },
          { value: "bot", label: "Bolivia Time (BOT)" },
          { value: "brt", label: "Brasilia Time (BRT)" },
          { value: "clt", label: "Chile Standard Time (CLT)" },
        ],
      },
    ],
  });

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <SelectRoot className="w-56" collection={collection}>
            <SelectLabel>Single</SelectLabel>
            <SelectControl>
              <SelectTrigger>
                <SelectValueText placeholder="Select a Framework" />
              </SelectTrigger>
            </SelectControl>
            <SelectContent>
              <SelectItemGroup>
                <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
                {collection.items.map((item) => (
                  <SelectItem key={item} item={item}>
                    <SelectItemText>{item}</SelectItemText>
                  </SelectItem>
                ))}
              </SelectItemGroup>
            </SelectContent>
          </SelectRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <SelectRoot className="w-56" collection={collection} multiple>
            <SelectLabel>Multiple</SelectLabel>
            <SelectControl>
              <SelectTrigger>
                <SelectValueText placeholder="Select a Framework" />
              </SelectTrigger>
            </SelectControl>
            <SelectContent>
              <SelectItemGroup>
                <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
                {collection.items.map((item) => (
                  <SelectItem key={item} item={item}>
                    <SelectItemText>{item}</SelectItemText>
                  </SelectItem>
                ))}
              </SelectItemGroup>
            </SelectContent>
          </SelectRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <SelectRoot className="w-56" collection={collection} multiple>
            <SelectLabel>Scrollable</SelectLabel>
            <SelectControl>
              <SelectTrigger>
                <SelectValueText placeholder="Select a Framework" />
              </SelectTrigger>
            </SelectControl>
            <SelectContent>
              {collectionTimezone.items.map((item) => (
                <SelectItemGroup key={item.label}>
                  <SelectItemGroupLabel>{item.label}</SelectItemGroupLabel>
                  {item.items.map((item) => (
                    <SelectItem key={item.value} item={item.value}>
                      <SelectItemText>{item.label}</SelectItemText>
                    </SelectItem>
                  ))}
                </SelectItemGroup>
              ))}
            </SelectContent>
          </SelectRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
