<template>
  <div>
    <vs-sidebar hover-expand reduce absolute v-model="active" open>
      <template #logo>
        <fa-icon icon="admin" />
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <fa-icon icon="user" />
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <fa-icon icon="table" />
            </template>
            Databases
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="dish">
          <template #icon>
            <fa-icon icon="table" />
          </template>
          Dish
        </vs-sidebar-item>
        <vs-sidebar-item id="dayDish">
          <template #icon>
            <fa-icon icon="table" />
          </template>
          DayDish
        </vs-sidebar-item>
        <vs-sidebar-item id="mealTime">
          <template #icon>
            <fa-icon icon="table" />
          </template>
          MealTIme
        </vs-sidebar-item>
        <vs-sidebar-item id="users">
          <template #icon>
            <fa-icon icon="table" />
          </template>
          Users
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item id="back">
        <template #icon>
          <fa-icon icon="chevron-left" />
        </template>
        <router-link to="/">
          Admin panel
        </router-link>
      </vs-sidebar-item>
    </vs-sidebar>
    <vs-row style="margin-left: 4rem; margin-top: 1rem;">
      <DashBoard v-if="active == 'home'" />
      <Users v-if="active == 'users'" />
    </vs-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: false,
    active: "home"
  }),
  components: {
    DashBoard: () => import("../components/admin/DashBoard.vue"),
    Users: () => import("../components/admin/Users.vue")
  }
};
</script>
