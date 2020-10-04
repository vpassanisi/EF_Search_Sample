<template>
  <div class="w-full md:flex-1">
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4"
    >
      <ProductCard
        v-for="item in filteredProducts"
        :key="item.FoodItemID"
        :product="item"
      />
    </div>
    <div class="flex items-center justify-center mt-8">
      <button
        class="bg-blue-a400 px-8 py-2 shadow text-white focus:outline-none"
        @click="addTen"
      >
        Load Next Ten
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
  computed: {
    ...mapGetters(["filteredProducts"]),
  },
  methods: {
    ...mapMutations(["addTen"]),
  },
};
</script>

