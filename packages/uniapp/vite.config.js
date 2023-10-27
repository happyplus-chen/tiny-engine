import { defineConfig } from 'vite'
import path from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import vueJsx from '@vitejs/plugin-vue-jsx'
import nodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill'
import nodeModulesPolyfillPlugin from '@esbuild-plugins/node-modules-polyfill'
import nodePolyfill from 'rollup-plugin-polyfill-node'
import visualizer from 'rollup-plugin-visualizer'

const devAlias = {
  '@opentiny/tiny-engine-common/js': path.resolve(__dirname, '../common/js'),
  '@opentiny/tiny-engine-common/component': path.resolve(__dirname, '../common/component'),
  '@opentiny/tiny-engine-common': path.resolve(__dirname, '../common/index.js'),
  '@opentiny/tiny-engine-controller/utils': path.resolve(__dirname, '../controller/utils.js'),
  '@opentiny/tiny-engine-controller/adapter': path.resolve(__dirname, '../controller/adapter.js'),
  '@opentiny/tiny-engine-controller': path.resolve(__dirname, '../controller/src/index.js'),
  '@opentiny/tiny-engine-plugin-materials': path.resolve(__dirname, '../plugins/materials/index.js'),
  '@opentiny/tiny-engine-plugin-block': path.resolve(__dirname, '../plugins/block/index.js'),
  '@opentiny/tiny-engine-plugin-data': path.resolve(__dirname, '../plugins/data/index.js'),
  '@opentiny/tiny-engine-plugin-datasource': path.resolve(__dirname, '../plugins/datasource/index.js'),
  '@opentiny/tiny-engine-plugin-script': path.resolve(__dirname, '../plugins/script/index.js'),
  '@opentiny/tiny-engine-plugin-tree': path.resolve(__dirname, '../plugins/tree/index.js'),
  '@opentiny/tiny-engine-plugin-help': path.resolve(__dirname, '../plugins/help/index.js'),
  '@opentiny/tiny-engine-plugin-schema': path.resolve(__dirname, '../plugins/schema/index.js'),
  '@opentiny/tiny-engine-plugin-page': path.resolve(__dirname, '../plugins/page/index.js'),
  '@opentiny/tiny-engine-plugin-i18n': path.resolve(__dirname, '../plugins/i18n/index.js'),
  '@opentiny/tiny-engine-plugin-bridge': path.resolve(__dirname, '../plugins/bridge/index.js'),
  '@opentiny/tiny-engine-plugin-tutorial': path.resolve(__dirname, '../plugins/tutorial/index.js'),
  '@opentiny/tiny-engine-plugin-robot': path.resolve(__dirname, '../plugins/robot/index.js'),
  '@opentiny/tiny-engine-setting-events': path.resolve(__dirname, '../settings/events/index.js'),
  '@opentiny/tiny-engine-setting-props': path.resolve(__dirname, '../settings/props/index.js'),
  '@opentiny/tiny-engine-setting-styles': path.resolve(__dirname, '../settings/styles/index.js'),
  '@opentiny/tiny-engine-toolbar-breadcrumb': path.resolve(__dirname, '../toolbars/breadcrumb/index.js'),
  '@opentiny/tiny-engine-toolbar-fullscreen': path.resolve(__dirname, '../toolbars/fullscreen/index.js'),
  '@opentiny/tiny-engine-toolbar-lang': path.resolve(__dirname, '../toolbars/lang/index.js'),
  '@opentiny/tiny-engine-toolbar-layout': path.resolve(__dirname, '../toolbars/layout/index.js'),
  '@opentiny/tiny-engine-toolbar-checkinout': path.resolve(__dirname, '../toolbars/lock/index.js'),
  '@opentiny/tiny-engine-toolbar-logo': path.resolve(__dirname, '../toolbars/logo/index.js'),
  '@opentiny/tiny-engine-toolbar-logout': path.resolve(__dirname, '../toolbars/logout/index.js'),
  '@opentiny/tiny-engine-toolbar-media': path.resolve(__dirname, '../toolbars/media/index.js'),
  '@opentiny/tiny-engine-toolbar-preview': path.resolve(__dirname, '../toolbars/preview/index.js'),
  '@opentiny/tiny-engine-toolbar-generate-vue': path.resolve(__dirname, '../toolbars/generate-vue/index.js'),
  '@opentiny/tiny-engine-toolbar-refresh': path.resolve(__dirname, '../toolbars/refresh/index.js'),
  '@opentiny/tiny-engine-toolbar-redoundo': path.resolve(__dirname, '../toolbars/redoundo/index.js'),
  '@opentiny/tiny-engine-toolbar-clean': path.resolve(__dirname, '../toolbars/clean/index.js'),
  '@opentiny/tiny-engine-toolbar-save': path.resolve(__dirname, '../toolbars/save/index.js'),
  '@opentiny/tiny-engine-toolbar-setting': path.resolve(__dirname, '../toolbars/setting/index.js'),
  '@opentiny/tiny-engine-toolbar-collaboration': path.resolve(__dirname, '../toolbars/collaboration/index.js'),
  '@opentiny/tiny-engine-theme-dark': path.resolve(__dirname, '../theme/dark/index.less'),
  '@opentiny/tiny-engine-theme-light': path.resolve(__dirname, '../theme/light/index.less'),
  '@opentiny/tiny-engine-svgs': path.resolve(__dirname, '../svgs/index.js'),
  '@opentiny/tiny-engine-http': path.resolve(__dirname, '../http/src/index.js'),
  '@opentiny/tiny-engine-canvas': path.resolve(__dirname, '../canvas/src/index.js'),
  '@opentiny/tiny-engine-theme': path.resolve(__dirname, `../theme/light/index.less`),
  '@opentiny/tiny-engine-utils': path.resolve(__dirname, '../utils/src/index.js'),
  '@opentiny/tiny-engine-webcomponent-core': path.resolve(__dirname, '../webcomponent/src/lib.js'),
  '@opentiny/tiny-engine-i18n-host': path.resolve(__dirname, '../i18n/src/lib.js')
}

export default defineConfig({
  resolve: {
    alias: {
      ...devAlias,
      '@': path.resolve(__dirname, 'src')
    }
  },
  define: {
    'process.env': {}
  },
  server:{
    port: 9526
  },
  plugins: [uni(), vueJsx(),
  visualizer({
          filename: 'tmp/report.html',
          title: 'Bundle Analyzer'
        })
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        nodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        }),
        nodeModulesPolyfillPlugin()
        
      ]
    }
  },
  base: 'h5',
  build: {
    minify: false,
    rollupOptions: {
      plugins: [nodePolyfill({ include: null })],
      // external: ['vue', '@vueuse/core', 'vue-i18n', /@opentiny\/tiny-engine.*/, /@opentiny\/vue.*/],
      output: {
        manualChunks() {
          return 'app'
        }
      }
    }
  }
})
