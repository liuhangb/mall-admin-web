<template>
    <product-attr-detail :is-edit='false'></product-attr-detail>
</template>

<script>
    import ProductAttrDetail from '../addCommodity/component/ProductAttrDetail'
    export default {
        name: 'addProductAttr',
        components: { ProductAttrDetail }
    }
</script>

<style scoped>

</style>
