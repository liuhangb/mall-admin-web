<template> 
    <coupon-detail :isEdit="true"></coupon-detail>
</template>
<script>
    import CouponDetail from '../couponList/components/CouponDetail'
    export default {
        name: 'updateCoupon',
        components: { CouponDetail }
    }
</script>
<style scoped>
</style>


