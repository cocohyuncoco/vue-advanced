<template>
    <div>
        <!-- <div v-for="(job, i) in fetchedJobs" v-bind:key="i">{{ job.title }}</div> -->
        <!-- <p v-for="(item, i) in fetchedJobs" v-bind:key="i">
            <a :href="item.url">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }}, {{ item.domain }}</small>
        </p> -->

        <ul class="job-list">
            <li v-for="(item, i) in fetchedJobs" v-bind:key="i" class="post">
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <a :href="item.url">
                        {{ item.title }}
                    </a>
                    <br>
                    <small class="link-text">
                        {{ item.time_ago }}
                        by
                        {{ item.domain }}
                    </small>
                </div>
            </li>
        </ul>
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

<style scoped>

.job-list {
    margin: 0;
    padding: 0;
}

.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}

.news-title {
    margin: 0;
}

.link-text {
    color: #828282;
}
</style>