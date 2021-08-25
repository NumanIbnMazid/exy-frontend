<template>
    <!-- Modal -->
    <div class="p-5 shadow border border-2">

        <button class="exy-default-btn rounded" data-bs-toggle="modal"
            data-bs-target="#cancelReservationModal">cancelReservationModal (Page: 65)</button>

        <!-- cancelReservationModal -->
        <div class="modal fade" id="cancelReservationModal" tabindex="-1" aria-labelledby="cancelReservationModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="text-end p-2">
                        <button type="button" class="border rounded-circle bg-dark text-white ps-2 pe-2"
                            data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center text-xl fw-bold text-dark">
                            予約キャンセル
                        </div>

                        <hr>

                        <div class="mt-4 p-4">

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    ご利用保育園
                                </div>
                                <div class="py-2 ms-3">
                                    COCORO HOIKUEN 弁天町園
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    ご利用目的
                                </div>
                                <div class="py-2 ms-3">
                                    体験保育 (-時保育)
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    利用日時
                                </div>
                                <div class="py-2 ms-3">
                                    <span class="me-4">2021年2月26日 (金)</span>
                                    <span>09:00~17:00</span>
                                    <span class="ms-5 fw-bold">電話番号</span>
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    プラソ
                                </div>
                                <div class="py-2 ms-3">
                                    体験保育 <span class="ms-4 me-4">|</span> 1歳児以上
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    オプション
                                </div>
                                <div class="py-2 ms-3">
                                    その他費用 <span class="ms-4 me-4">|</span>給食、その他費用 <span class="ms-4 me-4">|</span>おやっ
                                </div>
                            </div>

                            <div class="d-flex align-items-start border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    利用者
                                    <div class="py-3"></div>
                                </div>
                                <div class="py-2 ms-3">
                                    <span class="me-2 fw-bold">1.</span>
                                    <span class="me-4">田中 海</span>
                                    <span class="me-5">令和2年2月25日生 (満1歳)</span>
                                    <span class="ms-4 fw-bold">住所</span>
                                    <div class="mt-2">
                                        男児 アレルギー疾患 : 有
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center mt-4">
                            上記、予約をキャンセルします
                        </div>

                        <div class="text-center mb-4 mt-4">
                            <button class="px-5 py-2 border border-dark bg-white" @click="handleRoute('ChangeReservation')">戻る</button>
                            <button class="exy-default-btn ms-4 px-5 py-2" @click="handleRoute(55)">キャンセル</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- /cancelReservationModal -->

        <button class="exy-default-btn rounded" data-bs-toggle="modal"
            data-bs-target="#reservationConfirmationApprovalModal">reservationConfirmationApproval (Page: 66)</button>

        <!-- reservationConfirmationApprovalModal -->
        <div class="modal fade" id="reservationConfirmationApprovalModal" tabindex="-1"
            aria-labelledby="reservationConfirmationApprovalModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="text-end p-2">
                        <button type="button" class="border rounded-circle bg-dark text-white ps-2 pe-2"
                            data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center text-xl fw-bold text-dark">
                            予約確定の承認
                        </div>

                        <hr>

                        <div class="mt-4 p-4">

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    ご利用保育園
                                </div>
                                <div class="py-2 ms-3">
                                    COCORO HOIKUEN 弁天町園
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    ご利用目的
                                </div>
                                <div class="py-2 ms-3">
                                    体験保育 (-時保育)
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    利用日時
                                </div>
                                <div class="py-2 ms-3">
                                    <span class="me-4">2021年2月26日 (金)</span>
                                    <span>09:00~17:00</span>
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    プラソ
                                </div>
                                <div class="py-2 ms-3">
                                    体験保育 <span class="ms-4 me-4">|</span> 1歳児以上
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    オプション
                                </div>
                                <div class="py-2 ms-3">
                                    その他費用 <span class="ms-4 me-4">|</span>給食、その他費用 <span class="ms-4 me-4">|</span>おやっ
                                </div>
                            </div>

                            <div class="d-flex align-items-start border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    利用者
                                    <div class="py-3"></div>
                                </div>
                                <div class="py-2 ms-3">
                                    <span class="me-2 fw-bold">1.</span>
                                    <span class="me-4">田中 海</span>
                                    <span class="me-5">令和2年2月25日生 (満1歳)</span>
                                    <div class="mt-2">
                                        男児 アレルギー疾患 : 有
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center mt-4">
                            上記、予約をキャンセルします
                        </div>

                        <div class="text-center mb-4 mt-4">
                            <button class="px-5 py-2 border border-dark bg-white" @click="handleRoute(59)">戻る</button>
                            <button class="exy-default-btn ms-4 px-5 py-2" @click="handleRoute(67)">キャンセル</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- /reservationConfirmationApprovalModal -->

        <button class="exy-default-btn rounded" data-bs-toggle="modal"
            data-bs-target="#nurseryReservedModal">nurseryReserved (Page: 67)</button>

        <!-- nurseryReservedModal -->
        <div class="modal fade" id="nurseryReservedModal" tabindex="-1" aria-labelledby="nurseryReservedModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="text-end p-2">
                        <button type="button" class="border rounded-circle bg-dark text-white ps-2 pe-2"
                            data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div class="modal-body">

                        <div class="p-5">
                            <div class="text-center">
                                <span class="fw-bold text-2xl">ご予約いただいた保育園から</span>
                            </div>
                            <div class="text-center mt-3">
                                <span class="fw-bold text-2xl">追加書類記入のお願いが届いております。</span>
                            </div>

                            <div class="text-center mt-5 mb-5">
                                <button class="exy-default-btn mt-4" @click="handleRoute(108)">
                                    確認する
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- /nurseryReservedModal -->


        <button class="exy-default-btn rounded" data-bs-toggle="modal"
            data-bs-target="#removeFromListModal">removeFromList (Page: 68)</button>

        <!-- removeFromListModal -->
        <div class="modal fade" id="removeFromListModal" tabindex="-1"
            aria-labelledby="removeFromListModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="text-end p-2">
                        <button type="button" class="border rounded-circle bg-dark text-white ps-2 pe-2"
                            data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center text-xl fw-bold text-dark">
                            一覧から削除する
                        </div>

                        <hr>

                        <div class="mt-4 p-4">

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    ご利用保育園
                                </div>
                                <div class="py-2 ms-3">
                                    COCORO HOIKUEN 弁天町園
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    ご利用目的
                                </div>
                                <div class="py-2 ms-3">
                                    体験保育 (-時保育)
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    利用日時
                                </div>
                                <div class="py-2 ms-3">
                                    <span class="me-4">2021年2月26日 (金)</span>
                                    <span>09:00~17:00</span>
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    プラソ
                                </div>
                                <div class="py-2 ms-3">
                                    体験保育 <span class="ms-4 me-4">|</span> 1歳児以上
                                </div>
                            </div>

                            <div class="d-flex align-items-center border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    オプション
                                </div>
                                <div class="py-2 ms-3">
                                    その他費用 <span class="ms-4 me-4">|</span>給食、その他費用 <span class="ms-4 me-4">|</span>おやっ
                                </div>
                            </div>

                            <div class="d-flex align-items-start border bg-white shadow shadow-sm mt-1">
                                <div class="bg-kigaruni-smooth-ash px-4 py-2 w-25 text-center">
                                    利用者
                                    <div class="py-3"></div>
                                </div>
                                <div class="py-2 ms-3">
                                    <span class="me-2 fw-bold">1.</span>
                                    <span class="me-4">田中 海</span>
                                    <span class="me-5">令和2年2月25日生 (満1歳)</span>
                                    <div class="mt-2">
                                        男児 アレルギー疾患 : 有
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center mt-4">
                            上記、予約をキャンセルします
                        </div>

                        <div class="text-center mb-4 mt-4">
                            <button class="px-5 py-2 border border-dark bg-white" @click="handleRoute(67)">戻る</button>
                            <button class="exy-default-btn ms-4 px-5 py-2" @click="handleRoute(59)">削除する</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- /removeFromListModal -->
    </div>
</template>

<script>
    // imports
    import router from "../router/index"

    export default {
        name: "Modals",
        data() {
            return {}
        },
        components: {},
        methods: {
            handleRoute(path) {
                if (typeof path === 'number') {
                    router.push({
                        name: 'todo',
                        params: {
                            page: path
                        }
                    })
                } else {
                    if (this.$route.name != path) {
                        router.push({
                            name: path
                        })
                    }
                }
                return
            },
        }
    };
</script>