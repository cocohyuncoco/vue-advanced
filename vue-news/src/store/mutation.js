export default{ // 2. mutations으로 데이터 받아서
        SET_NEWS(state, data) {
            state.news = data;
        },
        SET_ASKS(state, data) {
            state.asks = data;
        },
        SET_JBOS(state, data) {
            state.jobs = data;
        }
    }