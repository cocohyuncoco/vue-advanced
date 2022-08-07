import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js'

export default { // 1. 백엔드 API를 actions으로 받고 
    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //         .then(res => {
    //             context.commit('SET_NEWS', res.data);
    //             return res;
    //         })
    //         .catch(error => console.log(error));
    // },
    // FETCH_ASKS({ commit }) {
    //     fetchAskList()
    //         .then(({ data }) => {
    //             commit('SET_ASKS', data);
    //         })
    //         .catch(error => console.log(error))
    // },
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //         .then(({ data }) => {
    //             commit('SET_JBOS', data);
    //         })
    //         .catch(error => console.log(error))
    // },
    FETCH_USER({ commit }, name){
        fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => console.log(error))
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(error => console.log(error))
    },
    FETCH_LIST({ commit }, pageName){
        fetchList(pageName)
            .then(({data}) => {
                commit('SET_LIST', data)
            })
            .catch(error => console.log(error))
    }
}