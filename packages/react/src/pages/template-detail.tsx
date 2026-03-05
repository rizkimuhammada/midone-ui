import { useState } from "react";
import { useParams, Link } from "react-router";
import { MoveUpRight, Check, Globe, FileText, Settings, Layout, Tag } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { templates, FrameworkIcon } from "./templates";
import {
    SelectRoot,
    SelectControl,
    SelectTrigger,
    SelectValueText,
    SelectContent,
    SelectItemGroup,
    SelectItem,
    SelectItemText,
} from "@/components/ui/select";
import * as select from "@zag-js/select";

const descriptions = {
    react: `
    <h3><strong>React Admin Dashboard Template</strong></h3>
    <p><strong>Midone</strong> is a premium, high-performance <strong>Admin Dashboard Template</strong> meticulously crafted for developers who demand excellence. Built with <strong>React 19</strong>, <strong>Vite</strong>, and the utility-first power of <strong>Tailwind CSS 4</strong>, Midone offers a seamless development experience for building sophisticated enterprise applications, CRMs, and complex information systems.</p>

    <p>Our philosophy focuses on deep <strong>Accessibility</strong> and <strong>Performance</strong>. By leveraging <strong>Zag.js</strong> for state machines, we ensure every component—from complex datepickers to interactive charts—is not only visually stunning but also follows strict WAI-ARIA standards. Every line of code is optimized for speed, providing a lightweight yet powerful foundation that lets you build faster.</p>

    <p>With its modern, pixel-perfect aesthetics and native <strong>Dark Mode</strong> support, Midone delivers a premium user experience right out of the box. Whether you are an experienced architect or scaling your first project, Midone’s intuitive structure and modular component architecture will accelerate your development workflow from concept to production.</p>

    <h3><strong>Key Features</strong></h3>
    <ul>
        <li>Powered by Tailwind CSS 4 and Vite</li>
        <li>30+ accessible components with Zag.js</li>
        <li>Advanced Dark Mode with premium design</li>
    </ul>

    <h3><strong>Pages</strong></h3>
    <ul>
        <li>4 Dashboards (Overview 1-4)</li>
        <li>E-Commerce (Product List, Grid, Add Product, Reviews)</li>
        <li>Transactions (List & Detail)</li>
        <li>Sellers (List & Detail)</li>
        <li>Apps (Chat, Inbox, File Manager, Point of Sale, Post)</li>
        <li>Layouts (3 Wizards, 3 Blogs, 3 Pricing, 2 Invoices, 3 FAQ)</li>
        <li>User Management (3 Profile Overviews, 3 Profile Settings, 3 User Layouts)</li>
        <li>Forms (Crud Form, Crud Data List, Wizard Layouts)</li>
        <li>Authentication (Login, Register, Error Page)</li>
        <li>Account (Update Profile, Change Password)</li>
    </ul>

    <h3><strong>Built-in Components</strong></h3>
    <ul>
        <li>Navigation (Breadcrumb, Menu, Pagination, Tabs)</li>
        <li>Forms (Input, Checkbox, Radio Group, Select, Combobox, Datepicker, Switch, Slider, Textarea)</li>
        <li>Data Display (Badge, Avatar, Table, Chart, Map, File Icon)</li>
        <li>Feedback (Alert, Progress Circular, Progress Linear, Toast, Tooltip)</li>
        <li>Overlay (Dialog, Popover, Sheet, Menu)</li>
        <li>Layout (Accordion, Box, Carousel, Separator, Scroll Area)</li>
    </ul>

    <h3><strong>Important Notes</strong></h3>
    <ul>
        <li>Preview images are not included in the download file.</li>
    </ul>

    <h3><strong>File Formats Included</strong></h3>
    <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>TS</li>
        <li>Documentation in HTML</li>
    </ul>

    <h3><strong>Credits</strong></h3>
    <ul>
        <li>TailwindCSS – <a href="https://tailwindcss.com/" rel="nofollow">https://tailwindcss.com/</a></li>
        <li>React – <a href="https://react.dev/" rel="nofollow">https://react.dev/</a></li>
        <li>Zag.js – <a href="https://zagjs.com/" rel="nofollow">https://zagjs.com/</a></li>
        <li>Chart.js – <a href="https://www.chartjs.org/" rel="nofollow">https://www.chartjs.org/</a></li>
        <li>TanStack Table – <a href="https://tanstack.com/table" rel="nofollow">https://tanstack.com/table</a></li>
        <li>MapLibre GL JS – <a href="https://maplibre.org/" rel="nofollow">https://maplibre.org/</a></li>
        <li>Lucide Icons – <a href="https://lucide.dev/" rel="nofollow">https://lucide.dev/</a></li>
    </ul>
  `,
    vue: `
    <h3><strong>Vuejs Admin Dashboard Template</strong></h3>
    <p><strong>Midone</strong> is a premium, high-performance <strong>Admin Dashboard Template</strong> meticulously crafted for developers who demand excellence. Built with <strong>Vue 3</strong>, <strong>Vite</strong>, and the utility-first power of <strong>Tailwind CSS 4</strong>, Midone offers a seamless development experience for building sophisticated enterprise applications, CRMs, and complex information systems.</p>

    <p>Our philosophy focuses on deep <strong>Accessibility</strong> and <strong>Performance</strong>. By leveraging <strong>Zag.js</strong> for state machines, we ensure every component—from complex datepickers to interactive charts—is not only visually stunning but also follows strict WAI-ARIA standards. Every line of code is optimized for speed, providing a lightweight yet powerful foundation that lets you build faster.</p>

    <p>With its modern, pixel-perfect aesthetics and native <strong>Dark Mode</strong> support, Midone delivers a premium user experience right out of the box. Whether you are an experienced architect or scaling your first project, Midone’s intuitive structure and modular component architecture will accelerate your development workflow from concept to production.</p>

    <h3><strong>Key Features</strong></h3>
    <ul>
        <li>Powered by Tailwind CSS 4 and Vite</li>
        <li>30+ accessible components with Zag.js</li>
        <li>Advanced Dark Mode with premium design</li>
    </ul>

    <h3><strong>Pages</strong></h3>
    <ul>
        <li>4 Dashboards (Overview 1-4)</li>
        <li>E-Commerce (Product List, Grid, Add Product, Reviews)</li>
        <li>Transactions (List & Detail)</li>
        <li>Sellers (List & Detail)</li>
        <li>Apps (Chat, Inbox, File Manager, Point of Sale, Post)</li>
        <li>Layouts (3 Wizards, 3 Blogs, 3 Pricing, 2 Invoices, 3 FAQ)</li>
        <li>User Management (3 Profile Overviews, 3 Profile Settings, 3 User Layouts)</li>
        <li>Forms (Crud Form, Crud Data List, Wizard Layouts)</li>
        <li>Authentication (Login, Register, Error Page)</li>
        <li>Account (Update Profile, Change Password)</li>
    </ul>

    <h3><strong>Built-in Components</strong></h3>
    <ul>
        <li>Navigation (Breadcrumb, Menu, Pagination, Tabs)</li>
        <li>Forms (Input, Checkbox, Radio Group, Select, Combobox, Datepicker, Switch, Slider, Textarea)</li>
        <li>Data Display (Badge, Avatar, Table, Chart, Map, File Icon)</li>
        <li>Feedback (Alert, Progress Circular, Progress Linear, Toast, Tooltip)</li>
        <li>Overlay (Dialog, Popover, Sheet, Menu)</li>
        <li>Layout (Accordion, Box, Carousel, Separator, Scroll Area)</li>
    </ul>

    <h3><strong>Important Notes</strong></h3>
    <ul>
        <li>Preview images are not included in the download file.</li>
    </ul>

    <h3><strong>File Formats Included</strong></h3>
    <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>TS</li>
        <li>Documentation in HTML</li>
    </ul>

    <h3><strong>Credits</strong></h3>
    <ul>
        <li>TailwindCSS – <a href="https://tailwindcss.com/" rel="nofollow">https://tailwindcss.com/</a></li>
        <li>Vuejs – <a href="https://vuejs.org/" rel="nofollow">https://vuejs.org/</a></li>
        <li>Zag.js – <a href="https://zagjs.com/" rel="nofollow">https://zagjs.com/</a></li>
        <li>Chart.js – <a href="https://www.chartjs.org/" rel="nofollow">https://www.chartjs.org/</a></li>
        <li>TanStack Table – <a href="https://tanstack.com/table" rel="nofollow">https://tanstack.com/table</a></li>
        <li>MapLibre GL JS – <a href="https://maplibre.org/" rel="nofollow">https://maplibre.org/</a></li>
        <li>Lucide Icons – <a href="https://lucide.dev/" rel="nofollow">https://lucide.dev/</a></li>
    </ul>
  `,
};

function TemplateDetail() {
    const { slug } = useParams();
    const template = templates.find((t) => t.slug === slug);
    const [pricingType, setPricingType] = useState<"regular" | "extended">("regular");
    const [framework, setFramework] = useState<string[]>(["React"]);

    const collection = select.collection({
        items: [
            { label: "React", code: "react" },
            { label: "Vue", code: "vue" },
        ],
        itemToValue: (item) => item.label,
    });

    if (!template) {
        return <div>Template not found</div>;
    }

    const pricingMap = {
        react: { regular: "$32", extended: "$890" },
        vue: { regular: "$32", extended: "$890" },
    };

    const activeFramework = framework[0].toLowerCase() === "vue" ? "vue" : "react";
    const activeContent = descriptions[activeFramework];
    const currentPrice = pricingMap[activeFramework as keyof typeof pricingMap][pricingType];

    return (
        <div className="pb-20 pt-10">
            <div className="mb-12">
                <div className="flex items-center gap-3 opacity-50 text-sm mb-4">
                    <Link to="/templates" className="hover:text-foreground">Templates</Link>
                    <span>/</span>
                    <span className="text-foreground">{template.title}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-medium">{template.title}</h1>
                <p className="opacity-60 text-lg mt-4">{template.category}</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
                <div className="flex-1">
                    <div className="flex flex-col gap-10">
                        <div className="border border-foreground/15 p-2 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
                            <a
                                href={template.link}
                                target="_blank"
                                className="block cursor-pointer overflow-hidden"
                            >
                                <img
                                    src={template.image}
                                    alt={template.title}
                                    className="w-full hover:scale-[1.02] hover:opacity-90 transition-all duration-700"
                                />
                            </a>
                        </div>

                        <div
                            className="max-w-none [&_h3]:text-2xl [&_h3]:font-medium [&_h3]:mt-12 [&_h3]:mb-6 [&_p]:opacity-70 [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:opacity-70 [&_li]:mb-1 [&_ul]:list-disc [&_ul]:ms-5 [&_ul]:mb-6 [&_strong]:text-foreground [&_a]:text-foreground [&_a]:underline"
                            dangerouslySetInnerHTML={{ __html: activeContent }}
                        />
                    </div>
                </div>

                <div className="w-full lg:w-96 flex-none flex flex-col gap-10">
                    <div className="border border-foreground/15 p-8 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
                        <div className="flex flex-col gap-6">
                            <div className="flex border border-foreground/10 p-1 bg-foreground/5">
                                <button
                                    onClick={() => setPricingType("regular")}
                                    className={twMerge([
                                        "flex-1 py-2 text-sm font-medium transition-all",
                                        pricingType === "regular" ? "bg-foreground text-background" : "hover:bg-foreground/5 opacity-50",
                                    ])}
                                >
                                    Regular License
                                </button>
                                <button
                                    onClick={() => setPricingType("extended")}
                                    className={twMerge([
                                        "flex-1 py-2 text-sm font-medium transition-all",
                                        pricingType === "extended" ? "bg-foreground text-background" : "hover:bg-foreground/5 opacity-50",
                                    ])}
                                >
                                    Extended License
                                </button>
                            </div>

                            <div className="flex items-end justify-between">
                                <div className="text-4xl font-medium">
                                    {currentPrice}
                                </div>
                                <div className="text-sm opacity-50">Single License</div>
                            </div>

                            <div className="text-sm opacity-70 leading-relaxed border-t border-foreground/10 pt-6">
                                {pricingType === "regular" ? (
                                    <>Use, by you or one client, in a single end product which end users <strong>are not</strong> charged for. The total price includes the item price and a buyer fee.</>
                                ) : (
                                    <>Use, by you or one client, in a single end product which end users <strong>can be</strong> charged for. The total price includes the item price and a buyer fee.</>
                                )}
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <div className="flex items-center gap-2 text-sm opacity-70">
                                    <Check className="size-4 text-green-500" /> Quality verified by Envato
                                </div>
                                <div className="flex items-center gap-2 text-sm opacity-70">
                                    <Check className="size-4 text-green-500" /> Future updates
                                </div>
                                <div className="flex items-center gap-2 text-sm opacity-70">
                                    <Check className="size-4 text-green-500" /> 6 months support from Left4code
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mt-6">
                                <a
                                    href={template.link}
                                    target="_blank"
                                    className="w-full bg-foreground text-background py-4 flex items-center justify-center gap-2 font-medium hover:opacity-90 transition-opacity"
                                >
                                    Buy Now <MoveUpRight className="size-4" />
                                </a>
                                <a
                                    href={template.link}
                                    target="_blank"
                                    className="w-full border border-foreground/20 py-4 flex items-center justify-center gap-2 font-medium hover:bg-foreground/5 transition-colors"
                                >
                                    Live Preview <Globe className="size-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border border-foreground/15 p-8 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
                        <div className="flex flex-col gap-6">
                            <div className="font-medium text-lg border-b border-foreground/10 pb-4">Configuration</div>
                            <div className="flex flex-col gap-2">
                                <div className="text-sm opacity-50 uppercase tracking-wider font-medium">Frameworks</div>
                                <SelectRoot
                                    collection={collection}
                                    value={framework}
                                    onValueChange={(val) => setFramework(val.value)}
                                    className="w-full"
                                >
                                    <SelectControl>
                                        <SelectTrigger className="w-full flex items-center justify-between px-4 py-2 border border-foreground/15 bg-foreground/5">
                                            <div className="flex items-center gap-2">
                                                <FrameworkIcon type={framework[0].toLowerCase()} />
                                                <SelectValueText placeholder="Select Framework" />
                                            </div>
                                        </SelectTrigger>
                                    </SelectControl>
                                    <SelectContent className="bg-background border border-foreground/15 z-50">
                                        <SelectItemGroup>
                                            {collection.items.map((item) => (
                                                <SelectItem key={item.code} item={item} className="px-4 py-2 hover:bg-foreground/5 cursor-pointer flex items-center gap-2">
                                                    <FrameworkIcon type={item.code} />
                                                    <SelectItemText>{item.label}</SelectItemText>
                                                </SelectItem>
                                            ))}
                                        </SelectItemGroup>
                                    </SelectContent>
                                </SelectRoot>
                            </div>
                        </div>
                    </div>

                    <div className="border border-foreground/15 p-8 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1]">
                        <div className="flex flex-col gap-6">
                            <div className="font-medium text-lg border-b border-foreground/10 pb-4">Module Details</div>

                            <div className="flex flex-col gap-5">
                                <div className="flex items-start gap-4">
                                    <Globe className="size-5 opacity-40 flex-none mt-1" />
                                    <div>
                                        <div className="text-sm opacity-50">Compatible Browsers</div>
                                        <div className="mt-1 text-sm">Firefox, Safari, Opera, Chrome, Edge</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <FileText className="size-5 opacity-40 flex-none mt-1" />
                                    <div>
                                        <div className="text-sm opacity-50">Included Files</div>
                                        <div className="mt-1 text-sm">HTML Files, CSS Files, JS Files</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Settings className="size-5 opacity-40 flex-none mt-1" />
                                    <div>
                                        <div className="text-sm opacity-50">Documentation</div>
                                        <div className="mt-1 text-sm">Well Documented</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Layout className="size-5 opacity-40 flex-none mt-1" />
                                    <div>
                                        <div className="text-sm opacity-50">Layout</div>
                                        <div className="mt-1 text-sm">Responsive</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Tag className="size-5 opacity-40 flex-none mt-1" />
                                    <div>
                                        <div className="text-sm opacity-50">Tags</div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {["admin", "backend", "chat", "clean", "dashboard", "flat", "jquery", "minimal", "modern", "tailwind", "tailwind component", "Tailwind CSS", "ui"].map(tag => (
                                                <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-foreground/5 border border-foreground/10 opacity-70 hover:opacity-100 hover:bg-foreground/10 transition-all cursor-default">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateDetail;
