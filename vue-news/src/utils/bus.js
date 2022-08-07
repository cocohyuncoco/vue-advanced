import Vue from 'vue'


// export 차이점
// 1. const로 했을때는
// 보내는곳에선 export const bus = new Vue(); 
// 받는곳에서 import {bus} from './bus.js' 이렇게 받고 

// 2. default로 했을떄는
// 보내는곳에선 export default new Vue();
// 받는곳에선 import bus from './bus.js'
export default new Vue();
