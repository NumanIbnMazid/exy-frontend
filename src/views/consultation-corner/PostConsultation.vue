<template>
  <div>
    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{name:'ConsultationCorner'}">子育て相談コーナー</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{name:'TalkAboutChildRearing'}">相談する</router-link>
          </li>
          <li class="breadcrumb-item">相談内容の確認</li>
        </ol>
      </nav>
    </div>
    <div class="white-space-45"></div>

    <div class="container py-4">
      <div class="border-bottom text-xl fw-bold ps-3">相談内容の確認</div>
      <div class="ps-3">
        <div class="border border-2 p-2 text-sm color-707070 my-4">
          <div class="mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 20.057 17.828">
              <path id="Icon_awesome-exclamation-triangle" data-name="Icon awesome-exclamation-triangle" d="M19.831,15.322a1.672,1.672,0,0,1-1.448,2.507H1.673A1.672,1.672,0,0,1,.226,15.322L8.581.835a1.672,1.672,0,0,1,2.9,0Zm-9.8-3a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,10.028,12.327ZM8.508,6.569,8.766,11.3a.418.418,0,0,0,.417.4h1.69a.418.418,0,0,0,.417-.4l.258-4.736a.418.418,0,0,0-.417-.441H8.925a.418.418,0,0,0-.417.441Z" transform="translate(0)" fill="#84c942"/>
            </svg>
            まだ相談は投稿されていません
          </div>
          <div>相談の掲載期間は7日間です。<br/> 相談後は、本文の修正はできませんので、内容をよくご確認のうえご相談ください。</div>
        </div>

        <div class="row">
          <div class="col-6 text-sm">
            <div class="title fw-bold">相談するテーマ</div>
            <p class="color-707070">・とりあえず聞いて</p>
            <div class="title fw-bold">ママ・パパのタイプ</div>
            <p class="color-707070">妊娠・出産 / 働くママ・働くパパ</p>
            <div class="title fw-bold">子どものタイプ</div>
            <p class="color-707070">
              年齢： １歳児 / ３歳児<br />
              性別： 女の子
            </p>
          </div>
        </div>

        <div class="title fw-bold">質問内容</div>
        <p class="text-sm color-707070">親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事</p>

        <div class="row">
          <div class="col-6 text-sm">
            <div class="title fw-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="21.246" height="21.246" viewBox="0 0 21.246 21.246">
                <g id="Group_2045" data-name="Group 2045" transform="translate(-78.25 -1457.579)">
                  <circle id="Ellipse_96" data-name="Ellipse 96" cx="9" cy="9" r="9" transform="translate(80 1459.579)" fill="#fff"/>
                  <g id="白抜きのポイントアイコン" transform="translate(90.25 1457.579)">
                    <path id="Path_112" data-name="Path 112" d="M230.2,196.25h-1.465V199.2H230.2a1.487,1.487,0,1,0,0-2.949Z" transform="translate(-231.242 -188.106)" fill="#333"/>
                    <path id="Path_113" data-name="Path 113" d="M10.623,0A10.623,10.623,0,1,0,21.246,10.623,10.624,10.624,0,0,0,10.623,0Zm.333,12.732H9.492v2.147a.747.747,0,0,1-.748.747H8.369a.747.747,0,0,1-.748-.747V7.251A.747.747,0,0,1,8.369,6.5h2.587a3.359,3.359,0,0,1,3.553,3.114A3.359,3.359,0,0,1,10.956,12.732Z" transform="translate(-12)" fill="#333"/>
                  </g>
                </g>
              </svg>

              ベストアンサーへのお礼</div>
            <p class="color-707070">ベストアンサーの回答者に贈るキガルニホイクポイント</p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="23.836" height="23.836" viewBox="0 0 23.836 23.836">
                <g id="白抜きのポイントアイコン" transform="translate(12)">
                  <path id="Path_112" data-name="Path 112" d="M230.377,196.25h-1.643v3.308h1.643a1.669,1.669,0,1,0,0-3.308Z" transform="translate(-230.085 -187.114)" fill="#cccc3b"/>
                  <path id="Path_113" data-name="Path 113" d="M11.918,0A11.918,11.918,0,1,0,23.836,11.918,11.919,11.919,0,0,0,11.918,0Zm.374,14.284H10.649v2.409a.838.838,0,0,1-.839.838h-.42a.838.838,0,0,1-.839-.838V8.135A.838.838,0,0,1,9.389,7.3h2.9a3.768,3.768,0,0,1,3.986,3.493A3.768,3.768,0,0,1,12.292,14.284Z" transform="translate(-12)" fill="#cccc3b"/>
                </g>
              </svg>

              0pt / 500pt中
            </p>
            <div class="title fw-bold">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                <image id="hatena" width="20" height="20" xlink:href="data:image/png;base64,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"/>
              </svg>

              回答リクエスト
            </div>
            <p class="color-707070">回答して欲しい人を指定して質問します</p>
            <p>・年齢、性別を指定</p>
            <p>女性 / 20歳代</p>
            <div class="title fw-bold">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="18" viewBox="0 0 15 18">
                <defs>
                  <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 430 512">
                    <image width="430" height="512" xlink:href="data:image/png;base64,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"/>
                  </pattern>
                </defs>
                <rect id="key" width="15" height="18" fill="url(#pattern)"/>
              </svg>

              匿名投稿
            </div>
            <p class="color-707070">相談をユーザー非公開で投稿します</p>
            <p>・利用しない</p>
          </div>
        </div>

        <p class="text-sm color-707070">※ ご投稿の前にお願い医療情報に関する関連法令や、利用規約に反した投稿となっていないか、ご確認をお願いいたします。 禁止事項に該当する場合は、運営事務局によって投稿を削除させていただく場合がございます。 ※ 投稿に回答があった場合、相談を削除することはできなくなります。 自身を特定しうる情報は慎重に取り扱っていただくようお願いいたします。</p>
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-center py-3 bg-light mt-5">
      <router-link :to="{name:'TalkAboutChildRearing'}" class="border py-2 px-5 text-center d-inline-block border-dark me-5" style="width: 208px;">戻る</router-link>
      <router-link :to="{name:'ChildRearingConsultationCornerDetails'}" class="exy-default-btn px-5">相談を投稿する</router-link>
    </div>

    <div class="white-space-45"></div>
  </div>
</template>

<script>
export default {
  name: "PostConsultation"
}
</script>

<style scoped lang="scss">
.title {
  padding: 4px 8px;
  margin-bottom: 10px;
  border-left: 3px solid #cb3a82;
  background: #FFF2F8 0 0 no-repeat padding-box;
}
</style>