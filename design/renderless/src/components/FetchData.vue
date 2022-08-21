<template>
    <div>
        <p>name : {{ response.name }}</p>
        <p>email : {{ response.email }}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props:['url'],
    data() {
        return {
            response: null,
            loading: true
        };
    },
    created() {
        axios.get(this.url)
            .then(response =>{
                this.response = response.data;
                this.loading = false;
            })
            .catch(erorr=>{
                alert('[ERROR] fetching the data', error);
                    console.log(erorr);
                });
    },
    // render 함수는? - 컴포넌트를 그리는것, 컴포넌트 표현 - 데이터만 넘겨줌. response, loading 넘겨줌, 노출 - 상위 컴포넌트 등록한곳에
    // $scopedSlots.default 는? - 하위컴포넌트 데이터를 상위에 노출 시키는것 상위에서 접근할수 있게하는것
    
    render(){
        return this.$scopedSlots.default({
            response: this.response,
            loading: this.loading
        })
    }
};
</script>

<style lang="scss" scoped>

</style>