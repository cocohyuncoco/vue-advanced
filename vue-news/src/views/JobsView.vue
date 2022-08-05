<template>
    <div>
        <!-- <div v-for="(job, i) in fetchedJobs" v-bind:key="i">{{ job.title }}</div> -->
        <p v-for="(item, i) in fetchedJobs" v-bind:key="i">
            <a :href="item.url">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }}, {{ item.domain }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'; 


export default {   
    computed:{
        ...mapGetters(['fetchedJobs'])
    },
    created(){
        this.$store.dispatch('FETCH_JOBS');
    }
};
</script>

<style lang="scss" scoped>

</style>