<template>
    <div>
        <!-- v-bind:key 에는 객체 넣을수없고 숫자, 문자만 넣을수 있다 -->
        <!-- <div v-for="(user, i) in fetchedNews" v-bind:key="i">{{ user.title }}</div> -->

        <!-- <p v-for="(item, i) in fetchedNews" v-bind:key="i">
            <a v-bind:href="item.url">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }} by
               
                <router-link v-bind:to="`/user/${item.user}`">
                    {{ item.user }}
                </router-link>
            </small>
        </p> -->
        <ul class="news-list">
            <li v-for="(item, i) in fetchedNews" v-bind:key="i" class="post">

                <!--포인트 영역-->
                <div class="points">
                    {{ item.points }}
                </div>
                <!-- 기타 정보 영역-->
                <div>
                    <a v-bind:href="item.url">
                        <p class="news-title">{{ item.title }}</p>
                    </a>
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
    computed: {
        ...mapGetters(['fetchedNews'])
    }, 
    created(){
        this.$store.dispatch('FETCH_NEWS');
    }
};
</script>

<style scoped>
.news-list{
    margin: 0;
    padding: 0;
}
.post{
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.news-title{
    margin: 0;
}
.link-text{
    color: #828282;
}
</style>