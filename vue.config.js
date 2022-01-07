const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin')

module.exports = {
    devServer: {
    disableHostCheck: true
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true
    },
    manifestOptions: {
      name: "WebDrop",
      short_name: "WebDrop",
      start_url: "./",
      display: "standalone",
      theme_color: "#000",
      icons: [
        {
          src: "./favicon.svg",
          sizes: "512x512",
          type: "image/svg+xml",
          purpose: "any maskable",
        },
      ],
    },
    themeColor: "#000000",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    iconPaths: {
      maskicon: null,
      favicon32: "./favicon32.png",
      favicon16: "./favicon16.png",
      appleTouchIcon: "./favicon.png",
      msTileImage: "./favicon.png",
    },
    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/grid'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: false
    }
  },
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: 'Ubuntu', variants: ['300', '400'] }
        ]
      })
    ]
  }
}
