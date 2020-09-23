<template>
  <div>
    <vs-navbar square color="dark" text-white>
      <template #left> </template>
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
        <vs-button flat @click="isSingInModalActive = !isSingInModalActive"
          >Sign In</vs-button
        >
        <vs-button @click="isRegisterModalActive = !isRegisterModalActive"
          >Sing Up</vs-button
        >
      </template>
    </vs-navbar>

    <!-- form login -->
    <vs-dialog blur v-model="isSingInModalActive">
      <template #header>
        <h1 class="title is-12 my-5">Sign In</h1>
      </template>

      <div>
        <vs-input class="mb-1rem" primary block placeholder="Email">
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
        >
          <template #icon>
            <fa-icon icon="key" />
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block>
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
        <vs-input class="mb-1rem" primary block placeholder="Username">
          <template #icon>
            <fa-icon icon="user" />
          </template>
        </vs-input>
        <vs-input class="mb-1rem" primary block placeholder="Email">
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
        >
          <template #icon>
            <fa-icon icon="key" />
          </template>
        </vs-input>
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
  }),
  computed: {
    getSelected() {
      return this.$store.state.SelectedDayDish;
    },
    getSelectedDayDate() {
      return this.$store.getters.getSelectedDayDate;
    }
  }
};
</script>

<style>
.mb-1rem {
  margin-bottom: 1rem;
}
</style>
