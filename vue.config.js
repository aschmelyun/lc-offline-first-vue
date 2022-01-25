module.exports = {
    pwa: {
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            skipWaiting: true,
            swSrc: "./src/service-worker.js"
        }
    }
}