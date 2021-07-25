<template>
  <div class="profile-info-page">
    <div class="breadcrumb-border">
      <div class="container">
        <nav
          class="py-2"
          style="--bs-breadcrumb-divider: '>'"
          aria-label="breadcrumb"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">新規会員登録</li>
          </ol>
        </nav>
      </div>
    </div>
    <section class="profile-info-one-area mt-5 mb-5">
      <div class="container">
        <div class="auth-page-header mb-5">
          <div class="text-lg fw-bold border-bottom mb-2">
            <img src="../../../assets/images/svg/title-left.svg" alt="EXY" />
            お子さまの情報登録
          </div>
          <p class="m-0 p-0">
            保育園を利用するお子さまの情報をご登録ください。
          </p>
        </div>
        <div class="profile-info-two-body">
          <form novalidate>
            <div class="card">
              <div class="card-header">
                <h5>第一子</h5>
              </div>
              <div class="card-body">
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                          >お名前（お子さま）
                          <span class="badge badge-exy">必 須</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <div class="row">
                          <div class="col-md-5">
                            <div class="form-group row mt-3">
                              <label class="col-sm-3 col-form-label"
                                >姓：</label
                              >
                              <div class="col-sm-9 m-auto">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="例）保育"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="form-group row mt-3">
                              <label class="col-sm-3 col-form-label"
                                >名：</label
                              >
                              <div class="col-sm-9 m-auto">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="例）太郎"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                          >ふりがな（お子さま）
                          <span class="badge badge-exy">必 須</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <div class="row">
                          <div class="col-md-5">
                            <div class="form-group row mt-3">
                              <label class="col-sm-3 col-form-label"
                                >姓：</label
                              >
                              <div class="col-sm-9 m-auto">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="例）ほいく"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="form-group row mt-3">
                              <label class="col-sm-3 col-form-label"
                                >名：</label
                              >
                              <div class="col-sm-9 m-auto">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="例）たろう"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                  <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                          >性別 <span class="badge badge-exy">必 須</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <label><input type="radio" /> 男の子</label>
                        <label class="profile-info-radio"
                          ><input type="radio" /> 女の子</label
                        >
                        <label class="profile-info-radio"
                          ><input type="radio" /> 未回答</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                          >生年月日 <span class="badge badge-exy">必 須</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                         <div class="row">
                      <div class="col-md-3">
                        <div class="form-group row mt-3">
                          <div class="col-sm-10 m-auto">
                            <select class="form-control bg-light" name="year">
                              <option value="1990">1990</option>
                              <option value="1991">1991</option>
                              <option value="1992">1992</option>
                            </select>
                          </div>
                          <label class="col-sm-2 col-form-label">年</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group row mt-3">
                          <div class="col-sm-10 m-auto">
                            <select class="form-control bg-light" name="month">
                              <option>--</option>
                              <option value="01">01</option>
                              <option value="02">02</option>
                              <option value="02">03</option>
                              <option value="02">04</option>
                              <option value="02">05</option>
                              <option value="02">06</option>
                              <option value="02">07</option>
                              <option value="02">08</option>
                              <option value="02">09</option>
                              <option value="02">10</option>
                              <option value="02">11</option>
                              <option value="02">12</option>
                            </select>
                          </div>
                          <label class="col-sm-2 col-form-label">月</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group row mt-3">
                          <div class="col-sm-10 m-auto">
                            <select class="form-control bg-light" name="month">
                              <option>--</option>
                              <option value="01">01</option>
                              <option value="02">02</option>
                              <option value="02">03</option>
                              <option value="02">04</option>
                              <option value="02">05</option>
                              <option value="02">06</option>
                              <option value="02">07</option>
                            </select>
                          </div>
                          <label class="col-sm-2 col-form-label">日</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group row mt-3">
                          <div class="col-sm-10 m-auto">
                            <select class="form-control bg-light" name="month">
                              <option value="生まれ">生まれ</option>
                              <option value="01">生まれ</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="m-0 p-0">※登録後は変更することはできません。</p>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>


             <div class="card mt-3">
              <div class="card-header">
                <h5>第二子</h5>
              </div>
              <div class="card-body">
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span>
                          お名前（お子さま）
                          <span class="badge badge-border">任 意</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <div class="row">
                          <div class="col-md-5">
                            <div class="form-group row mt-3">
                              <label class="col-sm-3 col-form-label"
                                >姓：</label
                              >
                              <div class="col-sm-9 m-auto">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="例）保育"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="form-group row mt-3">
                              <label class="col-sm-3 col-form-label"
                                >名：</label
                              >
                              <div class="col-sm-9 m-auto">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="例）太郎"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span >
                            ふりがな（お子さま）
                          <span class="badge badge-border">任 意</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <div class="row">
                          <div class="col-md-5">
                            <div class="form-group row mt-3">
                              <label class="col-sm-3 col-form-label"
                                >姓：</label
                              >
                              <div class="col-sm-9 m-auto">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="例）ほいく"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="form-group row mt-3">
                              <label class="col-sm-3 col-form-label"
                                >名：</label
                              >
                              <div class="col-sm-9 m-auto">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="例）たろう"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                  <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                          >性別 <span class="badge badge-border">任 意</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <label><input type="radio" /> 男の子</label>
                        <label class="profile-info-radio"
                          ><input type="radio" /> 女の子</label
                        >
                        <label class="profile-info-radio"
                          ><input type="radio" /> 未回答</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                          >生年月日 <span class="badge badge-border">任 意</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                         <div class="row">
                      <div class="col-md-3">
                        <div class="form-group row mt-3">
                          <div class="col-sm-10 m-auto">
                            <select class="form-control bg-light" name="year">
                              <option value="1990">1990</option>
                              <option value="1991">1991</option>
                              <option value="1992">1992</option>
                            </select>
                          </div>
                          <label class="col-sm-2 col-form-label">年</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group row mt-3">
                          <div class="col-sm-10 m-auto">
                            <select class="form-control bg-light" name="month">
                              <option>--</option>
                              <option value="01">01</option>
                              <option value="02">02</option>
                              <option value="02">03</option>
                              <option value="02">04</option>
                              <option value="02">05</option>
                              <option value="02">06</option>
                              <option value="02">07</option>
                              <option value="02">08</option>
                              <option value="02">09</option>
                              <option value="02">10</option>
                              <option value="02">11</option>
                              <option value="02">12</option>
                            </select>
                          </div>
                          <label class="col-sm-2 col-form-label">月</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group row mt-3">
                          <div class="col-sm-10 m-auto">
                            <select class="form-control bg-light" name="month">
                              <option>--</option>
                              <option value="01">01</option>
                              <option value="02">02</option>
                              <option value="02">03</option>
                              <option value="02">04</option>
                              <option value="02">05</option>
                              <option value="02">06</option>
                              <option value="02">07</option>
                            </select>
                          </div>
                          <label class="col-sm-2 col-form-label">日</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group row mt-3">
                          <div class="col-sm-10 m-auto">
                            <select class="form-control bg-light" name="month">
                              <option value="生まれ">生まれ</option>
                              <option value="01">生まれ</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="m-0 p-0">※登録後は変更することはできません。</p>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
              <div class="card-footer bg-white">
                  <div class="pull-right">
                      <router-link :to="{ name: 'ProfileInfoTwo' }">
                          <a href="#">第二子の情報を削除 ＞</a>
                      </router-link>
                  </div>
              </div>
            </div>
            <div class="text-right mt-2 pr-2">
                 <router-link :to="{ name: 'ProfileInfoTwo' }">
                          <a href="#">＋第三子の情報を登録する ＞</a>
                      </router-link>
            </div>
           







            <div class="form-group text-center ">
              <router-link :to="{ name: 'ProfileInfo' }">
                <button
                  type="submit"
                  class="btn text-xl exy-default-btn-outline rounded-0 mt-4"
                >
                  次へ
                </button>
              </router-link> 
              <router-link :to="{ name: 'ProfileInfoTwo' }">
                <button
                  type="submit"
                  class="btn text-xl exy-default-btn rounded-0 mt-4"
                >
                  次へ
                </button>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProfileInfoTwo",
};
</script>

<style scoped>
.profile-info-radio {
  margin-left: 25px;
}
</style>