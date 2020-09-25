<template>
  <vs-row>
    <div class="my-4">
      <vs-row>
        <vs-button
          flat
          size="xl"
          @click="isRegisterModalActive = !isRegisterModalActive"
        >
          <fa-icon icon="plus" />
        </vs-button>
        <vs-button
          flat
          size="xl"
          :disabled="!selecteduser"
          @click="deleteUser()"
        >
          <fa-icon icon="user-minus" />
        </vs-button>
        <vs-button flat size="xl" :disabled="!selecteduser">
          <fa-icon icon="key" />
        </vs-button>
      </vs-row>
    </div>

    <vs-table v-model="selecteduser">
      <template #thead>
        <vs-tr>
          <vs-th>
            Username
          </vs-th>
          <vs-th>
            Login
          </vs-th>
          <vs-th>
            Password
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in getUsers"
          :data="tr"
          :is-selected="selecteduser == tr"
          :primary="tr.login == 'admin'"
        >
          <vs-td>
            {{ tr.username || tr.login }}
          </vs-td>
          <vs-td>
            {{ tr.login }}
          </vs-td>
          <vs-td>
            {{ tr.password }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>

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
          v-model="siginUpFormProps.username"
        >
          <template #icon>
            <fa-icon icon="user" />
          </template>
        </vs-input>
        <vs-input
          class="mb-1rem"
          primary
          block
          placeholder="Email"
          v-model="siginUpFormProps.login"
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
          v-model="siginUpFormProps.password"
        >
          <template #icon>
            <fa-icon icon="key" />
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="signUpUser()">
            Sign Up
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </vs-row>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      selecteduser: null,
      isRegisterModalActive: false,
      siginUpFormProps: {
        username: "",
        login: "",
        password: ""
      }
    };
  },
  methods: {
    signUpUser() {
      this.$store.dispatch("SignUp", this.siginUpFormProps).then(() => {
        this.isRegisterModalActive = false;
      });
    },
    deleteUser() {
      if (this.selecteduser != null) {
        this.$store.dispatch("DeleteUser", this.selecteduser._id);
      }
    }
  },
  computed: {
    getUsers() {
      return this.$store.getters.users;
    }
  },
  mounted() {
    this.$store.dispatch("loadUsers");
  }
};
</script>
