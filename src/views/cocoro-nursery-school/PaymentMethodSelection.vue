<template>
    <div class="container mt-5 mb-5">
        <p>お支払い方法選択</p>
        <p>お支払い方法を選択してください。保育完了報告時の「お支払い確認」でも変更が可能です。</p>

        <div class="row mt-5">
            <div class="bg-light p-2">
                <span>お支払い方法</span>
            </div>
            <div class="form">
                <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="payment-selection" id="credit-payment">
                    <label class="form-check-label ms-2" for="credit-payment">
                        クレジット支払い
                    </label>
                    <div class="mt-3">
                        <input type="text" class="pt-1 pb-1 ps-2 pe-2 w-50 border border-2 rounded" placeholder="カード様別名: MasterCard  カ ード番号 : ****-****-****-1234 有効期限 : 12月/23年">
                    </div>
                </div>
                <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="payment-selection" id="new-credit">
                    <label class="form-check-label ms-2" for="new-credit">
                        新しいクレジットカード情報を登録する
                    </label>
                    <div class="mt-3 table-responsive">
                        <table class="table table-bordered border-secondary">
                            <thead>
                                <tr class="bg-pink text-center">
                                    <th scope="col" class="fw-normal">カード種別</th>
                                    <th scope="col" class="fw-normal">カード番号 (ハイフン不要)</th>
                                    <th scope="col" class="fw-normal">
                                        名羲人
                                        <br>
                                        ※半角・ローマ字で入力してくたさい
                                    </th>
                                    <th scope="col" class="fw-normal">有効期限 (月/年)</th>
                                    <th scope="col" class="fw-normal">セキュリティコード</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <th>
                                        <select class="p-3 w-100 border border-2 rounded-3 bg-light form-text mt-4 mb-4">
                                            <option selected value="選択">選択</option>
                                            <option value="Visa">Visa</option>
                                            <option value="MasterCard">Master Card</option>
                                            <option value="AmericanExpress">American Express</option>
                                        </select>
                                    </th>
                                    <td>
                                        <input type="text" class="p-3 w-100 border border-2 rounded-3 form-text mt-4 mb-4" placeholder="">
                                    </td>
                                    <td>
                                        <input type="text" class="p-3 w-100 border border-2 rounded-3 form-text mt-4 mb-4" placeholder="">
                                    </td>
                                    <td width="19%">
                                        <div class="row">
                                            <div class="col-12">
                                                <select class="p-3 border border-2 rounded-3 bg-light form-text mt-2 mb-2">
                                                    <option selected>選択</option>
                                                    <option :value='index' v-for="index in 12" :key="index">{{ index }}</option>
                                                </select>
                                                <span class="ms-2">
                                                    月 /
                                                </span>
                                            </div>
                                            <div class="col-12">
                                                <select class="p-3 border border-2 rounded-3 bg-light form-text mt-2 mb-2">
                                                    <option selected>選択</option>
                                                    <option :value='index' v-for="index in [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]" :key="index">{{ index }}</option>
                                                </select>
                                                <span class="ms-2">
                                                    年
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <input type="text" class="p-3 w-100 border border-2 rounded-3 form-text mt-4 mb-4" placeholder="">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="payment-selection" id="bank-transfer">
                    <label class="form-check-label ms-2" for="bank-transfer">
                        銀行振込
                    </label>
                    <div class="row mt-3">
                        <div class="table-responsive col-6">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td class="bg-pink">振込先金融機関</td>
                                        <td>三井住友銀行 〇〇支店</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="payment-selection" id="point-payment">
                    <label class="form-check-label ms-2" for="point-payment">
                        ポイント支払い
                    </label>
                </div>
                <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="payment-selection" id="coupon-code" checked>
                    <label class="form-check-label ms-2" for="coupon-code">
                        クーポンコードを利用する
                    </label>
                    <div class="mt-3">
                        <input type="text" class="pt-1 pb-1 ps-2 pe-2 border border-2 rounded" placeholder="クーポンコードを入力する">
                    </div>
                </div>
            </div>

            <div class="hr-dotted mt-4">
                <hr>
            </div>

            <div class="text-center mt-4">
                <button type="button" class="border border-1 border-secondary p-2 ps-5 pe-5 bg-white" data-bs-dismiss="modal">
                    <span class="ps-5 pe-5">戻る</span>
                </button>
                <button type="button" class="border border-1 p-2 pt-2 ps-5 pe-5 ms-4 exy-default-btn">お支払い方法変更</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PaymentMethodSelection",
        data() {
            return {}
        },
    };
</script>

<style scoped>

</style>