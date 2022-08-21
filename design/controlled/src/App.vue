<template>
  <!-- <check-box :checked="checked"></check-box> -->
  <div>
    <check-box v-model="checked"></check-box>
  </div>
</template>
<!-- <script src="http://code.jquery.com/jquery-latest.min.js"></script> -->

<script>
import CheckBox from './components/CheckBox.vue'

export default {
  // @input 이벤트
  // :value 값
  components:{
    CheckBox,
  },
  data(){
    return{
      checked: false,
    }
  },  
};
</script>

<style scoped>


</style>
