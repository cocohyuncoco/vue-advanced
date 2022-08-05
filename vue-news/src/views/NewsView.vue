<template>
    <div>
        <!-- v-bind:key 에는 객체 넣을수없고 숫자, 문자만 넣을수 있다 -->
        <!-- <div v-for="(user, i) in fetchedNews" v-bind:key="i">{{ user.title }}</div> -->

        <p v-for="(item, i) in fetchedNews" v-bind:key="i">
            <a v-bind:href="item.url">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }}, {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {   
    computed: {
        ...mapGetters(['fetchedNews'])
    }, 
    created(){
        this.$store.dispatch('FETCH_NEWS');
    }
};
</script>

<style lang="scss" scoped>

</style>