<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    isLoginModalActive: false,
    isRegisterModalActive: false,
    SelectedDayDish: 0,
    loginFormProps: {
      login: "admin",
      pasword: "admin"
    }
  }),
  methods: {
    LeftDayDish() {
      if (this.SelectedDayDish > 0) {
        this.SelectedDayDish--;
      }
    },
    RightDayDish() {
      if (this.SelectedDayDish < 10) {
        this.SelectedDayDish++;
      }
    }
  },
  components: {
    //LoginForm: () => import("./components/ModalForms/LoginForm.vue"),
    //RegisterForm: () => import("./components/ModalForms/RegisterForm.vue")
  }
};
</script>

<style scoped>
@import "./assets/main.css";
</style>
