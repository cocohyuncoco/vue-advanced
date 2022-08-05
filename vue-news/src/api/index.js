import axios from 'axios';


// 1. HTTP Requset & Response 와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. 공통 API 함수들 정리
function fetchNewsList(){
    // return 바로 해준게 핵심
    // return axios.get(config.baseUrl+'/news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchUserInfo(username){
    // https://api.hnpwa.com/v0/user/32340433.json
    return axios.get(`${config.baseUrl}user/${username}.json`)
}

function fetchCommentItem(id){
    // https://api.hnpwa.com/v0/item/32340433.json
    return axios.get(`${config.baseUrl}item/${id}.json`)
}

// 3. 마지막 내보내기
export { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem }