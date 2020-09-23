<template>
  <div class="box">
    <vs-row>
      <h1 class="title">{{ meal.name }}</h1>
    </vs-row>
    <vs-row>
      <vs-col w="4" v-for="(dish, index) in meal.dishes" :key="index">
        <CardDish :dish="dish" />
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  name: "MealTime",
  props: ["meal"],
  components: {
    CardDish: () => import("./CardDish.vue")
  }
};
</script>
