<template>
  <div class="garden-basic-info">
    <!-- breadcrumb -->
        <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <!-- /breadcrumb -->
    <div class="row w-100 px-4 ps-5">
        <div class="details-tab">
            <div class="px-0 tabs">
                <a @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]"> 園の基本情報</a>
                <router-link :to="{name:'Admin.GardenBasic'}"> 園の保育内容</router-link>
                <a @click="activeTab=3" :class="[ activeTab === 3 ? 'active' : '' ]"> 保護者様への確認事項</a>
                <a > </a>
                <a> </a>
            </div>
        </div>
        <div v-if="activeTab===1" class="tab-1 w-100 pb-5">
            <div class="row w-100 row-1 mt-4 ms-0">
                <div class="col-md-2 left-col">
                    <p class="m-0 p-left text-center">掲載写真</p>
                </div>
                <div class="col-md-10 right-col">
                    <div class="row ps-2">
                        <div class="col-md-4 px-4 py-4">
                            <div class="row crossed cross-box border border-1 border-secondary"></div>
                            <div class="row inner-1 py-1">
                                <p class="m-0 text-lg text-center">外観</p>
                            </div>
                        </div>
                        <div class="col-md-4 px-4 py-4">
                            <div class="row crossed cross-box border border-1 border-secondary"></div>
                            <div class="row inner-1 py-1">
                                <p class="m-0 text-lg text-center">外観 1</p>
                            </div>
                        </div>
                        <div class="col-md-4 px-4 py-4">
                            <div class="row crossed cross-box border border-1 border-secondary"></div>
                            <div class="row inner-1 py-1">
                                <p class="m-0 text-lg text-center">外観 2</p>
                            </div>
                        </div>
                    </div>
                    <div class="row ps-2">
                        <div class="col-md-4 px-4 pb-4">
                            <div class="row crossed cross-box border border-1 border-secondary"></div>
                            <div class="row inner-1 py-1">
                                <p class="m-0 text-lg text-center">外観 3</p>
                            </div>
                        </div>
                        <div class="col-md-8 d-flex align-items-end flex-column">
                            <span class="mt-auto text-4xl px-2 pt-1 mb-3  span-1">+</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row w-100 row-2 mt-5 ms-0 py-2">
                <p class="m-0">基本情報</p>
            </div>
            <div class="row w-100 ms-0 row-3">
                <div class="col-md-12 inner-col">
                    <div class="row inner-1">
                        <div class="col-md-2 left-col py-2">
                            <p class="m-0 text-center">コメント</p>
                        </div>
                        <div class="col-md-10 py-2">
                            <p class="m-0 text-sm pt-1">「えいごとにほんごであそぼう」をテーマに、楽しく自然に英語を身につけることを目標にした保育園</p>
                        </div>
                    </div>
                    <div class="row inner-1">
                        <div class="col-md-2 left-col py-2">
                            <p class="m-0 text-center">園名</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1">COCOROHOIKUEN 弁天町園</p>
                        </div>
                        <div class="col-md-2 py-2 right-col">
                            <p class="m-0 text-center">ふりがな</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1">こころほいくえんべんてんちょうえん</p>
                        </div>
                    </div>
                    <div class="row inner-1">
                        <div class="col-md-2 left-col py-2">
                            <p class="m-0 text-center">住所</p>
                        </div>
                        <div class="col-md-10 py-2 pe-4">
                            <p class="m-0 text-sm pt-1">〒552-0002 <span class="px-2"></span> 大阪府大阪市港区市岡元町２丁目11-30 奥住ビル１階 <span class="px-2 py-1 span-1 pull-right">地図位置確認</span></p>
                        </div>
                    </div>
                    <div class="row inner-1">
                        <div class="col-md-2 left-col py-2">
                            <p class="m-0 text-center pt-2">最寄駅</p>
                        </div>
                        <div class="col-md-10 py-2">
                            <p class="m-0 text-sm pt-1">・JR大阪環状線「弁天町駅」徒歩6分</p>
                            <p class="m-0 text-sm pt-1">・OsakaMetro「弁天町駅」徒歩6分</p>
                        </div>
                    </div>
                    <div class="row inner-1">
                        <div class="col-md-2 left-col py-2">
                            <p class="m-0 text-center">開園時間</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1">平日 <span class="px-2"></span> 7：30〜18：30</p>
                        </div>
                        <div class="col-md-2 py-2 right-col">
                            <p class="m-0 text-center">開園日</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1">月曜日〜日曜日</p>
                        </div>
                    </div>
                    <div class="row inner-1">
                        <div class="col-md-2 left-col py-2">
                            <p class="m-0 text-center">延長保育</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1"> 18：30〜19：00</p>
                        </div>
                        <div class="col-md-2 py-2 right-col">
                            <p class="m-0 text-center">休園日</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1">-</p>
                        </div>
                    </div>
                    <div class="row inner-1">
                        <div class="col-md-2 left-col py-2">
                            <p class="m-0 text-center">預かり年齢</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1"> 生後2ヶ月〜5歳児</p>
                        </div>
                        <div class="col-md-2 py-2 right-col">
                            <p class="m-0 text-center">園規模</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1">12名（小規模）</p>
                        </div>
                    </div>
                    <div class="row inner-1">
                        <div class="col-md-2 left-col py-2">
                            <p class="m-0 text-center">電話番号</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1"> 06-6539-8484</p>
                        </div>
                        <div class="col-md-2 py-2 right-col">
                            <p class="m-0 text-center">広さ</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1">80平米以下（園庭なし）</p>
                        </div>
                    </div>
                    <div class="row inner-1">
                        <div class="col-md-2 left-col py-2">
                            <p class="m-0 text-center">FAX</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1"> 06-6539-8485</p>
                        </div>
                        <div class="col-md-2 py-2 right-col">
                            <p class="m-0 text-center">園長</p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p class="m-0 text-sm pt-1">出雲由規</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 left-col">
                            <p class="m-0 text-center pt-4">慣らし保育</p>
                        </div>
                        <div class="col-md-10">
                            <div class="row inner-1">
                                <div class="col-md-2 left-col py-2">
                                    <p class="m-0">目安期間</p>
                                </div>
                                <div class="col-md-10 py-2">
                                    <p class="m-0 text-sm pt-1">１週間〜１ヶ月程度</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-2 left-col py-2">
                                    <p class="m-0">初日の保育時間</p>
                                </div>
                                <div class="col-md-10 py-2">
                                    <p class="m-0 text-sm pt-1">8：30〜10：30（2、3時間）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row inner-1">
                        <div class="col-md-2 left-col py-2">
                            <p class="m-0 text-center">FAX</p>
                        </div>
                        <div class="col-md-10">
                            <div class="row mt-1 inner-row-1 mx-2">
                                <p class="m-0">保育サービス</p>
                            </div>
                            <div class="row py-3 mx-2">
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox"> 体験保育（一時保育）</p>
                                </div>
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox"> 月極保育</p>
                                </div>
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox"> 病児・病後児保育</p>
                                </div>
                            </div>
                            <div class="row mt-1 inner-row-1 mx-2">
                                <p class="m-0">キャンペーン</p>
                            </div>
                            <div class="row py-3 mx-2">
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox"> あり</p>
                                </div>
                            </div>
                            <div class="row mt-1 inner-row-1 mx-2">
                                <p class="m-0">延長保育</p>
                            </div>
                            <div class="row py-3 mx-2">
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> 延長保育（7時以前）</p>
                                </div>
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> 延長保育（19時以降）</p>
                                </div>
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> 夜間保育</p>
                                </div>
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> お泊まり保育</p>
                                </div>
                            </div>
                            <div class="row mt-1 inner-row-1 mx-2">
                                <p class="m-0">サービス</p>
                            </div>
                            <div class="row pt-3 pb-1 mx-2">
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox"> 連絡アプリ導入済み</p>
                                </div>
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox"> 保護者会等あり</p>
                                </div>
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox"> 保護者参加行事あり</p>
                                </div>
                            </div>
                            <div class="row py-1 mx-2">
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox"> 制服・指定服あり</p>
                                </div>
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox" checked> アレルギー対応あり</p>
                                </div>
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox"> ベビーカー置き場あり</p>
                                </div>
                            </div>
                            <div class="row pt-1 pb-3 mx-2">
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox"> 駐車場・駐輪場あり</p>
                                </div>
                                <div class="col-md-4">
                                    <p class="m-0"> <input type="checkbox"> リフレッシュ利用可能</p>
                                </div>
                            </div>
                            <div class="row mt-1 inner-row-1 mx-2">
                                <p class="m-0">特色</p>
                            </div>
                            <div class="row pt-3 pb-1 mx-2">
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> 習い事</p>
                                </div>
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> 手ぶら登園</p>
                                </div>
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> こだわり給食</p>
                                </div>
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> 送迎サービス</p>
                                </div>
                            </div>
                            <div class="row py-1 mx-2">
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> 夕食・補食</p>
                                </div>
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> 運動教育</p>
                                </div>
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox" checked> 英語教育</p>
                                </div>
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> 幼児教育</p>
                                </div>
                            </div>
                            <div class="row pt-1 pb-3 mx-2">
                                <div class="col-md-3">
                                    <p class="m-0"> <input type="checkbox"> 就学前教育</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row w-100 ms-0 row-4 py-4">
                 <p class="m-0"> <span class="span-2 px-5 py-2 pull-right"> 修正する </span> <span class="span-1 px-5 py-2 pull-right me-5">プレビュー</span></p>
            </div>
            <div class="row w-100 row-2 mt-5 ms-0 py-2">
                <p class="m-0">タグ</p>
            </div>
            <div class="row w-100 ms-0 row-5">
                <div class="col-md-12 inner-col">
                    <div class="row inner-1 py-3">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-1 p-4 pb-2">
                                    <p class="m-0 p-button-1 py-2 text-sm text-center text-decoration-underline">#アレルギー対応 <img src="../../assets/images/svg/pen.svg" alt="EXY" class="pull-right pe-4 pt-1"></p>
                                </div>
                                <div class="col-1 p-4 pb-2">
                                    <p class="m-0 p-button py-2 text-sm text-center text-decoration-underline">#習い事 <img src="../../assets/images/svg/pen.svg" alt="EXY" class="pull-right pe-4 pt-1"></p>
                                </div>
                                <div class="col-1 p-4 pb-2">
                                    <p class="m-0 p-button py-2 text-sm text-center text-decoration-underline">#手ぶら登園 <img src="../../assets/images/svg/pen.svg" alt="EXY" class="pull-right pe-4 pt-1"></p>
                                </div>
                                <div class="col-1 p-4 pb-2">
                                    <p class="m-0 p-button py-2 text-sm text-center text-decoration-underline">#こだわり給食 <img src="../../assets/images/svg/pen.svg" alt="EXY" class="pull-right pe-4 pt-1"></p>
                                </div>
                                <div class="col-1 p-4 pb-2">
                                    <p class="m-0 p-button py-2 text-sm text-center text-decoration-underline">#送迎サービス <img src="../../assets/images/svg/pen.svg" alt="EXY" class="pull-right pe-4 pt-1"></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1 p-4 pt-2">
                                    <p class="m-0 p-button py-2 text-sm text-center text-decoration-underline">#英語教育 <img src="../../assets/images/svg/pen.svg" alt="EXY" class="pull-right pe-4 pt-1"></p>
                                </div>
                                <div class="col-1 p-4 pt-2">
                                    <p class="m-0 p-button py-2 text-sm text-center text-decoration-underline">#幼児教育 <img src="../../assets/images/svg/pen.svg" alt="EXY" class="pull-right pe-4 pt-1"></p>
                                </div>
                                <div class="col-1 p-4 pt-2">
                                    <p class="m-0 p-button py-2 text-sm text-center text-decoration-underline">#就学前教育 <img src="../../assets/images/svg/pen.svg" alt="EXY" class="pull-right pe-4 pt-1"></p>
                                </div>
                                <div class="col-1 p-4 pt-2">
                                    <p class="m-0 p-button py-2 text-sm text-center text-decoration-underline">#運動教育 <img src="../../assets/images/svg/pen.svg" alt="EXY" class="pull-right pe-4 pt-1"></p>
                                </div>
                                <div class="col-1 p-4 pt-2">
                                    <p class="m-0 p-button p-color py-2 text-sm text-center text-decoration-underline">#10 <img src="../../assets/images/svg/pen.svg" alt="EXY" class="pull-right pe-4 pt-1"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row inner-2 p-4">
                        <div class="col-md-5 left-col">
                            <div class="row inner-box-1 py-3">
                                <p class="m-0 text-xs text-center">画像登録</p>
                            </div>
                            <div class="row p-2">
                                <img src="../../assets/images/admin/Image_16.png" alt="EXY" class="w-100">
                            </div>
                        </div>
                        <div class="col-md-7 right-col">
                            <div class="row ms-2 inner-box-2">
                                <div class="col-md-2 left-box py-2">
                                    <p class="m-0 text-center">タグ</p>
                                </div>
                                <div class="col-md-10 py-2">
                                    <p class="m-0"># <span class="px-1"></span>アレルギー対応</p>
                                </div>
                            </div>
                            <div class="row ms-2 inner-box-2 mt-4">
                                <div class="col-md-2 left-box py-2">
                                    <p class="m-0 text-center pt-2">タグ</p>
                                </div>
                                <div class="col-md-10 py-2">
                                    <p class="m-0 p-box py-2 ps-2">各お子さまのアレルギーに対応した給食を提供します</p>
                                </div>
                            </div>
                            <div class="row ms-2 inner-box-2 mt-4">
                                <div class="col-md-2 left-box py-2">
                                    <p class="m-0 text-center pt-2">文章</p>
                                </div>
                                <div class="col-md-10 py-2">
                                    <p class="m-0 p-box py-2 ps-2">【園側自由記入部分】。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row w-100 ms-0 row-4 py-4">
                 <p class="m-0"> <span class="span-2 px-5 py-2 pull-right"> 修正する </span> <span class="span-1 px-5 py-2 pull-right me-5">プレビュー</span></p>
            </div>
            <div class="row w-100 row-2 mt-5 ms-0 py-2">
                <p class="m-0">５POINT</p>
            </div>
            <div class="row w-100 ms-0 row-5">
                <div class="col-md-12 inner-col-1 py-3 pb-4">
                     <div class="row school-step mt-4">
                        <div class="col-md-2 step-item">
                            <p>リフレッシュ利用</p>
                        </div>
                        <div class="col-md-10">
                            <div class="pull-left step-left">
                                <p style="font-weight: bold;">OK</p>
                            </div>
                            <ul class="progressbar">
                                <li class="active"><img src="../../assets/images/guardian/Group_1736.png" alt="EXY"></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <div class="pull-right step-right">
                                <p style="font-weight: bold;">NG</p>
                            </div>
                        </div>
                    </div>
                    <div class="row school-step mt-5">
                        <div class="col-md-2 step-item">
                            <p>保護者参加行事</p>
                        </div>
                        <div class="col-md-10">
                            <div class="pull-left step-left">
                                <p>あり</p>
                            </div>
                            <ul class="progressbar">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li><img src="../../assets/images/guardian/Group_1736.png" alt="EXY"></li>
                                <li></li>
                            </ul>
                            <div class="pull-right step-right">
                                <p>なし</p>
                            </div>
                        </div>
                    </div>
                    <div class="row school-step mt-5">
                        <div class="col-md-2 step-item">
                            <p>園外遊び</p>
                        </div>
                        <div class="col-md-10">
                            <div class="pull-left step-left">
                                <p>あり</p>
                            </div>
                            <ul class="progressbar">
                                <li></li>
                                <li><img src="../../assets/images/guardian/Group_1736.png" alt="EXY"></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <div class="pull-right step-right">
                                <p>なし</p>
                            </div>
                        </div>
                    </div>
                    <div class="row school-step mt-5">
                        <div class="col-md-2 step-item">
                            <p>日々の持ち物</p>
                        </div>
                        <div class="col-md-10">
                            <div class="pull-left step-left">
                                <p>あり</p>
                            </div>
                            <ul class="progressbar">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li><img src="../../assets/images/guardian/Group_1736.png" alt="EXY"></li>
                            </ul>
                            <div class="pull-right step-right">
                                <p>なし</p>
                            </div>
                        </div>
                    </div>
                    <div class="row school-step mt-5">
                        <div class="col-md-2 step-item">
                            <p>日々の持ち物</p>
                        </div>
                        <div class="col-md-10">
                            <div class="pull-left step-left">
                                <p>あり</p>
                            </div>
                            <ul class="progressbar">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li><img src="../../assets/images/guardian/Group_1736.png" alt="EXY"></li>
                            </ul>
                            <div class="pull-right step-right">
                                <p>なし</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row w-100 ms-0 row-4 py-4">
                 <p class="m-0"> <span class="span-2 px-5 py-2 pull-right"> 修正する </span> <span class="span-1 px-5 py-2 pull-right me-5">プレビュー</span></p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../components/adminPartials/Breadcrumb"
export default {
    name: "GardenBasicInformation",
    components: {
        Breadcrumb
    },
    data() {
        return {
            dataPageName: "園基本情報設定",
            activeTab: 1
        }
    }
}
</script>

<style scoped>

</style>