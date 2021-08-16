<template>
    <div class="favorite-garden-parent">

        <!-- secondary header -->
        <SecondaryHeader :navActive="navActive"></SecondaryHeader>
        <!-- /secondary header -->

        <div class="mt-1">

            <!-- left sidebar -->
            <LeftSidebar :sideNavActive="sideNavActive"></LeftSidebar>
            <!-- /left sidebar -->

            <!-- page content -->
            <div class="container-fluid mb-5 mt-4">
                <div class="hr-title fw-bold text-2xl">お子さま情報</div>
            </div>
            <!-- /page content -->
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
                sideNavActive: 3
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

<style scoped lang="scss">

</style>