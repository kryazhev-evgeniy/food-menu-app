<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        Register
      </p>
    </header>
    <section class="modal-card-body">
      <b-field label="Username" message="This username is available">
        <b-input maxlength="30" icon="user" required />
      </b-field>

      <b-field label="Email">
        <b-input type="email" icon="envelope" required> </b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" password-reveal required icon="key"> </b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">
        Close
      </button>
      <div>
        <button class="button is-primary">Register</button>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "RegisterForm"
};
</script>
