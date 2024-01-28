<template>
  <div style="height: calc(100vh - 100px)">
    <RenderMain></RenderMain>
  </div>
</template>

<script setup>
import RenderMain, { api } from '../components/render/RenderMain'

import formJSON from '../test/form.json'

api.setSchema(formJSON)

</script>

<style>
#app {
  height: 100%;
}
</style>
