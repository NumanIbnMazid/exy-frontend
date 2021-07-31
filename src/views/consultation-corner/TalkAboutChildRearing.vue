<template>
  <div class="talk-about-child-rearing">
    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{name:'ConsultationCorner'}">子育て相談コーナー</router-link>
          </li>
          <li class="breadcrumb-item">相談する</li>
        </ol>
      </nav>
    </div>
    <div class="white-space-45"></div>

    <div class="container py-4">
      <div class="border-bottom text-xl fw-bold ps-3">相談する</div>
      <div class="p-3">
        <div class="title text-sm fw-bold">相談するテーマ <span>必 須</span></div>
        <div class="px-3">
          <div class="mb-1">
            <label>
              <input type="radio" class="me-1" name="theme-consult"> とりあえず聞いて
            </label>
          </div>
          <div class="mb-1">
            <label>
              <input type="radio" class="me-1" name="theme-consult"> 保育関連
            </label>
          </div>
          <div class="mb-1">
            <label>
              <input type="radio" class="me-1" name="theme-consult"> 病気・健康
            </label>
          </div>
          <div class="mb-1">
            <label>
              <input type="radio" class="me-1" name="theme-consult"> 趣味・遊び
            </label>
          </div>
          <div class="mb-1">
            <label>
              <input type="radio" class="me-1" name="theme-consult"> 旦那・家族
            </label>
          </div>
          <div class="mb-1">
            <label>
              <input type="radio" class="me-1" name="theme-consult"> 料理・家事
            </label>
          </div>
        </div>

        <div class="title text-sm fw-bold mt-4">ママ・パパのタイプ(複数選択可) <span>必 須</span></div>
        <div class="px-3">
          <div class="row">
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">妊娠・出産
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">不妊
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">シンママ・シンパパ
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">働くママ・働くパパ
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">主婦・主夫
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="title text-sm fw-bold mt-4">子どものタイプ(複数選択可) <span>必 須</span></div>
        <div class="px-3">
          <div class="mb-2">年齢：</div>
          <div class="row">
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">０歳児（6ヶ月未満）
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">０歳児（6ヶ月以上）
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">１歳児
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">２歳児
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">３歳児
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">４歳児
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">５歳児
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">就学中
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <div class="my-2">性別：</div>

          <div class="row">
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">男の子
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">女の子
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-3 mb-1">
              <label class="container-checkbox">回答しない
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="title text-sm fw-bold mt-4">質問内容を書く <span>必 須</span></div>
        <div class="px-3">
          <label>補足文章</label>
          <textarea class="form-control my-1" rows="6"></textarea>
          <p class="text-end text-sm">残り <span class="fw-bold text-base">2000</span> 文字</p>
          <p class="text-sm color-707070">※ ご投稿の前にお願い医療情報に関する関連法令や、利用規約に反した投稿となっていないか、ご確認をお願いいたします。 禁止事項に該当する場合は、運営事務局によって投稿を削除させていただく場合がございます。 <br/>※ 投稿に回答があった場合、相談を削除することはできなくなります。 自身を特定しうる情報は慎重に取り扱っていただくようお願いいたします。</p>

          <div class="border mt-5">
            <div class="bg-fff2f8 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="21.246" height="21.246" viewBox="0 0 21.246 21.246">
                <g id="Group_2045" data-name="Group 2045" transform="translate(-78.25 -1457.579)">
                  <circle id="Ellipse_96" data-name="Ellipse 96" cx="9" cy="9" r="9" transform="translate(80 1459.579)" fill="#fff"/>
                  <g id="白抜きのポイントアイコン" transform="translate(90.25 1457.579)">
                    <path id="Path_112" data-name="Path 112" d="M230.2,196.25h-1.465V199.2H230.2a1.487,1.487,0,1,0,0-2.949Z" transform="translate(-231.242 -188.106)" fill="#333"/>
                    <path id="Path_113" data-name="Path 113" d="M10.623,0A10.623,10.623,0,1,0,21.246,10.623,10.624,10.624,0,0,0,10.623,0Zm.333,12.732H9.492v2.147a.747.747,0,0,1-.748.747H8.369a.747.747,0,0,1-.748-.747V7.251A.747.747,0,0,1,8.369,6.5h2.587a3.359,3.359,0,0,1,3.553,3.114A3.359,3.359,0,0,1,10.956,12.732Z" transform="translate(-12)" fill="#333"/>
                  </g>
                </g>
              </svg>

              <span class="text-sm fw-bold ms-1 me-5">ベストアンサーへのお礼</span>
              <span class="text-xs border border-cb3a82 rounded bg-white d-inline-block px-2">任 意</span>
            </div>
            <div class="p-2">
              <p class="text-sm mb-2 color-707070">ベストアンサーの回答者に贈るキガルニホイクポイント</p>

              <div class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="33.466" height="33.466" viewBox="0 0 33.466 33.466">
                  <g id="白抜きのポイントアイコン" transform="translate(12)">
                    <path id="Path_112" data-name="Path 112" d="M231.041,196.25h-2.307v4.645h2.307a2.343,2.343,0,1,0,0-4.645Z" transform="translate(-225.783 -183.423)" fill="#cccc3b"/>
                    <path id="Path_113" data-name="Path 113" d="M16.733,0A16.733,16.733,0,1,0,33.466,16.733,16.734,16.734,0,0,0,16.733,0Zm.525,20.054H14.951v3.383a1.177,1.177,0,0,1-1.178,1.177h-.59a1.176,1.176,0,0,1-1.178-1.177V11.422a1.176,1.176,0,0,1,1.178-1.177h4.075c3.086,0,5.6,2.2,5.6,4.9S20.344,20.054,17.258,20.054Z" transform="translate(-12)" fill="#cccc3b"/>
                  </g>
                </svg>

                <select class="mx-2 border rounded py-1 px-2">
                  <option>0pt</option>
                  <option>50pt</option>
                  <option>100pt</option>
                  <option>200pt</option>
                  <option>300pt</option>
                  <option>400pt</option>
                  <option>500pt</option>
                </select>

                <span class="text-sm">／ 500pt</span>

              </div>

              <div class="text-end mt-1">
                <router-link :to="{name:'Faqs.Detail'}" class="text-sm text-decoration-underline color-707070">ベストアンサーへのお礼とは？</router-link>
              </div>
            </div>
          </div>

          <div class="border mt-4">
            <div class="bg-fff2f8 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                <image id="hatena" width="20" height="20"
                       xlink:href="data:image/png;base64,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"/>
              </svg>

              <span class="text-sm fw-bold ms-1 me-5">ベストアンサーへのお礼</span>
              <span class="text-xs border border-cb3a82 rounded bg-white d-inline-block px-2">任 意</span>
            </div>
            <div class="p-2 text-sm color-707070">
              <p class="mb-2">回答して欲しい人を指定して質問します</p>

              <div class="mb-1">
                <label>
                  <input type="radio" name="best-answer" checked>
                  利用しない
                </label>
              </div>
              <div class="mb-1">
                <label>
                  <input type="radio" name="best-answer">
                  性別、年代を指定
                </label>

                <span class="ms-4 border text-xs p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                    <g id="白抜きのポイントアイコン" transform="translate(12)">
                      <path id="Path_112" data-name="Path 112" d="M229.63,196.25h-.9v1.8h.9a.91.91,0,1,0,0-1.8Z" transform="translate(-235.975 -192.157)" fill="#707070"/>
                      <path id="Path_113" data-name="Path 113" d="M5.5,0A5.5,5.5,0,1,0,11,5.5,5.5,5.5,0,0,0,5.5,0Zm.173,6.592H4.914V7.7a.387.387,0,0,1-.387.387H4.333A.387.387,0,0,1,3.946,7.7V3.754a.387.387,0,0,1,.387-.387H5.673A1.739,1.739,0,0,1,7.512,4.98,1.739,1.739,0,0,1,5.673,6.592Z" transform="translate(-12 0)" fill="#707070"/>
                    </g>
                  </svg>
                  100pt 利用 / 500pt中
                </span>
              </div>
              <div class="m-2">
                <label>
                  性別：
                  <select class="border rounded py-1 px-2">
                    <option>選択</option>
                    <option>女性</option>
                    <option>男性</option>
                  </select>
                </label>
                <label class="ms-5">
                  年代：
                  <select class="border rounded py-1 px-2">
                    <option>選択</option>
                    <option>19歳以下</option>
                    <option>20歳代</option>
                    <option>30歳代</option>
                    <option>40歳代</option>
                    <option>50歳代</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="best-answer">
                  活躍中の専門家（保育士・栄養士・チャイルドマインダー等）を指定
                </label>

                <span class="ms-4 border text-xs p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                    <g id="白抜きのポイントアイコン" transform="translate(12)">
                      <path id="Path_112" data-name="Path 112" d="M229.63,196.25h-.9v1.8h.9a.91.91,0,1,0,0-1.8Z" transform="translate(-235.975 -192.157)" fill="#707070"/>
                      <path id="Path_113" data-name="Path 113" d="M5.5,0A5.5,5.5,0,1,0,11,5.5,5.5,5.5,0,0,0,5.5,0Zm.173,6.592H4.914V7.7a.387.387,0,0,1-.387.387H4.333A.387.387,0,0,1,3.946,7.7V3.754a.387.387,0,0,1,.387-.387H5.673A1.739,1.739,0,0,1,7.512,4.98,1.739,1.739,0,0,1,5.673,6.592Z" transform="translate(-12 0)" fill="#707070"/>
                    </g>
                  </svg>
                  100pt 利用 / 500pt中
                </span>
              </div>

              <div class="text-end mt-1">
                <router-link :to="{name:'Faqs.Detail'}" class="text-sm text-decoration-underline color-707070">ベストアンサーへのお礼とは？</router-link>
              </div>
            </div>
          </div>


          <div class="border mt-4">
            <div class="bg-fff2f8 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="18" viewBox="0 0 15 18">
                <defs>
                  <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 430 512">
                    <image width="430" height="512"
                           xlink:href="data:image/png;base64,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"/>
                  </pattern>
                </defs>
                <rect id="key" width="15" height="18" fill="url(#pattern)"/>
              </svg>


              <span class="text-sm fw-bold ms-1 me-5">匿名投稿</span>
              <span class="text-xs border border-cb3a82 rounded bg-white d-inline-block px-2">任 意</span>
            </div>
            <div class="p-2 text-sm color-707070">
              <p class="mb-2">相談をユーザー非公開で投稿します</p>

              <div class="mb-1">
                <label>
                  <input type="radio" name="anonymous-post" checked>
                  利用しない
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="anonymous-post">
                  ユーザーを非公開にする
                </label>

                <span class="ms-4 border text-xs p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                    <g id="白抜きのポイントアイコン" transform="translate(12)">
                      <path id="Path_112" data-name="Path 112" d="M229.63,196.25h-.9v1.8h.9a.91.91,0,1,0,0-1.8Z" transform="translate(-235.975 -192.157)" fill="#707070"/>
                      <path id="Path_113" data-name="Path 113" d="M5.5,0A5.5,5.5,0,1,0,11,5.5,5.5,5.5,0,0,0,5.5,0Zm.173,6.592H4.914V7.7a.387.387,0,0,1-.387.387H4.333A.387.387,0,0,1,3.946,7.7V3.754a.387.387,0,0,1,.387-.387H5.673A1.739,1.739,0,0,1,7.512,4.98,1.739,1.739,0,0,1,5.673,6.592Z" transform="translate(-12 0)" fill="#707070"/>
                    </g>
                  </svg>
                  10pt 利用 / 500pt中
                </span>
              </div>

              <div class="text-end mt-1">
                <router-link :to="{name:'Faqs.Detail'}" class="text-sm text-decoration-underline color-707070">匿名投稿とは？</router-link>
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center justify-content-center py-3 bg-light mt-5">
            <router-link :to="{name:'ConsultationCorner'}" class="border py-2 px-5 text-center d-inline-block border-dark me-5" style="width: 208px;">戻る</router-link>
            <router-link :to="{name:'PostConsultation'}" class="exy-default-btn px-5">相談を投稿する</router-link>
          </div>

        </div>
      </div>
    </div>

    <div class="white-space-45"></div>
  </div>
</template>

<script>
export default {
  name: "TalkAboutChildRearing"
}
</script>

<style scoped lang="scss">
.talk-about-child-rearing {
  .title {
    padding: 4px 8px;
    margin-bottom: 10px;
    border-left: 3px solid #cb3a82;
    background: #FFF2F8 0 0 no-repeat padding-box;

    span {
      background-color: #cb3a82;
      border-radius: 4px;
      font-size: 12px;
      color: #FFFFFF;
      padding: 0 7px;
      display: inline-block;
      margin-left: 40px;
    }
  }

  .white-space-45 {
    height: 45px;
    background: transparent linear-gradient(180deg, #F4F0F0 0%, #FAFAFA 18%, #FAFAFA 83%, #F4F0F0 100%) 0 0 no-repeat padding-box;
    opacity: 1;
  }
}
</style>