<template>
  <div>
    <div>
      <vs-sidebar reduce absolute open v-model="active">
        <vs-sidebar-item id="DashBoard">
          <template #icon>
            <fa-icon icon="home" />
          </template>
          DashBoard
        </vs-sidebar-item>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <fa-icon icon="database" />
              </template>
              databases
            </vs-sidebar-item>
          </template>
          <vs-sidebar-item id="Dish">
            <template #icon>
              <fa-icon icon="dot-circle" />
            </template>
            Dish
          </vs-sidebar-item>
          <vs-sidebar-item id="DayDish">
            <template #icon>
              <fa-icon icon="dot-circle" />
            </template>
            DayDish
          </vs-sidebar-item>
          <vs-sidebar-item id="MealTime">
            <template #icon>
              <fa-icon icon="dot-circle" />
            </template>
            MelTIme
          </vs-sidebar-item>
        </vs-sidebar-group>
      </vs-sidebar>
    </div>

    <DashBoard v-if="active == 'DashBoard'" />

    <div class="ml-100px mr-6" v-if="active == 'DayDish'">
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th>
              Date
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in $store.state.DayDishes" :data="tr">
            <vs-td>
              {{ tr.date }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>

    <div class="ml-100px mr-6" v-if="active == 'Dish'">
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th>
              Date
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in $store.state.DayDishes" :data="tr">
            <vs-td>
              {{ tr.date }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>

    <div class="ml-100px mr-6" v-if="active == 'MealTime'">
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th>
              Date
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in $store.state.DayDishes" :data="tr">
            <vs-td>
              {{ tr.date }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: "DashBoard"
  }),
  components: {
    DashBoard: () => import("../components/admin/DashBoard.vue")
  }
};
</script>
<style>
.ml-100px {
  margin-left: 100px;
}
</style>
