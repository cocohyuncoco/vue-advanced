import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
// import createListView from '../views/CreateListView'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // url #값 제거
    routes: [ //routes도 커졌을때 모듈화 가능
        {
            path: '/',// url에 대한 정보가 담기는곳, url주소
            redirect: '/news',// url 주소로 갔을때 표시될 컴포넌트
            
        },
        {
            path: '/news', 
            component: NewsView, 
            name: 'news',
            // 하이 오더 컴포넌트
            // 기존에 있던 컴포넌트 위에 컴포넌트가 하나 더 생김
            // component: createListView('NewsView'),

        },
        {
            path: '/ask',
            component: AskView,
            name: 'ask',
            // component: createListView('AskView'),
        },
        {
            path: '/jobs',
            component: JobsView,
            name: 'jobs',
            // component: createListView('JobsView'),
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
