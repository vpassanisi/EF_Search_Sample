<template>
  <div class="min-h-screen bg-blue-gray-50">
    <Nav />
    <div class="flex flex-wrap w-11/12 mx-auto pt-8">
      <Filters />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Filters from "@/components/Filters.vue";

export default {
  components: {
    Nav,
    Filters,
  },
};
</script>