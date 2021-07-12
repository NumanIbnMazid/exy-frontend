<template>
  <div class="find-nursery-school">

    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-10" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">保育園をさがす</li>
          </ol>
        </nav>
      </div>
    </div>

    <section class="position-relative">
      <img src="../assets/images/ID2266338_m@2x.png" class="img-fluid h-100" alt="EXY">
      <div class="position-absolute top-0 w-100 h-100">
        <div class="container h-100">
          <div class="d-flex justify-content-between align-items-center h-100">
            <div>
              <h3>保育園検索</h3>
            </div>
            <div class="bg-white px-3 py-4 rounded-3">
              <form action="">
                <div class="row g-3 align-items-center mb-3">
                  <div class="col-4">
                    <label for="purposeOfUse" class="col-form-label text-xl">ご利用目的</label>
                  </div>
                  <div class="col-8">
                    <select id="purposeOfUse" class="w-100 border-1 p-10 rounded-0 border-cbcbcb bg-light">
                      <option value="">ご利用目的</option>
                      <option value="">体験保育</option>
                      <option value="">月極保育</option>
                      <option value="">園見学</option>
                    </select>
                  </div>
                </div>
                <div class="row g-3 align-items-center mb-3">
                  <div class="col-4">
                    <label class="col-form-label text-xl">日時</label>
                  </div>
                  <div class="col-8">
                    <date-picker
                        v-model="date"
                        valueType="format"
                        :disabled-date="disabledBeforeToday"
                    ></date-picker>
                  </div>
                </div>
                <div class="row g-3 align-items-center mb-3 justify-content-end">
                  <div class="col-4">
                    <input type="text" class="w-100 border p-10 rounded-0 border-cbcbcb bg-light" placeholder="開始時間">
                  </div>
                  <div class="col-4">
                    <input type="text" class="w-100 border p-10 rounded-0 border-cbcbcb bg-light" placeholder="終了時間">
                  </div>
                </div>
                <div class="row g-3 align-items-center mb-3">
                  <div class="col-4">
                    <label for="ageOfChild" class="col-form-label text-xl">お子様の年齢</label>
                  </div>
                  <div class="col-8">
                    <select id="ageOfChild" class="w-100 border-1 p-10 rounded-0 border-cbcbcb bg-light">
                      <option value="">お子様の年齢</option>
                      <option value="">０歳 ０ヶ月</option>
                      <option value="">０歳 １ヶ月〜２ヶ月</option>
                      <option value="">０歳 ３ヶ月〜５ヶ月</option>
                      <option value="">０歳 ６ヶ月〜１１ヶ月</option>
                      <option value="">１歳</option>
                      <option value="">２歳</option>
                      <option value="">３歳</option>
                      <option value="">４歳</option>
                      <option value="">５歳</option>
                    </select>
                  </div>
                </div>
                <div class="row g-3 align-items-center justify-content-center mt-2">
                  <div class="col-9">
                    <router-link :to="{name:'Search'}" class="btn text-xl exy-default-btn w-100" type="button">検索する</router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <h4 class="shadow p-3 mb-5 bg-body rounded">エリア・沿線からさがす</h4>

        <div class="row justify-content-center first-banner">
          <div class="col-md-5">
            <router-link :to="{name:'todo'}">
              <div class="d-flex align-items-center">
                <img src="../assets/images/ID3192071_m@2x.png" alt="EXY">
                <h3>エリアからさがす</h3>
              </div>
            </router-link>
          </div>
          <div class="col-md-5">
            <router-link :to="{name:'todo'}">
              <div class="d-flex align-items-center">
                <img src="../assets/images/ID3808135_m@2x.png" alt="EXY">
                <h3>エリアからさがす</h3>
              </div>
            </router-link>
          </div>
        </div>

        <h4 class="shadow p-3 my-5 bg-body rounded">条件からさがす</h4>

        <div class="row">
          <div class="col-lg-3 col-md-6 mb-3">
            <label class="fw-bold text-xl">保育サービス</label>
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <input type="text" class="p-10 w-100 text-xl text-center border border-cb3a82" placeholder="一時保育">
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <input type="text" class="p-10 w-100 text-xl text-center border border-cb3a82" placeholder="月極保育">
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <input type="text" class="p-10 w-100 text-xl text-center border border-cb3a82" placeholder="病児・病後児保育">
          </div>
        </div>
        <hr class="mb-4">
        <div class="row" v-if="firstPage">
          <div class="col-lg-3 col-md-6 mb-3">
            <label class="fw-bold text-xl">日 時</label>
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <input type="text" class="p-10 w-100 text-xl border border-333333" placeholder="日付">
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <input type="text" class="p-10 w-100 text-xl border border-333333" placeholder="開始時間">
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <div class="d-flex align-items-center">
              <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              <input type="text" class="p-10 w-100 text-xl border border-333333" placeholder="終了時間">
            </div>
          </div>
        </div>

        <div class="row" v-if="!firstPage">
          <div class="col-lg-3 mb-3">
            <label class="fw-bold text-xl">日 時</label>
          </div>
          <div class="col-lg-9">
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">月
                  <input type="checkbox" checked="checked">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">火
                  <input type="checkbox" checked="checked">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">水
                  <input type="checkbox" checked="checked">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">木
                  <input type="checkbox" checked="checked">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">金
                  <input type="checkbox" checked="checked">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">土
                  <input type="checkbox" checked="checked">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="終了時間">
              </div>
            </div>
            <div class="row d-flex align-items-center mb-3">
              <div class="col-lg-2">
                <label class="container-checkbox">日
                  <input type="checkbox" checked="checked">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="開始時間">
              </div>
              <div class="col-lg-1 text-center">
                <label class="me-3 fw-bolder fs-4 d-none d-md-block">〜</label>
              </div>
              <div class="col-lg-4">
                <input type="text" class="p-2 w-100 text-xl border border-333333 text-light" placeholder="終了時間">
              </div>
            </div>
          </div>
        </div>

        <div class="text-end mt-4">
          <label class="mx-3">または</label>
          <label @click="firstPage = !firstPage" class="--color-e6006e cursor-pointer">一週間の希望日を指定する ＞</label>
        </div>
        <hr>

        <router-link :to="{name:'Search'}" class="exy-default-btn text-xl mt-5 w-100 py-3 text-center" type="button">この条件で検索する</router-link>

        <h4 class="shadow p-3 my-5 bg-body rounded">その他の条件を追加する</h4>

        <div class="row py-4">
          <div class="col-md-3">
            <h5 class="mb-3 mb-md-0">保育サービス</h5>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 体験保育（一時保育）</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 月極保育</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 病児・病後児保育</label></li>
            </ul>
          </div>
        </div>

        <div class="solid-border"></div>

        <div class="row py-4">
          <div class="col-md-3">
            <h5 class="mb-3 mb-md-0">子どもの年齢</h5>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> ０歳児（6ヶ月未満）</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> ２歳児</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> ５歳児</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> ０歳児（6ヶ月以上）</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> ３歳児</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> １歳児</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> ４歳児</label></li>
            </ul>
          </div>
        </div>

        <div class="solid-border"></div>

        <div class="row py-4">
          <div class="col-md-3">
            <h5 class="mb-3 mb-md-0">キャンペーン</h5>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> あり</label></li>
            </ul>
          </div>
        </div>

        <div class="solid-border"></div>

        <div class="row py-4">
          <div class="col-md-3">
            <h5 class="mb-3 mb-md-0">延長保育</h5>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 延長保育（早朝）</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> 夜間保育</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 延長保育（夕方）</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> お泊まり保育</label></li>
            </ul>
          </div>
        </div>

        <div class="solid-border"></div>

        <div class="row py-4">
          <div class="col-md-3">
            <h5 class="mb-3 mb-md-0">休日保育</h5>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 土曜日</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 日曜日</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 祝日</label></li>
            </ul>
          </div>
        </div>

        <div class="solid-border"></div>

        <div class="row py-4">
          <div class="col-md-3">
            <h5 class="mb-3 mb-md-0">サービス</h5>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 連絡アプリ導入済み</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> 制服・指定服あり</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> 駐車場・駐輪場あり</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 保護者会等あり</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> アレルギー対応あり</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> リフレッシュ利用可能</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 保護者参加行事あり</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> ベビーカー置き場あり</label></li>
            </ul>
          </div>
        </div>

        <div class="solid-border"></div>

        <div class="row py-4">
          <div class="col-md-3">
            <h5 class="mb-3 mb-md-0">園規模</h5>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 小規模（19名以下）</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 中規模（59名以下）</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 大規模（60名以上）</label></li>
            </ul>
          </div>
        </div>

        <div class="solid-border"></div>

        <div class="row py-4">
          <div class="col-md-3">
            <h5 class="mb-3 mb-md-0">広さ</h5>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 80平米以下</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 81〜200平米以下</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 200平米以上</label></li>
            </ul>
          </div>
        </div>

        <div class="solid-border"></div>

        <div class="row py-4">
          <div class="col-md-3">
            <h5 class="mb-3 mb-md-0">園庭</h5>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> あり</label></li>
            </ul>
          </div>
        </div>

        <div class="solid-border"></div>

        <div class="row py-4">
          <div class="col-md-3">
            <h5 class="mb-3 mb-md-0">慣らし保育</h5>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> なし</label></li>
            </ul>
          </div>
        </div>

        <div class="solid-border"></div>

        <div class="row py-4">
          <div class="col-md-3">
            <h5 class="mb-3 mb-md-0">特色</h5>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 習い事</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> 送迎サービス</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> 英語教育</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> 手ぶら登園</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> 夕食・補食</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> 幼児教育</label></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul>
              <li><label><input class="form-check-input me-1" type="checkbox"> こだわり給食</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> 運動教育</label></li>
              <li><label><input class="form-check-input me-1" type="checkbox"> 就学前教育</label></li>
            </ul>
          </div>
        </div>

        <div class="solid-border"></div>

        <div class="text-center my-5">
          <router-link :to="{name:'Search'}" class="exy-default-btn py-10 text-xl px-5" type="button">この条件で検索する</router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ja';

export default {
  name: "FindNurserySchool",
  data() {
    return {
      date: null,
      firstPage: true
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
}
</script>

<style scoped>

</style>