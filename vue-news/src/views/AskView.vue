<template>
    <div>
        <ul class="ask-list ">
            <li v-for="(item, i) in fetchedAsk" v-bind:key="i" class="post">
                <!--포인트 영역-->
                <div class="points">
                    {{ item.points }}
                </div>
                <!-- 기타 정보 영역-->
                <div>
                    <router-link v-bind:to="`item/${item.id}`">
                        {{ item.title }}
                    </router-link>
                    <br>
                    <small class="link-text">
                        {{ item.time_ago }}
                        by
                        <router-link v-bind:to="`/user/${item.user}`" class="link-text">
                            {{ item.user }}
                        </router-link>
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

<style scoped>

.ask-list {
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