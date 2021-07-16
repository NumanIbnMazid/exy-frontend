<template>
  <div>
    <div class="py-4 bg-light border-bottom border-3"></div>
    <div class="container">
      <div class="text-base fw-bold mt-5 mb-3">特定商取引法に基づく表示</div>
      <ul class="list-unstyled m-0 ps-3">
        <li>
          <span>販売事業者名</span>
          <span>株式会社EXY</span>
        </li>
        <li>
          <span>住 所</span>
          <span>〒550-0014<br/>大阪府大阪市西区北堀江1-2-27 AXIS SOUTH 四ツ橋ビル407号室</span>
        </li>
        <li>
          <span>代表者名</span>
          <span>代表取締役 野村 瑛莉</span>
        </li>
        <li>
          <span>ホームページ</span>
          <span><a href="https://teamexy.com">https://teamexy.com</a></span>
        </li>
        <li>
          <span>メール</span>
          <span>メール</span>
        </li>
        <li>
          <span>TEL</span>
          <span>TEL</span>
        </li>
        <li>
          <span>販売価格帯</span>
          <span>利用内容によって異なります。</span>
        </li>
        <li>
          <span>商品等の引き渡し時期</span>
          <span>
            保護者：本サービス上で予約成立後、予約内容に従い子ども預かりサービスが提供されいます。<br>
            保育者：本サービス上への登録が完了し、当社基準での審査完了後、保育者一覧に掲載され、そ の後子ども預かり依頼の受注等の本サービスが利用可能な状態となります。
          </span>
        </li>
        <li>
          <span>代金の支払時期および方法</span>
          <span>クレジットカード／銀行口座振り込み／クーポンコード支払いによるご利用毎の都度払い（保育サービス終了後のお支払い）</span>
        </li>
        <li>
          <span>商品代金以外に必要な費用</span>
          <span>キガルニホイクサービス手数料（税込）</span>
        </li>
        <li>
          <span>返品の取扱条件</span>
          <span>商品特性上、返品・交換は不可能です。キャンセルについては規約に規定あり。</span>
        </li>
        <li>
          <span>不良品の取扱条件</span>
          <span>商品の特性上、不良品という概念は設けません。</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabFour"
}
</script>

<style scoped lang="scss">
li {
  overflow: hidden;
  padding: 13px 0;
  border-bottom: 1px solid #e8e7e7;

  span {
    float: left;

    &:first-child {
      width: 250px;
      padding-left: 10px;
      position: relative;

      &:after {
        content: "";
        display: block;
        height: 22px;
        width: 3px;
        background: #cb3a82;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    &:last-child {
      width: calc(100% - 250px);
    }
  }
}
</style>