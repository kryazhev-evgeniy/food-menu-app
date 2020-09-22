<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    isLoginModalActive: false,
    isRegisterModalActive: false,
    loginFormProps: {
      login: "admin",
      pasword: "admin"
    }
  }),
  methods: {},
  components: {
    //LoginForm: () => import("./components/ModalForms/LoginForm.vue"),
    //RegisterForm: () => import("./components/ModalForms/RegisterForm.vue")
    NavBar: () => import("./components/NavBar.vue")
  }
};
</script>

<style scoped>
@import "./assets/main.css";
</style>
