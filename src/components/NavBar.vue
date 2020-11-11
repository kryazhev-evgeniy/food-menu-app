<template>
  <div>
    <vs-navbar square color="dark" text-white>
      <template #left>
        <vs-navbar-group v-if="$store.getters.isLoggedIn">
          {{ $store.getters.getUser.name }}
          <template #items>
            <vs-navbar-item v-if="$store.getters.getUser.isAdmin">
              <router-link to="/admin">
                Admin panel
              </router-link>
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
      </template>
      <vs-navbar-item @click="$store.commit('LeftDayDish')">
        <fa-icon icon="chevron-left"></fa-icon>
      </vs-navbar-item>
      <div class="my-3">
        <p>
          {{ getSelectedDayDate.year }} - {{ getSelectedDayDate.month }} -
          {{ getSelectedDayDate.date }}
        </p>
        <p class="has-text-centered">{{ getSelectedDayDate.day }}</p>
      </div>
      <vs-navbar-item @click="$store.commit('RightDayDish')">
        <fa-icon icon="chevron-right"></fa-icon>
      </vs-navbar-item>
      <template #right>
        <vs-button
          v-if="!$store.getters.isLoggedIn"
          flat
          @click="isSingInModalActive = !isSingInModalActive"
          >Sign In</vs-button
        >
        <vs-button
          v-if="!$store.getters.isLoggedIn"
          @click="isRegisterModalActive = !isRegisterModalActive"
          >Sing Up</vs-button
        >
        <vs-button v-if="$store.getters.isLoggedIn" @click="logout"
          >Logout</vs-button
        >
      </template>
    </vs-navbar>

    <!-- form login -->
    <vs-dialog blur v-model="isSingInModalActive">
      <template #header>
        <h1 class="title is-12 my-5">Sign In</h1>
      </template>

      <div>
        <vs-input
          class="mb-1rem"
          primary
          block
          placeholder="Email"
          v-model="loginFormProps.login"
        >
          <template #icon>
            <fa-icon icon="envelope" />
          </template>
        </vs-input>
        <vs-input
          class="mb-1rem"
          primary
          block
          type="password"
          placeholder="Password"
          v-model="loginFormProps.password"
        >
          <template #icon>
            <fa-icon icon="key" />
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="signin()">
            Sign In
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <!-- form register -->
    <vs-dialog blur v-model="isRegisterModalActive">
      <template #header>
        <h1 class="title is-12 my-5">Sign Up</h1>
      </template>

      <div>
        <vs-input
          class="mb-1rem"
          primary
          block
          placeholder="Username"
          v-model="registerFormProps.username"
        >
          <template #icon>
            <fa-icon icon="user" />
          </template>
        </vs-input>

        <vs-input
          class="mb-1rem"
          primary
          block
          placeholder="login"
          v-model="registerFormProps.login"
        >
          <template #icon>
            <fa-icon icon="envelope" />
          </template>
        </vs-input>

        <vs-input
          class="mb-1rem"
          primary
          block
          type="password"
          placeholder="Password"
          v-model="registerFormProps.password"
        >
          <template #icon>
            <fa-icon icon="key" />
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="singup()">
            Sign In
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data: () => ({
    isSingInModalActive: false,
    isRegisterModalActive: false,
    loginFormProps: {
      login: "",
      pasword: ""
    },
    registerFormProps: {
      username: "",
      login: "",
      password: "",
      isAdmin: false
    }
  }),
  computed: {
    getSelected() {
      return this.$store.state.SelectedDayDish;
    },
    getSelectedDayDate() {
      return this.$store.getters.getSelectedDayDate;
    }
  },
  methods: {
    signin() {
      this.$store
        .dispatch("SignIn", this.loginFormProps)
        .then(() => {
          this.isSingInModalActive = false;
        })
        .catch(err => {
          this.$vs.notification({
            position: "top-center",
            title: "Documentation Vuesax 4.0+",
            text: err
          });
        });
    },
    logout() {
      this.$store.dispatch("LogOut");
    },
    singup() {
      this.$store.dispatch("SignUp", this.registerFormProps).then(user => {
        this.$vs.notification({
          position: "top-center",
          title: "Добавлен пользователь",
          text: `${user.username}`
        });
        this.isRegisterModalActive = false;
        //login
        this.$store
          .dispatch("SignIn", {
            login: this.registerFormProps.username,
            password: this.registerFormProps.password
          })
          .then(() => {
            this.isSingInModalActive = false;
          })
          .catch(err => {
            this.$vs.notification({
              position: "top-center",
              title: "Documentation Vuesax 4.0+",
              text: err
            });
          });
      });
    }
  }
};
</script>

<style>
.mb-1rem {
  margin-bottom: 1rem;
}
</style>
