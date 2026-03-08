import * as fs from "fs";
import * as path from "path";

const SYNC_CONFIGS = [
    // React Components
    {
        name: "React Components",
        src: "/Users/dwicompany/Desktop/Projects/midone-ui/packages/react/src/components/ui",
        dest: "/Users/dwicompany/Desktop/Projects/midone/packages/react/src/components/ui"
    },
    // Vue Components
    {
        name: "Vue Components",
        src: "/Users/dwicompany/Desktop/Projects/midone-ui/packages/vue/src/components/ui",
        dest: "/Users/dwicompany/Desktop/Projects/midone/packages/vue/src/components/ui"
    },
    // Core (Styles & Utils) to React
    {
        name: "Core to React",
        src: "/Users/dwicompany/Desktop/Projects/midone-ui/packages/core/src",
        dest: "/Users/dwicompany/Desktop/Projects/midone/packages/react/src/components/ui"
    },
    // Core (Styles & Utils) to Vue
    {
        name: "Core to Vue",
        src: "/Users/dwicompany/Desktop/Projects/midone-ui/packages/core/src",
        dest: "/Users/dwicompany/Desktop/Projects/midone/packages/vue/src/components/ui"
    },
    // Vanilla Project
    {
        name: "Vanilla Project",
        src: "/Users/dwicompany/Desktop/Projects/midone-ui/packages/vanilla",
        dest: "/Users/dwicompany/Desktop/Projects/midone/packages/vanilla"
    },
    // Core (Styles & Utils) to Vanilla
    {
        name: "Core to Vanilla",
        src: "/Users/dwicompany/Desktop/Projects/midone-ui/packages/core/src",
        dest: "/Users/dwicompany/Desktop/Projects/midone-ui/packages/vanilla/src/core"
    }
];

function copyRecursiveSync(src: string, dest: string) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats && stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(
                path.join(src, childItemName),
                path.join(dest, childItemName)
            );
        });
    } else {
        if (exists && stats && stats.isFile()) {
            const parentDir = path.dirname(dest);
            if (!fs.existsSync(parentDir)) {
                fs.mkdirSync(parentDir, { recursive: true });
            }
            fs.copyFileSync(src, dest);
        }
    }
}

console.log("🚀 Starting component sync...");

for (const config of SYNC_CONFIGS) {
    if (!fs.existsSync(config.src)) {
        console.warn(`⚠️  Source directory not found for ${config.name}: ${config.src}`);
        continue;
    }

    console.log(`📦 Syncing ${config.name}...`);
    try {
        copyRecursiveSync(config.src, config.dest);
        console.log(`✅ ${config.name} synced successfully.`);
    } catch (error) {
        console.error(`❌ Error syncing ${config.name}:`, error);
    }
}

console.log("\n✨ All sync operations completed.");
