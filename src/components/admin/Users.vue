<template>
  <vs-row>
    <h1>{{ c }}</h1>
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
          :disabled="!tableUsers.selected"
          @click="deleteUser()"
        >
          <fa-icon icon="user-minus" />
        </vs-button>
        <vs-button flat size="xl" :disabled="!selecteduser">
          <fa-icon icon="key" />
        </vs-button>
      </vs-row>
    </div>

    <!-- tables -->

    <vs-row>
      <vs-table style="margin-right:100px;" v-model="tableUsers.selected">
        <template #header>
          <vs-input v-model="tableUsers.search" border placeholder="Search" />
        </template>
        <template #thead>
          <vs-tr>
            <vs-th>
              User Name
            </vs-th>
            <vs-th>
              Login
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            v-for="user in $vs.getSearch(users, tableUsers.search)"
            :key="user._id"
            :data="user"
            :is-selected="tableUsers.selected == user"
            :primary="user.isAdmin"
          >
            <vs-td>
              {{ user.username }}
            </vs-td>
            <vs-td>
              {{ user.login }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vs-row>

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
          readonly
          onfocus="this.removeAttribute('readonly')"
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
          readonly
          onfocus="this.removeAttribute('readonly')"
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
          readonly
          onfocus="this.removeAttribute('readonly')"
        >
          <template #icon>
            <fa-icon icon="key" />
          </template>
        </vs-input>
        <vs-checkbox v-model="siginUpFormProps.isAdmin">
          is admin
        </vs-checkbox>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="addUser()">
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
      isRegisterModalActive: false,
      siginUpFormProps: {
        username: "",
        login: "",
        password: "",
        isAdmin: false
      },
      tableUsers: {
        search: "",
        selected: null
      }
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch("SignUp", this.siginUpFormProps).then(user => {
        this.$vs.notification({
          position: "top-right",
          title: "Добавлен пользователь",
          text: `${user.username}`
        });
        this.users = this.$store.getters.users;
        this.isRegisterModalActive = false;
      });
    },
    deleteUser() {
      this.$store
        .dispatch("DeleteUser", this.tableUsers.selected._id)
        .then(() => {
          this.$vs.notification({
            color: "danger",
            position: "top-right",
            title: "Удалён пользователь",
            text: this.tableUsers.selected.username
          });
          this.users = this.$store.getters.users;
        });
    }
  },
  computed: {
    getUsers() {
      return this.$store.getters.users;
    }
  },
  mounted() {
    this.$store.dispatch("loadUsers").then(() => {
      this.users = this.$store.getters.users;
    });
  }
};
</script>

<style scoped></style>
