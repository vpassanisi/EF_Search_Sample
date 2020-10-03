export const state = () => ({
  items: [],
  count: 0
});

export const actions = {
  search: async function({ state, commit }, str) {
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
  }
};

export const mutations = {
  setItems(state, json) {
    state.items = json.SearchResults;
    state.count = json.CountResults;
  },
  sort(state, sortBy) {
    state.items.sort((a, b) => a[sortBy] - b[sortBy]);
  }
};
