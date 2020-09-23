<template>
  <vs-row>
    <vs-col v-for="(mealTIme, index) in GetMealtime.MealTimes" :key="index">
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
    GetMealtime() {
      return this.$store.getters.getSelectedDayDiish;
    }
  }
};
</script>

<style>
.scroll-x {
  overflow-x: auto;
}
</style>
