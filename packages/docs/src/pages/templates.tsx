import { MoveUpRight } from "lucide-react";
import { Link } from "react-router";
import enigma from "@/assets/images/templates/enigma.png";
import tinker from "@/assets/images/templates/tinker.png";
import rubick from "@/assets/images/templates/rubick.png";
import icewall from "@/assets/images/templates/icewall.png";

export const templates = [
    {
        slug: "enigma",
        title: "Enigma",
        category: "Admin Dashboard",
        image: enigma,
        link: "https://themeforest.net/item/midone-svelte-admin-dashboard-template/46282224",
        frameworks: ["react", "vue"],
    },
    {
        slug: "tinker",
        title: "Tinker",
        category: "Admin Dashboard",
        image: tinker,
        link: "https://themeforest.net/item/midone-react-admin-dashboard-template/37268019",
        frameworks: ["react", "vue"],
    },
    {
        slug: "rubick",
        title: "Rubick",
        category: "Admin Dashboard",
        image: rubick,
        link: "https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820",
        frameworks: ["react", "vue"],
    },
    {
        slug: "icewall",
        title: "Icewall",
        category: "Admin Dashboard",
        image: icewall,
        link: "https://themeforest.net/item/letz-laravel-admin-dashboard-starter-kit/26531442",
        frameworks: ["react", "vue"],
    },
];

export const FrameworkIcon = ({ type }: { type: string }) => {
    if (type === "react") {
        return (
            <svg
                className="size-4"
                viewBox="-11.5 -10.23174 23 20.46348"
                fill="currentColor"
            >
                <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        );
    }
    if (type === "vue") {
        return (
            <svg className="size-4" viewBox="0 0 256 221" fill="currentColor">
                <path
                    d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"
                    fill="#41B883"
                />
                <path d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z" fill="#35495E" />
                <path d="M79.36 0L128 84.48L176.64 0h-47.36L128 15.36L126.72 0h-47.36Z" />
            </svg>
        );
    }
    return null;
};

function Templates() {
    return (
        <div className="pb-20">
            <div className="flex flex-col items-center pt-20 lg:pt-32 relative before:bg-accent before:bg-size-[50%] before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:blur-2xl dark:before:opacity-45 after:hidden 2xl:after:block after:w-1 after:h-16 after:bg-foreground/20 after:absolute after:-start-17 after:-ms-px after:top-0 after:bottom-0 after:my-auto">
                <div className="text-xl opacity-50">Premium Templates</div>
                <div className="text-4xl lg:text-5xl mt-6 text-center">
                    Professional layout templates <br /> for your next big project
                </div>
                <div className="opacity-60 text-lg 2xl:text-xl/7 text-center mt-7 max-w-[50rem]">
                    Supercharge your development with our premium admin dashboard
                    templates. Built with the same design language and attention to detail
                    as Midone UI.
                </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 lg:mt-32 relative after:hidden 2xl:after:block after:w-1 after:h-16 after:bg-foreground/20 after:absolute after:-start-17 after:-ms-px after:top-0 after:bottom-0 after:my-auto">
                {templates.map((template, index) => (
                    <Link
                        key={index}
                        to={`/templates/${template.slug}`}
                        className="group block border border-foreground/15 p-5 lg:p-7 relative before:inset-0 before:mt-3 before:-mb-3 before:-ms-3 before:me-3 before:absolute before:bg-foreground/7 before:backdrop-blur-xl before:z-[-1] hover:before:bg-foreground/10 transition-all font-normal"
                    >
                        <div className="relative overflow-hidden border border-foreground/10">
                            <img
                                src={template.image}
                                alt={template.title}
                                className="w-full group-hover:scale-[1.02] transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <div className="flex items-center gap-2 text-white font-medium">
                                    View Detail <MoveUpRight className="size-4" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div>
                                <div className="text-xl font-medium">{template.title}</div>
                                <div className="opacity-50 text-sm mt-1">{template.category}</div>
                            </div>
                            <div className="flex items-center gap-2 mt-auto">
                                {template.frameworks?.map((framework) => (
                                    <div
                                        key={framework}
                                        className="size-8 border border-foreground/15 flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors"
                                        title={framework}
                                    >
                                        <FrameworkIcon type={framework} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Templates;
