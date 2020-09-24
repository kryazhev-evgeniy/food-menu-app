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
          v-for="(tr, i) in users"
          :data="tr"
          :is-selected="selecteduser == tr"
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
import axios from "axios";
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
  mounted() {
    axios.get("http://localhost:3000/api/user/").then(result => {
      this.users = result.data;
    });
  },
  methods: {
    signUpUser() {
      axios
        .post("http://localhost:3000/api/user/", {
          username: this.siginUpFormProps.username,
          login: this.siginUpFormProps.login,
          password: this.siginUpFormProps.password
        })
        .then(() => {
          //this.users.push(result.data);
          this.isRegisterModalActive = false;
        });
    },
    deleteUser() {
      if (this.selecteduser != null) {
        var data = { id: this.selecteduser._id };

        var config = {
          method: "delete",
          url: "http://localhost:3000/api/user/",
          headers: {},
          data: data
        };

        axios(config)
          .then(() => {
            this.$vs.notification({
              title: "Error",
              text: `Deleted - ${this.selecteduser.username}`
            });
            axios.get("http://localhost:3000/api/user/").then(result => {
              this.users = result.data;
            });
          })
          .catch(error => {
            this.$vs.notification({
              title: "Error",
              text: error
            });
          });
      }
    }
  },
  computed: {},
  components: {},
  beforeUpdate() {
    axios.get("http://localhost:3000/api/user/").then(result => {
      this.users = result.data;
    });
  }
};
</script>
