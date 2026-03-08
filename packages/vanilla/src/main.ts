import './index.css'
import { LitElement, html } from 'lit'
import * as accordion from "@zag-js/accordion"
import * as avatar from "@zag-js/avatar"
import { normalizeProps, VanillaMachine } from "@zag-js/vanilla"
import { buttonVariants, type ButtonVariants } from './core/styles/button.styles'
import { boxVariants, type BoxVariants } from './core/styles/box.styles'
import {
    accordionRootVariants,
    accordionItemVariants,
    accordionTrigger,
    accordionItemIndicator,
    accordionContent,
    type AccordionRootVariants,
    type AccordionItemVariants
} from './core/styles/accordion.styles'
import {
    alertRootVariants,
    alertTitle,
    alertDescription,
    alertCloseTrigger,
    alertIcon,
    type AlertRootVariants
} from './core/styles/alert.styles'
import { avatarRootVariants, avatarFallback, avatarImage, type AvatarRootVariants } from './core/styles/avatar.styles'
import { badgeVariants, type BadgeVariants } from './core/styles/badge.styles'
import { breadcrumbList } from './core/styles/breadcrumb.styles'
import { progressRoot as progressCircularRoot, progressCircle, progressCircleTrack, progressCircleRange, progressValueText as progressCircularValueText, progressLabel as progressCircularLabel } from './core/styles/progress-circular.styles'
import { progressRoot as progressLinearRoot, progressTrack, progressRange, progressValueText as progressLinearValueText, progressLabel as progressLinearLabel } from './core/styles/progress-linear.styles'
import { cn } from './core/utils/cn'
import { syncSlot } from './core/utils/slot'
import { createElement } from 'lucide'
import * as icons from 'lucide'

console.log('Main script loading...');

/**
 * MIcon Component
 */
export class MIcon extends LitElement {
    static properties = {
        name: { type: String },
        size: { type: String },
        color: { type: String },
        dataPart: { type: String, attribute: 'data-part' }
    }
    name = ''
    size = '24'
    color = 'currentColor'
    dataPart = ''
    createRenderRoot() { return this }
    connectedCallback() {
        super.connectedCallback()
        this.style.display = 'contents'
    }
    updated() { this.renderIcon() }
    private renderIcon() {
        if (!this.name) return
        const iconName = this.name.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('')
        const icon = (icons as any)[iconName]
        if (!icon) return
        this.innerHTML = ''
        const svgEl = createElement(icon, {
            width: this.size,
            height: this.size,
            stroke: this.color,
            class: cn('lucide', `lucide-${this.name}`, this.getAttribute('class'))
        })

        if (this.dataPart) {
            svgEl.setAttribute('data-part', this.dataPart)
        }

        this.appendChild(svgEl)
    }
    render() { return undefined }
}

/**
 * MButton Component
 */
export class MButton extends LitElement {
    static properties = {
        variant: { type: String },
        size: { type: String },
        look: { type: String },
        disabled: { type: Boolean, reflect: true },
        asChild: { type: Boolean, attribute: 'as-child' }
    }
    variant?: ButtonVariants['variant']
    size?: ButtonVariants['size']
    look?: ButtonVariants['look']
    disabled = false
    asChild = false

    private _initialClass = ''

    createRenderRoot() { return this }

    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
    }

    updated() {
        const variantsClass = buttonVariants({
            variant: this.variant,
            size: this.size,
            look: this.look
        })
        syncSlot(this, variantsClass, this._initialClass)
    }
    render() { return undefined }
}

/**
 * MBox Component
 */
export class MBox extends LitElement {
    static properties = {
        raised: { type: String },
        asChild: { type: Boolean, attribute: 'as-child' }
    }
    raised: BoxVariants['raised'] = undefined
    asChild = false

    private _initialClass = ''

    createRenderRoot() { return this }

    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
    }

    updated() {
        const variantsClass = boxVariants({ raised: this.raised })
        syncSlot(this, variantsClass, this._initialClass)
    }
    render() { return undefined }
}

/**
 * MAlert Components
 */
export class MAlert extends LitElement {
    static properties = {
        variant: { type: String },
        look: { type: String },
        asChild: { type: Boolean, attribute: 'as-child' }
    }
    variant?: AlertRootVariants['variant']
    look?: AlertRootVariants['look']
    asChild = false

    private _initialClass = ''

    createRenderRoot() { return this }

    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
        if (!this.hasAttribute('role')) this.setAttribute('role', 'alert')
    }

    updated() {
        const variantsClass = alertRootVariants({
            variant: this.variant,
            look: this.look
        })
        syncSlot(this, variantsClass, this._initialClass)
    }
    render() { return undefined }
}

export class MAlertTitle extends LitElement {
    static properties = {
        asChild: { type: Boolean, attribute: 'as-child' }
    }
    asChild = false
    private _initialClass = ''
    createRenderRoot() { return this }
    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
    }
    updated() {
        syncSlot(this, alertTitle, this._initialClass)
    }
    render() { return undefined }
}

export class MAlertIcon extends LitElement {
    private _initialClass = ''
    createRenderRoot() { return this }
    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
        if (!this.hasAttribute('data-part')) this.setAttribute('data-part', 'icon')
    }
    updated() {
        // Jangan render jika tidak memiliki child
        if (!this.firstElementChild && !this.textContent?.trim()) {
            this.style.display = 'none'
        } else {
            this.style.display = ''
            this.className = cn(alertIcon, '[&_svg]:size-full', this._initialClass)

            // Sync data-part to child as well for styling consistency
            const child = this.firstElementChild
            if (child && !child.hasAttribute('data-part')) {
                child.setAttribute('data-part', 'icon')
            }
        }
    }
    render() { return undefined }
}

export class MAlertDescription extends LitElement {
    static properties = {
        asChild: { type: Boolean, attribute: 'as-child' }
    }
    asChild = false
    private _initialClass = ''
    createRenderRoot() { return this }
    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
    }
    updated() {
        syncSlot(this, alertDescription, this._initialClass)
    }
    render() { return undefined }
}

export class MAlertCloseTrigger extends LitElement {
    static properties = {
        asChild: { type: Boolean, attribute: 'as-child' }
    }
    asChild = false
    private _initialClass = ''
    createRenderRoot() { return this }
    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''

        // Hapus alert induk saat ditutup
        this.addEventListener('click', () => {
            const alertNode = this.closest('m-alert')
            if (alertNode) {
                // Untuk Light DOM bisa langsung dihapus saja 
                alertNode.remove()
            }
        })
    }
    updated() {
        if (!this.asChild && !this.firstElementChild && !this.textContent?.trim()) {
            this.innerHTML = '<m-icon name="x"></m-icon>'
        }
        syncSlot(this, cn(alertCloseTrigger, '[&_svg]:size-full'), this._initialClass)
    }
    render() { return undefined }
}

/**
 * MAvatar Components
 */
export class MAvatarRoot extends LitElement {
    static properties = {
        bordered: { type: Boolean },
        asChild: { type: Boolean, attribute: 'as-child' }
    }
    bordered?: boolean
    asChild = false
    private _initialClass = ''
    private service: any = null
    api: any = null

    createRenderRoot() { return this }

    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
    }

    firstUpdated() {
        const imageEl = this.querySelector('m-avatar-image')
        const src = imageEl?.getAttribute('src') || ''

        this.service = new VanillaMachine(avatar.machine as any, {
            id: this.id || 'avatar-' + Math.random().toString(36).substr(2, 5),
            src,
            onStatusChange: () => this.requestUpdate()
        })

        this.service.subscribe((service: any) => {
            this.api = avatar.connect(service, normalizeProps)
            this.requestUpdate()
        })

        this.service.start()
    }

    updated() {
        if (!this.api) return

        // 1. Root Styling & Props
        const borderedAttr = this.getAttribute('bordered')
        const isBordered = borderedAttr === 'false' ? false : (this.bordered ?? true)

        syncSlot(this, avatarRootVariants({ bordered: isBordered }), this._initialClass, this.api.getRootProps())

        // 2. Sync to Children
        const image = this.querySelector('m-avatar-image') as any
        if (image) {
            image.api = this.api
            image.service = this.service
            image.requestUpdate()
        }

        const fallback = this.querySelector('m-avatar-fallback') as any
        if (fallback) {
            fallback.api = this.api
            fallback.requestUpdate()
        }
    }
    render() { return undefined }
}

export class MAvatarImage extends LitElement {
    static properties = {
        src: { type: String },
        alt: { type: String },
        asChild: { type: Boolean, attribute: 'as-child' }
    }
    src?: string
    alt?: string
    asChild = false
    api: any = null
    service: any = null
    _initialClass = ''

    createRenderRoot() { return this }
    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
        this.style.display = 'contents'
    }

    updated() {
        if (!this.api) return

        const src = this.src || this.getAttribute('src') || ''
        const alt = this.alt || this.getAttribute('alt') || ''

        // Sync src back to machine if it changed externally
        if (this.service && this.service.state.context.src !== src) {
            this.service.updateProps({ src })
        }

        let target: HTMLElement = this
        if (!this.asChild && !this.firstElementChild) {
            let img = this.querySelector('img')
            if (!img) {
                img = document.createElement('img')
                this.appendChild(img)
            }
            target = img
        }

        syncSlot(this, avatarImage, this._initialClass, { ...this.api.getImageProps(), src, alt }, target)
    }
    render() { return undefined }
}

export class MAvatarFallback extends LitElement {
    static properties = { asChild: { type: Boolean, attribute: 'as-child' } }
    asChild = false
    api: any = null
    _initialClass = ''

    createRenderRoot() { return this }
    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
        this.style.display = 'contents'
    }

    updated() {
        if (!this.api) return

        const fallbackProps = this.api.getFallbackProps()
        syncSlot(this, avatarFallback, this._initialClass, fallbackProps)
        this.style.display = fallbackProps.hidden ? 'none' : ''
    }
    render() { return undefined }
}

/**
 * MBadge Component
 */
export class MBadge extends LitElement {
    static properties = {
        variant: { type: String },
        look: { type: String },
        asChild: { type: Boolean, attribute: 'as-child' }
    }
    variant?: BadgeVariants['variant']
    look?: BadgeVariants['look']
    asChild = false
    private _initialClass = ''
    createRenderRoot() { return this }
    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
    }
    updated() {
        syncSlot(this, badgeVariants({ variant: this.variant, look: this.look }), this._initialClass)
    }
    render() { return undefined }
}

/**
 * MBreadcrumb Component
 */
export class MBreadcrumb extends LitElement {
    static properties = {
        items: { type: Array },
    }
    items: string[] = []
    createRenderRoot() { return this }
    updated() {
        this.className = cn(breadcrumbList, this.getAttribute('class'))
        this.innerHTML = this.items.map((item, i) => `
            <div class="flex items-center gap-2">
                ${i !== 0 ? '<m-icon name="chevron-right" size="14" class="opacity-50"></m-icon>' : ''}
                <span class="${i === this.items.length - 1 ? 'font-medium' : 'opacity-70'}">${item}</span>
            </div>
        `).join('')
    }
    render() { return undefined }
}

/**
 * MProgress Components
 */
export class MProgressCircularRoot extends LitElement {
    static properties = {
        value: { type: Number },
        max: { type: Number },
        asChild: { type: Boolean, attribute: 'as-child' }
    }
    value = 0
    max = 100
    asChild = false
    private _initialClass = ''
    createRenderRoot() { return this }
    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
    }
    updated() {
        const percentage = (this.value / this.max) * 100
        this.style.setProperty('--progress-percent', `${percentage}%`)
        syncSlot(this, progressCircularRoot, this._initialClass)
    }
    render() { return undefined }
}

export class MProgressCircularCircle extends LitElement {
    createRenderRoot() { return this }
    updated() { this.className = cn(progressCircle, this.getAttribute('class')) }
    render() { return undefined }
}

export class MProgressCircularTrack extends LitElement {
    createRenderRoot() { return this }
    updated() { this.className = cn(progressCircleTrack, this.getAttribute('class')) }
    render() { return undefined }
}

export class MProgressCircularRange extends LitElement {
    createRenderRoot() { return this }
    updated() { this.className = cn(progressCircleRange, this.getAttribute('class')) }
    render() { return undefined }
}

export class MProgressLinearRoot extends LitElement {
    static properties = {
        value: { type: Number },
        max: { type: Number },
        asChild: { type: Boolean, attribute: 'as-child' }
    }
    value = 0
    max = 100
    asChild = false
    private _initialClass = ''
    createRenderRoot() { return this }
    connectedCallback() {
        super.connectedCallback()
        this._initialClass = this.getAttribute('class') || ''
    }
    updated() {
        const percentage = (this.value / this.max) * 100
        this.style.setProperty('--progress-percent', `${percentage}%`)
        syncSlot(this, progressLinearRoot, this._initialClass)
    }
    render() { return undefined }
}

export class MProgressLinearTrack extends LitElement {
    createRenderRoot() { return this }
    updated() { this.className = cn(progressTrack, this.getAttribute('class')) }
    render() { return undefined }
}

export class MProgressLinearRange extends LitElement {
    createRenderRoot() { return this }
    updated() {
        this.className = cn(progressRange, this.getAttribute('class'))
        this.style.width = 'var(--progress-percent, 0%)'
    }
    render() { return undefined }
}

export class MProgressValueText extends LitElement {
    createRenderRoot() { return this }
    updated() {
        const root = this.closest('m-progress-linear-root, m-progress-circular-root') as any
        if (root) {
            this.innerText = `${root.value}%`
        }
        // Use either linear or circular style, they are currently same anyway
        this.className = cn(progressLinearValueText, this.getAttribute('class'))
    }
    render() { return undefined }
}

export class MProgressLabel extends LitElement {
    createRenderRoot() { return this }
    updated() {
        this.className = cn(progressLinearLabel, this.getAttribute('class'))
    }
    render() { return undefined }
}

/**
 * MAccordion Component
 */
export class MAccordion extends LitElement {
    static properties = {
        variant: { type: String },
        defaultValue: { type: String, attribute: 'default-value' },
        multiple: { type: Boolean },
        collapsible: { type: Boolean }
    }
    variant?: AccordionRootVariants['variant']
    defaultValue = ''
    multiple = false
    collapsible = true

    private service: any = null
    private api: accordion.Api | null = null

    createRenderRoot() { return this }

    firstUpdated() {
        console.log('MAccordion firstUpdated', this.id);

        let initialValue = undefined
        if (this.defaultValue) {
            try {
                initialValue = JSON.parse(this.defaultValue)
            } catch (e) {
                initialValue = [this.defaultValue]
            }
        }

        this.service = new VanillaMachine(accordion.machine, {
            id: this.id || 'acc-' + Math.random().toString(36).substring(2, 7),
            multiple: this.multiple,
            collapsible: this.collapsible,
            defaultValue: initialValue,
        })

        this.service.subscribe((service: any) => {
            this.api = accordion.connect(service, normalizeProps)
            this.requestUpdate()
        })

        this.service.start()
        this.api = accordion.connect(this.service.service, normalizeProps)
        this.requestUpdate()
    }

    disconnectedCallback() {
        super.disconnectedCallback()
        this.service?.stop()
    }

    updated() {
        if (this.service) {
            this.syncStateToChildren()
        }
    }

    private syncStateToChildren() {
        if (!this.api) return

        this.applyProps(this, this.api.getRootProps())
        this.className = cn(
            accordionRootVariants({ variant: this.variant }),
            this.getAttribute('class')
        )

        const items = Array.from(this.querySelectorAll('m-accordion-item'))
        items.forEach((item: any) => {
            const value = item.getAttribute('value')
            if (!value) return

            const trigger = item.querySelector('m-accordion-trigger')
            const content = item.querySelector('m-accordion-content')

            if (trigger && content) {
                const itemProps = this.api!.getItemProps({ value })
                const triggerProps = this.api!.getItemTriggerProps({ value })
                const contentProps = this.api!.getItemContentProps({ value })
                const indicatorProps = this.api!.getItemIndicatorProps({ value })

                this.applyProps(item as HTMLElement, itemProps)
                item.className = cn(
                    this.variant === 'boxed' ? boxVariants({ raised: item.raised || item.getAttribute('raised') as any }) : '',
                    accordionItemVariants({ variant: this.variant }),
                    item.getAttribute('class')
                )

                this.applyProps(trigger as HTMLElement, triggerProps)
                trigger.className = cn(accordionTrigger, trigger.getAttribute('class'))

                this.applyProps(content as HTMLElement, contentProps)
                content.className = cn(accordionContent, content.getAttribute('class'))

                const htmlContent = content as HTMLElement
                htmlContent.style.display = contentProps.hidden ? 'none' : 'block'

                let indicator = trigger.querySelector('.accordion-indicator')
                if (!indicator) {
                    indicator = document.createElement('div')
                    indicator.className = cn('accordion-indicator', accordionItemIndicator)
                    indicator.innerHTML = '<m-icon name="chevron-down" size="16"></m-icon>'
                    trigger.appendChild(indicator)
                }
                this.applyProps(indicator as HTMLElement, indicatorProps)
            }
        })
    }

    private applyProps(el: HTMLElement, props: any) {
        Object.entries(props).forEach(([key, val]) => {
            if (key === 'className' || key === 'class') return;
            if (key === 'style' && typeof val === 'object' && val !== null) {
                Object.assign(el.style, val)
                return
            }
            if (key.startsWith('on')) {
                const eventName = key.slice(2).toLowerCase()
                const listenerKey = `_zag_${eventName}`
                const targetEl = el as any

                if (targetEl[listenerKey]) {
                    el.removeEventListener(eventName, targetEl[listenerKey])
                }

                if (typeof val === 'function') {
                    targetEl[listenerKey] = val
                    el.addEventListener(eventName, val as any)
                }
                return
            }

            if (val === undefined || val === null) {
                el.removeAttribute(key)
            } else if (typeof val === 'boolean') {
                if (key.startsWith('aria-') || key.startsWith('data-')) {
                    el.setAttribute(key, String(val))
                } else {
                    if (val) el.setAttribute(key, '')
                    else el.removeAttribute(key)
                }
            } else {
                el.setAttribute(key, String(val))
            }
        })
    }

    render() { return undefined }
}

/**
 * Child tags
 */
export class MAccordionItem extends LitElement { createRenderRoot() { return this }; render() { return undefined } }
export class MAccordionTrigger extends LitElement {
    createRenderRoot() { return this }
    connectedCallback() {
        super.connectedCallback()
        if (!this.hasAttribute('role')) this.setAttribute('role', 'button')
        if (!this.hasAttribute('tabindex')) this.setAttribute('tabindex', '0')
    }
    render() { return undefined }
}
export class MAccordionContent extends LitElement { createRenderRoot() { return this }; render() { return undefined } }

const register = (name: string, cls: any) => {
    if (!customElements.get(name)) customElements.define(name, cls)
}

register('m-icon', MIcon)
register('m-button', MButton)
register('m-box', MBox)
register('m-accordion', MAccordion)
register('m-accordion-item', MAccordionItem)
register('m-accordion-trigger', MAccordionTrigger)
register('m-accordion-content', MAccordionContent)

register('m-alert', MAlert)
register('m-alert-title', MAlertTitle)
register('m-alert-description', MAlertDescription)
register('m-alert-close-trigger', MAlertCloseTrigger)
register('m-alert-icon', MAlertIcon)

register('m-avatar-root', MAvatarRoot)
register('m-avatar-image', MAvatarImage)
register('m-avatar-fallback', MAvatarFallback)
register('m-badge', MBadge)
register('m-breadcrumb', MBreadcrumb)

register('m-progress-circular-root', MProgressCircularRoot)
register('m-progress-circular-circle', MProgressCircularCircle)
register('m-progress-circular-track', MProgressCircularTrack)
register('m-progress-circular-range', MProgressCircularRange)

register('m-progress-linear-root', MProgressLinearRoot)
register('m-progress-linear-track', MProgressLinearTrack)
register('m-progress-linear-range', MProgressLinearRange)

register('m-progress-label', MProgressLabel)
register('m-progress-value-text', MProgressValueText)

console.log('Main script loaded and registered components');
