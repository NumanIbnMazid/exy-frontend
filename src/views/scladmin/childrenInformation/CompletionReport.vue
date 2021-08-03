<template>
  <div class="children-information">
    <div class="breadcrumb-border-admin">
      <div class="ps-5">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{name:'Admin.MyPage'}">TOP</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">園児情報</li>
            <li class="breadcrumb-item"></li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row w-100 experience-body">
        <div class="col-md-4 left-col">
            <div class="row row-1 py-4 pe-3 ps-4">
                <div class="col-md-12">
                    <div class="row bg-white inner-1 py-2 ps-4">
                        <p class="m-0">園児検索</p>
                    </div>
                    <div class="row mt-3 inner-2">
                        <select class="form-select ps-4" aria-label="Default select example">
                            <option>全体</option>
                            <option value="1">体験保育</option>
                            <option value="2">月極保育</option>
                            <option value="3">園見学</option>
                            <option value="4">退園</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row row-2 py-2 px-3 ">
                <div class="col-md-9">
                    <p class="m-0">園児一覧</p>
                </div>
                <div class="col-md-3 pe-1">
                    <select class="form-select text-xs" aria-label="Default select example">
                        <option>名前順</option>
                        <option value="1">年齢順</option>
                        <option value="2">新着順</option>
                    </select>
                </div>
            </div>
            <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
            <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
             <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
             <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
             <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
             <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
             <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
             <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
             <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
             <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
             <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
             <router-link :to="{name:'todo', params:{page:40}}">
                <div class="row row-3 me-2 px-3 py-2">
                    <div class="col-md-2">
                        <img src="../../../assets/images/admin/ID3487702_m_d.png" class="w-100" alt="EXY">
                    </div>
                    <div class="col-md-10">
                        <p class="m-0 text-decoration-underline pb-1">哀川 里奈（あいかわ りな）</p>
                        <p class="m-0 text-xs color-707070">女（１歳児）</p>
                    </div>
                </div>
            </router-link>
            <div class="row row-4 py-3 me-2">
                <p class="m-0 text-center">
                    <span class="p-2 pb-1 text-xs span-1">1</span>
                    <span class="px-4 pb-1 text-xs">2</span>
                    <span class="px-2 pb-1 text-xs">3</span>
                </p>
            </div>
        </div>
        <div class="col-md-8 right-col">
            <div class="row row-1 ps-4 py-4">
                <div class="col-md-2">
                    <img src="../../../assets/images/admin/ID3487702_m.png" class="w-75" alt="EXY">
                </div>
                <div class="col-md-10 ps-0">
                    <p class="m-0 top-p fw-bold pt-3">哀川 里奈 <span class="span-1 py-2 px-3 text-base fw-normal ms-5 position-absolute">体験保育</span></p>
                </div>
            </div>
            <div class="row row-2 ps-1">
                <div class="details-tab">
                    <div class="px-0 tabs">
                        <a> </a>
                        <a @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]"> 園の特色</a>
                        <a @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]"> 保育内容</a>
                        <a @click="activeTab=3" :class="[ activeTab === 3 ? 'active' : '' ]"> 料金プラン</a>
                        <a > </a>
                    </div>
                </div>
                <div v-if="activeTab===3" class="expericence-childcare w-100 pb-5">
                    <div class="row w-100 pt-4 inner-row-1">
                        <div class="col-md-12 pe-0">
                            <a @click="leftsub==1 ? leftsub=2 : leftsub=1">
                                <div class="row pt-3 inner-1 pb-2">
                                    <div class="col-md-2 pt-2">
                                        <p class="m-0">◀︎<span class="px-3">2021年度</span>▶︎</p>
                                    </div>
                                    <div class="col-md-8">
                                        <select class="form-select ps-5 w-25" aria-label="Default select example">
                                            <option>1月</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2 pe-0">
                                        <p :class="[ leftsub === 1 ? 'p-button' : 'p-button-1' ]" class="m-0 py-2 text-center">修正</p>
                                    </div>
                                </div>
                                <div class="row inner-6 mt-4 py-1">
                                    <div class="col-md-2">
                                        <p class="m-0 text-center p-box py-1 text-xs">ご注意ください</p>
                                    </div>
                                    <div class="col-md-10">
                                        <router-link :to="{name:'todo', params:{page:30}}">
                                            <p class="m-0 text-decoration-underline ps-3 pt-1">完了報告が未対応です。</p>
                                        </router-link>
                                    </div>
                                </div>      
                                <div class="row pt-1 inner-2">
                                    <div class="col-md-12 inner-col">
                                        <div class="row box-row-1 no-border">
                                            <div class="col-md-2 box-left py-2 text-sm">
                                                <p class="m-0 text-center fw-bold pt-1">利用開始日時</p>
                                            </div>
                                            <div class="col-md-10 box-right py-2 ps-4">
                                                <p class="m-0">2021年1月1日（金）11：00</p>
                                            </div>
                                        </div>
                                        <div class="row box-row-1">
                                            <div class="col-md-2 box-left py-2 text-sm">
                                                <p class="m-0 text-center fw-bold pt-1">利用終了日時</p>
                                            </div>
                                            <div class="col-md-10 box-right py-2 ps-4">
                                                <p class="m-0">2021年1月1日（金）14：00</p>
                                            </div>
                                        </div>
                                        <div class="row box-row-1">
                                            <div class="col-md-2 box-left py-2 text-sm">
                                                <p class="m-0 pt-1"><input type="checkbox"> <span class="ps-3 fw-bold">利用内容</span></p>
                                            </div>
                                            <div class="col-md-10 box-right py-2 ps-4">
                                                <p class="m-0">体験保育</p>
                                            </div>
                                        </div>
                                        <div class="row box-row-1">
                                            <div class="col-md-2 box-left py-2 text-sm">
                                                <p class="m-0 pt-1"><input type="checkbox"> <span class="ps-3 fw-bold">料金プラン</span></p>
                                            </div>
                                            <div class="col-md-10 box-right py-2 ps-4">
                                                <p class="m-0">通常プラン  <span class="px-3">｜</span>  １歳児以降</p>
                                            </div>
                                        </div>
                                        <div class="row box-row-1">
                                            <div class="col-md-2 box-left py-2 text-sm">
                                                <p class="m-0 pt-1"><input type="checkbox"> <span class="ps-3 fw-bold">オプション</span></p>
                                            </div>
                                            <div class="col-md-10 box-right py-2 ps-4">
                                                <p class="m-0">その他費用 <span class="px-3">｜</span>  給食、その他費用 <span class="px-3">｜</span>おやつ</p>
                                            </div>
                                        </div>
                                        <div class="row box-row-1">
                                            <div class="col-md-2 box-left py-2 text-sm">
                                                <p class="m-0 pt-1"><input type="checkbox"> <span class="ps-3 fw-bold">支払い方法</span></p>
                                            </div>
                                            <div class="col-md-10 box-right py-2 ps-4">
                                                <p class="m-0">クレジット自動引き落とし</p>
                                            </div>
                                        </div>
                                        <div class="row box-row-1">
                                            <div class="col-md-2 box-left py-2 text-sm">
                                                <p class="m-0 text-center fw-bold pt-1">完了報告</p>
                                            </div>
                                            <div class="col-md-10 box-right py-2 ps-4 pe-5">
                                                <div class="row pb-1">
                                                    <div class="col-md-1">
                                                        <p class="m-0">11:00-：</p>
                                                    </div>
                                                    <div class="col-md-11">
                                                        <p class="m-0">初めての場所に少し緊張している様子でした。お母様のお姿が見えなくなると 寂しさが溢れたようで５分程度は泣き止まずでしたが、保育者がおもちゃで遊 びに誘うと気持ちを切り替えて楽しそうに遊んでくれていました。</p>
                                                    </div>
                                                </div>
                                                <div class="row pb-1">
                                                    <div class="col-md-1">
                                                        <p class="m-0">11:30-：</p>
                                                    </div>
                                                    <div class="col-md-11">
                                                        <p class="m-0">保育園のお友達と給食を食べました。上手に手掴み食べができていました。</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-1">
                                                        <p class="m-0">12:00-：</p>
                                                    </div>
                                                    <div class="col-md-11">
                                                        <p class="m-0">お昼寝の時間になると、やはり慣れない環境では寝付きにくいようで、少しの 間泣いている様子でしたが、30分ほどトントンを続けると気持ち良さそうに 眠っていました。</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="leftsub == 1" class="row inner-3">
                                    <div class="col-md-12">
                                        <div class="row box-inner-1 py-2">
                                            <p class="m-0 ps-0">修正履歴</p>
                                        </div>
                                        <div class="row box-inner-2 py-2">
                                            <div class="col-md-3">
                                                <p class="m-0 fw-bold">修正日</p>
                                            </div>
                                            <div class="col-md-3">
                                                <p class="m-0 fw-bold">修正内容</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="m-0 fw-bold">修正の事由</p>
                                            </div>
                                        </div>
                                        <div class="row box-inner-3 py-2">
                                            <div class="col-md-3">
                                                <p class="m-0">2021/06/02 <span class="ps-5">12:00</span></p>
                                            </div>
                                            <div class="col-md-3">
                                                <p class="m-0">利用プラン</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="m-0">利用プラン変更の申し出があったため</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="leftsub == 2" class="row pt-2 inner-2 box-margin">
                                    <div class="col-md-12 inner-col">
                                        <div class="row box-row-1 no-border">
                                            <div class="col-md-2 box-left py-2 text-sm">
                                                <p class="m-0 pt-1 text-center fw-bold">料金プラン</p>
                                            </div>
                                            <div class="col-md-10 box-right py-2 ps-4">
                                                <select class="form-select ps-5 w-50" aria-label="Default select example">
                                                    <option>通常プラン  <span class="px-3">｜</span>  １歳児以降</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row box-row-1">
                                            <div class="col-md-2 box-left py-2 text-sm">
                                                <p class="m-0 pt-1 text-center fw-bold">完了報告</p>
                                            </div>
                                            <div class="col-md-10 box-right py-2 ps-4">
                                                <p class="p-box m-0"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a @click="subBottom==1 ? subBottom=2 : subBottom=1">
                                <div class="row inner-4 box-margin py-2">
                                    <div class="col-md-1">
                                        <p class="m-0">備考欄</p>
                                    </div>
                                    <div class="col-md-11">
                                        <hr class="hr-color mt-2">
                                    </div>
                                </div>
                                <div class="row py-2">
                                    <p class="m-0">当該園児さんに関して職員間で共有すべき事項等ありましたらご記入ください。</p>
                                </div>
                                <div v-if="subBottom == 1" class="row py-3 inner-5">
                                    <p class="p-box m-0"></p>
                                </div>
                                <div v-if="subBottom == 2" class="row py-3 inner-5">
                                    <p class="py-4 ps-3 m-0 p-box">お迎えの時間に少しルーズな部分があるため配置に注意する</p>
                                </div>
                                <div class="row py-2 inner-5">
                                    <p class="m-0"><span :class="[ subBottom == 1 ? 'span-1' : 'span-2' ]" class="pull-right py-2 px-5">保存</span></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompletionReport",
  data() {
    return {
      activeTab: 3,
      leftsub: 1,
      subBottom: 1
    }
  }
}
</script>

<style scoped>

</style>