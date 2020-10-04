<template>
  <div class="bg-white shadow w-full md:w-64 md:mr-8 mb-8 p-8 h-fit-content">
    <div class="mb-4">
      Sort By:
      <select
        class="focus:outline-none p-1"
        v-model="sortBy"
        @change="handleSort($event)"
        name="sort"
      >
        <option selected value="ABBScore">ABBScore</option>
        <option value="name">name</option>
      </select>
    </div>
    <div>
      <div>Brands:</div>
      <div v-for="brand in brands" :key="brand">
        <input
          class="mr-1"
          type="checkbox"
          @change="handleFilter($event)"
          :value="brand"
        />{{ brand }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  data: function () {
    return {
      sortBy: "ABBScore",
    };
  },
  computed: {
    ...mapState(["isLoading", "filters"]),
    ...mapGetters(["brands"]),
  },
  methods: {
    ...mapMutations([
      "sortByName",
      "sortByABBScore",
      "addBrand",
      "removeBrand",
    ]),
    handleSort(e) {
      if (e.target.value === "name") this.sortByName();
      if (e.target.value === "ABBScore") this.sortByABBScore();
    },
    handleFilter(e) {
      if (e.target.checked) {
        this.addBrand(e.target.value);
      } else {
        this.removeBrand(e.target.value);
      }
    },
  },
  watch: {
    isLoading: function () {
      this.sortBy = "ABBScore";
    },
  },
};
</script>