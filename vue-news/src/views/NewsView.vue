<template>
    <div>
        <!-- v-bind:key 에는 객체 넣을수없고 숫자, 문자만 넣을수 있다 -->
        <div v-for="(user, i) in users" v-bind:key="i">{{ user.title }} {{ i }}</div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'


export default {
    data(){
        return{
            users:[]
        }
    },
    created(){
        var vm = this;
        fetchNewsList()        
        .then(function(response){
            console.log(response);
            vm.users = response.data;
        })
        .catch(function(error){
            console.log(error);
            })
    }
};
</script>

<style lang="scss" scoped>

</style>