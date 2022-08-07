<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from '../components/listItem.vue';
import ListMixin from '../mixins/ListMixin.js';


export default {   
    components:{
        ListItem
    },
    mixins: [ListMixin],
};
</script>

<style scoped>

</style>