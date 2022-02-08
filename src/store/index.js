// import Vue from "vue";
// import Vuex from 'vuex'
import { createStore } from 'vuex'
import todos from "./modules/todos";

//load vuex
// Vue.use(Vuex);

//Create store
export const store = createStore({
  modules: {
    todos
  }
});
