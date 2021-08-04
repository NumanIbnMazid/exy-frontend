<template>
  <div class="wise-popup">
    <div class="header d-flex justify-content-between align-items-center px-2">
      <span>＃明日預ける</span>
      <i class="fa fa-close" @click="$emit('close')"></i>
    </div>
    <div class="popu-body d-flex align-items-center justify-content-between p-4">
      <input type="text" placeholder="エリアからさがす">
      <input type="text" placeholder="沿線からさがす">
    </div>
  </div>
</template>

<script>
export default {
  name: "WiseSearch"
}
</script>

<style scoped lang="scss">
.wise-popup {
  position: absolute;
  top: 100%;
  left: 0;
  width: 320px;

  .header {
    background: #84C942B3;

    span {
      color: #FFFFFF;
    }

    i {
      background: #FFF;
      height: 28px;
      width: 28px;
      line-height: 28px;
      text-align: center;
      border-radius: 50%;
      color: #333;
      font-size: 17px;
      margin: 5px 0;
      cursor: pointer;
    }
  }

  .popu-body {
    background: #FFFFFF 0 0 no-repeat padding-box;
    box-shadow: 0 3px 6px #00000029;

    input {
      border: 1px solid #AAAAAA;
      border-radius: 5px;
      text-align: center;
      width: 45%;
      font-size: 14px;
      padding: 5px;
      line-height: 1.6em;

      &:focus {
        outline: none;
        box-shadow: none !important;
      }
    }
  }
}
</style>