<template>
  <div class="mypage-profile">
    <div class="mypage-profile-header">
      <h4>条件設定</h4>
      <p class="m-0 p-0">
        条件設定では、保育園を検索する時の条件を事前に設定することによって、より便利に・より希望にあった保育園を見つけることが可能となります。
      </p>
    </div>
    <div class="mypage-condicion-main mt-3">
     <div class="card">
       <div class="card-body">
         <form>
             <div class="form-group-container">
              <div class="row">
                <div class="col-md-2">
                  <div class="input-label">
                    <span>優先度</span>
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="input-group-container-right">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos vel est porro doloremque laboriosam et? Tempora blanditiis vero possimus. Quis hic at quam vel dolorem modi voluptates non alias rerum?
                  </div>
                </div>
              </div>
            </div>
         </form>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Condition",
  data() {
    return {
      username: true,
      email: true,
      phone: true,
      address: true,
    };
  },
  methods: {
  
  },
};
</script>

<style lang="scss" scoped>
.mypage-profile-header h4 {
  color: #333333;
  position: relative;
  margin-bottom: 25px;
  &::after {
    content: "";
    display: block;
    clear: both;
    background: #333333;
    width: 78%;
    height: 1px;
    position: absolute;
    right: 7px;
    top: 14px;
  }
}
.mypage-profile-prfileimage {
  p {
    font-size: 13px;
  }
}
.form-group-container {
  margin: 0 !important;
}
.mypage-profile-singlebox {
  display: flex;
  justify-content: start;
  align-items: center;
  .mypage-profile-singlebox-label {
    margin-right: 10px;
    width: 15%;
  }
  .mypage-profile-singlebox-border {
    margin-right: 10px;
    width: 2%;
    &::after {
      content: "";
      display: block;
      clear: both;
      height: 20px;
      width: 1px;
      background: #666;
    }
  }
  .mypage-profile-singlebox-main {
    width: 80%;
  }
}
.btn-link {
  color: #333333 !important;
}
.form-group-container {
  .input-label {
    background: #AAAAAA;
    color: #fff;
  }
}
</style>