import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ("../views/Home"),
    },
    {
        path: "/usage-flow",
        name: "UsageFlow",
        component: () =>
            import ("../views/UsageFlow"),
    },
    {
        path: "/what-is-kigaruni-hoiku",
        name: "KigaruniHoiku",
        component: () =>
            import ("../views/KigaruniHoiku"),
    },
    {
        path: "/find-nursery-school",
        name: "FindNurserySchool",
        component: () =>
            import ("../views/FindNurserySchool"),
    },
    {
        path: "",
        component: () =>
            import ("../views/faqs/Main"),
        children: [{
                path: "/faqs",
                name: "Faqs",
                component: () =>
                    import ("../views/faqs/Index"),
            },
            {
                path: "/faqs/category",
                name: "Faqs.Category",
                component: () =>
                    import ("../views/faqs/Category"),
            },
            {
                path: "/faqs/detail",
                name: "Faqs.Detail",
                component: () =>
                    import ("../views/faqs/Detail"),
            },
        ],
    },
    {
        path: "/terms/:active?",
        name: "terms",
        component: () =>
            import ("../views/terms/Index"),
    },
    {
        path: "/my-page",
        name: "MyPage",
        component: () =>
            import ("../views/MyPage"),
    },
    {
        path: "/my-page/home",
        name: "Mypage.Home",
        component: () =>
            import ("../views/myPage/Home"),
    },
    {
        path: "/my-page/talk",
        name: "Talk",
        component: () =>
            import ("../views/myPage/Talk"),
    },
    {
        path: "/my-page/talk-reservation",
        name: "TalkResarvation",
        component: () =>
            import ("../views/myPage/TalkReservation"),
    },
    {
        path: "/my-page/talk-reservation-confirm",
        name: "TalkResarvationConfirm",
        component: () =>
            import ("../views/myPage/TalkReservationConfirm"),
    },
    {
        path: "/my-page/talk-reservation-Change",
        name: "TalkResarvationChange",
        component: () =>
            import ("../views/myPage/TalkReservationChange"),
    },
    {
        path: "/my-page/notice",
        name: "Notice",
        component: () =>
            import ("../views/myPage/Notice"),
    },
    {
        path: "/my-page/reservation",
        name: "Reservation",
        component: () =>
            import ("../views/myPage/Reservation"),
    },
    {
        path: "/contact-us",
        name: "ContactUs",
        component: () =>
            import ("../views/contact/Index"),
    },
    {
        path: "/inquiry-form",
        name: "InquiryForm",
        component: () =>
            import ("../views/contact/InquiryForm"),
    },
    {
        path: "/considering-supporter-garden",
        name: "ConsideringSupporterGarden",
        component: () =>
            import ("../views/contact/ConsideringSupporterGarden"),
    },
    {
        path: "/confirmation-of-input-contents",
        name: "ConfirmationOfInputContents",
        component: () =>
            import ("../views/contact/ConfirmationOfInputContents"),
    },
    {
        path: "/inquiry-complete",
        name: "InquiryComplete",
        component: () =>
            import ("../views/contact/InquiryComplete"),
    },
    {
        path: "/search",
        name: "Search",
        component: () =>
            import ("../components/search/Search"),
    },
    {
        path: "/search-from-the-area",
        name: "SearchFromArea",
        component: () =>
            import ("../views/SearchFromArea"),
    },
    {
        path: "/guardian-characteristics-detail",
        name: "CharacteristicsDetail",
        component: () =>
            import ("../views/guardian/CharacteristicsDetail"),
    },
    {
        path: "/proceed-to-reservation",
        name: "ProceedToReservation",
        component: () =>
            import ("../views/cocoro-nursery-school/index"),
    },
    {
        path: "/monthly-child-care",
        name: "MonthlyChildCare",
        component: () =>
            import ("../views/cocoro-nursery-school/MonthlyChildCare"),
    },
    {
        path: "/garden-tour",
        name: "GardenTour",
        component: () =>
            import ("../views/cocoro-nursery-school/GardenTour"),
    },
    {
        path: "/user-registration-details",
        name: "UserRegistrationDetails",
        component: () =>
            import ("../views/cocoro-nursery-school/UserRegistrationDetails"),
    },
    {
        path: "/child-care-registration-details",
        name: "ChildCareRegistrationDetails",
        component: () =>
            import ("../views/cocoro-nursery-school/ChildCareRegistrationDetails"),
    },
    {
        path: "/monthly-child-care-registration-details",
        name: "MonthlyChildCareRegistrationDetails",
        component: () =>
            import (
                "../views/cocoro-nursery-school/MonthlyChildCareRegistrationDetails"
            ),
    },
    {
        path: "/reservation-content",
        name: "ReservationContent",
        component: () =>
            import ("../views/cocoro-nursery-school/ReservationContents"),
    },
    {
        path: "/tour-content",
        name: "TourContent",
        component: () =>
            import ("../views/cocoro-nursery-school/TourContent"),
    },
    {
        path: "/first-garden-content",
        name: "FirstGardenContent",
        component: () =>
            import ("../views/cocoro-nursery-school/FirstGardenContent"),
    },
    {
        path: "/child-care-registration-details-content",
        name: "ChildCareRegistrationDetailsContent",
        component: () =>
            import (
                "../views/cocoro-nursery-school/ChildCareRegistrationDetailsContent"
            ),
    },
    {
        path: "/reservation-content-pre",
        name: "PreReservationContent",
        component: () =>
            import ("../views/cocoro-nursery-school/PreReservationContent"),
    },
    {
        path: "/reservation-content-secondary",
        name: "ReservationContentSecondary",
        component: () =>
            import ("../views/cocoro-nursery-school/ReservationContentSecondary"),
    },
    {
        path: "/payment-method-selection",
        name: "PaymentMethodSelection",
        component: () =>
            import ("../views/cocoro-nursery-school/PaymentMethodSelection"),
    },
    {
        path: "/thoughts-of-kigarni-hoik",
        name: "ThoughtsofKigarniHoik",
        component: () =>
            import ("../views/ThoughtsofKigarniHoik"),
    },
    {
        path: "/what-is-kigarni-hoiku-point",
        name: "WhatIsKigarniHoikuPoint",
        component: () =>
            import ("../views/WhatIsKigarniHoikuPoint"),
    },
    {
        path: "/about-payment-method",
        name: "AboutPaymentMethod",
        component: () =>
            import ("../views/AboutPaymentMethod"),
    },
    {
        path: "/how-to-use-kigarni-hoik",
        name: "HowToUseKigarniHoik",
        component: () =>
            import ("../views/HowToUseKigarniHoik"),
    },
    {
        path: "/child-rearing-information-bulletin-board",
        name: "BulletinBoard",
        component: () =>
            import ("../views/bulletin-board/Index"),
    },
    {
        path: "/create-review-form",
        name: "ReviewCreateForm",
        component: () =>
            import ("../views/review/ReviewCreateForm"),
    },
    {
        path: "/temporary-childcare",
        name: "TemporaryChildcare",
        component: () =>
            import ("../views/bulletin-board/TemporaryChildcare"),
    },
    {
        path: "/child-rearing-information-bulletin-board-details-of-child-rearing-information",
        name: "Bulletin.Details",
        component: () =>
            import ("../views/bulletin-board/Details"),
    },
    {
        path: "/child-rearing-consultation-corner",
        name: "ConsultationCorner",
        component: () =>
            import ("../views/consultation-corner/Index"),
    },
    {
        path: "/life-protection-information",
        name: "lifeProtectionInformation",
        component: () =>
            import ("../views/protection-information/Index"),
    },
    {
        path: "/about-kindergarten-hunting",
        name: "AboutKindergartenHunting",
        component: () =>
            import ("../views/protection-information/AboutKindergartenHunting"),
    },
    {
        path: "/article-details",
        name: "Article.Details",
        component: () =>
            import ("../views/protection-information/Detail"),
    },
    {
        path: "/guide/:active?",
        name: "guide",
        component: () =>
            import ("../views/book-nursery-school/Main"),
    },
    {
        path: "/to-all-users-guidelines",
        name: "AllUsersGuidelines",
        component: () =>
            import ("../views/AllUsersGuidelines"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../components/auth/Login"),
    },
    {
        path: "/registration",
        name: "Registration",
        component: () =>
            import ("../components/auth/Registration"),
    },
    {
        path: "/registration-otp",
        name: "RegistrationOtp",
        component: () =>
            import ("../components/auth/RegistrationOtp"),
    },
    {
        path: "/profile-info",
        name: "ProfileInfo",
        component: () =>
            import ("../components/auth/registration/ProfileInfo"),
    },
    {
        path: "/profile-info-two",
        name: "ProfileInfoTwo",
        component: () =>
            import ("../components/auth/registration/ProfileInfoTwo"),
    },
    {
        path: "/profile-info-children",
        name: "ProfileInfoChildren",
        component: () =>
            import ("../components/auth/registration/ProfileInfoChildren"),
    },
    {
        path: "/verify-registration-details",
        name: "VerifyRegistrationDetails",
        component: () =>
            import ("../components/auth/registration/VerifyRegistrationDetails"),
    },
    {
        path: "/reset-password",
        name: "ResetPassword",
        component: () =>
            import ("../components/auth/ResetPassword"),
    },
    {
        path: "/password-reset",
        name: "PasswordReset",
        component: () =>
            import ("../components/auth/PasswordReset"),
    },
    {
        path: "/conform-email",
        name: "ConformEmail",
        component: () =>
            import ("../components/auth/ConformEmail"),
    },
    {
        path: "/set-password",
        name: "SetPassword",
        component: () =>
            import ("../components/auth/SetPassword"),
    },
    {
        path: "/password-reset-success",
        name: "PasswordResetSuccess",
        component: () =>
            import ("../components/auth/PasswordResetSuccess"),
    },
    {
        path: "/todo/:page",
        name: "todo",
        component: () =>
            import ("../views/todo"),
    },
    {
        path: '/admin/my-page',
        name: 'Admin.MyPage',
        component: () => import("../views/scladmin/MyPage")
    },
    {
        path: '/admin/children-info/experience-childcare',
        name: 'ChildrenInfo.ExperienceChildcare',
        component: () => import("../views/scladmin/childrenInformation/ExperienceChildcare")
    },
    {
        path: '/admin/children-info/completion-report',
        name: 'ChildrenInfo.CompletionReport',
        component: () => import("../views/scladmin/childrenInformation/CompletionReport")
    },
    {
        path: '/admin/children-info/experience-childcare-completion-report',
        name: 'ChildrenInfo.ExperienceCompletionReport',
        component: () => import("../views/scladmin/childrenInformation/ExperienceCompletionReport")
    },
    {
        path: '/admin/children-info/monthly-childcare-first-month',
        name: 'ChildrenInfo.MonthlyChildcareFirstMonth',
        component: () => import("../views/scladmin/childrenInformation/MonthlyChildcareFirstMonth")
    },
    {
        path: "/admin/plan-page",
        name: "Plan.page",
        component: () =>
            import ("../views/scladmin/PlanPage.vue"),
    },
    {
        path: "/admin/plan-page-record-3",
        name: "Plan.page3",
        component: () =>
            import ("../views/scladmin/PlanPageRecord3.vue"),
    },
    {
        path: "/admin/physical-measurement",
        name: "Admin.PhysicalMeasurement",
        component: () =>
            import ("../views/scladmin/PhysicalMeasurement"),
    },
    {
        path: "/admin/childcare-information",
        name: "Admin.ChildcareInformation",
        component: () =>
            import ("../views/scladmin/ChildcareInformation/ChildcareInformation"),
    },
    {
        path: "*",
        redirect: "/pages/error-404",
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {
            x: 0,
            y: 0,
        };
    },

    routes,
});

export default router;