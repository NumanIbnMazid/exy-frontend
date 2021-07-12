<!-- Contributor: Numan Ibn Mazid || http://github.com/NumanIbnMazid || numanibnmazid@gmail.com -->

<template>
  <div class="cocoro-parent-div">
    <div class="cocoro-container">
      <div class="row">
        <!-- cocoro page title -->
        <div class="cocoro-page-title mb-5">
          <div class="title-img-holder">
            <img
              src="../../assets/images/cocoro/cocoro.png"
              alt="COCORO"
              class="cocoro-img"
            />
          </div>
          <div class="title-txt-holder mt-3">
            <span class="wrapped-word fw-bold fst-normal text-start ms-5">
              COCORO HOIKUEN 弁天町園
            </span>
          </div>
        </div>
        <!-- /cocoro page title -->

        <!-- section 1 -->
        <section class="cocoro-section">
          <div class="section-header m-3">
            <span class="fw-bold">ご利用目的</span>
          </div>
          <hr>

          <!-- section 1 tabs -->
          <ul class="nav nav-pills mt-4 ms-5 me-5 cocoro-section-1-tab-pills row" id="pills-tab" role="tablist">
            <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 pills-li" role="presentation">
              <button class="nav-link active" id="pills-experienced-based-tab" data-bs-toggle="pill" data-bs-target="#pills-experienced-based" type="button" role="tab" aria-controls="pills-experienced-based" aria-selected="true">
                <span class="pills-text">体験保育</span>
              </button>
            </li>
            <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 pills-li" role="presentation">
              <button class="nav-link" id="pills-monthly-childcare-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly-childcare" type="button" role="tab" aria-controls="pills-monthly-childcare" aria-selected="false">
                <span class="pills-text">月極保育</span>
              </button>
            </li>
            <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 pills-li" role="presentation">
              <button class="nav-link" id="pills-garden-tour-tab" data-bs-toggle="pill" data-bs-target="#pills-garden-tour" type="button" role="tab" aria-controls="pills-garden-tour" aria-selected="false">
                <span class="pills-text">園見学</span>
              </button>
            </li>
          </ul>
          <div class="tab-content ms-3 me-3 mb-4 cocoro-section-1-tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active pills-experienced-based" id="pills-experienced-based" role="tabpanel" aria-labelledby="pills-experienced-based-tab">
              <div class="tab-content-holder">

                <!-- date and time -->
                <div class="date-time-section mt-3">
                  <div class="vertical-line">
                    <span class="ms-4 fw-bold">日時を指定</span>
                  </div>
                  <div class="row custom-form-group m-2">
                    <div class="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12 mt-4 form-label">
                    日 時 
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12 mt-4">
                      <date-picker
                          v-model="date"
                          valueType="format"
                          :disabled-date="disabledBeforeToday"
                          placeholder="日付"
                      ></date-picker>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                      <input type="text" name="" id="start-time" class="form-control start-time-input" placeholder="開始時間">
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4 end-time-holder">
                      <span class="end-time-spacer">〜</span>
                      <span class="end-time-input-holder">
                        <input type="text" name="" id="end-time" class="form-control end-time-input" placeholder="終了時間">
                      </span>
                    </div>
                  </div>
                </div>
                <!-- /date and time -->

                <!-- plan -->
                <div class="plan-section mt-5 mb-2">
                  <div class="vertical-line">
                    <span class="ms-4 fw-bold">プラン</span>
                  </div>
                  <div class="row custom-form-group m-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                      <label class="form-check-label" for="flexCheckChecked">
                        体験保育 <span class="ms-3 me-3">|</span> ０歳児
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        体験保育 <span class="ms-3 me-3">|</span> １歳児以上
                      </label>
                    </div>
                  </div>
                </div>
                <!-- /plan -->

                <!-- option -->
                <div class="plan-section mt-5 mb-2">
                  <div class="vertical-line">
                    <span class="ms-4 fw-bold">オプション</span>
                  </div>
                  <div class="row custom-form-group m-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="check1" checked>
                      <label class="form-check-label" for="flexCheckChecked">
                        その他経費 <span class="ms-3 me-3">|</span> お給食
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="check2">
                      <label class="form-check-label" for="flexCheckDefault">
                        その他経費 <span class="ms-3 me-3">|</span> おやつ
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="check3">
                      <label class="form-check-label" for="flexCheckDefault">
                        その他経費 <span class="ms-3 me-3">|</span> ミルク
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="check4">
                      <label class="form-check-label" for="flexCheckDefault">
                        その他経費 <span class="ms-3 me-3">|</span> 手ぶらプラン
                      </label>
                    </div>
                  </div>
                </div>
                <!-- /option -->

              </div>
            </div>
            <div class="tab-pane fade pills-monthly-childcare" id="pills-monthly-childcare" role="tabpanel" aria-labelledby="pills-monthly-childcare-tab">
              <div class="tab-content-holder">
                Monthly
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </div>
            <div class="tab-pane fade pills-garden-tour" id="pills-garden-tour" role="tabpanel" aria-labelledby="pills-garden-tour-tab">
              <div class="tab-content-holder">
                Garden Tour
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
          <!-- /section 1 tabs -->

        </section>
        <!-- /section 1 -->


        <!-- section 2 -->
        <section class="cocoro-section mt-5 section-2">
          <div class="section-header m-3">
            <span class="fw-bold">利用者登録</span>
          </div>
          <hr>

          <div class="ms-3 me-3 mb-4 content-box">
            <div class="content-holder">

              <!-- user registration -->
              <div class="user-registration-section">
                <div class="row custom-form-group ms-2 me-2">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="check1" checked>
                    <label class="form-check-label fw-lighter" for="flexCheckChecked">
                      <span class="ms-4 me-5">
                        <span>田中</span>
                        <span class="ms-2">海</span>
                      </span>
                      <span class="ms-5">
                        <span>令和2年2月25日生</span>
                        <span class="ms-3">(満1歳)</span>
                        <span class="ms-4">男児</span>
                        <span class="ms-3">アレルギー疾患 : 有</span>
                      </span>
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="check2" disabled>
                    <label class="form-check-label" for="flexCheckDefault">
                      <span class="ms-4 me-5">
                        <span>田中</span>
                        <span class="ms-2">陸</span>
                      </span>
                      <span class="ms-5">
                        <span>令和3年2月25日生</span>
                        <span class="ms-3">(満0歳)</span>
                        <span class="ms-4">男児</span>
                        <span class="ms-3">アレルギー疾患 : 有</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <!-- /user registration -->
            </div>
          </div>
        </section>
        <!-- /section 2 -->


        <!-- section 3 -->
        <section class="cocoro-section mt-5 section-3">
          <div class="section-header m-3">
            <span class="fw-bold">保護者登録</span>
          </div>
          <hr>

          <div class="ms-3 me-3 mb-4 content-box">
            <div class="content-holder">

              <!-- parent registration -->
              <div class="parent-registration-section">
                <div class="vertical-line">
                  <span class="ms-4 fw-bold">送迎者登録</span>
                </div>
                <div class="row custom-form-group mt-4 me-2">
                  <span class="fw-lighter">
                    <span class="ms-4">1.</span>
                    <span class="ms-4">
                      <span>田中</span>
                      <span class="ms-3 me-5">愛</span>
                      <span class="ms-4 me-5">族柄：母</span>
                      <span class="ms-3">携帯番号：090-0000-0000</span>
                    </span>
                  </span>
                  <span class="fw-lighter">
                    <span class="ms-4">2.</span>
                    <span class="ms-4">
                      <span>田中</span>
                      <span class="ms-3 me-5">仁</span>
                      <span class="ms-4 me-5">族柄：父</span>
                      <span class="ms-3">携帯番号：080-1111-1111</span>
                    </span>
                  </span>
                </div>
              </div>
              <!-- /parent registration -->

              <!-- emergency contact -->
              <div class="emergency-contact-section mt-5">
                <div class="vertical-line">
                  <span class="ms-4 fw-bold">緊急連絡先追加</span>
                </div>
                <div class="row custom-form-group mt-4 me-2">
                  <span class="fw-lighter">
                    <span class="ms-4">+ 連絡先を追加する</span>
                  </span>
                </div>
              </div>
              <!-- /emergency contact -->
            </div>
          </div>
        </section>
        <!-- /section 3 -->


        <!-- section 4 -->
        <section class="cocoro-section mt-5 section-4">
          <div class="section-header m-3">
            <span class="fw-bold">お支払い方法</span>
          </div>
          <hr>

          <div class="ms-3 me-3 mb-4 content-box">
            <div class="content-holder">

              <!-- payment method -->
              <div class="payment-method-section">
                <div class="row custom-form-group ms-2 me-2">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    クレジット支払い
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <button class="cocoro-btn">
                      お支払い方法変更
                    </button>
                  </div>
                </div>
              </div>
              <!-- /payment method -->
            </div>
          </div>

        </section>
        <!-- /section 4 -->


        <!-- section 5 -->
        <section class="cocoro-section mt-5 section-5">
          <div class="section-header m-3">
            <span class="fw-bold">ご利用前アンケート</span>
          </div>
          <hr>

          <div class="ms-3 me-3 mb-4 content-box">
            <div class="content-holder">

              <!-- pre-use questionnaire -->
              <div class="payment-method-section">
                <div class="row custom-form-group ms-2 me-2">
                  <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <i class="fas fa-play"></i>
                    <span>アレルギー</span>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <button class="cocoro-btn">
                      お支払い方法変更
                    </button>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <button class="cocoro-btn">
                      お支払い方法変更
                    </button>
                  </div>
                </div>
              </div>
              <!-- /pre-use questionnaire -->
            </div>
          </div>

        </section>
        <!-- /section 5 -->


      </div>
      <!-- test text -->
      <h1>Test TEXT</h1>
    </div>
  </div>
</template>

<script>

// imports
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ja';

export default {
  name: "CocoroNurserySchool",
  data() {
    return {
      date: '',
    }
  },
  components: { DatePicker },
  methods: {
    disabledBeforeToday(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return date < today;
    }
  },
};
</script>

<style scoped>
</style>