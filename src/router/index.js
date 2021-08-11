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
        path: '',
        component: () => import("../views/faqs/Main"),
        children: [
            {
                path: '/faqs',
                name: 'Faqs',
                component: () => import("../views/faqs/Index"),
            },
            {
                path: '/faqs/category',
                name: 'Faqs.Category',
                component: () => import("../views/faqs/Category"),
            },
            {
                path: '/faqs/detail',
                name: 'Faqs.Detail',
                component: () => import("../views/faqs/Detail"),
            },
        ]
    },
    {
        path: '/terms/:active?',
        name: 'terms',
        component: () => import("../views/terms/Index")
    },
    {
        path: '/my-page/home',
        name: 'Mypage.Home',
        component: () => import("../views/myPage/Home")
    },
    {
        path: '',
        component: () => import("../views/myPage/profile/Main"),
        children: [
            {
                path: '/my-page/profile',
                name: 'Mypage.Profile',
                component: () => import("../views/myPage/profile/Index")
            },
            {
                path: '/my-page/condition',
                name: 'Mypage.Condition',
                component: () => import("../views/myPage/profile/Condition")
            }
        ]
    },
    {
        path: '/my-page/talk',
        name: 'Talk',
        component: () => import("../views/myPage/Talk")
    },
    {
        path: '/my-page/talk-reservation',
        name: 'TalkResarvation',
        component: () => import("../views/myPage/TalkReservation")
    },
    {
        path: '/my-page/talk-reservation-confirm',
        name: 'TalkResarvationConfirm',
        component: () => import("../views/myPage/TalkReservationConfirm")
    },
    {
        path: '/my-page/talk-reservation-Change',
        name: 'TalkResarvationChange',
        component: () => import("../views/myPage/TalkReservationChange")
    },
    {
        path: '/my-page/notice',
        name: 'Notice',
        component: () => import("../views/myPage/Notice")
    },
    {
        path: '/my-page/reservation',
        name: 'Reservation',
        component: () => import("../views/myPage/Reservation")
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
        path: '',
        component: () => import("../components/search/search-area/Main"),
        children: [
            {
                path: '/search-from-the-area',
                name: 'SearchFromArea',
                component: () => import("../components/search/search-area/Index")
            },
            {
                path: '/search-from-the-area/osaka',
                name: 'SearchFromArea.Osaka',
                component: () => import("../components/search/search-area/Osaka")
            },
            {
                path: '/search-from-the-area/hyogo',
                name: 'SearchFromArea.Hyogo',
                component: () => import("../components/search/search-area/Hyogo")
            },
            {
                path: '/search-from-the-area/kyoto',
                name: 'SearchFromArea.Kyoto',
                component: () => import("../components/search/search-area/Kyoto")
            },
            {
                path: '/search-from-the-area/shiga',
                name: 'SearchFromArea.Shiga',
                component: () => import("../components/search/search-area/Shiga")
            },
            {
                path: '/search-from-the-area/nara',
                name: 'SearchFromArea.Nara',
                component: () => import("../components/search/search-area/Nara")
            },
            {
                path: '/search-from-the-area/wakayama',
                name: 'SearchFromArea.Wakayama',
                component: () => import("../components/search/search-area/Wakayama")
            }
        ]
    },
    {
        path: '',
        component: () => import("../components/search/search-area/along-line/Main"),
        children: [
            {
                path: '/search-from-along-the-line',
                name: 'SearchFromAlongLine',
                component: () => import("../components/search/search-area/along-line/Index")
            },
            {
                path: '/search-from-along-the-line/osaka',
                name: 'SearchFromAlongLine.Osaka',
                component: () => import("../components/search/search-area/along-line/Osaka")
            },
            {
                path: '/search-from-along-the-line/hyogo',
                name: 'SearchFromAlongLine.Hyogo',
                component: () => import("../components/search/search-area/along-line/Hyogo")
            },
            {
                path: '/search-from-along-the-line/kyoto',
                name: 'SearchFromAlongLine.Kyoto',
                component: () => import("../components/search/search-area/along-line/Kyoto")
            },
            {
                path: '/search-from-along-the-line/shiga',
                name: 'SearchFromAlongLine.Shiga',
                component: () => import("../components/search/search-area/along-line/Shiga")
            },
            {
                path: '/search-from-along-the-line/nara',
                name: 'SearchFromAlongLine.Nara',
                component: () => import("../components/search/search-area/along-line/Nara")
            },
            {
                path: '/search-from-along-the-line/wakayama',
                name: 'SearchFromAlongLine.Wakayama',
                component: () => import("../components/search/search-area/along-line/Wakayama")
            }
        ]
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
        path: '/monthly-child-care',
        name: 'MonthlyChildCare',
        component: () => import("../views/cocoro-nursery-school/MonthlyChildCare")
    },
    {
        path: '/garden-tour',
        name: 'GardenTour',
        component: () => import("../views/cocoro-nursery-school/GardenTour")
    },
    {
        path: '/user-registration-details',
        name: 'UserRegistrationDetails',
        component: () => import("../views/cocoro-nursery-school/UserRegistrationDetails")
    },
    {
        path: '/monthly-child-care-registration-details',
        name: 'MonthlyChildCareRegistrationDetails',
        component: () => import("../views/cocoro-nursery-school/MonthlyChildCareRegistrationDetails")
    },
    {
        path: '/reservation-content',
        name: 'ReservationContent',
        component: () => import("../views/cocoro-nursery-school/ReservationContents")
    },
    {
        path: '/tour-content',
        name: 'TourContent',
        component: () => import("../views/cocoro-nursery-school/TourContent")
    },
    {
        path: '/reservation-content-pre',
        name: 'PreReservationContent',
        component: () => import("../views/cocoro-nursery-school/PreReservationContent")
    },
    {
        path: '/reservation-content-secondary',
        name: 'ReservationContentSecondary',
        component: () => import("../views/cocoro-nursery-school/ReservationContentSecondary")
    },
    {
        path: '/first-garden-content',
        name: 'FirstGardenContent',
        component: () => import("../views/cocoro-nursery-school/FirstGardenContent")
    },
    {
        path: '/payment-method-selection',
        name: 'PaymentMethodSelection',
        component: () => import("../views/cocoro-nursery-school/PaymentMethodSelection")
    },
    {
        path: '/child-care-consultation',
        name: 'ChildCareConsultation',
        component: () => import("../views/childcare/Index")
    },
    {
        path: '/my-points',
        name: 'MyPoints',
        component: () => import("../views/childcare/MyPoints")
    },
    {
        path: '/coupon-code',
        name: 'CouponCode',
        component: () => import("../views/childcare/CouponCode")
    },
    {
        path: '/thoughts-of-kigarni-hoik',
        name: 'ThoughtsofKigarniHoik',
        component: () => import("../views/ThoughtsofKigarniHoik")
    },
    {
        path: '/what-is-kigarni-hoiku-point',
        name: 'WhatIsKigarniHoikuPoint',
        component: () => import("../views/WhatIsKigarniHoikuPoint")
    },
    {
        path: '/about-payment-method',
        name: 'AboutPaymentMethod',
        component: () => import("../views/AboutPaymentMethod")
    },
    {
        path: '/how-to-use-kigarni-hoik',
        name: 'HowToUseKigarniHoik',
        component: () => import("../views/HowToUseKigarniHoik")
    },
    {
        path: '/child-rearing-information-bulletin-board',
        name: 'BulletinBoard',
        component: () => import("../views/bulletin-board/Index")
    },
    {
        path: '/create-review-form',
        name: 'ReviewCreateForm',
        component: () => import("../views/review/ReviewCreateForm")
    },
    {
        path: '/temporary-childcare',
        name: 'TemporaryChildcare',
        component: () => import("../views/bulletin-board/TemporaryChildcare")
    },
    {
        path: '/child-rearing-information-bulletin-board-details-of-child-rearing-information',
        name: 'Bulletin.Details',
        component: () => import("../views/bulletin-board/Details")
    },
    {
        path: '',
        component: () => import("../views/consultation-corner/Main"),
        children: [
            {
                path: '/child-rearing-consultation-corner',
                name: 'ConsultationCorner',
                component: () => import("../views/consultation-corner/Index"),
            },
            {
                path: '/child-rearing-consultation-corner/search-results/:active?',
                name: 'ConsultationCorner.SearchResults',
                component: () => import("../views/consultation-corner/search-results/Main"),
            },
            {
                path: '/child-rearing-consultation-corner/listen-for-the-time-being/:active?',
                name: 'ConsultationCorner.ListenForTheTimeBeing',
                component: () => import("../views/consultation-corner/listen-for-the-time-being/Main"),
            },
            {
                path: '/child-rearing-consultation-corner/latest-consultation/:active?',
                name: 'ConsultationCorner.LatestConsultation',
                component: () => import("../views/consultation-corner/latest-consultation/Main"),
            }
        ]
    },
    {
        path: '/talk-about-child-rearing',
        name: 'TalkAboutChildRearing',
        component: () => import("../views/consultation-corner/TalkAboutChildRearing")
    },
    {
        path: '/post-a-consultation',
        name: 'PostConsultation',
        component: () => import("../views/consultation-corner/PostConsultation")
    },
    {
        path: '/child-rearing-consultation-corner-details',
        name: 'ChildRearingConsultationCornerDetails',
        component: () => import("../views/consultation-corner/ChildRearingConsultationCornerDetails")
    },
    {
        path: '/child-rearing-consultation-corner-detail-other-users-resolved',
        name: 'ChildRearingConsultationCornerDetailResolved',
        component: () => import("../views/consultation-corner/ChildRearingConsultationCornerDetailResolved")
    },
    {
        path: '/child-rearing-consultation-corner/my-question/solved',
        name: 'MyQuestion.Solved',
        component: () => import("../views/consultation-corner/my-question/Solved"),
    },
    {
        path: '/child-rearing-consultation-corner/my-question/answers-are-being-accepted',
        name: 'MyQuestion.Being.Accepted',
        component: () => import("../views/consultation-corner/my-question/AnswersAreBeingAccepted"),
    },
    {
        path: '/child-rearing-consultation-corner/my-question/there-are-points-answers-are-being-accepted',
        name: 'MyQuestion.Points.Accepted',
        component: () => import("../views/consultation-corner/my-question/ThereArePointsAnswersAccepted"),
    },
    {
        path: '/child-rearing-consultation-corner/my-question/anonymous-posting-answering',
        name: 'MyQuestion.Posting.Answering',
        component: () => import("../views/consultation-corner/my-question/AnonymousPostingAnswering"),
    },
    {
        path: '/life-protection-information',
        name: 'lifeProtectionInformation',
        component: () => import("../views/protection-information/Index")
    },
    {
        path: '/about-kindergarten-hunting',
        name: 'AboutKindergartenHunting',
        component: () => import("../views/protection-information/AboutKindergartenHunting")
    },
    {
        path: '/article-details',
        name: 'Article.Details',
        component: () => import("../views/protection-information/Detail")
    },
    {
        path: '/guide/:active?',
        name: 'guide',
        component: () => import("../views/book-nursery-school/Main")
    },
    {
        path: '/to-all-users-guidelines',
        name: 'AllUsersGuidelines',
        component: () => import("../views/AllUsersGuidelines")
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../components/auth/Login")
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () => import('../components/auth/Logout'),
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import("../components/auth/Registration")
    },
    {
        path: '/registration-otp',
        name: 'RegistrationOtp',
        component: () => import("../components/auth/RegistrationOtp")
    },
    {
        path: '/profile-info',
        name: 'ProfileInfo',
        component: () => import("../components/auth/registration/ProfileInfo")
    },
    {
        path: '/profile-info-two',
        name: 'ProfileInfoTwo',
        component: () => import("../components/auth/registration/ProfileInfoTwo")
    },
    {
        path: '/profile-info-children',
        name: 'ProfileInfoChildren',
        component: () => import("../components/auth/registration/ProfileInfoChildren")
    },
    {
        path: '/verify-registration-details',
        name: 'VerifyRegistrationDetails',
        component: () => import("../components/auth/registration/VerifyRegistrationDetails")
    },
    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: () => import("../components/auth/ResetPassword")
    },
    {
        path: '/password-reset',
        name: 'PasswordReset',
        component: () => import("../components/auth/PasswordReset")
    },
    {
        path: '/conform-email',
        name: 'ConformEmail',
        component: () => import("../components/auth/ConformEmail")
    },
    {
        path: '/set-password',
        name: 'SetPassword',
        component: () => import("../components/auth/SetPassword")
    },
    {
        path: '/password-reset-success',
        name: 'PasswordResetSuccess',
        component: () => import("../components/auth/PasswordResetSuccess")
    },
    {
        path: '/garden-reviews',
        name: 'GardenReviews',
        component: () => import("../views/GardenReviews")
    },
    {
        path: '/change-reservation',
        name: 'ChangeReservation',
        component: () => import("../views/ChangeReservation/ChangeReservation")
    },
    {
        path: '/change-reservation-details',
        name: 'ChangeReservationDetails',
        component: () => import("../views/ChangeReservation/ChangeReservationDetails")
    },
    {
        path: '/approve-report',
        name: 'ApproveReport',
        component: () => import("../views/ApproveReport")
    },
    {
        path: '/todo/:page',
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