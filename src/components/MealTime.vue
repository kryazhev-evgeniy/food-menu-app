<template>
  <div class="mx-5 my-5">
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
    CardDish: () => import("../components/CardDish")
  }
};
</script>
