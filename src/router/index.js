import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/Home")
    },
    {
        path: '/usage-flow',
        name: 'UsageFlow',
        component: () => import("../views/UsageFlow")
    },
    {
        path: '/what-is-kigaruni-hoiku',
        name: 'KigaruniHoiku',
        component: () => import("../views/KigaruniHoiku")
    },
    {
        path: '/find-nursery-school',
        name: 'FindNurserySchool',
        component: () => import("../views/FindNurserySchool")
    },
    {
        path: '/faqs',
        name: 'Faqs',
        component: () => import("../views/faqs/Index")
    },
    {
        path: '/my-page',
        name: 'MyPage',
        component: () => import("../views/MyPage")
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: () => import("../views/contact/Index")
    },
    {
        path: '/inquiry-form',
        name: 'InquiryForm',
        component: () => import("../views/contact/InquiryForm")
    },
    {
        path: '/considering-supporter-garden',
        name: 'ConsideringSupporterGarden',
        component: () => import("../views/contact/ConsideringSupporterGarden")
    },
    {
        path: '/confirmation-of-input-contents',
        name: 'ConfirmationOfInputContents',
        component: () => import("../views/contact/ConfirmationOfInputContents")
    },
    {
        path: '/inquiry-complete',
        name: 'InquiryComplete',
        component: () => import("../views/contact/InquiryComplete")
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import("../components/search/Search")
    },
    {
        path: '/search-from-the-area',
        name: 'SearchFromArea',
        component: () => import("../views/SearchFromArea")
    },
    {
        path: '/details',
        name: 'search.result',
        component: () => import("../components/search/Details")
    },
    {
        path: '/guardian-characteristics-detail',
        name: 'CharacteristicsDetail',
        component: () => import("../views/guardian/CharacteristicsDetail")
    },
    {
        path: '/proceed-to-reservation',
        name: 'ProceedToReservation',
        component: () => import("../views/cocoro-nursery-school/index")
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../components/auth/Login")
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import("../components/auth/Registration")
    },
    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: () => import("../components/auth/ResetPassword")
    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import("../views/todo")
    },
    {
        path: "*",
        redirect: "/pages/error-404"
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },

    routes
})

export default router