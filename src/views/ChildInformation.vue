<template>
    <div class="favorite-garden-parent">

        <!-- secondary header -->
        <SecondaryHeader :navActive="navActive"></SecondaryHeader>
        <!-- /secondary header -->

        <div class="py-2 overflow-hidden">

            <!-- left sidebar -->
            <left-sidebar :sideNavActive="sideNavActive" />
            <!-- /left sidebar -->

            <!-- right column -->
            <div class="float-start right-column">
                <div class="hr-title fw-bold text-2xl">お子さま情報</div>

                <!-- tabs -->
                <div class="custom-tab-pill-two">
                    <div class="px-0 tabs">
                        <!-- * link * -->
                        <a class="nav-item border" :class="[ activeTab === 1 ? 'active' : '' ]"> 第一子</a>
                        <a class="nav-item border" :class="[ activeTab === 2 ? 'active' : '' ]"> 第二子</a>
                        <a class="add" :class="[ activeTab === 3 ? 'active' : '' ]"> ＋</a>
                        <a> </a>
                    </div>
                </div>
                <!-- /tabs -->

                <!-- tab content -->
                <div v-if="activeTab===1" class="first-child border bg-light p-2">
                    <div class="bg-white p-3">
                        <div>名前 (ふりがな)</div>
                        <div class="ms-3 mt-3">
                            田中 空（たなか そら）
                        </div>
                    </div>
                </div>
                <!-- /tab content -->
            </div>
            <!-- /right column -->

        </div>


    </div>
</template>

<script>
    // imports
    import router from "../router/index"
    import SecondaryHeader from "../components/partials/SecondaryHeader"
    import LeftSidebar from "../components/LeftSidebar"

    export default {
        name: "ChildInformation",
        data() {
            return {
                navActive: "setting",
                sideNavActive: 3,
                activeTab: 1,
            }
        },
        components: {
            SecondaryHeader,
            LeftSidebar
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
    };
</script>