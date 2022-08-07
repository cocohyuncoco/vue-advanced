import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js'

export default { // 1. 백엔드 API를 actions으로 받고
    // FETCH_NEWS(context) {
    //    return fetchNewsList()
    //         .then(res => {
    //             context.commit('SET_NEWS', res.data);
    //             return res;
    //         })
    //         .catch(error => console.log(error));
    // },
    // FETCH_ASKS({ commit }) {
    //     return etchAskList()
    //         .then(({ data }) => {
    //             commit('SET_ASKS', data);
    //         })
    //         .catch(error => console.log(error))
    // },
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then(({ data }) => {
    //             commit('SET_JBOS', data);
    //         })
    //         .catch(error => console.log(error))
    // },
    FETCH_USER({ commit }, name){
        return fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => console.log(error))
    },
    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(error => console.log(error))
    },
    // #2.
    FETCH_LIST({ commit }, pageName){
        // #3.
        return fetchList(pageName)
            .then(res => {
                // #4.
                console.log(4);
                commit('SET_LIST', res.data);
                return res;
            })
            .catch(error => console.log(error))
    }
}