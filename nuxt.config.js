const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue book',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Server middlewares
  */
  serverMiddleware: [
    '~/api/index'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      /*
      ** Run ESLint on save
      */
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      /*
      ** Add better devtool config
      ** https://webpack.js.org/configuration/devtool/
      */
      if (isDev) {
        config.devtool = 'cheap-module-eval-source-map'
      }

      /*
      ** SVG plugin
      */

      // remove SVG extension from existing rule
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      // svg files ending by '_clean.svg' will not be cleaned
      config.module.rules.push({
        test: /_clean\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: false
        }
      })

      // all others SVG files are cleaned
      config.module.rules.push({
        test: /\.svg$/,
        exclude: /_clean\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [{
              cleanupAttrs: true,
            }, {
              removeDoctype: true,
            }, {
              removeXMLProcInst: true,
            }, {
              removeComments: true,
            }, {
              removeMetadata: true,
            }, {
              removeTitle: true,
            }, {
              removeDesc: true,
            }, {
              removeUselessDefs: true,
            }, {
              removeEditorsNSData: true,
            }, {
              removeEmptyAttrs: true,
            }, {
              removeHiddenElems: true,
            }, {
              removeEmptyText: true,
            }, {
              removeEmptyContainers: true,
            }, {
              removeViewBox: false,
            }, {
              removeStyleElement: true
            }, {
              cleanUpEnableBackground: true,
            }, {
              convertStyleToAttrs: true,
            }, {
              convertColors: true,
            }, {
              convertPathData: true,
            }, {
              convertTransform: true,
            }, {
              removeUnknownsAndDefaults: true,
            }, {
              removeNonInheritableGroupAttrs: true,
            }, {
              removeUselessStrokeAndFill: true,
            }, {
              removeUnusedNS: true,
            }, {
              cleanupIDs: true,
            }, {
              inlineStyles: true
            }, {
              cleanupNumericValues: true,
            }, {
              moveElemsAttrsToGroup: true,
            }, {
              moveGroupAttrsToElems: true,
            }, {
              collapseGroups: true,
            }, {
              removeRasterImages: false,
            }, {
              mergePaths: true,
            }, {
              convertShapeToPath: true,
            }, {
              sortAttrs: true,
            }, {
              transformsWithOnePath: false,
            }, {
              removeDimensions: true,
            }, {
              removeAttrs: { attrs: '(stroke|fill)' },
            }]
          }
        }
      })

      /*
      ** Add more aliases
      */
      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        components: path.resolve('./components'),
        mixins: path.resolve('./mixins'),
        plugins: path.resolve('./plugins'),
        store: path.resolve('./store')
      })
    }
  },
  css: ['@/assets/styles/index.styl']
}
