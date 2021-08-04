<template>
    <div class="col-md-4 left-col">
        <div class="row row-1 py-4 pe-3 ps-4">
            <div class="col-md-12">
                <div class="row mt-2 inner-2">
                    <input type="text" class="bg-white inner-1 py-2 ps-4 w-100" placeholder="園児検索">
                </div>

                <div class="row mt-3 inner-2">
                    <select class="form-select ps-4 w-100">
                        <option>全体</option>
                        <option value="1">体験保育</option>
                        <option value="2">月極保育</option>
                        <option value="3">園見学</option>
                        <option value="4">退園</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row row-2 py-2 px-3 my-2">
            <div class="col-md-9">
                <p class="m-0">園児一覧</p>
            </div>
            <div class="col-md-3 pe-1">
                <select class="form-select text-xs p-2">
                    <option>名前順</option>
                    <option value="1">年齢順</option>
                    <option value="2">新着順</option>
                </select>
            </div>
        </div>

        <!-- nav items -->
        <div v-for="i in 12" :key="i">
            <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1 fw-bold">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
        </div>
        <!-- /nav items -->

        <!-- pagination -->
        <div class="mb-2">
            <Pagination :numPages=3></Pagination>
        </div>
        <!-- /pagination -->

    </div>
</template>

<script>
    // imports
    import Pagination from "../../../components/Pagination"

    export default {
        name: "LeftSidebar",
        components: {
            Pagination
        }
    }
</script>