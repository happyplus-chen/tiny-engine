<template>
  <div class="login-form-container">
    <LoginRegister v-if="display" />
    <tiny-tabs v-else v-model="activeName" stretch="true">
      <tiny-tab-item title="账号密码登录" name="first">
        <template #title>
          <div>
            <span>账号密码登录</span>
          </div>
        </template>
        <LoginInfo />
      </tiny-tab-item>
      <tiny-tab-item name="second">
        <template #title>
          <div>
            <span>邮箱登录</span>
          </div>
        </template>
        <LoginMail />
      </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script  setup>
import { provide, ref } from 'vue';
import { Tabs as TinyTabs, TabItem as TinyTabItem } from '@opentiny/vue';
import LoginInfo from './login-info.vue';
import LoginMail from './login-mail.vue';
import LoginRegister from './login-register.vue';

// 登录
const activeName = ref('first');

//  切换开关
let display = ref(false);

const handle = (value) => {
  display.value = value;
};
provide('handle', handle);
</script>

<style lang="less" scoped>
.login-form-container {
  
}
</style>
