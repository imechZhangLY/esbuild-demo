const esbuild = require("esbuild");

esbuild.build({
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "dist/index.js",
    loader: {
        ".svg": "dataurl",
    },
}).catch(() => process.exit(1));