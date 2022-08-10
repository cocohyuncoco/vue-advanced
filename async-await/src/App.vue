<template>
  <div id="app">
    <button @click="loginUser">Login</button>
    <h1>List</h1>
    <ul>
      <li v-for="(item, idx) in items" v-bind:key="idx">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      items:[]
    }    
  },
  methods:{
    loginUser(){
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => {
          if (res.data.id === 1) {
            console.log('사용자가 인증 되었습니다');
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(res =>{
                this.items = res.data;
              })
              .catch()
          }
        })
        .catch(err => console.log(err));
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
