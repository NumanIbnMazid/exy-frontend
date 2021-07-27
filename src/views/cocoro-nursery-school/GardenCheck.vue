<template>
    <section class="cocoro-section mt-5">
        <div class="section-header m-3">
            <span class="fw-bold">この園に行くのは初めてですか？</span>
        </div>
        <hr>

        <div class="ms-3 me-3 mb-4 content-box">
            <div class="content-holder">
                <div class="ms-2 me-2">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="" :checked="dataGardenChecked == false">
                        <label class="ms-4">園見学に行ったことがある</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="">
                        <label class="ms-4">直近３ヶ月以内に一時保育で利用したことがある、または利用者の兄弟が利用していた</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="" @click="handleGardenChecked()" :checked="dataGardenChecked == true">
                        <label class="ms-4">初めて利用する</label>
                    </div>
                    <div class="row mt-4 border border-2 p-3">
                        <div class="col-xl-1 mt-4">
                            <i class="fa fa-exclamation-circle text-5xl text-red"></i>
                        </div>
                        <div class="col-xl-11 text-start">
                            <p>
                                月極保育をご予約の際、「初めて園をご利用される方には、体験保育または園見学をお願いしております。
                                キガルニホイクでは、お子さまとご両親が安心して保育園をご利用いただくために【体験保育】のご利用がオススメです。月極保育の入園手続きが可能となります。
                                ※園によっては、利用履歴に関わらず入園前説明会を行う場合がございます。
                            </p>
                        </div>
                    </div>
                    <div class="mt-5" v-if="dataGardenChecked == true">
                        <!-- desired content -->
                        <div>
                            <div class="vertical-line">
                                <span class="ms-4 fw-bold">希望内容をお選びください</span>
                            </div>
                            <div class="row custom-form-group m-4 mt-3">
                                <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                                    <label class="container-checkbox">
                                        <span class="ms-3">体験保育</span>
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                                    <label class="container-checkbox text-muted">
                                        <span>園見学</span>
                                        <input type="checkbox" disabled>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- /desired content -->
                        <!-- date and time -->
                        <div>
                            <div class="vertical-line">
                                <span class="ms-4 fw-bold">希望日をお選びください</span>
                            </div>
                            <div class="row custom-form-group ms-4">
                                <div class="col-xl-1 col-lg-1 col-md-6 col-sm-12 col-12 mt-4 form-label">
                                    <span>日</span>
                                    <span class="ms-3">時</span>
                                </div>
                                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 mt-4">
                                    <input type="text" name="" class="form-control" placeholder="第1希望日">
                                </div>
                                <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12 mt-4">
                                    <date-picker v-model="date" valueType="format" :disabled-date="disabledBeforeToday" placeholder="日付">
                                    </date-picker>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-4 end-time-holder">
                                    <input type="text" name="" class="form-control" placeholder="時間">
                                </div>
                            </div>
                            <div class="row custom-form-group ms-4">
                                <div class="col-xl-1 col-lg-1 col-md-6 col-sm-12 col-12 mt-4 form-label"></div>
                                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 mt-4">
                                    <input type="text" name="" class="form-control" placeholder="第2希望日">
                                </div>
                                <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12 mt-4">
                                    <date-picker v-model="date" valueType="format" :disabled-date="disabledBeforeToday" placeholder="日付">
                                    </date-picker>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-4 end-time-holder">
                                    <input type="text" name="" class="form-control" placeholder="時間">
                                </div>
                            </div>
                        </div>
                        <!-- /date and time -->
                        <!-- visitor registration -->
                        <div class="mt-4 mb-2">
                            <div class="vertical-line">
                                <span class="ms-4 fw-bold">来園者登録</span>
                            </div>
                            <div class="mt-4 ms-4">
                                <span class="text-xl fw-bold ms-4">
                                    来園者登録
                                </span>
                                <div class="ms-5 mt-4">
                                    <p>お子さま</p>
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <label class="container-checkbox">
                                                <span class="ms-4">田中</span>
                                                <span class="ms-3">海</span>
                                                <input type="checkbox" checked>
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                            <span>令和1年2月25日生（満2歳）</span>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                            <span>男児</span>
                                            <span class="ms-3">アレルギー疾患：有</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <label class="container-checkbox text-muted">
                                                <span class="ms-4">田中</span>
                                                <span class="ms-3">海</span>
                                                <input type="checkbox" disabled>
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                            <span class="text-muted">令和2年2月25日生（満１歳）</span>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start text-muted">
                                            <span>男児</span>
                                            <span class="ms-3">アレルギー疾患：有</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ms-5 mt-4">
                                    <p>保護者さま</p>
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <span>1.</span>
                                            <span class="ms-4">田中</span>
                                            <span class="ms-3">愛</span>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                            <span>族柄：母</span>
                                            <span class="ms-5">携帯番号：090-0000-0000</span>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                            <span>×来園者から削除する</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <span>2.</span>
                                            <span class="ms-4">田中</span>
                                            <span class="ms-3">仁</span>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                            <span>族柄：父</span>
                                            <span class="ms-5">携帯番号：080-1111-1111</span>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                            <span>×来園者から削除する</span>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#purposeOfUseModal">
                                            ＋連絡先を追加する
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /visitor registration -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // imports
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import 'vue2-datepicker/locale/ja';

    export default {
        name: "GardenCheck",
        props: {
            gardenChecked: Boolean
        },
        data() {
            return {
                date: '',
                dataGardenChecked: this.gardenChecked
            }
        },
        components: {
            DatePicker,
        },
        methods: {
            disabledBeforeToday(date) {
                const today = new Date()
                today.setHours(0, 0, 0, 0)

                return date < today
            },
            handleGardenChecked() {
                this.dataGardenChecked = !this.dataGardenChecked
                this.$emit('handleGardenChecked', this.dataGardenChecked)
            },
        },
    };
</script>
