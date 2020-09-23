<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./components/NavBar.vue")
  }
};
</script>
