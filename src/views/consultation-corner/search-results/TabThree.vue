<template>
  <div>
    <div v-for="n in 10" :key="n">
      <div class="p-2">
        <div class="bg-fffafd border rounded-3 p-2">
          <div class="single-item child--rearing">
            <router-link :to="{name:'ChildRearingConsultationCornerDetailResolved'}" class="d-flex bg-white align-items-center link">
              <div class="flex-shrink-1 pe-3">
                <img src="../../../assets/images/consultation-corner/2.png" class="u-img" alt="EXY">
              </div>
              <div>
                <div class="text-decoration-underline text-base fw-bold">現在５歳、春から小学生になる息子がいる母です。</div>
                <div class="text-base">体が小さめで心も幼く、小学校でちゃんとやっていけるのか、特にいじめられないか心配で…</div>
              </div>
            </router-link>
            <div class="pt-2 d-flex align-items-center justify-content-between color-707070 text-sm">
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
        </div>
      </div>

      <div class="p-2">
        <div class="bg-fefdfc border rounded-3 p-2">
          <div class="single-item child--rearing">
            <router-link :to="{name:'ChildRearingConsultationCornerDetailResolved'}" class="d-flex bg-white align-items-center link">
              <div class="flex-shrink-1 pe-3">
                <img src="../../../assets/images/consultation-corner/2.png" class="u-img" alt="EXY">
              </div>
              <div>
                <div class="text-decoration-underline text-base fw-bold">2歳の息子がいます</div>
                <div class="text-base">産まれてから2回しか風邪を引いたことがありません。児童館や公園等は１週間に一度のペ…</div>
              </div>
            </router-link>
            <div class="pt-2 d-flex align-items-center justify-content-between color-707070 text-sm">
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
        </div>
      </div>
    </div>

    <pagination />
  </div>
</template>

<script>
import Pagination from "../../../components/Pagination";
export default {
  name: "TabThree",
  components: { Pagination }
}
</script>

<style scoped>

</style>