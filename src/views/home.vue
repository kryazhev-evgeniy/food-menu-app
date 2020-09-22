<template>
  <div class="columns">
    <div class="column" v-for="count in counts" :key="count">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    counts: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
  }),
  components: {
    //CardDish: () => import("../components/CardDIsh.vue")
  }
};
</script>
