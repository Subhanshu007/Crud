export const state = () => ({
  tableTitle: null,
  tableDesc: null,
  tableData: [],
});
export const mutations = {
  updateTableData(state, data) {
    state.tableData.push(data);
  },
  deleteTableData(state, data) {
    state.tableData.splice(data, 1);
  }
};
export const actions = {
  updateTableData({ commit }, tableData) {
    commit("updateTableData", tableData);
  },
  deleteTableData({ commit }, arg) {
    commit("deleteTableData", arg);

  }
};
