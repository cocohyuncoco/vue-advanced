<template>
    <div>
        <div v-for="(job, i) in jobs" v-bind:key="i">{{ job.title }}</div>
    </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
    

    data() {
        return {
            jobs: []
        };
    },
    created(){
        var vm = this;
        fetchJobsList()
        .then(function(response){
          vm.jobs   = response.data;
        })
        .catch()
    }
};
</script>

<style lang="scss" scoped>

</style>