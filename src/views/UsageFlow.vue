<template>
  <div class="usage-flow">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">キガルニホイクの使い方</li>
            <li class="breadcrumb-item active" aria-current="page">ご利用の流れ</li>
          </ol>
        </nav>
      </div>
    </div>

    <section class="cover-background background-position-top" :style="{'background-image': `url(${require('../assets/images/banner.jpg')})`}" style="padding: 100px 0">
      <div class="opacity-medium bg-extra-dark-gray"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 d-flex text-center justify-content-center padding-30px-tb page-title">
            <!-- start page title -->
            <h3 class="mb-0">ご利用の流れ</h3>
            <!-- end page title -->
          </div>
        </div>
      </div>
    </section>

    <!-- For the first time start -->
    <section class="for-the-first-time">
      <div class="container">
        <h3 class="text-center">はじめての方へ</h3>

        <div class="inner">
          <div class="text">
            <p class="mb-0">キガルニホイクは、従来の保育園探しとは違い、自分に合う保育園をWEBサイトで探し、WEBサイトから保育をお願いすることができます。</p>
            <p class="mb-0">会員登録をすれば、「保育園検索」「保育園予約」「子育て相談」「話題の子育て情報ゲット」ができます。</p>
            <p class="mb-0">お子さまには素敵な保育体験、パパ・ママには素敵なリフレッシュタイム、キガルニホイクでキガルニ体験♪</p>
            <p class="mb-0">登録無料で始めてみましょう。</p>
          </div>
          <div class="text-center">
            <img src="https://dummyimage.com/200x200/ece9e9/ece9e9&text=e" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- For the first time end -->

    <!-- Steps start -->
    <section class="steps">
      <div class="container">

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center pos-rel">
            <span class="text-secondary d-inline-block mb-2">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">1</div>
          </div>
          <div class="step-content rounded-3">
            <h5 class="mb-3">ご登録</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/coinview-app.png" alt="">
              <div class="content">
                <a href="#">１．アカウントの作成</a>
                <p>メールアドレスで簡単に登録できます。登録後、メールが届きますのでメールの指示に従い、次のステップにお進みください。</p>
              </div>
            </div>
            <div class="d-flex text-secondary font-weight-light my-4">
              <img src="../assets/images/_jc@2x.png" alt="">
              <div class="content">
                <a href="#">２．プロフィールの登録</a>
                <p>お子さまと保護者さまのプロフィールをご登録ください。安心安全に保育園をご利用いただくために、情報は正確にご記入いただきますようお願いいたします。</p>
              </div>
            </div>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/business_47.png" alt="">
              <div class="content">
                <a href="#">３．本人確認書類などの登録</a>
                <p>月極保育・体験保育ご予約をご予定の方は、本人確認書類(※1)のご登録をお願いいたします。（園見学予約をご予定の方は、本人確認書類等の登録は必要ありません。）
                  書類登録には審査期間があります。</p>
                <p>※本人確認書類は、免許証・パスポート(2020年1月末まで発行のものに限る)・保険証など現住所が確認できるもの、またお子さまの本人確認として母子手帳が必要です。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center pos-rel">
            <span class="text-secondary d-inline-block mb-2">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">2</div>
          </div>
          <div class="step-content rounded-3">
            <h5 class="mb-3">保育園をさがす</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/ID3543293.png" alt="">
              <div class="content">
                <p>会員登録が完了後はすぐに、園見学のご予約や、子育て相談コーナーのご利用が可能です。
                  なお、体験保育（一時保育）や月極保育のご予約に関しては、本人確認書類の登録完了後にご利用可能となります。</p>
              </div>
            </div>
            <div class="text-secondary font-weight-light">
              <h5 class="bg-gradient-ib">まずは気になる保育園をみつけましょう！</h5>
              <p>実際の保育に関するコラム記事や、過去のご利用者様からの口コミを参考に、リアルな保育内容をみてから予約進むことができます。</p>
              <p>また、<a href="#">体験保育（一時保育）</a> は園見学とは異なり、実際の保育を体験することができるので、お子さまの感想を聞いてから、月極保育の予約をすることが可能です。</p>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center pos-rel">
            <span class="text-secondary d-inline-block mb-2">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">3</div>
          </div>
          <div class="step-content rounded-3">
            <div class="d-flex text-secondary font-weight-light mb-4">
              <img src="../assets/images/f_f_business_12.png" alt="">
              <div class="content">
                <a href="#">１．予約リクエスト</a>
                <p>希望条件と合致した保育園に、予約リクエストを送ります。</p>
                <p>保育園の予約には、「体験保育（一時保育）予約」「月極保育予約」「園見学予約」があり、全ての予約で予約リクエストを行います。</p>
                <p class=mt-2>※体験保育（一時保育）または月極保育の予約を進めるには、本人確認書類・お支払い情報などの、事前登録が必須の条項がございます。</p>
                <p>詳しくは、予約前の必須登録情報をご確認ください。</p>
              </div>
            </div>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/f_f_business_44.png" alt="">
              <div class="content">
                <a href="#">２．予約確定</a>
                <p>予約リクエストを送ると、登録メールアドレスに保育園から予約の可否に関するメッセージの通知が届きます。</p>
                <p>「予約確定」の場合、マイページにて承認作業を行ってください。</p>
                <p>保育園の状況によっては、日時変更のお願いや、お断りのメッセージが届く場合がありますので、予約リクエスト後は必ずメールの通知をご確認ください。</p>
                <p class="my-4">※一定時間内に予約確定の承認がない場合は、自動キャンセルとなりますのでご注意ください。</p>
              </div>
            </div>
            <h4 class="mb-3">予約は全部で３種類</h4>
            <div class="box-content">
              <div class="left-content">
                <strong>体験保育予約</strong><br>
                <span>（一時保育予約）</span>
              </div>
              <div class="right-content">
                <p>「月極保育を利用する前に、うちの子がこの園の雰囲気に合うか知りたい」というときや、子どもを連れていけない予定のとき、リフレッシュしたいとき、などなど、どのようなシーンでもスポット的にお子さまをお預けいただけます。</p>
                <div class="text-end">
                  <a class="m-0" href="#">体験保育予約の流れ ＞</a>
                </div>
              </div>
            </div>
            <div class="box-content my-4">
              <div class="left-content">
                <strong>月極保育予約</strong>
              </div>
              <div class="right-content">
                <p>月単位でお子さまをお預けいただけます。</p>
                <p>月単位なので生活スタイルに合わせて柔軟に対応することが可能です。</p>
                <p>※保育園の利用履歴によっては、月極保育予約前に【体験保育（一時保育）や園見学】をお願いする場合がございます。</p>
                <div class="text-end">
                  <a class="m-0" href="#">月極保育予約の流れ ＞</a>
                </div>
              </div>
            </div>
            <div class="box-content">
              <div class="left-content">
                <strong>園見学予約</strong>
              </div>
              <div class="right-content">
                <p>保育園を利用する前に、事前に園内の見学をしていただけます。</p>
                <p>実際の保育を見て、直接ご質問やご相談していただくことが可能です。</p>
                <p>大切なお子さまをより安心してお預けいただくために、ぜひご利用ください。</p>
                <div class="text-end">
                  <a class="m-0" href="#">園見学予約の流れ ＞</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center pos-rel">
            <span class="text-secondary d-inline-block mb-2">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">4</div>
          </div>
          <div class="step-content rounded-3">
            <h5 class="mb-3">電子契約書にサイン</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/f_f_object_128.png" alt="">
              <div class="content">
                <p>体験保育（一時保育）・月極保育の予約が確定後、ご利用に関する書類等が登録メールアドレス宛に送付されます。（※園見学予約には書類登録はございません。）</p>
                <p>WEB上で表示された書類を確認し、問題なければサインをします。</p>
                <p>※迷惑メールの設定により届かない場合がございます。必ず予約リクエスト前にメールの設定をご確認ください。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center pos-rel">
            <span class="text-secondary d-inline-block mb-2">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">5</div>
          </div>
          <div class="step-content rounded-3">
            <h5 class="mb-3">登園まで</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/christian-wiediger.png" alt="">
              <div class="content">
                <p>登園前に気になる点や伝えておきたいことがある場合は、事前にマイページのトーク画面で保育園へ確認しておきます。</p>
                <p>※予約確定後のキャンセルは、来園予定日の前日（キャンセル可能時期は園による）まで、WEB上でキャンセルが可能です。</p>
                <p>当日の無断キャンセルは、キャンセル料が発生する場合がございます。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center pos-rel">
            <span class="text-secondary d-inline-block mb-2">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">6</div>
          </div>
          <div class="step-content rounded-3">
            <h5 class="mb-3">保育開始</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/ID4329329_.png" alt="">
              <div class="content">
                <a href="#"></a>
                <p>当日は安心してお子さまを保育園にお任せしましょう。</p>
                <p>万が一、保育園との間で解決できない問題が発生した場合は、サポートデスクへお問合わせください。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex mb-5 align-items-start">
          <div class="mr-3 text-center pos-rel">
            <span class="text-secondary d-inline-block mb-2">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count">7</div>
          </div>
          <div class="step-content rounded-3">
            <h5 class="mb-3">保育完了</h5>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/ID4329339.png" alt="">
              <div class="content">
                <p>保育が完了したら、保育園から保育完了の報告を受けましょう。</p>
                <p>ご利用時間やお子様のお名前等、報告内容に誤りがなければ保育完了とします。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

        <!-- STEP Start -->
        <div class="d-flex align-items-start">
          <div class="mr-3 text-center pos-rel">
            <span class="text-secondary d-inline-block mb-2">STEP</span>
            <div class="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center step-count"><span></span>8</div>
          </div>
          <div class="step-content rounded-3">
            <h5 class="mb-3">園口コミ・お支払い</h5>
            <div class="d-flex text-secondary font-weight-light mb-4">
              <img src="../assets/images/8-1.png" alt="">
              <div class="content">
                <a href="#">１．園口コミ</a>
                <p>保育完了後、保育園より完了報告が届きます。<br/>報告内容に問題が無ければ、報告を承認し、口コミを記入します。</p>
              </div>
            </div>
            <div class="d-flex text-secondary font-weight-light">
              <img src="../assets/images/8-2.png" alt="">
              <div class="content">
                <a href="#">２．お支払い</a>
                <p>お支払いをします。<br/>お支払い方法は、クレジットカード払い・ポイント支払い・クーポンコードの３種類です。詳しくはコチラをご確認ください。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- STEP End -->

      </div>
    </section>
    <!-- Steps end -->

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="garden-word">
              <h3>子育て相談コーナー</h3>
              <a href="#">使い方はこちら ＞</a>
            </div>
          </div>
          <div class="col-6">
            <div class="garden-word">
              <h3>園口コミ</h3>
              <a href="#">使い方はこちら ＞</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-rules">
      <h3 class="text-center">ご利用いただく際のルールとマナーについて</h3>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <p>キガルニホイクでは、ご利用者様同士で直接やり取りができるコンテンツもご用意しています。</p>
            <p>お互いを思いやり、楽しく気持ちの良いコミュニケーションが取れるようご協力お願い致します。</p>
            <p>（※当サイトご利用の前には、ガイドラインをご一読ください。）</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <a href="#">
              <img src="../assets/images/sinkitouroku.png" alt="" class="img-fluid rounded">
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "UsageFlow"
}
</script>

<style scoped>

</style>