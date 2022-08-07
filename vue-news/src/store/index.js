import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation.js';
import actions from './action.js'



Vue.use(Vuex);

// vuex는 상태관리 도구 
// 상태는 여러 컴포넌트 간에 공유되는 데이터 속성
export const store = new Vuex.Store({
    state : { // 3. state에 저장한다.
        // news : [],
        // asks : [],
        // jobs : [],
        user : {},
        items: {},
        list: [],
    },
    getters:{
        fetchedNews(state) {
            return state.news
        },
        fetchedAsk(state){
            return state.asks
        },
        fetchedJobs(state){            
            return state.jobs
        },
        fetchedItem(state){
            return state.items
        }
    },
    mutations, // 2. mutations으로 데이터 받아
    actions // 1. 백엔드 API를 actions으로 받고 
        
})