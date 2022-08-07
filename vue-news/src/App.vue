<template>
  <div id="app">

    <tool-bar></tool-bar>

    <transition name="page">
      <router-view/>
    </transition>

    <spinner :loading="lodingStatus"></spinner>

  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components:{
    ToolBar,
    Spinner
  },
  data(){
    return{
      lodingStatus: false,
    };
  },
  methods: {
    startSpinner(){
      this.lodingStatus = true;
    },
    endSpinner(){
      this.lodingStatus = false;
    }
  },
  created(){
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy(){
    // 이벤트버스는 이벤트객체가 계속 쌓이기전에 off 시켜야함
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: #34495e;
}
a.router-link-exact-active{
  text-decoration: underline;
}
a:hover{
  cursor: pointer;
  color: #42b884;
  text-decoration: underline;
}
/* Router 트렌지션 */
.page-enter-active,
.page-leave-active {
  transition: opacity .5s;
}

.page-enter,
.page-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
