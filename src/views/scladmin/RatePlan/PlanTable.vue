<template>
    <div class="rate-paln-table table-responsive mt-5">
        <table class="table">
            <thead class="text-center">
                <tr class="bg-light">
                    <th scope="col" class="no-border"></th>
                    <th scope="col" class="no-border fw-normal">メインカテゴリ</th>
                    <th scope="col" class="no-border fw-normal">サブカテゴリ</th>
                    <th scope="col" class="no-border fw-normal">料金プラン名</th>
                    <th scope="col" class="no-border fw-normal">対象年齢</th>
                    <th scope="col" class="no-border fw-normal">料金</th>
                    <th scope="col" class="no-border fw-normal">コメント</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>月極保育</td>
                    <td>プラン</td>
                    <td>通常プラン ｜ ０歳児</td>
                    <td>0歳児</td>
                    <td>￥35,900 ／ 1ヶ月</td>
                    <td>月16日以上のご利用が必要となります。</td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>月極保育</td>
                    <td>プラン</td>
                    <td>通常プラン ｜ １歳児・２歳児</td>
                    <td>1歳児、2歳児</td>
                    <td>￥35,900 ／ 1ヶ月</td>
                    <td>月16日以上のご利用が必要となります。</td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>月極保育</td>
                    <td>プラン</td>
                    <td>通常プラン | ３歳児以上</td>
                    <td>3歳児,4歳児, 5歳児</td>
                    <td>無償化対象 ／ 1ヶ月</td>
                    <td>月16日以上のご利用が必要となります。</td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>月極保育</td>
                    <td>プラン</td>
                    <td>時短プラン | ０歳児</td>
                    <td>0歳児</td>
                    <td>¥20,000 ／ 1ヶ月</td>
                    <td>9:00〜16:00までのお預かり/月16日のご利用に限ります。</td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>月極保育</td>
                    <td>プラン</td>
                    <td>時短プラン | １歳児・２歳児</td>
                    <td>1歳児、2歳児</td>
                    <td>¥15,000 ／ 1ヶ月</td>
                    <td>9:00〜16:00までのお預かり/月16日のご利用に限ります。</td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>月極保育</td>
                    <td>プラン</td>
                    <td>時短プラン | ３歳児以上</td>
                    <td>3歳児,4歳児, 5歳児</td>
                    <td>無償化対象 ／ 1ヶ月</td>
                    <td>9:00〜16:00までのお預かり/月16日のご利用に限ります。</td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>月極保育</td>
                    <td>必要経費</td>
                    <td>保育補助費 | 全年齢対応</td>
                    <td>0歳児,1歳児,<br>2歳児,3歳児,<br>4歳児,5歳児</td>
                    <td>¥3,000 ／ 1ヶ月</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>月極保育</td>
                    <td>オプション</td>
                    <td>手ぶらプラン | ０・１歳児</td>
                    <td>0歳児、1歳児</td>
                    <td>¥4,000 ／ 1ヶ月</td>
                    <td>ご希望の方のみ</td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>月極保育</td>
                    <td>オプション</td>
                    <td>手ぶらプラン | ２歳児</td>
                    <td>2歳児</td>
                    <td>¥3,500 ／ 1ヶ月</td>
                    <td>ご希望の方のみ</td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>月極保育</td>
                    <td>オプション</td>
                    <td>手ぶらプラン | ３歳児以上</td>
                    <td>3歳児,4歳児, 5歳児</td>
                    <td>¥3,000 ／ 1ヶ月</td>
                    <td>ご希望の方のみ</td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>月極保育</td>
                    <td>必要経費</td>
                    <td>入園必要経費</td>
                    <td>0歳児,1歳児, 2歳児,3歳児, 4歳児,5歳児</td>
                    <td>¥25,000</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>体験保育</td>
                    <td>プラン</td>
                    <td>体験保育 ｜ ０歳児</td>
                    <td>0歳児</td>
                    <td>￥15 ／ 1分</td>
                    <td>9:00~18:00（延長保育あり）別途、施設利用料500円が必要です。</td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>体験保育</td>
                    <td>プラン</td>
                    <td>体験保育 ｜ １歳児以上</td>
                    <td>1歳児,2歳児,<br>3歳児,4歳児,<br>5歳児</td>
                    <td>￥10 ／ 1分</td>
                    <td>9:00~18:00（延長保育あり）別途、施設利用料500円が必要です。</td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>体験保育</td>
                    <td>必要経費</td>
                    <td>施設利用料</td>
                    <td>0歳児,1歳児,<br>2歳児,3歳児,<br>4歳児,5歳児</td>
                    <td>￥500</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>体験保育</td>
                    <td>オプション</td>
                    <td>その他費用 ｜ お給食</td>
                    <td>0歳児,1歳児,<br>2歳児,3歳児,<br>4歳児,5歳児</td>
                    <td>￥500 ／ 1食</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>体験保育</td>
                    <td>オプション</td>
                    <td>その他費用 ｜ おやつ</td>
                    <td>0歳児,1歳児,<br>2歳児,3歳児,<br>4歳児,5歳児</td>
                    <td>￥100 ／ 1食</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>体験保育</td>
                    <td>オプション</td>
                    <td>その他費用 ｜ ミルク</td>
                    <td>0歳児,1歳児,<br>2歳児,3歳児,<br>4歳児,5歳児</td>
                    <td>￥100 ／ 1食</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>体験保育</td>
                    <td>オプション</td>
                    <td>その他費用 ｜ 手ぶらプラン</td>
                    <td>0歳児,1歳児,<br>2歳児,3歳児,<br>4歳児,5歳児</td>
                    <td>￥500 ／ 1日</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="background-pinkish custom-check">
                        <input type="checkbox" class="custom-check-box">
                    </td>
                    <td>園見学</td>
                    <td>プラン</td>
                    <td>全年齢</td>
                    <td>0歳児,1歳児,<br>2歳児,3歳児,<br>4歳児,5歳児</td>
                    <td>￥0</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>