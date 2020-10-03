<template>
  <nav class="h-20 border-b border-gray-500 shadow bg-white">
    <div
      class="flex flex-row items-center justify-between w-11/12 mx-auto h-full"
    >
      <div class="font-hairline text-3xl">EF</div>
      <div class="relative flex flex-row w-1/2 h-12 search">
        <input
          class="border h-full w-full border-gray-500 rounded focus:outline-none px-4 focus:shadow transition-shadow duration-300 ease-in-out"
          v-model="str"
          @keydown.enter="handleSearch"
          type="text"
        />
        <button
          class="absolute right-0 h-full px-2 text-xl focus:outline-none bg-white border-t border-r border-b rounded-r border-gray-500"
          @click="handleSearch"
        >
          <i class="flex text-4xl material-icons">search</i>
        </button>
      </div>
      <button class="justify-self-end h-full px-4 md:invisible">
        <i class="material-icons flex">menu</i>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function () {
    return {
      str: "",
    };
  },
  methods: {
    ...mapActions(["search"]),
    handleSearch() {
      this.search(this.str);
    },
  },
};
</script>