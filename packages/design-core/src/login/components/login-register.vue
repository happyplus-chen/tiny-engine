<template>
  <div class="login-register-container">
    <tiny-form
      ref="ruleForm"
      :model="createData"
      :rules="rules"
      :validate-on-rule-change="isvalidate"
      :label-align="true"
      label-position="top"
      label-width="100px"
      class="login-form"
    >
      <tiny-form-item label="邮箱" prop="username" size="medium">
        <tiny-input v-model="createData.username" placeholder="注册邮箱："></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="密码" prop="password" size="medium">
        <tiny-input v-model="createData.password" placeholder="注册密码：" type="password" show-password></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="确认密码" prop="passwordConfirm" size="medium">
        <tiny-input
          v-model="createData.passwordConfirm"
          placeholder="确认密码："
          type="password"
          show-password
        ></tiny-input>
      </tiny-form-item>

      <div class="login-form-options">
        <tiny-link type="primary" @click="typeChange">使用已有账户登录</tiny-link>
      </div>

      <tiny-form-item size="medium">
        <tiny-button type="primary" class="login-form-btn" :loading="loading" @click="handleSubmit">注册</tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup>
import { inject, reactive, ref, computed } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Button as TinyButton,
  Link as TinyLink,
  Modal
} from '@opentiny/vue'
import { useI18n } from 'vue-i18n'
import useLoading from '../../hooks/loading'
import { register } from '../../api/login'

// 注册
const { t } = useI18n()
const { loading } = useLoading()
const ruleForm = ref()

// 切换模式
const handle = inject('handle')
const typeChange = () => {
  handle(false)
}

let createData = reactive({
  username: '',
  password: '',
  passwordConfirm: ''
})

let isvalidate = ref(true)

// 校验格式
const validatePass = (rule, value, callback) => {
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
    callback(new Error(t('login.form.checkPassword')))
  } else {
    callback()
  }
}

const validateMail = (rule, value, callback) => {
  if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
    callback(new Error(t('login.form.checkUsername')))
  } else {
    callback()
  }
}
const validatePassConfirm = (rule, value, callback) => {
  if (createData.password && createData.password !== value) {
    callback(new Error(t('login.form.confirmPassword')))
  } else {
    callback()
  }
}

const rules = computed(() => {
  return {
    username: [
      {
        required: true,
        message: '邮箱名不能为空',
        trigger: 'blur'
      },
      { validator: validateMail, trigger: 'blur' }
    ],
    password: [
      {
        required: true,
        message: '邮箱密码不能为空',
        trigger: 'blur'
      },
      { validator: validatePass, trigger: 'blur' }
    ],
    passwordConfirm: [
      {
        required: true,
        message: '确认密码不能为空',
        trigger: 'blur'
      },
      { validator: validatePassConfirm, trigger: 'blur' }
    ]
  }
})

// 注册提交
function handleSubmit() {
  ruleForm.value.validate((e) => {
    if (e) {
      let data = reactive({
        username: createData.username,
        password: createData.password
      })

      register(data)
        .then(() => {
          Modal.message({
            message: '账号注册成功',
            status: 'success'
          })
          handle(false)
        })
        .catch(() => {
          Modal.message({
            message: '注册失败',
            status: 'warning'
          })
        })
    } else {
      Modal.message({
        message: '注册失败',
        status: 'warning'
      })
    }
  })
}
</script>

<style lang="less" scoped>
.login-register-container {
  display: flex;
  justify-content: center;

  .tiny-form-item {
    margin-bottom: 20px;
  }

  .login-form {
    width: 340px;
  }

  .login-form-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-left: 65%;
  }

  .login-form-btn {
    display: block;
    width: 100%;
    max-width: 100%;
  }
}

// responsive
@media (max-width: 300px) {
  .login-register-container {
    margin-top: -10%;

    .tiny-form-item {
      margin-bottom: 5px;
    }

    .login-form-options {
      margin-bottom: 10px;
      margin-left: 50%;
    }
  }
}
</style>
