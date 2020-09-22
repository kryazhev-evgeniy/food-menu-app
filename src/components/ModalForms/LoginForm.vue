<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
    </header>
    <section class="modal-card-body">
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
      <button class="button is-primary">Login</button>
    </footer>
  </div>
</template>
<script>
export default {
  name: "LoginForm"
};
</script>
