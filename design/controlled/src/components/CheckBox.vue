<template>
    <div>
        <!-- <input type="checkbox" v-model="checked"> -->
        <input type="checkbox" :value="value" @click="toggleCheckBox"></input>
    </div>
</template>

<script>
export default {
    // props: ['checked'],
    // @input 이벤트
    // :value 값
    props: ['value'],
    methods: {
        toggleCheckBox() {
            this.$emit('input', !this.value) // true로 올리는것보단 반대로 되야하니까 not! 
        },
    },
};
</script>

<style lang="scss" scoped>

</style>