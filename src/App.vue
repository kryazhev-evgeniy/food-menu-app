<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./components/NavBar.vue")
  }
};
</script>
