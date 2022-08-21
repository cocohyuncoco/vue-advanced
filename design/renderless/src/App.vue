<template>
  <div>
    <fatch-data url="https://jsonplaceholder.typicode.com/users/1">
      <!-- reader 함수로 이곳에 값이 노출 -->
      <div slot-scope="{response, loading}" v-if="!loading">
        {{ response }}
        
        <div v-if="loading">
          loading...
        </div>
      </div>
    </fatch-data>
  </div>
</template>

<script>
import FatchData from './components/FetchData.vue'

export default {
  components: {
    FatchData
  },  
};
</script>

<style lang="scss" scoped>

</style>