<template>
  <div class="modal show" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="close" @click="$emit('close')">
          <i class="fa fa-times-circle text-2xl"></i>
        </div>
        <div class="p-4 mt-2">
          <h4 class="--color-e6006e border-bottom text-base fw-bold">ベストアンサーに選ぶ</h4>

          <div class="text-sm fw-bold mt-3 mb-1">回答内容</div>
          <div class="text-sm" style="border-left: 5px solid #EBEBEB;padding-left: 12px">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-1 pe-3">
                <img src="../../assets/images/consultation-corner/8.png" alt="EXY">
              </div>
              <div class="color-707070">
                <div class="text-sm fw-bold">さちこさん</div>
                <div class="text-xs">2021/03/09 16:11</div>
              </div>
            </div>

            <div class="text-sm color-707070 mt-3">
              そろそろ子離れの準備をされた方がいいと思いました。<br><br>

              お子さんは、健康なら大丈夫です。相談者さんが稀有したところで何にもなりません。心配心を別のエネルギーに変えて、楽しくお過ごしください。
            </div>
          </div>

          <form action="" class="mt-4">
            <label class="text-sm fw-bold">回答者へお礼のコメント</label>
            <textarea class="form-control my-1" rows="6"></textarea>
            <p class="text-end text-sm">残り <span class="fw-bold text-base">2000</span> 文字</p>

            <div class="text-center py-2">
              <button type="button" @click="$emit('close')" class="w-150 border py-2 d-inline-block border-dark me-5 bg-white">閉じる</button>
              <button type="button" @click="$emit('close')" class="w-150 border py-2 d-inline-block text-white border border-color-e6006e" style="background: #E6006E">確認する</button>
            </div>
          </form>
        </div>
      </div>
      <div class="rounded-pill text-center text-white py-1 mt-3" style="background: #84C942">ベストアンサーに設定しました</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BestAnswerModal"
}
</script>

<style scoped>

</style>