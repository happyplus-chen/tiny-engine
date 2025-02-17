/**
 * Copyright (c) 2023 - present TinyEngine Authors.
 * Copyright (c) 2023 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { createApp } from 'vue'
import initSvgs from '@opentiny/tiny-engine-svgs'
import { setGlobalConfig } from '@opentiny/tiny-engine-controller'
import i18n from '@opentiny/tiny-engine-common/js/i18n'
import App from './App.vue'
import globalConfig from '../config/lowcode.config'
import { initMonitor } from '@opentiny/tiny-engine-common/js/monitor'
import { isDevelopEnv } from '@opentiny/tiny-engine-common/js/environments'
import 'virtual:svg-icons-register'
import { createWebHistory, createRouter } from 'vue-router'

import TinyThemeTool from '@opentiny/vue-theme/theme-tool'
import { tinySmbTheme } from '@opentiny/vue-theme/theme' // SMB 主题

// eslint-disable-next-line no-new
new TinyThemeTool(tinySmbTheme, 'smbtheme') // 初始化主题


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('./login')
    },
    {
      path: '/design',
      component: () => import('./design')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

if (!isDevelopEnv) {
  initMonitor()
}

window.TinyGlobalConfig = globalConfig
setGlobalConfig(globalConfig)

const app = createApp(App)

initSvgs(app)
window.lowcodeI18n = i18n
app.use(i18n).use(router).mount('#app')
