<template>
  <div id="app">
    <button @click="loginUser1">Login</button>
    <h1>List</h1>
    <ul>
      <li v-for="(item, idx) in items" v-bind:key="idx">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { handleException } from './utils/handler.js'

export default {
  data(){
    return{
      items:[]
    }    
  },
  methods:{
    // 1. 기존 코드를 
    loginUser(){
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => {
          if (res.data.id === 1) {
            console.log('사용자가 인증 되었습니다');
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(res =>{
                this.items = res.data;
              })
              .catch(err => console.log(err))
          }
        })
        .catch(err => console.log(err));
    },

    // 2. async & await 로 바꾸면 
    async loginUser1(){

      try {
        var res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if (res.data.id === 1) {
          console.log('사용자가 인증 되었습니다');
          var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = list.data;
        }
      } catch (error) {
        handleException(error); // 공통 에러 함수 만들기 (팁)
        console.log(error);
      }     
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
