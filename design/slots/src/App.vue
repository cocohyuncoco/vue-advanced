<template>
  <div>
    <ul>
      <!-- 기존 컴포넌트는 이런 모양 <app-header></app-header> -->

      <!-- slot은 props 안내려도 v-for로 데이터 출력 가능  -->
      <item v-for="(item, idx) in items" v-bind:key="idx">{{ item }}</item>

      <item>
        <!-- slot의 장점 -->
        <!-- 만약 요구사항이 바뀔때 유연하게 대처 가능, 모델 마음대로 확장 가능 -->
        아이템 1
      </item>

      <item>
        <!-- 2. 버튼을 넣어주세요 -->
        아이템 2
        <button>click me</button>
      </item>

      <item>
        <!-- 3. 텍스트와 함께 이미지를 표현해주세요 -->
        <div>
          아이템 3
        </div>
        <img src="./assets/f7.png" alt="">
      </item>

      <item>
        <!-- 4. slot에는 style도 넣을수 있단 -->
        <div style="color: blue; font-size: 20px;">
          아이템 4
        </div>
      </item>

      <!-- <item v-for="(item, idx) in items" v-bind:key="idx" :item="item"></item> -->
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
 components:{
    Item,
 },
 data() {
  return {
    items: ['slot 1', 'slot 2', 'slot 3', 'slot 4', 'slot 5']
  };
 },
};
</script>

<style lang="scss" scoped>

</style>