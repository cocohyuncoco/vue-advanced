import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 1
  // render: function(createElement){
  //   return createElement(App);
  // }

  // 2. h -> Virtual DOM (가상 돔) 을 지칭하는 용어
  // render: function (h) {
  //   return h(App);
  // }

  // 3.
  // render : h =>  h(App);

}).$mount('#app')
