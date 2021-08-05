<template>
  <div>
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">検索</li>
            <li class="breadcrumb-item active" aria-current="page">検索結果</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="row py-3">
        <aside class="col-lg-3 sidebar-search mobile-sidebar-search">
          <div class="widget">
            <div class="widget-title">⽬的からさがす</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <ul>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⼀時保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⽉極保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 病児・病後児保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 障がい児保育</label></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="widget">
            <div class="widget-title">エリアさがす</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <div class="widget-body-title mt-0">地域</div>

                <button class="add-detail-condition mb-3" @click="RailwayLineModel = true">地域を追加する +</button>
                <railway-line v-if="RailwayLineModel" @close="RailwayLineModel = false"></railway-line>

                <div class="widget-body-title mt-0">沿線</div>

                <button class="add-detail-condition" @click="RailwayLineModel = true">地域を追加する +</button>
                <railway-line v-if="RailwayLineModel" @close="RailwayLineModel = false"></railway-line>
              </div>
            </div>
          </div>

          <div class="widget">
            <div class="widget-title">⽇付からさがす</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <div class="mb-3 row">
                  <label class="col-sm-3 col-form-label">⽇付</label>
                  <div class="col-sm-9">
                    <date-picker
                        v-model="date"
                        valueType="format"
                        :disabled-date="disabledBeforeToday"
                        placeholder="日付を選択"
                    ></date-picker>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-sm-3 col-form-label">開始</label>
                  <div class="col-sm-9">
                    <date-picker
                        v-model="start_time"
                        :time-picker-options="timePickerOptions"
                        format="HH:mm"
                        type="time"
                        placeholder="開始時間"
                    ></date-picker>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-sm-3 col-form-label">終了</label>
                  <div class="col-sm-9">
                    <date-picker
                        v-model="end_time"
                        :time-picker-options="timePickerOptions"
                        format="HH:mm"
                        type="time"
                        placeholder="終了時間"
                    ></date-picker>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="widget">
            <div class="widget-title">⼦どもの年齢</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <div class="row">
                  <div class="col-6">
                    <ul>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ０歳児</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ２歳児</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ４歳児</label></li>
                    </ul>
                  </div>
                  <div class="col-6">
                    <ul>
                      <li><label><input class="form-check-input me-1" type="checkbox"> １歳児</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ３歳児</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ５歳児</label></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="widget">
            <div class="widget-title">絞り込み条件</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <div class="widget-body-title mt-0">保育時間</div>
                <ul>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 早朝保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 延⻑保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 夜間保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> お泊まり保育</label></li>
                </ul>
                <div class="widget-body-title">受け⼊れ可能年齢</div>
                <ul>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⽣後半年以内受け⼊れ</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ２歳児まで</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ５歳児まで</label></li>
                </ul>
                <div class="widget-body-title">園規模</div>
                <ul>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⼩規模（19名以下）</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 中規模（59名以下）</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⼤規模（60名以上）</label></li>
                </ul>
                <div class="widget-body-title">特⾊</div>
                <ul>
                  <li><label><input class="form-check-input me-1" type="checkbox"> アレルギー対応可</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 教育(習い事)あり</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⽇・祝開園</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⼿ぶら登園</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 早朝・延⻑保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 園庭あり</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 無添加給⾷あり</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 送迎あり</label></li>
                </ul>
                <button class="add-detail-condition" @click="ShowConditionModel = true">地域を追加する +</button>
                <details-conditions v-if="ShowConditionModel" @close="ShowConditionModel = false"></details-conditions>
              </div>
            </div>
          </div>

          <div class="widget">
            <div class="widget-title">キーワードからさがす</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <div class="color-b2 py-2">キーワードで絞り込む</div>
                <div class="input-group search-by-keyword">
                  <input type="text" class="form-control">
                  <div class="input-group-append">
                    <button class="btn btn-secondary" type="button">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div class="col-lg-9 search-result">

          <h3 class="fw-bold">検索結果</h3>

          <div class="d-flex align-items-center text-center search-result-tab">
            <div class="p-10 flex-fill cursor-pointer text-base" @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]">おすすめ</div>
            <div class="p-10 flex-fill cursor-pointer text-base" @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]">口コミランキング</div>
            <div class="p-10 flex-fill cursor-pointer text-base" @click="activeTab=3" :class="[ activeTab === 3 ? 'active' : '' ]">新着</div>
            <div class="p-10 flex-fill cursor-pointer text-base" @click="activeTab=4" :class="[ activeTab === 4 ? 'active' : '' ]">価格</div>
          </div>

          <div class="search-result-total py-4">検索結果 <span class="text-2xl fw-bold" style="color: #84C942">120</span> 件</div>

          <div class="search-result-content">
            <div v-if="activeTab === 1">
              <router-link :to="{name:'CharacteristicsDetail'}" class="search-result-item" v-for="n in 5" :key="n">
                <div class="d-flex">
                  <div class="search-result-start">
                    <div>
                      <span>追加</span>
                      <span class="text-xl">☆</span>
                    </div>
                  </div>

                  <div>
                    <h4 class="title mb-0 text-lg fw-bold">COCORO HOIKUEN 〇〇園</h4>

                    <div class="row">
                      <div class="col-md-5">
                        <div class="ms-3">
                          <img src="../../assets/images/image-79.png" class="img-fluid w-100" alt="EXY">
                          <div class="d-flex justify-content-between mt-2">
                            <div class="me-1">
                              <img src="../../assets/images/image-81.png" class="img-fluid w-100" alt="EXY">
                            </div>
                            <div class="ms-1">
                              <img src="../../assets/images/image-80.png" class="img-fluid w-100" alt="EXY">
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-7">
                        <div class="search-result-right">
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">概 要</div>
                            <div class="title d-flex text-sm">【園のPR分・自由入力】ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">口 コ ミ</div>
                            <div class="d-flex">
                              <strong>5.0</strong>
                              <div class="search-heart-count ms-2 me-2">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </div>
                              <span>レビュー <strong>10</strong>件</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">所 在 地</div>
                            <div class="d-flex">〒550-0014 大阪府大阪市西区北堀江１丁目２−２７</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">最 寄 駅</div>
                            <div class="d-flex">Osaka Metro「四ツ橋駅」 徒歩10分</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">開園時間</div>
                            <div class="d-flex">
                              <span></span>
                              <span>平</span>
                              <span>7:30-18:30</span>
                              <span>休</span>
                              <span>7:30-18:30</span>
                              <span>休 園 日</span>
                              <span>毎週日曜日</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">定 員</div>
                            <div class="d-flex">定員 １２名</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">特 色</div>
                            <div class="Kindergarten-features">
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </router-link>
            </div>
            <div v-if="activeTab === 2">
              <router-link :to="{name:'CharacteristicsDetail'}" class="search-result-item" v-for="(img, i) in kingImages" :key="i">
                <div class="d-flex">
                  <div class="search-result-start">
                    <div>
                      <span>追加</span>
                      <span class="text-xl">☆</span>
                    </div>
                  </div>

                  <div>
                    <div class="d-flex align-items-center title">
                      <div class="me-2">
                        <img :src="getImgUrl(img.name)" alt="EXY">
                      </div>
                      <div class="mb-0 mt-1 text-lg fw-bold">COCORO HOIKUEN 〇〇園</div>
                    </div>

                    <div class="row">
                      <div class="col-md-5">
                        <div class="ms-3">
                          <img src="../../assets/images/image-79.png" class="img-fluid w-100" alt="EXY">
                          <div class="d-flex justify-content-between mt-2">
                            <div class="me-1">
                              <img src="../../assets/images/image-81.png" class="img-fluid w-100" alt="EXY">
                            </div>
                            <div class="ms-1">
                              <img src="../../assets/images/image-80.png" class="img-fluid w-100" alt="EXY">
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-7">
                        <div class="search-result-right">
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">概 要</div>
                            <div class="title d-flex text-sm">【園のPR分・自由入力】ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">口 コ ミ</div>
                            <div class="d-flex">
                              <strong>5.0</strong>
                              <div class="search-heart-count ms-2 me-2">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </div>
                              <span>レビュー <strong>10</strong>件</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">所 在 地</div>
                            <div class="d-flex">〒550-0014 大阪府大阪市西区北堀江１丁目２−２７</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">最 寄 駅</div>
                            <div class="d-flex">Osaka Metro「四ツ橋駅」 徒歩10分</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">開園時間</div>
                            <div class="d-flex">
                              <span></span>
                              <span>平</span>
                              <span>7:30-18:30</span>
                              <span>休</span>
                              <span>7:30-18:30</span>
                              <span>休 園 日</span>
                              <span>毎週日曜日</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">定 員</div>
                            <div class="d-flex">定員 １２名</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">特 色</div>
                            <div class="Kindergarten-features">
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </router-link>
            </div>
            <div v-if="activeTab === 3">
              <router-link :to="{name:'CharacteristicsDetail'}" class="search-result-item" v-for="n in 5" :key="n">
                <div class="d-flex">
                  <div class="search-result-start">
                    <div>
                      <span>追加</span>
                      <span class="text-xl">☆</span>
                    </div>
                  </div>

                  <div>
                    <div class="d-flex align-items-center title">
                      <div>
                        <span>new</span>
                      </div>
                      <div class="mb-0 mt-1 text-lg fw-bold">COCORO HOIKUEN 〇〇園</div>
                    </div>

                    <div class="row">
                      <div class="col-md-5">
                        <div class="ms-3">
                          <img src="../../assets/images/image-79.png" class="img-fluid w-100" alt="EXY">
                          <div class="d-flex justify-content-between mt-2">
                            <div class="me-1">
                              <img src="../../assets/images/image-81.png" class="img-fluid w-100" alt="EXY">
                            </div>
                            <div class="ms-1">
                              <img src="../../assets/images/image-80.png" class="img-fluid w-100" alt="EXY">
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-7">
                        <div class="search-result-right">
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">概 要</div>
                            <div class="title d-flex text-sm">【園のPR分・自由入力】ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">口 コ ミ</div>
                            <div class="d-flex">
                              <strong>5.0</strong>
                              <div class="search-heart-count ms-2 me-2">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </div>
                              <span>レビュー <strong>10</strong>件</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">所 在 地</div>
                            <div class="d-flex">〒550-0014 大阪府大阪市西区北堀江１丁目２−２７</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">最 寄 駅</div>
                            <div class="d-flex">Osaka Metro「四ツ橋駅」 徒歩10分</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">開園時間</div>
                            <div class="d-flex">
                              <span></span>
                              <span>平</span>
                              <span>7:30-18:30</span>
                              <span>休</span>
                              <span>7:30-18:30</span>
                              <span>休 園 日</span>
                              <span>毎週日曜日</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">定 員</div>
                            <div class="d-flex">定員 １２名</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">特 色</div>
                            <div class="Kindergarten-features">
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </router-link>
            </div>
            <div v-if="activeTab === 4">
              <router-link :to="{name:'CharacteristicsDetail'}" class="search-result-item" v-for="n in 5" :key="n">
                <div class="d-flex">
                  <div class="search-result-start">
                    <div>
                      <span>追加</span>
                      <span class="text-xl">☆</span>
                    </div>
                  </div>

                  <div>
                    <div class="d-flex align-items-center title">
                      <div class="col-md-5 mb-0 mt-1 text-lg fw-bold">COCORO HOIKUEN 〇〇園</div>
                      <div class="col-md-7 text-sm text-dark">
                        <div>
                          <img src="../../assets/images/search/6.png" alt="EXY">
                          15円/1分（０歳児） 10円/1分（1歳児以上）
                        </div>
                        <div>
                          <img src="../../assets/images/search/7.png" alt="EXY">
                          37,900円（0歳児） 35,900円（１歳児以上）
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-5">
                        <div class="ms-3">
                          <img src="../../assets/images/image-79.png" class="img-fluid w-100" alt="EXY">
                          <div class="d-flex justify-content-between mt-2">
                            <div class="me-1">
                              <img src="../../assets/images/image-81.png" class="img-fluid w-100" alt="EXY">
                            </div>
                            <div class="ms-1">
                              <img src="../../assets/images/image-80.png" class="img-fluid w-100" alt="EXY">
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-7">
                        <div class="search-result-right">
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">概 要</div>
                            <div class="title d-flex text-sm">【園のPR分・自由入力】ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">口 コ ミ</div>
                            <div class="d-flex">
                              <strong>5.0</strong>
                              <div class="search-heart-count ms-2 me-2">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </div>
                              <span>レビュー <strong>10</strong>件</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">所 在 地</div>
                            <div class="d-flex">〒550-0014 大阪府大阪市西区北堀江１丁目２−２７</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">最 寄 駅</div>
                            <div class="d-flex">Osaka Metro「四ツ橋駅」 徒歩10分</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">開園時間</div>
                            <div class="d-flex">
                              <span></span>
                              <span>平</span>
                              <span>7:30-18:30</span>
                              <span>休</span>
                              <span>7:30-18:30</span>
                              <span>休 園 日</span>
                              <span>毎週日曜日</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">定 員</div>
                            <div class="d-flex">定員 １２名</div>
                          </div>
                          <div class="dashed-border"></div>
                          <div class="py-2">
                            <div class="w-85">特 色</div>
                            <div class="Kindergarten-features">
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                              <span>英語保育</span>
                            </div>
                          </div>
                          <div class="dashed-border"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import RailwayLine from "./RailwayLine";
import DetailsConditions from "./DetailsConditions";

export default {
  name: "Search",
  data() {
    return {
      date: '',
      end_time: '',
      start_time: '',
      activeTab: 1,
      RailwayLineModel: false,
      ShowConditionModel: false,
      timePickerOptions: {
        start: '00:00',
        step: '00:15',
        end: '23:45'
      },

      kingImages: [
        { name: '1.png' },
        { name: '2.png' },
        { name: '3.png' },
        { name: '4.png' },
        { name: '5.png' },
      ]
    }
  },
  components: {
    DatePicker,
    RailwayLine,
    DetailsConditions
  },
  methods: {
    disabledBeforeToday(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return date < today;
    },
    getImgUrl(img) {
      let image = require.context('../../assets/images/search/', false, /\.png$/)
      return image('./' + img)
    }
  },
}
</script>

<style scoped>

</style>