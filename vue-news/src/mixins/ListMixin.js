import bus from '../utils/bus.js'
// mixins
export default {
    // 재사용할 컴포넌트 옵션 & 로직
    mounted() {
        bus.$emit('end:spinner');
    }
    // created() {
    //     bus.$emit('start:spinner');
    //     // #1.
    //     this.$store.dispatch('FETCH_LIST', this.$route.name)
    //         .then(() => {
    //             // #5.
    //             console.log(5);
    //             console.log('fetched');
    //             bus.$emit('end:spinner');
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });

    //     // setTimeout(() => {
            
    //     // }, 3000)
    // }
}