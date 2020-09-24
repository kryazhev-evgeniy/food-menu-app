<template>
  <div class="ml-100px mr-6">
    <h1 class="box title is-12">
      <fa-icon icon="user" /> -
      <span>{{ getUser.name }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    }
  }
};
</script>
