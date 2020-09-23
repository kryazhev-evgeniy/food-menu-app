<template>
  <vs-row>
    <vs-col
      v-for="(mealTIme, index) in this.$store.state.DayDishes[0].MealTimes"
      :key="index"
    >
      <MealTime :meal="mealTIme" />
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  components: {
    MealTime: () => import("../components/MealTime.vue")
  },
  computed: {
    GetMealtime(index) {
      return this.$store.state.DayDishes[index];
    }
  }
};
</script>

<style>
.scroll-x {
  overflow-x: auto;
}
</style>
