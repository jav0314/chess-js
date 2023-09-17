/*global Bun*/
await Bun.build({
    entrypoints: ['./src/js/main.js'],
    outdir: './dist',
    minify: true,
})
