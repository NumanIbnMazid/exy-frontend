<template>
    <div class="tab-content ms-3 me-3 mb-4 custom-tab-content" id="pills-tabContent">
        <!-- *** Tab 1 *** -->
        <div class="tab-pane fade sectionOne mt-5" :class="dataActiveTab == 1 ? 'show active' : ''" id="sectionOne" role="tabpanel"
            aria-labelledby="sectionOne-tab">
            <div class="tab-content-holder">
                
                <!-- section 1 -->
                
                <div>
                    <!-- item -->
                    <div>
                        <div v-for="i in 5" :key="i">
                            <div class="border border-1 rounded-3 pt-3 pb-3 ps-4 pe-4 shadow" :class="i != 1 ? 'mt-4':''">
                                <div class="row border border-1 rounded-3 p-3">
                                    <div class="col-11">
                                        <div>
                                            <u class="fw-bold">2歳の息子がいます</u>
                                        </div>
                                        <div class="mt-2">
                                            <p>
                                                産まれてから2回しか風邪を引いたことがありません。児童館や公園等は１週間に一度のペースで行っていますが周りに子供のいる友達が居ないので子供同士で遊ばせるということは、ほとんど無いです。児童館に子供はいますがうちの子が人…
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-1">
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
                        <span v-for="i in 5" :key="i" class="m-4" :class="i == 1 ? 'kigaruni-green-background p-3 rounded-circle text-white':''">{{ i }}</span>
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
                    <h1>Section 2</h1>
                </div>
                <!-- /section 2 -->
            </div>
        </div>
        <!-- *** /Tab 1 *** -->

        <!-- *** Tab 2 *** -->
        <div class="tab-pane fade sectionTwo mt-5" :class="dataActiveTab == 2 ? 'show active' : ''" id="sectionTwo" role="tabpanel"
            aria-labelledby="sectionTwo-tab">
            <div class="tab-content-holder">
                <h1>Tab 2</h1>
            </div>
        </div>
        <!-- *** /Tab 2 *** -->

        <!-- *** Tab 3 *** -->
        <div class="tab-pane fade sectionThree mt-5" :class="dataActiveTab == 3 ? 'show active' : ''" id="sectionThree" role="tabpanel"
            aria-labelledby="sectionThree-tab">
            <div class="tab-content-holder">
                <h1>Tab 3</h1>
            </div>
        </div>
        <!-- *** Tab /3 *** -->

    </div>
</template>

<script>
    // imports

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
        components: {
        },
        methods: {
        },
    };
</script>