import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)


export const constantRoutes = [
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        children: [{
            path: 'home',
            name:'Home',
            component: () => import('@/views/home/home'),
            meta: { title: '首页', icon: 'home' }
        }]
    },
    {
        path: '/commodity',
        name: 'Commodity',
        component: Layout,
        children: [{
            path: 'commodityList',
            name: 'CommodityList',
            component: () => import('@/views/commodity/commodityList/index'),
            meta: { title: '商品列表', icon: 'orderList' }
        },{
            path: 'addCommodity',
            name: 'AddCommodity',
            component: () => import('@/views/commodity/addCommodity/index'),
            meta: { title: '添加商品', icon: 'addCommodity' }
        },{
            path: 'commodityCategory',
            name: 'CommodityCategory',
            component: () => import('@/views/commodity/commodityCategory/index'),
            meta: { title: '商品分类', icon: 'commodityCategory' }
        },{
            path: 'commodityType',
            name: 'CommodityType',
            component: () => import('@/views/commodity/commodityType/index'),
            meta: { title: '商品类型', icon: 'commodityType' }
        },{
            path: 'brandManage',
            name: 'BrandManage',
            component: () => import('@/views/commodity/brandManage/index'),
            meta: { title: '品牌管理', icon: 'brandManage' }
        },
        ],
        meta: { title: '商品', icon: 'commodity' }
    },
    {
        path: '/order',
        name: 'Order',
        component: Layout,
        children: [{
            path: 'orderList',
            name: 'OrderList',
            component: () => import('@/views/order/orderList/index'),
            meta: {title: '订单列表', icon: 'orderList'}
        },{
            path: 'orderSetting',
            name: 'OrderSetting',
            component: () => import('@/views/order/orderSetting/index'),
            meta: {title: '订单设置', icon: 'orderSetting'}
        },{
            path: 'backGoods',
            name: 'BackGoods',
            component: () => import('@/views/order/backGoods/index'),
            meta: {title: '退货申请处理', icon: 'backGoods'}
        },{
            path: 'backGoodsCause',
            name: 'BackGoodsCause',
            component: () => import('@/views/order/backGoodsCause/index'),
            meta: {title: '退货原因设置', icon: 'backGoodsCause'}
        },
        ],
        meta: {title: '订单', icon: 'order'}
    },{
        path: '/marketing',
        name: 'Marketing',
        component: Layout,
        meta: { title: '营销', icon: 'marketing' },
        children: [{
            path: 'advertisingList',
            name: 'AdvertisingList',
            component: () => import('@/views/marketing/advertisingList/index'),
            meta: { title: '广告列表', icon: 'advertisingList' }
        },{
            path: 'brandRecom',
            name: 'BrandRecom',
            component: () => import('@/views/marketing/brandRecom/index'),
            meta: { title: '品牌推荐', icon: 'brandRecom' }
        },{
            path: 'couponList',
            name: 'CouponList',
            component: () => import('@/views/marketing/couponList/index'),
            meta: { title: '优惠券列表', icon: 'couponList' }
        },{
            path: 'featuredRecom',
            name: 'FeaturedRecom',
            component: () => import('@/views/marketing/featuredRecom/index'),
            meta: { title: '专题推荐', icon: 'featuredRecom' }
        },{
            path: 'newArrivals',
            name: 'NewArrivals',
            component: () => import('@/views/marketing/newArrivals/index'),
            meta: { title: '新品推荐', icon: 'newArrivals' }
        },{
            path: 'popularRecom',
            name: 'PopularRecom',
            component: () => import('@/views/marketing/popularRecom/index'),
            meta: { title: '人气推荐', icon: 'popularRecom' }
        },{
            path: 'flashScale',
            name: 'FlashScale',
            component: () => import('@/views/marketing/flashScale/index'),
            meta: { title: '秒杀活动列表', icon: 'flashScale' }
        }
        ]
    }

]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})


const index = createRouter()


// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    index.matcher = newRouter.matcher // reset index
}

export default index
