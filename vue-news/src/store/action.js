import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js'

export default { // 1. 백엔드 API를 actions으로 받고

    // promise
    // FETCH_NEWS(context) {
    //    return fetchNewsList()
    //         .then(res => {
    //             context.commit('SET_NEWS', res.data);
    //             return res;
    //         })
    //         .catch(error => console.log(error));
    // },

    // async 
    async FETCH_NEWS(context) {
        const res = await fetchNewsList();
        context.commit('SET_NEWS', res.data);
        return res; // 리턴 안해주면 화면에서 비동기 순서를 보장할수없음
    },


    // promise
    // FETCH_ASKS({ commit })  {
    //    return fetchNewsList()
    //         .then(({ data }) => {
    //             commit('SET_ASKS', data);
    //         })
    //         .catch(error => console.log(error))
    // },

    // async 
    async FETCH_ASKS({ commit }) {
        try {
            const res = await fetchAskList();
            commit('SET_ASKS', res.data);
            return res;            
        } catch (error) {
            console.log(error);
        }
    },

    // promise
    // FETCH_JOBS({ commit }) {
    //    return fetchJobsList()
    //         .then(({ data }) => {
    //             commit('SET_JBOS', data);
    //         })
    //         .catch(error => console.log(error))
    // },

    // async
    async FETCH_JOBS({ commit }) {
        try {
            const res = await fetchJobsList();
            commit('SET_JBOS', res.data);
            return res;    
        } catch (error) {
            console.log(error);
        }        
    },



    // promise
    // FETCH_USER({ commit }, name){
    //    return fetchUserInfo(name)
    //     .then(({ data }) => {
    //         commit('SET_USER', data);
    //     })
    //     .catch(error => console.log(error))
    // },

    // async
    async FETCH_USER({ commit }, name){
        try {
            const res = await fetchUserInfo(name);
            commit('SET_USER', res.data);
            return res;    
        } catch (error) {
            console.log(error)
        }
    },

    // promise
    // FETCH_ITEM({ commit }, id) {
    // return fetchCommentItem(id)
    //     .then(({ data }) => {
    //         commit('SET_ITEM', data);
    //     })
    //     .catch(error => console.log(error))
    // },

    // async
    async FETCH_ITEM({ commit }, id) {
        try {
            const res = await fetchCommentItem(id);
            commit('SET_ITEM', res.data);
            return res;
        } catch (error) {
            console.log(error);
        }
        
    },

    // promise
    // FETCH_LIST({ commit }, pageName) {
    // return fetchList(pageName)
    //     .then(res => {
    //         // #4.
    //         console.log(4);
    //         commit('SET_LIST', res.data);
    //         return res;
    //     })
    //     .catch(error => console.log(error))
    // },


    // #2.
    async FETCH_LIST({ commit }, pageName){
        try {
            const res = await fetchList(pageName);
            commit('SET_LIST', res.data);
            return res;           
        } catch (error) {
            console.log(error);
        }        
    }
}