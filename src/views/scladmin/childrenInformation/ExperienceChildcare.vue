<template>
  <div class="expericence-childcare">
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
                            <option value="1">体験保育</option>
                            <option value="2">月極保育</option>
                            <option value="3">園見学</option>
                            <option value="4">退園</option>
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
        <div class="col-md-8"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceChildcare"
}
</script>

<style scoped>

</style>