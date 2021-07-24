<template>
  <div>
    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item">子育て情報掲示板</li>
          <li class="breadcrumb-item active">口コミ情報提供</li>
        </ol>
      </nav>
    </div>

    <div>
      <img src="../../assets/images/review-form-banner.png" alt="EXY" class="img-fluid w-100">
    </div>

    <div class="container text-center py-5">
      <span>キガルニホイクでは、皆様からの子育てに関する情報提供をお待ちしております！<br><br>あなたの持っている情報で、他の家族をハッピーにしませんか？<br><br>「誰かの投稿とカブってるかも？」とか「間違ってるかも？」<br>「これは子育てにあんまり関係ないかも？」<br>と気にする必要はありません！<br><br>気にせずどしどしご投稿ください！<br><br>ご投稿は以下の受付フォームからお願いいたします。<br></span><br><span style="font-size:14px;">※いただいた情報を必ず記事として採用するわけではないのでご了承ください。</span>
    </div>

    <div class="container">
      <div class="border mt-4" style="background: #FEFDFC">
        <div class="border-bottom py-3 text-center fw-bold text-xl bg-light">情報提供フォーム</div>

        <div class="p-4">
          <p>キガルニホイクでは「気になる情報」を提供、調査いたします！情報を提供してくださった方には、抽選でサイト内で利用・amazonギフト券に交換できるキガルニホイクポイントをプレゼント！当選者にはメールにてご連絡いたします。</p>
          <form action="">

            <div class="bg-white p-3">
              <table>
                <tr>
                  <td>タイトル</td>
                  <td>必 須</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>

            <div class="text-center pt-3">
              <p>利用規約、<span class="text-decoration-underline">プライバシーポリシーに</span>同意の上<br/>お申し込みください</p>
              <p>
                <label class="container-checkbox">利用規約およびプライバシーポリシーに同意する
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </label>
              </p>
              <button type="button" class="exy-default-btn" @click="success = true">上記の内容で申し込む</button>
              <thanks v-if="success" />
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="container text-center my-5">
      <img src="../../assets/images/group-3987.png" alt="EXY" class="img-fluid">
    </div>

  </div>
</template>

<script>
import Thanks from "./Thanks";
export default {
  name: "ReviewCreateForm",
  components: { Thanks },
  data() {
    return {
      success: false
    }
  }
}
</script>

<style scoped>

</style>