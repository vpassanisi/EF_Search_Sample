<template>
  <div class="bg-white shadow w-full md:w-64 md:mr-8 mb-8 p-8 h-fit-content">
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
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data: function () {
    return {
      sortBy: "ABBScore",
    };
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  methods: {
    ...mapMutations(["sortByName", "sortByABBScore"]),
    handleSort(e) {
      if (e.target.value === "name") this.sortByName();
      if (e.target.value === "ABBScore") this.sortByABBScore();
    },
  },
  watch: {
    isLoading: function () {
      this.sortBy = "ABBScore";
    },
  },
};
</script>