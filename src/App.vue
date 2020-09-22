<template>
  <div id="app">
    <b-navbar type="is-info">
      <template slot="start">
        <b-navbar-item @click="LeftDayDish()">
          <h1>Left</h1>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item @click="RightDayDish()">
          <h1>right</h1>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="columns">
      <div class="column">
        <div class="level">
          <h1 class="level-item has-text-centered title is-12 py-2">
            {{ SelectedDayDish }}
          </h1>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    SelectedDayDish: 0
  }),
  methods: {
    LeftDayDish() {
      if (this.SelectedDayDish > 0) {
        this.SelectedDayDish--;
      }
    },
    RightDayDish() {
      if (this.SelectedDayDish < 10) {
        this.SelectedDayDish++;
      }
    }
  }
};
</script>

<style scoped>
@import "../node_modules/bulma-prefers-dark/build/bulma-prefers-dark.sass";
@import "./assets/main.css";
.columns {
  flex-wrap: wrap;
}
* {
  -webkit-user-select: none;
}
.lime {
  background-color: lime;
}
</style>
