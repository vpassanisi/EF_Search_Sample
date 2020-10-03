<template>
  <div class="relative p-8 bg-white shadow">
    <div class="absolute top-0 right-0 mt-4 mr-4">
      ABBScore: {{ product.ABBScore }}
    </div>
    <div
      class="h-48 bg-contain bg-center bg-no-repeat"
      :style="`background-image: url('${product.ThumbnailImageFilePath}')`"
    />
    <div class="h-32">
      <div class="text-center font-bold text-xl">{{ product.Desc1 }}</div>
      <div class="text-center">{{ product.Brand.Desc1 }}</div>
    </div>
    <div class="text-center text-xl">{{ price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  computed: {
    price() {
      let arr = [...this.product.VendorFoodItems];

      let price = "";
      let priceArr = [];

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].UnitPrice) {
          priceArr.push(arr[i].UnitPrice);
        }
      }

      if (priceArr.length > 1) {
        price = `${Math.min(...priceArr)} - ${Math.max(...priceArr)}`;
      }

      if (priceArr.length === 1) {
        price = priceArr[0];
      }

      return price;
    },
  },
};
</script>