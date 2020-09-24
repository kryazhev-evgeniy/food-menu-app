<template>
  <div>
    <NavBar />
    <vs-row class="mt-70px">
      <vs-col w="12"> </vs-col>
      <transition name="fade">
        <div v-if="$store.getters.getShowView">
          <vs-col
            v-for="(mealTIme, index) in GetMealtime.MealTimes"
            :key="index"
          >
            <MealTime :meal="mealTIme" />
          </vs-col>
        </div>
      </transition>
    </vs-row>
  </div>
</template>

<script>
export default {
  components: {
    MealTime: () => import("../components/MealTime.vue"),
    NavBar: () => import("../components/NavBar.vue")
  },
  computed: {
    GetMealtime() {
      return this.$store.getters.getSelectedDayDiish;
    }
  },
  methods: {}
};
</script>

<style>
.scroll-x {
  overflow-x: auto;
}
.mt-70px {
  margin-top: 70px;
}
</style>
