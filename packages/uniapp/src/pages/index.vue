<template>
  <div style="height: calc(100vh - 100px)">
    <!-- <canvas-container :controller="controller" @selected="nodeSelected"></canvas-container> -->
    <RenderMain></RenderMain>
  </div>
</template>

<script setup>
import RenderMain from '../components/render/RenderMain'

import formJSON from '../test/form.json'

const controller = {
  getPageSchema() {
    return formJSON
  },
  getConfigureMap() {
    return {
      TinyTabs: {
        nestingRule: {
          childWhitelist: ['TinyTabItem'],
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        }
      },
      TinyForm: {
        nestingRule: {
          childWhitelist: ['TinyFormItem'],
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        }
      }
    }
  },
  getJSResource() {
    return {
      utils: { Select: 'select' }
    }
  },
  addHistory() {},
  closePlugin() {},
  getMaterial() {}
}

const nodeSelected = () => {}
</script>

<style>
#app {
  height: 100%;
}
</style>
