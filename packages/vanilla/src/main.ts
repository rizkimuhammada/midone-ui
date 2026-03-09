import { defineCustomElement } from 'vue';
import './index.css';

// Auto-register all matched Vue components as Custom Elements
const components = import.meta.glob('./components/ui/**/*.vue', { eager: true });

function formatTagName(path: string, componentOptions: any) {
    let baseName = path.split('/').pop()?.replace('.vue', '') || '';

    // Explicit mappings for Zag structural components
    const mappings: Record<string, string> = {
        'Button': 'm-button',
        'Box': 'm-box',
        'Alert': 'm-alert-root', // changed to root if needed?
        'AlertTitle': 'm-alert-title',
        'AlertIcon': 'm-alert-icon',
        'AlertDescription': 'm-alert-description',
        'Avatar': 'm-avatar-root',
        'AvatarImage': 'm-avatar-image',
        'AvatarFallback': 'm-avatar-fallback',
        'Badge': 'm-badge',
        'Breadcrumb': 'm-breadcrumb',
        'ProgressRoot': path.includes('circular') ? 'm-progress-circular-root' : 'm-progress-linear-root',
        'ProgressCircle': 'm-progress-circular-circle',
        'ProgressCircleTrack': 'm-progress-circular-track',
        'ProgressCircleRange': 'm-progress-circular-range',
        'ProgressTrack': 'm-progress-linear-track',
        'ProgressRange': 'm-progress-linear-range',
        'ProgressValueText': 'm-progress-value-text',
        'ProgressLabel': 'm-progress-label',
        'Accordion': 'm-accordion',
        'AccordionItem': 'm-accordion-item',
        'AccordionTrigger': 'm-accordion-trigger',
        'AccordionContent': 'm-accordion-content',
    };

    return mappings[baseName] || `m-${baseName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`;
}

export function registerAllVueWebComponents() {
    Object.keys(components).forEach((path) => {
        const mod: any = components[path];
        const Component = mod.default || mod;

        const tagName = formatTagName(path, Component);
        if (!customElements.get(tagName)) {
            try {
                const CE = defineCustomElement(Component, { shadowRoot: false });

                // Hack to attempt to share provides context across Web Components
                class SharedContextCE extends CE {
                    __vue_instance__: any;

                    connectedCallback() {
                        super.connectedCallback();
                        setTimeout(() => {
                            // Link instance for children
                            this.__vue_instance__ = (this as any)._instance;

                            // Find parent context
                            let provides = {};
                            let parent = this.parentElement || (this.getRootNode() as any)?.host;
                            while (parent) {
                                if (parent.__vue_instance__) {
                                    Object.assign(provides, parent.__vue_instance__.provides);
                                }
                                parent = parent.parentElement || parent.getRootNode()?.host;
                            }

                            if (this.__vue_instance__ && Object.keys(provides).length > 0) {
                                Object.assign(this.__vue_instance__.appContext.provides, provides);
                                // Force update to react to context
                                this.__vue_instance__.proxy?.$forceUpdate();
                            }
                        }, 0);
                    }
                }

                customElements.define(tagName, SharedContextCE);
                console.log(`Registered Vue Custom Element: <${tagName}>`);
            } catch (e) {
                console.warn(`Failed to register ${tagName}:`, e);
            }
        }
    });
}

registerAllVueWebComponents();
