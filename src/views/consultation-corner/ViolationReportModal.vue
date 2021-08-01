<template>
  <div class="modal show" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="close" @click="$emit('close')">
          <i class="fa fa-times-circle text-2xl"></i>
        </div>
        <div class="p-4 mt-2">
          <h4 class="--color-e6006e border-bottom text-base fw-bold">違反報告</h4>

          <div class="text-base fw-bold mt-2 mb-1">違反報告対象</div>
          <div class="text-sm" style="border-left: 5px solid #EBEBEB;padding-left: 12px">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-1 pe-3">
                <img src="../../assets/images/consultation-corner/9.png" alt="EXY">
              </div>
              <div class="color-707070">
                <div class="text-sm fw-bold">さちこさん</div>
                <div class="text-xs">2021/03/09 16:11</div>
              </div>
            </div>

            <div class="text-sm color-707070 py-2">
              <div class="mb-2">そろそろ子離れの準備をされた方がいいと思いました。</div>
              <div>お子さんは、健康なら大丈夫です。相談者さんが稀有したところで何にもなりません。心配心を別のエネルギーに変えて、楽しくお過ごしください。</div>
            </div>
          </div>

          <div class="my-4 text-sm">
            <div class="fw-bold mb-2">違反項目</div>

            <div class="mb-2 text-xs">
              <label>
                <input type="radio" name="violation-item">
                <span class="ms-2">個人情報の掲載</span>
              </label>
            </div>
            <div class="mb-2 text-xs">
              <label>
                <input type="radio" name="violation-item">
                <span class="ms-2">投稿内容が重複している</span>
              </label>
            </div>
            <div class="mb-2 text-xs">
              <label>
                <input type="radio" name="violation-item">
                <span class="ms-2">不適切な投稿</span>
              </label>
            </div>
            <div class="mb-2 text-xs">
              <label>
                <input type="radio" name="violation-item">
                <span class="ms-2">カテゴリ違いの投稿</span>
              </label>
            </div>
            <div class="mb-2 text-xs">
              <label>
                <input type="radio" name="violation-item">
                <span class="ms-2">宣伝・広告的な利用</span>
              </label>
            </div>
            <div class="mb-2 text-xs">
              <label>
                <input type="radio" name="violation-item">
                <span class="ms-2">質問・回答になっていない投稿</span>
              </label>
            </div>

          </div>

          <div class="border border-3 p-2 mb-4 mt-3 text-sm color-707070">
            <div class="fw-bold mb-2">
              <i class="fa fa-exclamation-triangle" style="color: #84C942"></i>
              <span class="ms-2">注意事項</span>
            </div>
            <div>・ご連絡に個別にお答えすることはありません<br/>
              ・ご連絡をいただいた内容は利用規約、ガイドラインおよび利用のルールに照らし合わせて確認を行います。<br/>
              ・ご連絡いただいても違反が認められない場合は、対応/処置を実施しない場合もあります。
            </div>
          </div>

          <div class="text-center py-2">
            <button type="button" @click="$emit('close')" class="w-150 border py-2 d-inline-block border-dark me-5 bg-white">閉じる</button>
            <button type="button" @click="$emit('close')" class="w-150 border py-2 d-inline-block text-white border border-color-e6006e" style="background: #E6006E">送信する</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViolationReportModal"
}
</script>

<style scoped>

</style>