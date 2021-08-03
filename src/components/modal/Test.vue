<template>
     <div class="modal show" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="close">
            <i class="fa fa-times-circle text-2xl"></i>
          </div>
          <div class="p-4 mt-4">
            <h4 class="m-0 p-0 color-cb3a82"><b>希望駅登録</b></h4>
            <hr class="m-0 p-0">
          </div>
          <div class="v-step-one-main p-4 pt-2">
            <div class="row">
              <div class="col-md-6">
                <div class="desiire-station-select-btn-area">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="desiire-station-select-btn-single">
                        <img
                          src="../../../assets/images/desire-station-icon/hyogo.png"
                          alt="EXY"
                          class="w-100"
                          v-if="hydo == false"
                          @click="hydoToggle"
                        />
                        <img
                          src="../../../assets/images/desire-station-icon/hyogo_selected.png"
                          alt="EXY"
                          class="w-100"
                          v-if="hydo"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="desiire-station-select-btn-single">
                        <img
                          src="../../../assets/images/desire-station-icon/kyoto.png"
                          alt="EXY"
                          class="w-100"
                          v-if="kyto == false"
                          @click="kytoToggle"
                        />
                        <img
                          src="../../../assets/images/desire-station-icon/kyoto_selected.png"
                          alt="EXY"
                          class="w-100"
                          v-if="kyto"
                        />
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-6">
                          <div class="desiire-station-select-btn-single">
                            <img
                              src="../../../assets/images/desire-station-icon/osaka.png"
                              alt="EXY"
                              class="w-100"
                              v-if="osaka == false"
                              @click="osakaToggle"
                            />
                            <img
                              src="../../../assets/images/desire-station-icon/osaka_selected.png"
                              alt="EXY"
                              class="w-100"
                              v-if="osaka"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="desiire-station-select-btn-single">
                            <img
                              src="../../../assets/images/desire-station-icon/nara.png"
                              alt="EXY"
                              class="w-100"
                              v-if="nara == false"
                              @click="naraToggle"
                            />
                            <img
                              src="../../../assets/images/desire-station-icon/nara_selected.png"
                              alt="EXY"
                              class="w-100"
                              v-if="nara"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="desiire-station-select-btn-single">
                            <img
                              src="../../../assets/images/desire-station-icon/wakayama.png"
                              alt="EXY"
                              class="w-100"
                              v-if="wakayama == false"
                              @click="wakayamaToggle"
                            />
                            <img
                              src="../../../assets/images/desire-station-icon/wakayama_selected.png"
                              alt="EXY"
                              class="w-100"
                              v-if="wakayama == true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="desiire-station-select-btn-single">
                        <img
                          src="../../../assets/images/desire-station-icon/shiga.png"
                          alt="EXY"
                          class="w-100"
                          v-if="shiga == false"
                          @click="shigaToggle"
                        />
                        <img
                          src="../../../assets/images/desire-station-icon/shiga_selected.png"
                          alt="EXY"
                          class="w-100"
                          v-if="shiga == true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <!-- hyco accordion item  -->
                <div
                  class="accordion"
                  id="accordionPanelsStayOpenExample"
                  v-if="hydo"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        <b>JR</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR東海道本線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR山陰本線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR赤穂線 </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR和田岬線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR加古川線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR福知山線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR山陰本線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR播但線 </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR姫新線 </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR東西線 </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        <b>阪急</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> 阪急神戸線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> 阪急伊丹線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> 阪急今津線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> 阪急甲陽線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> 阪急宝塚線
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header bg-light"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        <b>私鉄</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄けいはんな線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄奈良線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 阪急今津線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄大阪線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄南大阪線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 南海高師浜線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 南海高野線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 泉北高速鉄道
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 阪急宝塚線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 阪急千里線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 大阪モノレール本線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label> <input type="checkbox" /> 京阪本線 </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 京阪中之島線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 阪堺電気軌道阪堺線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 阪神電鉄阪神なんば線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label> <input type="checkbox" /> 水間鉄道 </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end of hyco accordion  -->
                <!-- kyto accordion start  -->
                <div
                  class="accordion"
                  id="accordionPanelsStayOpenExample"
                  v-if="kyto"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        <b>JR</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR東海道本線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR片町線 </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR湖西線 </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR奈良線 </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR関西本線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR福知山線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR山陰本線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR舞鶴線 </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR小浜線 </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header bg-light"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        <b>私鉄</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄京都線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 阪急京都線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 京阪鴨東線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 京阪宇治線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 京福電鉄嵐山本線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 地下鉄烏丸線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 叡山電鉄叡山本線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 京都丹後鉄道宮福線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 京都丹後鉄道宮豊線
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end of kyto accordion  -->
                <!-- Osaka accordion start  -->
                <div
                  class="accordion"
                  id="accordionPanelsStayOpenExample"
                  v-if="osaka"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        <b>JR</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR大阪環状線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR東海道本線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR片町線 </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR阪和線 </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header bg-light"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        <b>Osaka Metro</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 地下鉄御堂筋線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 地下鉄谷町線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 南港ポートタウン線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 地下鉄千日前線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 地下鉄長堀鶴見緑地線
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header bg-light"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        <b>私鉄</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄けいはんな線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄奈良線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄大阪線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄南大阪線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄道明寺線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label> <input type="checkbox" /> 南海本線 </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 南海高師浜線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 南海高野線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 泉北高速鉄道
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 阪急宝塚線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 阪急千里線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 大阪モノレール本線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label> <input type="checkbox" /> 京阪本線 </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 京阪中之島線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 阪堺電気軌道阪堺線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 阪神電鉄阪神なんば線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label> <input type="checkbox" /> 水間鉄道 </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end of Osaka accordion  -->
                <!-- nara accordion start  -->
                <div
                  class="accordion"
                  id="accordionPanelsStayOpenExample"
                  v-if="nara"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        <b>JR</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR奈良線 </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR関西本線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR桜井線 </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR和歌山線
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header bg-light"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        <b>私鉄</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄生駒鋼索線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄けいはんな線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄生駒線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄南大阪線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄橿原線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄田原本線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近鉄吉野線
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- nara of Osaka accordion  -->
                <!-- wakayama accordion start  -->
                <div
                  class="accordion"
                  id="accordionPanelsStayOpenExample"
                  v-if="wakayama"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        <b>JR</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR阪和線 </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR和歌山線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR紀勢本線
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header bg-light"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        <b>私鉄</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-6">
                            <label> <input type="checkbox" /> 南海本線 </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 南海加太線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 南海高野線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> わかやま電鉄貴志川線
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- wakayama of Osaka accordion  -->
                <!-- shiga accordion start  -->
                <div
                  class="accordion"
                  id="accordionPanelsStayOpenExample"
                  v-if="shiga"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        <b>JR</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR東海道本線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label>
                              <input type="checkbox" /> JR北陸本線
                            </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR湖西線 </label>
                          </div>
                          <div class="col-md-4">
                            <label> <input type="checkbox" /> JR草津線 </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header bg-light"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        <b>私鉄</b>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 京阪石山坂本線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 京阪京津線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 近江鉄道本線
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label>
                              <input type="checkbox" /> 信楽高原鐵道
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- nara of Osaka accordion  -->
              </div>
              <div class="form-group text-center mt-4">
                <div class="d-grid">
                  <button class="btn btn-outline-success d-flex justify-content-between" @click="naraToggle">
                    <span>さらに絞り込む</span>
                    <i class="fa fa-angle-down"></i>
                  </button>
                </div>
              </div>
              <div class="form-group text-center mt-4">
                <router-link :to="{ name: 'Mypage.Condition' }">
                  <button class="exy-default-btn">希望カテゴリ登録</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "DesirAreaModal",
  data() {
    return {
      hydo: false,
      kyto: false,
      osaka: true,
      nara: false,
      wakayama: false,
      shiga: false,
    };
  },
  methods: {
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