<template>
  <div id="app">
    <DishesList />
    <router-view />
  </div>
</template>

<script>
export default {
  components: {
    DishesList: () => import("./components/DishesList.vue")
  }
};
</script>
