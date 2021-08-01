<template>
  <div>
    <div class="border border-cb3a82 rounded-top px-3 py-2 color-cb3a82 fw-bold">カテゴリから探す</div>
    <div class="border border-top-0 border-aaa rounded-bottom mb-3 px-3 py-2 color-707070">
      <form>
        <div class="mb-2">
          <div class="fw-bold border-start border-3 border-cb3a82 text-sm ps-2 mb-2">テーマ</div>
          <div class="mb-1">
            <label class="container-checkbox">とりあえず聞いて
              <input type="checkbox" checked>
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">保育関連
              <input type="checkbox" checked>
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">病気・健康
              <input type="checkbox" checked>
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">趣味・遊び
              <input type="checkbox" checked>
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">旦那・家族
              <input type="checkbox" checked>
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">料理・家事
              <input type="checkbox" checked>
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="mb-2">
          <div class="fw-bold border-start border-3 border-cb3a82 text-sm ps-2 mb-2 mt-3">ママ・パパのタイプ</div>
          <div class="mb-1">
            <label class="container-checkbox">妊娠・出産
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">不妊
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">シンママ・シンパパ
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">働くママ・働くパパ
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">主婦・主夫
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="mb-2">
          <div class="fw-bold border-start border-3 border-cb3a82 text-sm ps-2 mb-2 mt-3">子どものタイプ</div>
          <div>年齢：</div>
          <div class="mb-1">
            <label class="container-checkbox">０歳児（6ヶ月未満）
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">０歳児（6ヶ月以上）
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">１歳児
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">２歳児
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">３歳児
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">４歳児
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">５歳児
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">就学児
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">性別：</div>
          <div class="mb-1">
            <label class="container-checkbox">男の子
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">女の子
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="mb-1">
            <label class="container-checkbox">未回答
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <router-link :to="{name:'ConsultationCorner.SearchResults'}" class="d-block mt-4 py-2 text-center bg-cb3a82 fw-bold text-white rounded-3">絞り込む</router-link>
      </form>
    </div>

    <img src="../../assets/images/consultation-corner/_2021-04-01_170432.png" alt="EXY" class="img-fluid w-100">

    <div class="border border-aaa rounded-3 my-4 p-2">
      <div class="text-center --color-e6006e text-sm mb-3">話題の情報</div>

      <router-link :to="{name:'ChildRearingConsultationCornerDetailResolved'}" class="d-flex align-items-center mb-4">
        <div class="flex-shrink-1 position-relative mx-2">
          <div class="position-absolute">
            <img src="../../assets/images/bulletin-board/1.png" alt="EXY">
          </div>
          <img src="../../assets/images/bulletin-board/ID3776393_m.png" class="rounded-pill w-70" alt="EXY">
        </div>
        <div class="text-sm">
          子供がなかなか寝てくれない。最近夜更かしをするようにな…
        </div>
      </router-link>

      <router-link :to="{name:'ChildRearingConsultationCornerDetailResolved'}" class="d-flex align-items-center mb-4">
        <div class="flex-shrink-1 position-relative mx-2">
          <div class="position-absolute">
            <img src="../../assets/images/bulletin-board/2.png" alt="EXY">
          </div>
          <img src="../../assets/images/bulletin-board/ID3776393_m.png" class="rounded-pill w-70" alt="EXY">
        </div>
        <div class="text-sm">
          子供がなかなか寝てくれない。最近夜更かしをするようにな…
        </div>
      </router-link>

      <router-link :to="{name:'ChildRearingConsultationCornerDetailResolved'}" class="d-flex align-items-center mb-4">
        <div class="flex-shrink-1 position-relative mx-2">
          <div class="position-absolute">
            <img src="../../assets/images/bulletin-board/3.png" alt="EXY">
          </div>
          <img src="../../assets/images/bulletin-board/ID3776393_m.png" class="rounded-pill w-70" alt="EXY">
        </div>
        <div class="text-sm">
          子供がなかなか寝てくれない。最近夜更かしをするようにな…
        </div>
      </router-link>

      <router-link :to="{name:'ChildRearingConsultationCornerDetailResolved'}" class="d-flex align-items-center mb-4">
        <div class="flex-shrink-1 position-relative mx-2">
          <div class="position-absolute">
            <img src="../../assets/images/bulletin-board/4.png" alt="EXY">
          </div>
          <img src="../../assets/images/bulletin-board/ID3776393_m.png" class="rounded-pill w-70" alt="EXY">
        </div>
        <div class="text-sm">
          子供がなかなか寝てくれない。最近夜更かしをするようにな…
        </div>
      </router-link>

      <router-link :to="{name:'ChildRearingConsultationCornerDetailResolved'}" class="d-flex align-items-center mb-4">
        <div class="flex-shrink-1 position-relative mx-2">
          <div class="position-absolute">
            <img src="../../assets/images/bulletin-board/5.png" alt="EXY">
          </div>
          <img src="../../assets/images/bulletin-board/ID3776393_m.png" class="rounded-pill w-70" alt="EXY">
        </div>
        <div class="text-sm">
          子供がなかなか寝てくれない。最近夜更かしをするようにな…
        </div>
      </router-link>

    </div>

    <router-link :to="{name:'ChildCareConsultation'}" class="mb-4 d-block py-3 text-center bg-cb3a82 fw-bold text-white rounded-3">自分の子育て・保育相談</router-link>

    <router-link :to="{name:'Faqs'}">
      <img src="../../assets/images/consultation-corner/ID2x.png" alt="EXY" class="img-fluid w-100">
    </router-link>

  </div>
</template>

<script>
export default {
  name: "RightSidebar"
}
</script>

<style scoped lang="scss">
.w-70 {
  width: 70px;
}
</style>