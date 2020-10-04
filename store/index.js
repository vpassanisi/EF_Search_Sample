export const state = () => ({
  items: [],
  count: 0,
  filters: {
    brands: []
  },
  limit: 20,
  isLoading: false
});

export const getters = {
  filteredProducts: function(state) {
    let arr = [...state.items];

    if (state.filters.brands.length > 0) {
      arr = arr.filter(item => state.filters.brands.includes(item.Brand.Desc1));
    }

    return arr.slice(0, state.limit);
  },
  brands: function(state) {
    let arr = [];
    for (let i = 0; i < state.items.length; i++) {
      if (!arr.includes(state.items[i].Brand.Desc1)) {
        arr.push(state.items[i].Brand.Desc1);
      }
    }

    return arr;
  }
};

export const actions = {
  search: async function({ commit }, str) {
    commit("startLoading");

    commit("resetLimit");
    commit("resetFilters");

    const query = str.replace(/\s/g, "+");

    try {
      const res = await fetch(
        `https://prod.everythingfood-api.com/api/v1/search/food_items?q=${query}`,
        {
          method: "GET"
        }
      );

      const json = await res.json();

      commit("setItems", json);
    } catch (error) {
      console.log(error);
    }
    commit("endLoading");
  }
};

export const mutations = {
  setItems(state, json) {
    state.items = json.SearchResults;
    state.count = json.CountResults;
  },
  sortByName(state) {
    state.items.sort((a, b) => {
      if (a.Desc1 < b.Desc1) return -1;
      if (a.Desc1 > b.Desc1) return 1;
      return 0;
    });
  },
  addBrand(state, brand) {
    state.filters.brands.push(brand);
  },
  removeBrand(state, brand) {
    state.filters.brands = state.filters.brands.filter(val => val !== brand);
  },
  sortByABBScore(state) {
    state.items.sort((a, b) => b.ABBScore - a.ABBScore);
  },
  addTwenty(state) {
    state.limit += 20;
  },
  resetLimit(state) {
    state.limit = 20;
  },
  resetFilters(state) {
    state.filters.brands = [];
  },
  startLoading(state) {
    state.isLoading = true;
  },
  endLoading(state) {
    state.isLoading = false;
  }
};
