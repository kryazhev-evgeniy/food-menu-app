<template>
  <vs-row>
    <transition name="fade">
      <div v-if="$store.getters.getShowView">
        <vs-col v-for="(mealTIme, index) in GetMealtime.MealTimes" :key="index">
          <MealTime :meal="mealTIme" />
        </vs-col>
      </div>
    </transition>
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
