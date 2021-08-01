<template>
  <div>
    <div class="border border-aaa rounded-3" style="background: #FEFDFC">
      <div class="border-bottom border-aaa py-10 px-3 fw-bold text-xl">
        <img src="../../assets/images/svg/title-left.svg" alt="EXY" class="me-1 mb-2">
        カテゴリからさがす
      </div>

      <div class="py-10 px-3">
        <div class="fw-bold border-start border-3 border-cb3a82 text-sm ps-2 mb-3">テーマ</div>
        <div class="row">
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃とりあえず聞いて">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃保育関連">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃病気・健康">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃趣味・遊び">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃旦那・家族">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃料理・家事">
          </div>
        </div>

        <div class="fw-bold border-start border-3 border-cb3a82 text-sm ps-2 my-3">ママ・パパのタイプ</div>

        <div class="row">
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃妊娠・出産">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃不妊">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃シンママ・シンパパ">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃働くママ・働くパパ">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃主婦・主夫">
          </div>
        </div>

        <div class="fw-bold border-start border-3 border-cb3a82 text-sm ps-2 my-3">子どものタイプ</div>
        <div class="mb-2">年齢：</div>
        <div class="row">
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃０歳児（6ヶ月未満）">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃０歳児(6ヶ月以上〜)">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃１歳児">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃２歳児">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃３歳児">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃４歳児">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃５歳児">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃就学児">
          </div>
        </div>
        <div class="my-2">性別：</div>
        <div class="row">
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃男の子">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃女の子">
          </div>
          <div class="col-md-3 mb-2">
            <input type="text" class="form-control text-center" placeholder="＃未回答">
          </div>
        </div>

        <div class="text-center">
          <a href="#" class="read-more mt-4 mb-3">この条件で検索する</a>
        </div>

      </div>
    </div>

    <div class="border border-aaa rounded-3 my-5" style="background: #FEFDFC">
      <div class="border-bottom border-aaa py-10 px-3 fw-bold text-xl">
        <img src="../../assets/images/svg/title-left.svg" alt="EXY" class="me-1 mb-2">
        とりあえず聞いて
      </div>
      <div class="p-2">
        <div class="single-item">
          <router-link :to="{name:'ChildRearingConsultationCornerDetails'}" class="d-flex align-items-center link">
            <div class="flex-shrink-1 pe-3">
              <img src="../../assets/images/consultation-corner/1.png" class="u-img" alt="EXY">
            </div>
            <div>
              <div class="text-decoration-underline text-base fw-bold">現在５歳、春から小学生になる息子がいる母です。</div>
              <div class="text-base">体が小さめで心も幼く、小学校でちゃんとやっていけるのか、特にいじめられないか心配…</div>
            </div>
          </router-link>
          <div class="pt-1 d-flex align-items-center justify-content-between color-707070 text-sm">
            <div>
              <span>2021/03/09 15:11</span>
            </div>
            <div>
              <span class="text-decoration-underline me-4">＃回答受付中</span>
              <span class="text-decoration-underline me-4">＃とりあえず聞いて</span>
              <span class="text-decoration-underline me-4">＃働くママ・働くパパ</span>
              <span class="text-decoration-underline me-4">＃5歳児</span>
              <span><i class="fa fa-comment-o" aria-hidden="true"></i> 5</span>
            </div>
          </div>
        </div>
        <div class="dashed-border my-3"></div>
        <div class="single-item">
          <router-link :to="{name:'ChildRearingConsultationCornerDetails'}" class="d-flex align-items-center link">
            <div class="flex-shrink-1 pe-3">
              <img src="../../assets/images/consultation-corner/2.png" class="u-img" alt="EXY">
            </div>
            <div>
              <div class="text-decoration-underline text-base fw-bold">2歳の息子がいます</div>
              <div class="text-base">産まれてから2回しか風邪を引いたことがありません。児童館や公園等は１週間に一度のペ…</div>
            </div>
          </router-link>
          <div class="pt-1 d-flex align-items-center justify-content-between color-707070 text-sm">
            <div>
              <span>2021/03/09 15:11</span>
            </div>
            <div>
              <span class="text-decoration-underline me-4">＃回答受付中</span>
              <span class="text-decoration-underline me-4">＃とりあえず聞いて</span>
              <span class="text-decoration-underline me-4">＃シンママ・シンパパ</span>
              <span class="text-decoration-underline me-4">＃2歳児</span>
              <span><i class="fa fa-comment-o" aria-hidden="true"></i> 5</span>
            </div>
          </div>
        </div>
        <div class="dashed-border my-3"></div>
        <div class="single-item">
          <router-link :to="{name:'ChildRearingConsultationCornerDetails'}" class="d-flex align-items-center link">
            <div class="flex-shrink-1 pe-3">
              <img src="../../assets/images/consultation-corner/3.png" class="u-img" alt="EXY">
            </div>
            <div>
              <div class="text-decoration-underline text-base fw-bold">生後２週間の子がいる新米ママです。</div>
              <div class="text-base">退院する時に母乳が足りていないため、3時間おきにミルクを40〜60足すように言われまし…</div>
            </div>
          </router-link>
          <div class="pt-1 d-flex align-items-center justify-content-between color-707070 text-sm">
            <div>
              <span>2021/03/09 15:11</span>
            </div>
            <div>
              <span class="text-decoration-underline me-4">＃回答受付中</span>
              <span class="text-decoration-underline me-4">＃とりあえず聞いて</span>
              <span class="text-decoration-underline me-4">＃主婦・主夫</span>
              <span class="text-decoration-underline me-4">＃0ヶ月(6ヶ月未満)</span>
              <span><i class="fa fa-comment-o" aria-hidden="true"></i> 5</span>
            </div>
          </div>
        </div>
        <div class="dashed-border my-3"></div>

        <div class="text-end mt-2">
          <a href="#" class="color-cb3a82 text-decoration-underline">もっと見る ＞</a>
        </div>
      </div>
    </div>

    <div class="border border-aaa rounded-3" style="background: #FEFDFC">
      <div class="border-bottom border-aaa py-10 px-3 fw-bold text-xl">
        <img src="../../assets/images/svg/title-left.svg" alt="EXY" class="me-1 mb-2">
        最新の子育て相談
      </div>
      <div class="p-2">
        <div class="single-item">
          <router-link :to="{name:'ChildRearingConsultationCornerDetails'}" class="d-flex align-items-center link">
            <div class="flex-shrink-1 pe-3">
              <img src="../../assets/images/consultation-corner/1.png" class="u-img" alt="EXY">
            </div>
            <div>
              <div class="text-decoration-underline text-base fw-bold">現在５歳、春から小学生になる息子がいる母です。</div>
              <div class="text-base">体が小さめで心も幼く、小学校でちゃんとやっていけるのか、特にいじめられないか心配…</div>
            </div>
          </router-link>
          <div class="pt-1 d-flex align-items-center justify-content-between color-707070 text-sm">
            <div>
              <span>2021/03/09 15:11</span>
            </div>
            <div>
              <span class="text-decoration-underline me-4">＃回答受付中</span>
              <span class="text-decoration-underline me-4">＃とりあえず聞いて</span>
              <span class="text-decoration-underline me-4">＃働くママ・働くパパ</span>
              <span class="text-decoration-underline me-4">＃5歳児</span>
              <span><i class="fa fa-comment-o" aria-hidden="true"></i> 5</span>
            </div>
          </div>
        </div>
        <div class="dashed-border my-3"></div>
        <div class="single-item">
          <router-link :to="{name:'ChildRearingConsultationCornerDetails'}" class="d-flex align-items-center link">
            <div class="flex-shrink-1 pe-3">
              <img src="../../assets/images/consultation-corner/2.png" class="u-img" alt="EXY">
            </div>
            <div>
              <div class="text-decoration-underline text-base fw-bold">2歳の息子がいます</div>
              <div class="text-base">産まれてから2回しか風邪を引いたことがありません。児童館や公園等は１週間に一度のペ…</div>
            </div>
          </router-link>
          <div class="pt-1 d-flex align-items-center justify-content-between color-707070 text-sm">
            <div>
              <span>2021/03/09 15:11</span>
            </div>
            <div>
              <span class="text-decoration-underline me-4">＃回答受付中</span>
              <span class="text-decoration-underline me-4">＃とりあえず聞いて</span>
              <span class="text-decoration-underline me-4">＃シンママ・シンパパ</span>
              <span class="text-decoration-underline me-4">＃2歳児</span>
              <span><i class="fa fa-comment-o" aria-hidden="true"></i> 5</span>
            </div>
          </div>
        </div>
        <div class="dashed-border my-3"></div>
        <div class="single-item">
          <router-link :to="{name:'ChildRearingConsultationCornerDetails'}" class="d-flex align-items-center link">
            <div class="flex-shrink-1 pe-3">
              <img src="../../assets/images/consultation-corner/3.png" class="u-img" alt="EXY">
            </div>
            <div>
              <div class="text-decoration-underline text-base fw-bold">生後２週間の子がいる新米ママです。</div>
              <div class="text-base">退院する時に母乳が足りていないため、3時間おきにミルクを40〜60足すように言われまし…</div>
            </div>
          </router-link>
          <div class="pt-1 d-flex align-items-center justify-content-between color-707070 text-sm">
            <div>
              <span>2021/03/09 15:11</span>
            </div>
            <div>
              <span class="text-decoration-underline me-4">＃回答受付中</span>
              <span class="text-decoration-underline me-4">＃とりあえず聞いて</span>
              <span class="text-decoration-underline me-4">＃主婦・主夫</span>
              <span class="text-decoration-underline me-4">＃0ヶ月(6ヶ月未満)</span>
              <span><i class="fa fa-comment-o" aria-hidden="true"></i> 5</span>
            </div>
          </div>
        </div>
        <div class="dashed-border my-3"></div>

        <div class="text-end mt-2">
          <a href="#" class="color-cb3a82 text-decoration-underline">もっと見る ＞</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped lang="scss">
input {
  border-radius: 8px;
  border-color: #AAAAAA;

  &:focus {
    border-color: #AAAAAA;
  }
}

.link {
  border: 1px solid #707070;
  border-radius: 60px 15px 15px 60px;
  border-left: inherit;

  .u-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}
</style>