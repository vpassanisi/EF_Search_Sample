<template>
  <div class="w-full md:flex-1">
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4"
    >
      <ProductCard
        v-for="item in limitedItems"
        :key="item.FoodItemID"
        :product="item"
      />
    </div>
    <button @click="limit += 10">next</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
  data: function () {
    return {
      limit: 10,
    };
  },
  computed: {
    ...mapState(["items"]),
    limitedItems() {
      return this.items.slice(0, this.limit);
    },
  },
};
</script>

