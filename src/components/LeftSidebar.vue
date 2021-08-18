<template>
    <div class="float-start left-column left-sidebar">
        <ul class="list-unstyled m-0">
            <li tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer d-flex align-items-center" :class="sideNavActive == 1 ? 'active':''" @click="handleRoute(81)">
                <i class="fa fa-angle-right me-1"></i>
                プロフィール
            </li>
            <li tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer d-flex align-items-center" :class="sideNavActive == 2 ? 'active':''" @click="handleRoute(83)">
                <i class="fa fa-angle-right me-1"></i>
                条件設定
            </li>
            <li tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer d-flex align-items-center" :class="sideNavActive == 3 ? 'active':''" @click="handleRoute('ChildInformation')">
                <i class="fa fa-angle-right me-1"></i>
                お子さま情報
            </li>
            <li tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer d-flex align-items-center" :class="sideNavActive == 4 ? 'active':''" @click="handleRoute('PickupPersonRegistration')">
                <i class="fa fa-angle-right me-1"></i>
                送迎者登録
            </li>
            <li tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer d-flex align-items-center" :class="sideNavActive == 5 ? 'active':''" @click="handleRoute('Security')">
                <i class="fa fa-angle-right me-1"></i>
                セキュリティ
            </li>
            <li tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer d-flex align-items-center" :class="sideNavActive == 6 ? 'active':''" @click="handleRoute('NotificationSetting')">
                <i class="fa fa-angle-right me-1"></i>
                通知
            </li>
        </ul>
    </div>
</template>

<script>
    import router from "../router/index"
    
    export default {
        name: "LeftSidebar",
        props: {
            sideNavActive: Number
        },
        methods: {
            handleRoute(path) {
                if (typeof path === 'number') {
                    router.push({
                        name: 'todo',
                        params: {
                            page: path
                        }
                    })
                } else {
                    if (this.$route.name != path) {
                        router.push({
                            name: path
                        })
                    }
                }
                return
            },
        }
    }
</script>