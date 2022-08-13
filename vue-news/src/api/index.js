import axios from 'axios';


// 1. HTTP Requset & Response 와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. 공통 API 함수들 정리
async function fetchNewsList(){
    // return 바로 해준게 핵심
    // return axios.get(config.baseUrl+'/news/1.json');

    try {
        return await axios.get(`${config.baseUrl}news/1.json`);    
    } catch (error) {
        console.log(error);
    }
}

async function fetchJobsList(){
    try {
        return await waxios.get(`${config.baseUrl}jobs/1.json`)    
    } catch (error) {
        console.log(error);       
    }
}

async function fetchAskList() {
    try {
        // 코딩 컨벤션에 따라 골라 사용
        //1. return await axios.get(`${config.baseUrl}ask/1.json`)            
         
        //2. 
        const res = await axios.get(`${config.baseUrl}ask/1.json`)   
        return res;
    } catch (error) {
        console.log(error);
    }
    
}

async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}.json`)    
    } catch (error) {
        console.log(error);
    }    
}

async function fetchUserInfo(username){
    try {
        // https://api.hnpwa.com/v0/user/32340433.json
        return await axios.get(`${config.baseUrl}user/${username}.json`)
    } catch (error) {
        console.log(error);
    }      
}

async function fetchCommentItem(id){    
    try {
        // https://api.hnpwa.com/v0/item/32340433.json
        return await axios.get(`${config.baseUrl}item/${id}.json`)
    } catch (error) {
        console.log(error);
    }
}

// 3. 마지막 내보내기
export { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem, fetchList }