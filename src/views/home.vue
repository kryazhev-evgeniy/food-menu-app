<template>
  <div class="columns">
    <div class="column is-4" v-for="count in counts" :key="count">
      <CardDish />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    counts: [1, 2, 3]
  }),
  components: {
    CardDish: () => import("../components/CardDIsh.vue")
  }
};
</script>
