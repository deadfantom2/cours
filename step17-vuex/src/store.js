import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        },
        value: state => {
            return state.value;
        }
    },
    mutations: {
        decrementStore: (state, payload) => {
            state.counter -= payload;
        },
        incrementStore: (state, payload) => {
            state.counter += payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        decrementStore: ({commit}, payload) => {
            commit('decrementStore', payload);
        },
        incrementStore: ({commit}, payload) => {
            commit('incrementStore', payload);
        },
        asyncDecrementStore: ({commit}, payload) => {
            setTimeout(() => {
                commit('decrementStore', payload.by);
            }, payload.duration);
        },
        asyncIncrementStore: ({commit}, payload) => {
            setTimeout(() => {
                commit('incrementStore', payload.by);
            }, payload.duration);
        },
        updateValue({commit}, payload){
            commit('updateValue', payload);
        }
    }
});