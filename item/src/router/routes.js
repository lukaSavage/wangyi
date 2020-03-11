import Cart from '../pages/Cart'
import Category from '../pages/Category'
import Goods from '../pages/Goods'
import Index from '../pages/Index'
import Personal from '../pages/Personal'
import Item from '../pages/Category/Items'
import SearchInfo from '../pages/SearchInfo'


export default [
    {
        path: '/',
        component: Index,
        meta: {
            isShow: true
        }
    },
    {
        path: '/category/cateList',
        component: Category,
        children: [
            {
                path: '/category/cateList:id',
                component: Item
            }
        ],
        meta: {
            isShow: true
        }
    },
    {
        path: '/goods',
        component: Goods,
        meta: {
            isShow: true
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            isShow: true
        }
    },
    {
        path: '/personal',
        component: Personal,
        meta: {
            isShow: false
        }
    },
    {
        path: '/search',
        component: SearchInfo,
        meta: {
            isShow: false
        }
    },
]