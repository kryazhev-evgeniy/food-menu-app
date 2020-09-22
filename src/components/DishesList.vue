<template>
  <ul>
    <li v-for="(dish, index) in getDishes" :key="index">
      {{ dish.name }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    getDishes() {
      return this.$store.state.Dishes;
    }
  }
};
</script>
