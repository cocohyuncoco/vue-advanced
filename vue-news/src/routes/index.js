import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // url #값 제거
    routes: [ //routes도 커졌을때 모듈화 가능
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news', // url에 대한 정보가 담기는곳, url주소
            component: NewsView, // url 주소로 갔을때 표시될 컴포넌트
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
    ]
});
