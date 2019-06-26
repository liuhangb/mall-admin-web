<template> 
    <brand-detail :is-edit='true'></brand-detail>
</template>
<script>
    import BrandDetail from '../brandManage/components/BrandDetail'
    export default {
        name: 'updateBrand',
        components: { BrandDetail }
    }
</script>
<style>
</style>


