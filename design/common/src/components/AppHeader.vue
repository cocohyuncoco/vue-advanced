<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>

export default {

    // props: ['title']

    // props 벨리데이션 
    props:{
        title: String,
    }
};
</script>

<style lang="scss" scoped>

</style>