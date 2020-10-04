<template>
  <nav class="relative h-20 border-b border-gray-500 shadow bg-white">
    <div
      class="flex flex-row items-center justify-between w-11/12 mx-auto h-full"
    >
      <div class="font-hairline text-3xl">EF</div>
      <div class="relative flex flex-row w-1/2 h-12 search">
        <input
          class="border h-full w-full border-gray-500 rounded focus:outline-none px-4 focus:shadow transition-shadow duration-300 ease-in-out"
          v-model="str"
          @keydown.enter="handleSearch"
          placeholder="Search for food products"
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
    <div
      class="absolute w-full bottom-0 progress-line"
      :class="[isLoading ? 'visible' : 'invisible']"
    />
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: function () {
    return {
      str: "",
    };
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  methods: {
    ...mapActions(["search"]),
    handleSearch() {
      this.search(this.str);
    },
  },
};
</script>

<style scoped>
.progress-line,
.progress-line:before {
  height: 3px;
  width: 100%;
}
.progress-line {
  background-color: #90caf9;
  display: -webkit-flex;
  display: flex;
}
.progress-line:before {
  background-color: #1976d2;
  content: "";
  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@-webkit-keyframes running-progress {
  0% {
    margin-left: 0px;
    margin-right: 100%;
  }
  50% {
    margin-left: 25%;
    margin-right: 0%;
  }
  100% {
    margin-left: 100%;
    margin-right: 0;
  }
}
@keyframes running-progress {
  0% {
    margin-left: 0px;
    margin-right: 100%;
  }
  50% {
    margin-left: 25%;
    margin-right: 0%;
  }
  100% {
    margin-left: 100%;
    margin-right: 0;
  }
}
</style>