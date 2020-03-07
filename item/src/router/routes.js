import Cart from '../pages/Cart'
import Category from '../pages/Category'
import Goods from '../pages/Goods'
import Index from '../pages/Index'
import Personal from '../pages/Personal'


export default[
    {
        path: '/index',
        component: Index
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/goods',
        component: Goods
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/personal',
        component: Personal
    },
    {
        path: '/',
        redirect: '/index'
    }
]