<template>
    <div>
        <ul>
            <li v-for="(item, idx) in items" v-bind:key="idx">
                {{item}}
            </li>
        </ul>

        <!-- 메서드 안만들고 클릭하자마자 상위 컴포넌트로 이벤트 올려보내기 가능 -->
        <button @click="$emit('renew')">renew items</button>
    </div>
</template>

<script>
export default {

  // Props Validation
  // array 가 아닌 데이터가 들어오면 에러처리
  props:{
    items:{
        type: Array,
        required: true,
    }
  }
};
</script>

<style lang="scss" scoped>

</style>