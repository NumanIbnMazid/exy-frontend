<template>
  <div class="modal show" aria-hidden="true">
    <div class="modal-dialog ">
      <div class="modal-content">
        <router-link tag="div" :to="{name:'BulletinBoard'}" class="btn-close" aria-label="Close"></router-link>

        <div class="modal-body text-center py-5">
          投稿ありがとうございました！<br/>
          プレゼントの当選は、<br/>
          メールアドレスへの送信をもって<br/>
          かえさせていただきます。<br/><br/>

          引き続きキガルニホイクをお楽しみください♪
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thanks"
}
</script>


<style scoped>
.modal {
  display: block;
  background: rgba(0, 0, 0, .7);
}

.modal-content {
  background: #f9fafb;
}

.btn-close {
  position: absolute;
  top: 8px;
  right: 10px;
  cursor: pointer;
  z-index: 9999;
}
</style>