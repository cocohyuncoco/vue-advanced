import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js'

export default { // 1. 백엔드 API를 actions으로 받고 
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(res => {
                context.commit('SET_NEWS', res.data)
            })
            .catch(error => console.log(error));
    },
    FETCH_ASKS({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASKS', data)
            })
            .catch(error => console.log(error))
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                commit('SET_JBOS', data)
            })
            .catch(error => console.log(error))
    }
}