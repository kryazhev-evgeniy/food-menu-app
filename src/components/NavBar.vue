<template>
  <div>
    <vs-navbar square color="dark" text-white>
      <template #left> </template>
      <vs-navbar-item @click="$store.commit('LeftDayDish')">
        <fa-icon icon="chevron-left"></fa-icon>
      </vs-navbar-item>
      <p>{{ $store.state.SelectedDayDish }}</p>
      <vs-navbar-item @click="$store.commit('RightDayDish')">
        <fa-icon icon="chevron-right"></fa-icon>
      </vs-navbar-item>
      <template #right>
        <vs-button flat @click="isSingInModalActive = !isSingInModalActive"
          >Sign In</vs-button
        >
        <vs-button @click="isRegisterModalActive = !isRegisterModalActive"
          >Sing Up</vs-button
        >
      </template>
    </vs-navbar>

    <vs-dialog blur v-model="isSingInModalActive">
      <template #header>
        <h1>Sign In</h1>
      </template>

      <div>
        <vs-input class="mb-1rem" primary block placeholder="Email"> </vs-input>
        <vs-input
          class="mb-1rem"
          primary
          block
          type="password"
          placeholder="Password"
        ></vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block>
            Sign In
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <vs-dialog blur v-model="isRegisterModalActive">
      <template #header>
        <h1>Sign Up</h1>
      </template>

      <div>
        <vs-input class="mb-1rem" primary block placeholder="Username">
        </vs-input>
        <vs-input class="mb-1rem" primary block placeholder="Email"> </vs-input>
        <vs-input
          class="mb-1rem"
          primary
          block
          type="password"
          placeholder="Password"
        ></vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block>
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
      login: "admin",
      pasword: "admin"
    }
  })
};
</script>

<style>
.mb-1rem {
  margin-bottom: 1rem;
}
</style>
