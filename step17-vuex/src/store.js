import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counterState: 0,
        valueState: 0
    },
    getters: {
        doubleCounterGetters: state => {
            return state.counterState;
        },
        stringCounterGetters: state => {
            return state.counterState + ' Clicks';
        },
        valueGetters: state => {
            return state.valueState;
        }
    },
    mutations: {
        decrementStoreMutations: (state, payload) => {
            state.counterState -= payload;
        },
        incrementStoreMutations: (state, payload) => {
            state.counterState += payload;
        },
        updateValueMutations: (state, payload) => {
            state.valueState = payload;
        }
    },
    actions: {
        decrementStoreActions: ({commit}, payload) => {
            commit('decrementStoreMutations', payload);  /*on prends le nom qui est dans commit à partir de mutations*/
        },
        incrementStoreActions: ({commit}, payload) => {
            commit('incrementStoreMutations', payload);  /*on prends le nom qui est dans commit à partir de mutations*/
        },
        asyncDecrementStoreActions: ({commit}, payload) => {
            setTimeout(() => {
                commit('decrementStoreMutations', payload.by); /*on prends le nom qui est dans commit à partir de mutations*/
            }, payload.duration);
        },
        asyncIncrementStoreActions: ({commit}, payload) => {
            setTimeout(() => {
                commit('incrementStoreMutations', payload.by); /*on prends le nom qui est dans commit à partir de mutations*/
            }, payload.duration);
        },
        updateValueActions({commit}, payload){
            commit('updateValueMutations', payload); /*on prends le nom qui est dans commit à partir de mutations*/
        }
    }
});