<template>
    <div class="tab-content ms-3 me-3 mb-4 custom-tab-content" id="pills-tabContent">
        <!-- *** Tab 1 *** -->
        <div class="tab-pane fade sectionOne mt-5" :class="dataActiveTab === 1 ? 'show active' : ''" id="sectionOne" role="tabpanel"
            aria-labelledby="sectionOne-tab">
            <div class="tab-content-holder">
                
                <!-- section 1 -->
                
                <div>
                    <!-- item -->
                    <div>
                        <div v-for="i in 5" :key="i">
                            <div class="border border-1 rounded-3 pt-3 pb-3 ps-4 pe-4 shadow" :class="i !== 1 ? 'mt-4':''" @click="handleTabOneSectionOneRoutes(i)">
                                <div class="row border border-1 rounded-3 p-3">
                                    <div class="col-xl-11 col-lg-10 col-md-10 col-sm-9 col-8">
                                        <div>
                                            <u class="fw-bold">2歳の息子がいます</u>
                                        </div>
                                        <div class="mt-2">
                                            <p>
                                                産まれてから2回しか風邪を引いたことがありません。児童館や公園等は１週間に一度のペースで行っていますが周りに子供のいる友達が居ないので子供同士で遊ばせるということは、ほとんど無いです。児童館に子供はいますがうちの子が人…
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-4">
                                        <div class="img-center">
                                            <div class="container">
                                                <img src="../../assets/images/icon/comment-alt-original.png" alt="EXY">
                                                <div class="img-text">
                                                    5
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6 text-start">
                                        <span>2021/03/09</span>
                                        <span class="ms-3">15:11</span>
                                        <span class="ms-3" v-if="i < 5 && i > 2">
                                            <span class="badge rounded-circle kigaruni-yellow-background">p</span>
                                            <span class="ms-1 kigaruni-yellow">100pt</span>
                                        </span>
                                        <span class="ms-3 rounded-pill bg-secondary text-white ps-3 pe-3 pt-1 pb-1" v-if="i === 5">
                                            <small>回答リクエスト</small>
                                        </span>
                                        <span class="ms-3 rounded-pill bg-white text-dark ps-4 pe-4 pt-1 pb-1 border border-1 border-secondary" v-if="i === 5">
                                            <small>匿名投稿</small>
                                        </span>
                                    </div>
                                    <div class="col-6 text-end">
                                        <span><u>＃回答受付中</u></span>
                                        <span class="ms-3"><u>＃病気・健康</u></span>
                                        <span class="ms-3"><u>＃シンママ・シンパパ</u></span>
                                        <span class="ms-3"><u>＃2歳児</u></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /item -->

                    <!-- pagination -->
                    <div class="text-center mt-5 mb-5">
                        <span v-for="i in 5" :key="i" class="m-4" :class="i === 1 ? 'kigaruni-green-background p-3 rounded-circle text-white':''">{{ i }}</span>
                        <span>...</span>
                        <span class="ms-2 text-2xl">></span>
                    </div>
                    <!-- /pagination -->
                </div>

                <!-- /section 1 -->

                <!-- section spacer -->
                <div class="p-4 bg-light mt-5 mb-5"></div>
                <!-- / section spacer -->

                <!-- section 2 -->
                <div>
                    <p class="fw-bold text-xl">自分の子育て相談アンサー</p>
                    <!-- item -->
                    <div class="mt-5">
                        <div v-for="i in 5" :key="i">
                            <div class="border border-1 rounded-3 pb-3 ps-3 pe-3 shadow" :class="i !== 1 ? 'mt-4':''" @click="handleTabOneSectionTwoRoutes(i)">
                                <div class="text-end overlay-badge">
                                    <span class="bg-cb3a82 ps-5 pe-5 pt-2 pb-2 text-lg text-white">回答受付中</span>
                                </div>
                                <div class="border border-1 rounded-3 p-3 mt-3">
                                    <div>
                                        <u class="fw-bold">保育士をしていました。</u>
                                    </div>
                                    <div class="mt-2">
                                        <p>
                                            お家大好きなんでしょうね。質問者様は大変だと思いますが、中には2年以上朝泣いてくる子がいました！３ヶ月経ったころということも、初めに泣く子や慣れてきた頃泣く子など、様々なので特に決定的な出来事があったとかでない限り普通の行き渋りかな、と思…
                                        </p>
                                    </div>
                                </div>
                                <div class="row mt-2 ps-2 pe-3">
                                    <div class="col-6 text-start">
                                        <span>2021/03/09</span>
                                        <span class="ms-3">15:11</span>
                                    </div>
                                    <div class="col-6 text-end" v-if="i === 1">
                                        <span><u>＃回答受付中</u></span>
                                        <span class="ms-3"><u>＃保育関連</u></span>
                                        <span class="ms-3"><u>＃働くママ・パパ</u></span>
                                        <span class="ms-3"><u>＃5歳児</u></span>
                                        <span class="ms-3"><u>＃女の子</u></span>
                                        <span class="ms-3 fa fa-comment text-white fa-bordered"></span>
                                        <span class="ms-1">5</span>
                                    </div>
                                    <div class="col-6 text-end" v-else-if="i === 2">
                                        <span><u>＃</u></span>
                                        <span class="ms-3"><u>＃お悩み聞いて！</u></span>
                                        <span class="ms-3"><u>＃旦那・家族</u></span>
                                        <span class="ms-3"><u>＃働くママ</u></span>
                                        <span class="ms-3"><u>＃5歳児</u></span>
                                        <span class="ms-3 fa fa-comment text-white fa-bordered"></span>
                                        <span class="ms-1">5</span>
                                    </div>
                                    <div class="col-6 text-end" v-else>
                                        <span><u>＃解決済み</u></span>
                                        <span class="ms-3"><u>＃お悩み聞いて！</u></span>
                                        <span class="ms-3"><u>＃旦那・家族</u></span>
                                        <span class="ms-3"><u>＃働くママ</u></span>
                                        <span class="ms-3"><u>＃5歳児</u></span>
                                        <span class="ms-3 fa fa-comment text-white fa-bordered"></span>
                                        <span class="ms-1">5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /item -->

                    <!-- pagination -->
                    <div class="text-center mt-5 mb-5">
                        <span class="m-4 kigaruni-green-background p-3 rounded-circle text-white">1</span>
                    </div>
                    <!-- /pagination -->
                </div>
                <!-- /section 2 -->

                <!-- section 3 -->
                <div class="bg-light p-5">
                    <div class="row border border-secondary border-1 bg-white ps-2 pe-2 pt-4 pb-4">
                        <div class="col-lg-6 col-md-6 col-12 text-start">
                            <span>あなたの子育てに関する疑問や悩みを質問してみましょう！</span>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12 text-end">
                            <router-link :to="{name: 'TalkAboutChildRearing'}" class="border border-secondary border-1 ps-5 pe-5 pt-2 pb-2 bg-white">
                                <span class="ps-5 pe-5">相談する</span>
                            </router-link>
                        </div>
                    </div>

                    <router-link :to="{name: 'ConsultationCorner'}">
                        <div class="mt-5 crossed border border-secondary border-1 bg-white p-5 text-center">
                            <span>他のママの疑問や悩みをみてみる</span>
                        </div>
                    </router-link>
                </div>
                <!-- /section 3 -->
            </div>
        </div>
        <!-- *** /Tab 1 *** -->

        <!-- *** Tab 2 *** -->
        <div class="tab-pane fade sectionTwo mt-5" :class="dataActiveTab === 2 ? 'show active' : ''" id="sectionTwo" role="tabpanel"
            aria-labelledby="sectionTwo-tab">
            <div class="tab-content-holder">
                
                <!-- section 1 -->
                
                <div>
                    <!-- item -->
                    <div>
                        <div v-for="i in 5" :key="i">
                            <router-link :to="{name: 'todo', params: { page: 126 } }">
                                <div class="border border-1 rounded-3 pt-3 pb-3 ps-4 pe-4 shadow" :class="i !== 1 ? 'mt-4':''">
                                    <div class="row border border-1 rounded-3 p-3">
                                        <div class="col-xl-11 col-lg-10 col-md-10 col-sm-9 col-8">
                                            <div>
                                                <u class="fw-bold">2歳の息子がいます</u>
                                            </div>
                                            <div class="mt-2">
                                                <p>
                                                    産まれてから2回しか風邪を引いたことがありません。児童館や公園等は１週間に一度のペースで行っていますが周りに子供のいる友達が居ないので子供同士で遊ばせるということは、ほとんど無いです。児童館に子供はいますがうちの子が人…
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-4">
                                            <div class="img-center">
                                                <div class="container">
                                                    <img src="../../assets/images/icon/comment-alt-original.png" alt="EXY">
                                                    <div class="img-text">
                                                        5
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-6 text-start">
                                            <span>2021/03/09</span>
                                            <span class="ms-3">15:11</span>
                                        </div>
                                        <div class="col-6 text-end">
                                            <span><u>＃解決済み</u></span>
                                            <span class="ms-3"><u>＃病気・健康</u></span>
                                            <span class="ms-3"><u>＃シンママ・シンパパ</u></span>
                                            <span class="ms-3"><u>＃2歳児</u></span>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <!-- /item -->

                    <!-- pagination -->
                    <div class="text-center mt-5 mb-5">
                        <span v-for="i in 5" :key="i" class="m-4" :class="i === 1 ? 'kigaruni-green-background p-3 rounded-circle text-white':''">{{ i }}</span>
                        <span>...</span>
                        <span class="ms-2 text-2xl">></span>
                    </div>
                    <!-- /pagination -->
                </div>

                <!-- /section 1 -->

                <!-- section spacer -->
                <div class="p-4 bg-light mt-5 mb-5"></div>
                <!-- / section spacer -->

                <!-- section 2 -->
                <div>
                    <p class="fw-bold text-xl">自分の子育て相談アンサー</p>
                    <!-- item -->
                    <div class="mt-5">
                        <div v-for="i in 5" :key="i">
                            <div class="border border-1 rounded-3 pb-3 ps-3 pe-3 shadow" :class="i !== 1 ? 'mt-4':''" @click="handleTabOneSectionTwoRoutes(i)">
                                <div class="text-end overlay-badge">
                                    <span class="bg-cb3a82 ps-5 pe-5 pt-2 pb-2 text-lg text-white">回答受付中</span>
                                </div>
                                <div class="border border-1 rounded-3 p-3 mt-3">
                                    <div>
                                        <u class="fw-bold">保育士をしていました。</u>
                                    </div>
                                    <div class="mt-2">
                                        <p>
                                            お家大好きなんでしょうね。質問者様は大変だと思いますが、中には2年以上朝泣いてくる子がいました！３ヶ月経ったころということも、初めに泣く子や慣れてきた頃泣く子など、様々なので特に決定的な出来事があったとかでない限り普通の行き渋りかな、と思…
                                        </p>
                                    </div>
                                </div>
                                <div class="row mt-2 ps-2 pe-3">
                                    <div class="col-6 text-start">
                                        <span>2021/03/09</span>
                                        <span class="ms-3">15:11</span>
                                    </div>
                                    <div class="col-6 text-end" v-if="i === 1">
                                        <span><u>＃回答受付中</u></span>
                                        <span class="ms-3"><u>＃保育関連</u></span>
                                        <span class="ms-3"><u>＃働くママ・パパ</u></span>
                                        <span class="ms-3"><u>＃5歳児</u></span>
                                        <span class="ms-3"><u>＃女の子</u></span>
                                        <span class="ms-3 fa fa-comment text-white fa-bordered"></span>
                                        <span class="ms-1">5</span>
                                    </div>
                                    <div class="col-6 text-end" v-else-if="i === 2">
                                        <span><u>＃</u></span>
                                        <span class="ms-3"><u>＃お悩み聞いて！</u></span>
                                        <span class="ms-3"><u>＃旦那・家族</u></span>
                                        <span class="ms-3"><u>＃働くママ</u></span>
                                        <span class="ms-3"><u>＃5歳児</u></span>
                                        <span class="ms-3 fa fa-comment text-white fa-bordered"></span>
                                        <span class="ms-1">5</span>
                                    </div>
                                    <div class="col-6 text-end" v-else>
                                        <span><u>＃解決済み</u></span>
                                        <span class="ms-3"><u>＃お悩み聞いて！</u></span>
                                        <span class="ms-3"><u>＃旦那・家族</u></span>
                                        <span class="ms-3"><u>＃働くママ</u></span>
                                        <span class="ms-3"><u>＃5歳児</u></span>
                                        <span class="ms-3 fa fa-comment text-white fa-bordered"></span>
                                        <span class="ms-1">5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /item -->

                    <!-- pagination -->
                    <div class="text-center mt-5 mb-5">
                        <span class="m-4 kigaruni-green-background p-3 rounded-circle text-white">1</span>
                    </div>
                    <!-- /pagination -->
                </div>
                <!-- /section 2 -->

                <!-- section 3 -->
                <div class="bg-light p-5">
                    <div class="row border border-secondary border-1 bg-white ps-2 pe-2 pt-4 pb-4">
                        <div class="col-lg-6 col-md-6 col-12 text-start">
                            <span>あなたの子育てに関する疑問や悩みを質問してみましょう！</span>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12 text-end">
                            <router-link :to="{name: 'TalkAboutChildRearing'}" class="border border-secondary border-1 ps-5 pe-5 pt-2 pb-2 bg-white">
                                <span class="ps-5 pe-5">相談する</span>
                            </router-link>
                        </div>
                    </div>

                    <router-link :to="{name: 'ConsultationCorner'}">
                        <div class="mt-5 crossed border border-secondary border-1 bg-white p-5 text-center">
                            <span>他のママの疑問や悩みをみてみる</span>
                        </div>
                    </router-link>
                </div>
                <!-- /section 3 -->
            </div>
        </div>
        <!-- *** /Tab 2 *** -->

        <!-- *** Tab 3 *** -->
        <div class="tab-pane fade sectionThree mt-5" :class="dataActiveTab === 3 ? 'show active' : ''" id="sectionThree" role="tabpanel"
            aria-labelledby="sectionThree-tab">
            <div class="tab-content-holder">
                
                <!-- section 1 -->
                
                <div>
                    <!-- item -->
                    <div>
                        <div v-for="i in 5" :key="i">
                            <div class="border border-1 rounded-3 pt-3 pb-3 ps-4 pe-4 shadow" :class="i !== 1 ? 'mt-4':''" @click="handleTabThreeSectionOneRoutes(i)">
                                <div class="row border border-1 rounded-3 p-3">
                                    <div class="col-xl-11 col-lg-10 col-md-10 col-sm-9 col-8">
                                        <div>
                                            <u class="fw-bold">2歳の息子がいます</u>
                                        </div>
                                        <div class="mt-2">
                                            <p>
                                                産まれてから2回しか風邪を引いたことがありません。児童館や公園等は１週間に一度のペースで行っていますが周りに子供のいる友達が居ないので子供同士で遊ばせるということは、ほとんど無いです。児童館に子供はいますがうちの子が人…
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-4">
                                        <div class="img-center">
                                            <div class="container">
                                                <img src="../../assets/images/icon/comment-alt-original.png" alt="EXY">
                                                <div class="img-text">
                                                    5
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6 text-start">
                                        <span>2021/03/09</span>
                                        <span class="ms-3">15:11</span>
                                        <span class="ms-3" v-if="i === 5">
                                            <span class="badge rounded-circle kigaruni-yellow-background">p</span>
                                            <span class="ms-1 kigaruni-yellow">100pt</span>
                                        </span>
                                    </div>
                                    <div class="col-6 text-end">
                                        <span v-if="i === 3 || i === 5"><u>＃回答受付中</u></span>
                                        <span v-else><u>＃解決済み</u></span>
                                        <span class="ms-3"><u>＃病気・健康</u></span>
                                        <span class="ms-3"><u>＃シンママ・シンパパ</u></span>
                                        <span class="ms-3"><u>＃2歳児</u></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /item -->

                    <!-- pagination -->
                    <div class="text-center mt-5 mb-5">
                        <span v-for="i in 5" :key="i" class="m-4" :class="i === 1 ? 'kigaruni-green-background p-3 rounded-circle text-white':''">{{ i }}</span>
                        <span>...</span>
                        <span class="ms-2 text-2xl">></span>
                    </div>
                    <!-- /pagination -->
                </div>

                <!-- /section 1 -->

                <!-- section spacer -->
                <div class="p-4 bg-light mt-5 mb-5"></div>
                <!-- / section spacer -->

                <!-- section 2 -->
                <div>
                    <p class="fw-bold text-xl">自分の子育て相談アンサー</p>
                    <!-- item -->
                    <div class="mt-5">
                        <div v-for="i in 5" :key="i">
                            <div class="border border-1 rounded-3 pb-3 ps-3 pe-3 shadow" :class="i !== 1 ? 'mt-4':''" @click="handleTabOneSectionTwoRoutes(i)">
                                <div class="text-end overlay-badge">
                                    <span class="bg-cb3a82 ps-5 pe-5 pt-2 pb-2 text-lg text-white">回答受付中</span>
                                </div>
                                <div class="border border-1 rounded-3 p-3 mt-3">
                                    <div>
                                        <u class="fw-bold">保育士をしていました。</u>
                                    </div>
                                    <div class="mt-2">
                                        <p>
                                            お家大好きなんでしょうね。質問者様は大変だと思いますが、中には2年以上朝泣いてくる子がいました！３ヶ月経ったころということも、初めに泣く子や慣れてきた頃泣く子など、様々なので特に決定的な出来事があったとかでない限り普通の行き渋りかな、と思…
                                        </p>
                                    </div>
                                </div>
                                <div class="row mt-2 ps-2 pe-3">
                                    <div class="col-6 text-start">
                                        <span>2021/03/09</span>
                                        <span class="ms-3">15:11</span>
                                    </div>
                                    <div class="col-6 text-end" v-if="i === 1">
                                        <span><u>＃回答受付中</u></span>
                                        <span class="ms-3"><u>＃保育関連</u></span>
                                        <span class="ms-3"><u>＃働くママ・パパ</u></span>
                                        <span class="ms-3"><u>＃5歳児</u></span>
                                        <span class="ms-3"><u>＃女の子</u></span>
                                        <span class="ms-3 fa fa-comment text-white fa-bordered"></span>
                                        <span class="ms-1">5</span>
                                    </div>
                                    <div class="col-6 text-end" v-else-if="i === 2">
                                        <span><u>＃</u></span>
                                        <span class="ms-3"><u>＃お悩み聞いて！</u></span>
                                        <span class="ms-3"><u>＃旦那・家族</u></span>
                                        <span class="ms-3"><u>＃働くママ</u></span>
                                        <span class="ms-3"><u>＃5歳児</u></span>
                                        <span class="ms-3 fa fa-comment text-white fa-bordered"></span>
                                        <span class="ms-1">5</span>
                                    </div>
                                    <div class="col-6 text-end" v-else>
                                        <span><u>＃解決済み</u></span>
                                        <span class="ms-3"><u>＃お悩み聞いて！</u></span>
                                        <span class="ms-3"><u>＃旦那・家族</u></span>
                                        <span class="ms-3"><u>＃働くママ</u></span>
                                        <span class="ms-3"><u>＃5歳児</u></span>
                                        <span class="ms-3 fa fa-comment text-white fa-bordered"></span>
                                        <span class="ms-1">5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /item -->

                    <!-- pagination -->
                    <div class="text-center mt-5 mb-5">
                        <span class="m-4 kigaruni-green-background p-3 rounded-circle text-white">1</span>
                    </div>
                    <!-- /pagination -->
                </div>
                <!-- /section 2 -->

                <!-- section 3 -->
                <div class="bg-light p-5">
                    <div class="row border border-secondary border-1 bg-white ps-2 pe-2 pt-4 pb-4">
                        <div class="col-lg-6 col-md-6 col-12 text-start">
                            <span>あなたの子育てに関する疑問や悩みを質問してみましょう！</span>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12 text-end">
                            <router-link :to="{name: 'TalkAboutChildRearing'}" class="border border-secondary border-1 ps-5 pe-5 pt-2 pb-2 bg-white">
                                <span class="ps-5 pe-5">相談する</span>
                            </router-link>
                        </div>
                    </div>

                    <router-link :to="{name: 'ConsultationCorner'}">
                        <div class="mt-5 crossed border border-secondary border-1 bg-white p-5 text-center">
                            <span>他のママの疑問や悩みをみてみる</span>
                        </div>
                    </router-link>
                </div>
                <!-- /section 3 -->
            </div>
        </div>
        <!-- *** Tab /3 *** -->

    </div>
</template>

<script>
    // imports
    import router from "../../router/index"

    export default {
        name: "TabContent",
        props: {
            activeTab: Number,
        },
        data() {
            return {
                dataActiveTab: this.activeTab,
            }
        },
        methods: {
            handleTabOneSectionOneRoutes(i) {
                if (i === 3 || i === 4) {
                    router.push({ name: 'todo', params: { page: 128 } })
                }
                else if (i === 5 ) {
                    router.push({ name: 'todo', params: { page: 129 } })
                } else {
                    router.push({ name: 'todo', params: { page: 127 } })
                }
            },
            handleTabOneSectionTwoRoutes(i) {
                if (i === 1 || i === 2) {
                    router.push({ name: 'ChildRearingConsultationCornerDetails' })
                } else {
                    router.push({ name: 'ChildRearingConsultationCornerDetailResolved' })
                }
            },
            handleTabThreeSectionOneRoutes(i) {
                if (i === 3) {
                    router.push({ name: 'todo', params: { page: 127 } })
                }
                else if (i === 5 ) {
                    router.push({ name: 'todo', params: { page: 128 } })
                } else {
                    router.push({ name: 'todo', params: { page: 126 } })
                }
            },
        },
    };
</script>