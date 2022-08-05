<template>
    <div>
        <!-- <div v-for="(ask, i) in fetchedAsk" v-bind:key="i"> {{ ask.title}} </div> -->
        <p v-for="(item, i) in fetchedAsk" v-bind:key="i">
            <!-- v-bind:href 축약-->
            <a :href="item.url">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }}, {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed:{
        // 3.
        ...mapGetters(['fetchedAsk'])
    
    // 2.
    // ...mapGetters({ //객체, 배열 풀어서 넣는 역할
    //     askItems: 'fetchedAsk'
    // })

    // 1.   
    //   ...mapState({
    //       asks: state => state.asks
    //   })
     },
   created(){
       this.$store.dispatch('FETCH_ASKS');
   }
};
</script>

<style lang="scss" scoped>

</style>