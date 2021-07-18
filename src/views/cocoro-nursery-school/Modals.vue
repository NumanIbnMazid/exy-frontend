<template>
    <!-- Modal -->
    <!-- Add Contact Modal -->
    <div class="modal fade" id="parentRegistrationModal" tabindex="-1" aria-labelledby="parentRegistrationModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title --color-e6006e" id="parentRegistrationModalLabel">緊急連絡先追加</h5>
                    <button type="button" class="border rounded-circle bg-dark text-white ps-2 pe-2" data-bs-dismiss="modal" aria-label="Close">X</button>
                </div>
                <div class="modal-body m-4">
                    <p>
                        追加したい方の情報を入力してください。このフォームで登録された情報は、緊急時の連絡の
                        みに使用されます。
                    </p>
                    <div class="row border border-2 p-2">
                        <div class="col-xl-1 col-lg-1 col-md-2 col-sm-4 col-12 text-center">
                            <i class="fa fa-exclamation-triangle text-3xl mt-2 --color-8fc31f"></i>
                        </div>
                        <div class="col-xl-11 col-lg-11 col-md-10 col-sm-8 col-12">
                            緊急連絡者様は、安全の都合上、保育園の送迎をしていただくことは出来ません。
                            送迎をされる場合は、必す【送迎者】に登録をお願いいたします。
                        </div>
                    </div>
                    <div class="row mt-4 mb-4">
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-12">
                            <span>氏名</span>
                        </div>
                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-12">
                            <input type="text" class="p-1 w-50 text-xl border border-2 rounded" placeholder="">
                        </div>
                    </div>
                    <div class="row mt-4 mb-4">
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-12">
                            <span>族柄</span>
                        </div>
                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-12">
                            <select class="p-2 w-25 border border-2 rounded bg-light form-text">
                                <option selected>選択</option>
                                <option value="父親">父親</option>
                                <option value="祖父・相母">祖父・相母</option>
                                <option value="叔父・叔母">叔父・叔母</option>
                                <option value="その他">その他</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-4 mb-4">
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-12">
                            <span>電話番号</span>
                        </div>
                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-12">
                            <input type="text" class="p-1 w-50 text-xl border border-2 rounded" placeholder="">
                            <div class="form-text">※ハイフンは付けずに入力してください</div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="border border-1 border-dark p-1 ps-5 pe-5 bg-white" data-bs-dismiss="modal">戻る</button>
                        <button type="button" class="border border-1 p-1 pt-2 ps-5 pe-5 ms-4 exy-default-btn">保存する</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Add Contact Modal -->
</template>