import './index.css'
import { LitElement, html } from 'lit'
import * as accordion from "@zag-js/accordion"
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
import { cn } from './core/utils/cn'
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
        color: { type: String }
    }
    name = ''
    size = '24'
    color = 'currentColor'
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
        disabled: { type: Boolean, reflect: true }
    }
    variant?: ButtonVariants['variant']
    size?: ButtonVariants['size']
    look?: ButtonVariants['look']
    disabled = false
    createRenderRoot() { return this }
    updated() {
        this.className = cn(
            buttonVariants({
                variant: this.variant,
                size: this.size,
                look: this.look
            }),
            this.getAttribute('class')
        )
    }
    render() { return undefined }
}

/**
 * MBox Component
 */
export class MBox extends LitElement {
    static properties = { raised: { type: String } }
    raised: BoxVariants['raised'] = undefined
    createRenderRoot() { return this }
    updated() {
        this.className = cn(
            boxVariants({ raised: this.raised }),
            this.getAttribute('class')
        )
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
            } else if (key === 'className') {
                // Ignore
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

console.log('Main script loaded and registered components');
