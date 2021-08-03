<template>
  <div class="mypage-profile">
    <div class="mypage-profile-header">
      <h4>プロフィール設定</h4>
    </div>
    <hr />
    <div class="mypage-profile-profileinof">
      <button class="exy-default-btn" @click="modalSHow = true">
        91 no page
      </button>
      <button class="exy-default-btn" @click="secModalShow = true">
        85 to 90 no page
      </button>
    </div>

   
</div>
</template>

<script>
export default {
  name: "DemoModal",
  data() {
    return {
      modalSHow: false,
      secModalShow: false,
      hydo: false,
      kyto: false,
      osaka: true,
      nara: false,
      wakayama: false,
      shiga: false,
    };
  },
  methods: {
    modalToggle: function () {
      this.modalSHow = !this.modalSHow;
    },
    hydoToggle: function () {
      this.hydo = !this.hydo;
      this.kyto = false;
      this.osaka = false;
      this.nara = false;
      this.wakayama = false;
      this.shiga = false;
    },
    kytoToggle: function () {
      this.kyto = !this.kyto;
      this.hydo = false;
      this.osaka = false;
      this.nara = false;
      this.wakayama = false;
      this.shiga = false;
    },
    osakaToggle: function () {
      this.osaka = !this.osaka;
      this.kyto = false;
      this.hydo = false;
      this.nara = false;
      this.wakayama = false;
      this.shiga = false;
    },
    naraToggle: function () {
      this.nara = !this.nara;
      this.kyto = false;
      this.hydo = false;
      this.osaka = false;
      this.wakayama = false;
      this.shiga = false;
    },
    wakayamaToggle: function () {
      this.wakayama = !this.wakayama;
      this.kyto = false;
      this.hydo = false;
      this.osaka = false;
      this.nara = false;
      this.shiga = false;
    },
    shigaToggle: function () {
      this.shiga = !this.shiga;
      this.kyto = false;
      this.hydo = false;
      this.osaka = false;
      this.nara = false;
      this.wakayama = false;
    },
  },
};
</script>

<style lang="scss">
.exy-default-btn {
  margin-left: 10px;
}

.modal {
  display: block;
  background: rgba(0, 0, 0, 0.7);

  .modal-content {
    background: #fff;
    .close {
      position: absolute;
      top: 0;
      right: 7px;
      cursor: pointer;
      z-index: 9999;
    }
    .card-body {
      .col-md-3 {
        margin-bottom: 10px !important;
        label {
          font-size: 12px;
        }
      }
    }
  }
}
.text-base {
  font-size: 0.8rem !important;
}
.category-select-single-area-header {
  position: relative;
  h6 {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 3px 5px 0 0;
    border-radius: 6px;
    width: 109px;
    text-align: center;
    margin: 15px 0;
    font-size: 13px;
    height: 27px;
    line-height: 21px;
    &::after {
      content: "";
      display: block;
      clear: both;
      height: 1px;
      width: 86%;
      background: #ccc;
      position: absolute;
      top: 27px;
      left: 112px;
    }
  }
}
.bg-707070 {
  background: #707070;
  color: #fff;
}
.accordion-body {
  label {
    font-size: 11px;
  }
}
// .desiire-station-select-btn-single {
//   position: relative;
// }
.desiire-station-select-btn-single > img {
  cursor: pointer;
}
.desiire-station-select-btn-area {
  .col-md-3 {
    margin: 0;
    padding: 5px;
  }
  .col-md-6 {
    margin: 0;
    padding: 5px;
  }
  .col-md-12 {
    margin: -38px 0 0 0;
  }
}
</style>