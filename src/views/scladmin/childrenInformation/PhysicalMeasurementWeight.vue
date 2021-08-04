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
                        <a @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]"> 基本情報</a>
                        <a @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]"> 身体測定</a>
                        <a @click="activeTab=3" :class="[ activeTab === 3 ? 'active' : '' ]"> 利用履歴</a>
                        <a > </a>
                    </div>
                </div>
                <div v-if="activeTab===2" class="physical-measurement-Weight w-100 pb-5">
                    <div class="row w-100 pt-4 ">
                        <div class="col-md-12 pe-0">
                            <div class="row inner-1">
                                <div class="col-md-2 pt-2">
                                    <p class="m-0"><span class="span-1">◀︎</span><span class="px-3">2021年度</span><span class="span-1">▶︎</span></p>
                                </div>
                            </div>
                            <div class="row mt-2 inner-2">
                                <div class="col-md-12 inner-col">
                                    <div class="row inner-row-1">
                                        <div class="col-1 bg-white"></div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">4月</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">5月</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">6月</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">7月</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">8月</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">9月</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">10月</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">11月</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">12月</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">1月</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">2月</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">3月</p>
                                        </div>
                                    </div>
                                    <div class="row inner-row-2">
                                        <div class="col-1 left-col py-1">
                                            <p class="m-0 text-center">身長 <span class="text-xs">(cm)</span></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">78.8</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">79</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                    </div>
                                    <div class="row inner-row-2">
                                        <div class="col-1 left-col py-1">
                                            <p class="m-0 text-center">体重 <span class="text-xs">(kg)</span></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">9.7</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center">10</p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                        <div class="col-2 py-1">
                                            <p class="m-0 text-center"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row inner-3 mt-5">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-1 no-border">
                                            <p class="m-0 pt-2 text-center">身長</p>
                                        </div>
                                        <div class="col-2 active">
                                            <p class="m-0 pt-2 text-center">身長</p>
                                        </div>
                                        <div class="col-2 no-border"></div>
                                        <div class="col-2 no-border"></div>
                                        <div class="col-2 no-border"></div>
                                        <div class="col-2 no-border"></div>
                                        <div class="col-1 no-border"></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-1 py-2 no-border ps-4">
                                            <p class="m-0 pt-2 text-xs">15kg</p>
                                        </div>
                                        <div class="col-2">
                                        </div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-1"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-1 py-2 no-border ps-4">
                                            <p class="m-0 pt-2 text-xs">14kg</p>
                                        </div>
                                        <div class="col-2">
                                        </div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-1"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-1 py-2 no-border ps-4">
                                            <p class="m-0 pt-2 text-xs">13kg</p>
                                        </div>
                                        <div class="col-2">
                                        </div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-1"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-1 py-2 no-border ps-4">
                                            <p class="m-0 pt-2 text-xs">12kg</p>
                                        </div>
                                        <div class="col-2">
                                        </div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-1"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-1 py-2 no-border ps-4">
                                            <p class="m-0 pt-2 text-xs">11kg</p>
                                        </div>
                                        <div class="col-2">
                                        </div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-1"></div>
                                    </div>
                                    <div class="row inner-row-2">
                                        <div class="col-1 py-2 no-border ps-4 text-xs">
                                            <div class="pull-left step-left">
                                                <p class="m-0 pt-2 text-xs">10kg</p>
                                            </div>
                                            <ul class="progressbar">
                                                <li class="bottom"></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div class="col-2 position-absolute">
                                        </div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-1"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-1 py-2 no-border ps-4">
                                            <p class="m-0 pt-2 text-xs">9kg</p>
                                        </div>
                                        <div class="col-2">
                                        </div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-1"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-1 py-2 no-border ps-4">
                                            <p class="m-0 pt-2 text-xs">8kg</p>
                                        </div>
                                        <div class="col-2">
                                        </div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-1"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-1 py-2 no-border ps-4">
                                            <p class="m-0 pt-2 text-xs">7kg</p>
                                        </div>
                                        <div class="col-2">
                                        </div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-1"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-1 py-2 no-border ps-4">
                                            <p class="m-0 pt-2 text-xs"></p>
                                        </div>
                                        <div class="col-2">
                                        </div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-2"></div>
                                        <div class="col-1"></div>
                                    </div>
                                    <div class="row inner-row-1 mt-2">
                                        <div class="col-1"></div>
                                        <div class="col-1 ps-0">
                                            <p class="m-0 text-xs text-center">4月</p>
                                        </div>
                                        <div class="col-1 ps-0">
                                            <p class="m-0 text-xs text-center">5月</p>
                                        </div>
                                        <div class="col-1 ps-0">
                                            <p class="m-0 text-xs text-center">6月</p>
                                        </div>
                                        <div class="col-1 ps-0">
                                            <p class="m-0 text-xs text-center">7月</p>
                                        </div>
                                        <div class="col-1 ps-0">
                                            <p class="m-0 text-xs text-center">8月</p>
                                        </div>
                                        <div class="col-1 ps-0 pe-4">
                                            <p class="m-0 text-xs text-center">9月</p>
                                        </div>
                                        <div class="col-1 ps-0 pe-4">
                                            <p class="m-0 text-xs text-center">10月</p>
                                        </div>
                                        <div class="col-1 ps-0 pe-4">
                                            <p class="m-0 text-xs ps-2">11月</p>
                                        </div>
                                        <div class="col-1 ps-0 pe-4">
                                            <p class="m-0 text-xs ps-2">12月</p>
                                        </div>
                                        <div class="col-1 ps-0 pe-4">
                                            <p class="m-0 text-xs ps-1">1月</p>
                                        </div>
                                        <div class="col-1 ps-0 pe-4">
                                            <p class="m-0 text-xs ps-1">2月</p>
                                        </div>
                                        <div class="col-1 ps-0 pe-4">
                                            <p class="m-0 text-xs ps-0">3月</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
  name: "PhysicalMeasurementWeight",
  data() {
    return {
      activeTab: 2,
      leftsub: 1,
      subBottom: 1
    }
  }
}
</script>

<style scoped>

</style>