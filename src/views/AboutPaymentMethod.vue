<template>
  <div>
    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">料金説明</li>
        </ol>
      </nav>
    </div>

    <div class="container my-5 position-relative">
      <div class="position-absolute top-0 w-100 h-100"></div>
      <img src="../assets/images/5000001.png" alt="EXY" class="img-fluid w-100">
    </div>
    <div class="position-relative">
      <div class="position-absolute top-0 w-100 h-100"></div>
      <img src="../assets/images/5000002.png" alt="EXY" class="img-fluid w-100">
    </div>

    <div class="space-100"></div>
    <div class="container">
      <div class="text-center text-base fw-bold mb-4">キガルニホイクで使えるお支払い方法</div>
      <table>
        <tr>
          <td class="text-center"><span class="text-decoration-underline">クレジット支払い</span></td>
          <td class="text-sm">
            <div>
              取扱カードは以下の通りです。<br/>
              全てのカード会社で一括払いが可能となっております。
            </div>
            <div class="my-4">
              <img src="../assets/images/_2021-04-28_170823.png" alt="EXY">
            </div>
            <div>
              ※お客様と異なる名義のクレジットカードはご利用いただけません。<br/>
              ※決済システム上、クレジットカード利用控は発行しておりません。<br/>
              ※クレジットカードでのお支払いに関するお問い合わせはこちらにご連絡ください。
            </div>
          </td>
        </tr>
        <tr>
          <td class="text-center"><span class="text-decoration-underline">銀行振り込み</span></td>
          <td class="text-sm">
            【振込先】三井住友銀行（ミツイスミトモギンコウ）西梅田支店（ニシノダシテン）<br/>
            普通0000000 (ｶﾌﾞ)エクシィ
          </td>
        </tr>
        <tr>
          <td class="text-center"><span class="text-decoration-underline">ポイント支払い</span></td>
          <td></td>
        </tr>
        <tr>
          <td class="text-center"><span class="text-decoration-underline">クーポンコード支払い</span></td>
          <td></td>
        </tr>
      </table>

      <div class="border border-color-707070 p-3 mb-5">
        <div class="text-base fw-bold"><span class="color-cb3a82">＃</span> クレジットカードで支払う</div>
        <div id="collapseOne" class="accordion-collapse collapse show collapse-body-1" aria-labelledby="panelsStayOpen-headingOne">
          <div class="my-3">
            <div class="d-flex mb-2">
              <div class="flex-shrink-1">
                <img src="../assets/images/Mask_Group_73.png" alt="EXY" class="img-fluid">
              </div>
              <div class="ms-4 text-base">
                <div class="color-cb3a82 mb-2">ご予約前にマイページで支払い登録を行いましょう</div>
                <ul class="list-unstyled m-0">
                  <li>
                    <span>STEP１</span>
                    <span>ご予約画面の「お支払い方法変更」をクリック</span>
                  </li>
                  <li>
                    <span>STEP２</span>
                    <span>お支払い方法変更の画面から「クーポンコードで支払い」を選択</span>
                  </li>
                  <li>
                    <span>STEP３</span>
                    <span>取得済みの11桁のクーポンコードを入力後、「お支払い方法変更」をクリック。ご予約画面にクーポンコードの内容が反映されます。</span>
                  </li>
                </ul>
                <div class="text-sm mt-2 color-707070">
                  ※ご予約時、決済時でもご登録済みであればお支払い方法変更が可能です
                </div>
              </div>
            </div>
            <div class="fw-bold my-3">デビットカードのご登録について</div>
            <div class="text-sm">
              ご利用いただいているカードによりご登録の可否が異なっております。デビットカードのご利用をご希望する場合は、お手持ちのカードを試しにご登録いただき、エラーが発生しないかどうかをご確認ください。エラーが発生する場合は、別のカードでのご登録をお願いします。
            </div>
            <div class="fw-bold my-3">ご注意ください</div>
            <div class="text-sm">
              ・完了報告が届いてから72時間以内にご決済いただけない場合、完了報告に記載されている金額で自動的に決済が実行されます。<br/>
              ・クーポンコード登録時、エラーが発生する場合は、サポートセンサーまでお問い合わせください。<br/>
              ・一度クーポンコード決済をした後に、クレジットカード決済・ポイント決済に変更することはできません。
            </div>
          </div>
        </div>
        <div class="text-center">
          <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"></button>
        </div>
      </div>


      <div class="border border-color-707070 p-3 mb-5">
        <div class="text-base fw-bold"><span class="color-cb3a82">＃</span> クーポンコードで支払う</div>
        <div id="collapseTwo" class="accordion-collapse collapse show collapse-body-1" aria-labelledby="panelsStayOpen-headingOne">
          <div class="my-3">
            <div class="d-flex mb-2">
              <div class="flex-shrink-1">
                <img src="../assets/images/Image_110.png" alt="EXY" class="img-fluid">
              </div>
              <div class="ms-4 text-base">
                <div class="color-cb3a82 mb-2">ご予約前にマイページで支払い登録を行いましょう</div>
                <ul class="list-unstyled m-0">
                  <li>
                    <span>STEP１</span>
                    <span>ご予約画面の「お支払い方法変更」をクリック</span>
                  </li>
                  <li>
                    <span>STEP２</span>
                    <span>お支払い方法変更の画面から「クーポンコードで支払い」を選択</span>
                  </li>
                  <li>
                    <span>STEP３</span>
                    <span>取得済みの11桁のクーポンコードを入力後、「お支払い方法変更」をクリック。ご予約画面にクーポンコードの内容が反映されます。</span>
                  </li>
                </ul>
                <div class="text-sm mt-2 color-707070">
                  ※ご予約時、決済時でもご登録済みであればお支払い方法変更が可能です
                </div>
              </div>
            </div>
            <div class="fw-bold my-3">ご注意ください</div>
            <div class="text-sm">
              ・完了報告が届いてから72時間以内にご決済いただけない場合、完了報告に記載されている金額で自動的に決済が実行されます。<br/>
              ・クーポンコード登録時、エラーが発生する場合は、サポートセンサーまでお問い合わせください。<br/>
              ・一度クーポンコード決済をした後に、クレジットカード決済・ポイント決済に変更することはできません。
            </div>
          </div>
        </div>
        <div class="text-center">
          <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"></button>
        </div>
      </div>


      <div class="border border-color-707070 p-3 mb-5">
        <div class="text-base fw-bold"><span class="color-cb3a82">＃</span> クーポンコードで支払う</div>
        <div id="collapseThree" class="accordion-collapse collapse show collapse-body-1" aria-labelledby="panelsStayOpen-headingOne">
          <div class="my-3">
            <div class="d-flex mb-2">
              <div class="flex-shrink-1">
                <img src="../assets/images/Image_110.png" alt="EXY" class="img-fluid">
              </div>
              <div class="ms-4 text-base">
                <div class="color-cb3a82 mb-2">ご予約前にマイページで支払い登録を行いましょう</div>
                <ul class="list-unstyled m-0">
                  <li>
                    <span>STEP１</span>
                    <span>ご予約画面の「お支払い方法変更」をクリック</span>
                  </li>
                  <li>
                    <span>STEP２</span>
                    <span>お支払い方法変更の画面から「クーポンコードで支払い」を選択</span>
                  </li>
                  <li>
                    <span>STEP３</span>
                    <span>取得済みの11桁のクーポンコードを入力後、「お支払い方法変更」をクリック。ご予約画面にクーポンコードの内容が反映されます。</span>
                  </li>
                </ul>
                <div class="text-sm mt-2 color-707070">
                  ※ご予約時、決済時でもご登録済みであればお支払い方法変更が可能です
                </div>
              </div>
            </div>
            <div class="fw-bold my-3">ご注意ください</div>
            <div class="text-sm">
              ・完了報告が届いてから72時間以内にご決済いただけない場合、完了報告に記載されている金額で自動的に決済が実行されます。<br/>
              ・クーポンコード登録時、エラーが発生する場合は、サポートセンサーまでお問い合わせください。<br/>
              ・一度クーポンコード決済をした後に、クレジットカード決済・ポイント決済に変更することはできません。
            </div>
          </div>
        </div>
        <div class="text-center">
          <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"></button>
        </div>
      </div>

      <div class="border border-color-707070 p-3 mb-5">
        <div class="text-base fw-bold"><span class="color-cb3a82">＃</span> クーポンコードで支払う</div>
        <div id="collapseFour" class="accordion-collapse collapse show collapse-body-1" aria-labelledby="panelsStayOpen-headingOne">
          <div class="my-3">
            <div class="d-flex mb-2">
              <div class="flex-shrink-1">
                <img src="../assets/images/Image_111.png" alt="EXY" class="img-fluid">
              </div>
              <div class="ms-4 text-base">
                <div class="color-cb3a82 mb-2">ご予約前にマイページで支払い登録を行いましょう</div>
                <ul class="list-unstyled m-0">
                  <li>
                    <span>STEP１</span>
                    <span>ご予約画面の「お支払い方法変更」をクリック</span>
                  </li>
                  <li>
                    <span>STEP２</span>
                    <span>お支払い方法変更の画面から「クーポンコードで支払い」を選択</span>
                  </li>
                  <li>
                    <span>STEP３</span>
                    <span>取得済みの11桁のクーポンコードを入力後、「お支払い方法変更」をクリック。ご予約画面にクーポンコードの内容が反映されます。</span>
                  </li>
                </ul>
                <div class="text-sm mt-2 color-707070">
                  ※ご予約時、決済時でもお支払い方法変更が可能です<br>
                  ※クーポンコード支払いでは、予約お支払い時のキガルニホイクポイントは発生しません。
                </div>
              </div>
            </div>
            <div class="fw-bold my-3">ご注意ください</div>
            <div class="text-sm">
              ・完了報告が届いてから72時間以内にご決済いただけない場合、完了報告に記載されている金額で自動的に決済が実行されます。<br/>
              ・クーポンコード登録時、エラーが発生する場合は、サポートセンサーまでお問い合わせください。<br/>
              ・一度クーポンコード決済をした後に、クレジットカード決済・ポイント決済に変更することはできません。
            </div>
          </div>
        </div>
        <div class="text-center">
          <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"></button>
        </div>
      </div>

      <div class="text-base border-bottom mb-3">キャンセル・延長・日程変更・完了報告未承認</div>
      <div class="mb-3">
        <div class="text-base fw-bold my-2">キャンセル費用について</div>
        <div class="text-sm">
          保育開始予定日から、<br/>
          ・前日キャンセルの場合：無料<br/>
          ・当日キャンセルの場合：予約手数料（お支払い予定額の50%）が発生します<br/>
          ※無断キャンセルの場合は、予約手数料の他にキガルニホイクの利用制限が発生する場合がございます。
        </div>
        <div class="text-end">
          <router-link :to="{name:'Faqs.Detail'}" class="text-decoration-underline">詳しく見る ＞</router-link>
        </div>
      </div>
      <div class="mb-3">
        <div class="text-base fw-bold my-2">延長について</div>
        <div class="text-sm">
          当日、保育時間が予約時間よりも延長となった場合、延長料金が発生します。<br/>
          延長料金は予約した保育園によって違いますので、予約後は必ず保育園の詳細画面をご一読くださいますようお願い申し上げます。<br/>
          延長時間によって変更となったお支払い料金は、保育園からの完了報告にてご確認ください。<br/>
          完了報告に相違があった場合、サポートデスクへご連絡くださいませ。
        </div>
        <div class="text-end">
          <router-link :to="{name:'Faqs.Detail'}" class="text-decoration-underline">詳しく見る ＞</router-link>
        </div>
      </div>
      <div class="mb-3">
        <div class="text-base fw-bold my-2">日時・時間変更について</div>
        <div class="text-sm">
          予約確定後は、保育園が対応可能なスケジュールの範囲内で、時間変更が可能です。<br/>
          日時・時間変更を行なった場合、予約確定から予約リクエスト中になります。<br/>
          保育園が予約の確定を行なった段階で、日時・時間の変更が確定となりますのでご注意ください。
        </div>
        <div class="text-end">
          <router-link :to="{name:'Faqs.Detail'}" class="text-decoration-underline">詳しく見る ＞</router-link>
        </div>
      </div>
      <div class="mb-3">
        <div class="text-base fw-bold my-2">完了報告未承認について</div>
        <div class="text-sm">
          キガルニホイクでは完了報告の承認後、決済を行います。<br/>
          完了報告到着後、72時間経過しても決済が行われない場合、「完了報告未承認」として、予約段階で指定されたお支払い先にてお支払いを行いますのでご注意ください。<br/>
          また「完了報告未承認」となったユーザー様は、キガルニホイクの利用制限が発生する場合がございます。
        </div>
        <div class="text-end">
          <router-link :to="{name:'Faqs.Detail'}" class="text-decoration-underline">詳しく見る ＞</router-link>
        </div>
      </div>
    </div>

    <div class="space-100"></div>
    <div class="container mb-5">
      <div class="row justify-content-center text-center">
        <div class="col-md-10">
          <router-link :to="{name:'Faqs'}">
            <img src="../assets/images/group-4205.png" alt="EXY" class="img-fluid">
          </router-link>
        </div>
      </div>
    </div>

    <registration-link/>
    <div class="space-100"></div>
  </div>
</template>

<script>
import RegistrationLink from "../components/RegistrationLink";

export default {
  name: "AboutPaymentMethod",
  components: { RegistrationLink }
}
</script>

<style scoped lang="scss">

table {
  border-collapse: collapse;
  margin-bottom: 25px;
  width: 100%;

  tr {
    td {
      border: 1px solid #BABABA;
      padding: 15px 10px;

      &:first-child {
        background: #FBEEF5 0 0 no-repeat padding-box;
      }
    }
  }
}

.d-flex {
  img {
    max-width: 250px;
  }
}

.accordion-button {
  padding: 0;
  width: auto;
  color: #333333;
  box-shadow: inherit;
  display: inline-flex;
  background: transparent;
}

li {
  overflow: hidden;
  padding: 7px 0;

  span {
    float: left;

    &:first-child {
      width: 60px;
      position: relative;
      border: 1px solid #707070;
      text-align: center;
      display: inline-block;
    }

    &:last-child {
      width: calc(100% - 60px);
      padding-left: 5px;
    }
  }
}
</style>