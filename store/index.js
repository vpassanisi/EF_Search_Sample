export const state = () => ({
  items: [],
  count: 0,
  isLoading: false
});

export const actions = {
  search: async function({ state, commit }, str) {
    commit("startLoading");

    const query = str.replace(/\s/g, "+");

    try {
      const res = await fetch(
        `https://prod.everythingfood-api.com/api/v1/search/food_items?q=${query}`,
        {
          method: "GET"
        }
      );

      const json = await res.json();

      console.log(json);

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
  sortByABBScore(state) {
    state.items.sort((a, b) => b.ABBScore - a.ABBScore);
  },
  startLoading(state) {
    state.isLoading = true;
  },
  endLoading(state) {
    state.isLoading = false;
  }
};
