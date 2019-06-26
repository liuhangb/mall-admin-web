<template> 
    <product-cate-detail :is-edit='true'></product-cate-detail>
</template>
<script>
    import ProductCateDetail from './components/ProductCateDetail'
    export default {
        name: 'updateProductCate',
        components: { ProductCateDetail },
        mounted() {
            console.log('updateProductCate============')
        }
    }
</script>
<style>
</style>


