<template>
  <div class="mypage-reservation">
    <div class="mypage-nav">
      <div class="row w-100">
        <div class="col-md-5 col-left">
          <div class="row">
            <div class="col-md-2">
              <img src="../../assets/images/mypage/daiga-ellaby--0KARP5Jh_8-unspl.png" alt="EXY">
            </div>
            <div class="col-md-10 mt-3 ps-3">
              <div class="row">
                <p class="m-0 text-xl fw-bold">そらくんママ</p>
              </div>
              <div class="row mt-2 ps-1">
                <a href="#">
                  <p class="m-0 text-base fw-bold"><span class="rounded-circle me-3 px-2 pt-2 pb-1 nav-badge text-center">P</span>500</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-right mt-3">
          <div class="row text-base">
            <div class="col-md-2">
              <router-link :to="{name:'Mypage.Home'}">
                <p class="m-0 fw-bold">ホーム</p>
                <p class="m-0 text-sm">home</p>
              </router-link>
            </div>
            <div class="col-md-2 ">
              <router-link :to="{name:'Talk'}">
                <p class="m-0 fw-bold">トーク</p>
                <p class="m-0 ps-2 text-sm">talk</p>
              </router-link>
            </div>
            <div class="col-md-2 active">
              <router-link :to="{name:'Reservation'}">
                <p class="m-0 fw-bold">予約一覧</p>
                <p class="m-0 ps-2 text-sm">reserve</p>
              </router-link>
            </div>
            <div class="col-md-2">
              <a href="#">
                <p class="m-0  fw-bold">お気に入り</p>
                <p class="m-0 ps-2 text-sm">favorite</p>
              </a>
            </div>
            <div class="col-md-2">
              <router-link :to="{name:'Notice'}">
                <p class="m-0 pe-2 fw-bold">お知らせ</p>
                <p class="m-0 text-sm">information</p>
              </router-link>
            </div>
            <div class="col-md-2">
              <a href="#">
                <p class="m-0 ps-1 fw-bold">設定</p>
                <p class="m-0 text-sm">setting</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="reservation-body">
      <div class="row w-100 mt-5 me-0 ms-0">
        <div class="col-md-3 left-col pe-4">
          <div class="row row-1">
            <p class="text-lg ps-5"><span class="top-span">|</span> 予約一覧</p>
          </div>
          <a @click="activeTab=1">
            <div class="row row-2">
              <div class="col-md-12">
                <div class="row inner-1">
                  <div class="col-md-4 left-1">
                    <p class="text-sm text-center m-0">仮予約中</p>
                  </div>
                  <div class="col-md-8 py-1">
                    <p class="text-xs m-0">登園日時：2021年2月16日</p>
                    <p class="text-xs m-0 pt-1">9:00〜16:00</p>
                  </div>
                </div>
                <div class="row inner-2 p-2">
                  <p class="m-0 text-base text-center fw-bold">COCOROHOIKUEN 弁天町園</p>
                  <p class="m-0 pt-2 text-xs text-center">予約プラン：月極保育 ー 時短プラン</p>
                </div>
              </div>
            </div>
          </a>
          <a @click="activeTab=2">
            <div class="row row-2 mt-2">
              <div class="col-md-12 ">
                <div class="row inner-1">
                  <div class="col-md-4 left-2">
                    <p class="text-sm text-center m-0">予約確定</p>
                  </div>
                  <div class="col-md-8 py-1">
                    <p class="text-xs m-0">登園日時：2021年2月16日</p>
                    <p class="text-xs m-0 pt-1">9:00〜16:00</p>
                  </div>
                </div>
                <div class="row inner-2 p-2">
                  <p class="m-0 text-base text-center fw-bold">COCOROHOIKUEN 弁天町園</p>
                  <p class="m-0 pt-2 text-xs text-center">予約プラン：月極保育 ー 時短プラン</p>
                </div>
              </div>
            </div>
          </a>
          <a @click="activeTab=3">
            <div class="row row-2 mt-2">
              <div class="col-md-12 ">
                <div class="row inner-1">
                  <div class="col-md-4 left-3">
                    <p class="text-sm text-center m-0">登園済み</p>
                  </div>
                  <div class="col-md-8 py-1">
                    <p class="text-xs m-0">登園日時：2021年2月16日</p>
                    <p class="text-xs m-0 pt-1">9:00〜16:00</p>
                  </div>
                </div>
                <div class="row inner-2 p-2">
                  <p class="m-0 text-base text-center fw-bold">COCOROHOIKUEN 弁天町園</p>
                  <p class="m-0 pt-2 text-xs text-center">予約プラン：月極保育 ー 時短プラン</p>
                </div>
              </div>
            </div>
          </a>
          <a @click="activeTab=4">
            <div class="row row-2 mt-2">
              <div class="col-md-12 ">
                <div class="row inner-1">
                  <div class="col-md-4 left-4">
                    <p class="text-sm text-center m-0">キャンセル</p>
                  </div>
                  <div class="col-md-8 py-1">
                    <p class="text-xs m-0">登園日時：2021年2月16日</p>
                    <p class="text-xs m-0 pt-1">9:00〜16:00</p>
                  </div>
                </div>
                <div class="row inner-2 p-2">
                  <p class="m-0 text-base text-center fw-bold">COCOROHOIKUEN 弁天町園</p>
                  <p class="m-0 pt-2 text-xs text-center">予約プラン：月極保育 ー 時短プラン</p>
                </div>
              </div>
            </div>
          </a>
          <a @click="activeTab=5">
            <div class="row row-2 mt-2">
              <div class="col-md-12 ">
                <div class="row inner-1">
                  <div class="col-md-4 left-5">
                    <p class="text-sm text-center m-0">予約不可</p>
                  </div>
                  <div class="col-md-8 py-1">
                    <p class="text-xs m-0">登園日時：2021年2月16日</p>
                    <p class="text-xs m-0 pt-1">9:00〜16:00</p>
                  </div>
                </div>
                <div class="row inner-2 p-2">
                  <p class="m-0 text-base text-center fw-bold">COCOROHOIKUEN 弁天町園</p>
                  <p class="m-0 pt-2 text-xs text-center">予約プラン：体験保育 ー １歳児以上</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-9 right-col">
            <!-- Tentative reservation in progress Start -->
            <div v-if="activeTab===1" class="row">
                 <div class="col-md-12">
                    <div class="row  row-8 row-border-1 mt-5 px-3 py-4 text-base">
                      <p class=" text-lg"> <span class="span-1 px-3 py-2 fw-bold me-1 text-xl">!</span> 園が予約を確定しました。現在【仮予約】の段階です。</p>
                      <p class="m-0 ps-5 ms-1">３日以内に【予約確定の承認】を行ってください。承認がされない場合、自動キャンセルとなります。</p>
                    </div>
                    <div class="row row-2 no-border pb-4 ps-3 mt-5">
                        <p class="top-p m-0"><span class="span-5">仮予約中</span></p>
                    </div>
                    <div class="row row-2 ps-3 pb-5 no-border mt-2">
                        <div class="col-left">
                            <img src="../../assets/images/mypage/Mask_Group_60.png" alt="EXY" class="w-100">
                        </div>
                        <div class="col-middle">
                            <p class="text-xl text-decoration-underline fw-bold">COCOROHOIKUEN 弁天町園</p>
                            <p class="text-base mt-4 mb-3">
                                〒552-0002 大阪市港区市岡元町2-11-30 1階 <br>
                                JR大阪環状線「弁天町駅」から徒歩８分 <br>
                                電話番号：06-6539-8484
                            </p>
                            <p class="text-base"> 
                                <router-link :to="{name:'TalkResarvationConfirm'}">
                                    <span class="span-2">トークルーム</span>
                                </router-link>
                            </p>
                        </div>
                        <div class="col-right pe-4">
                            <router-link :to="{name:'todo', params:{page:66}}">
                                <p class="text-center right-p-1 py-2 mb-4">予約確定の承認</p>
                            </router-link>
                            <router-link :to="{name:'todo', params:{page:63}}">
                                <p class="text-center mb-4 right-p py-2">予約の変更</p>
                            </router-link>
                            <router-link :to="{name:'todo', params:{page:65}}">
                                <p class="text-center m-0 right-p-2 py-2">予約キャンセル</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="row row-1 p-3  text-lg">
                        <p class="m-0 text-lg fw-bold">予約内容 <span class="pull-right"><img src="../../assets/images/svg/collapse.svg" alt="EXY"></span></p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">登園日時</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                        <p class="m-0">2021年2月26日（金）<span class="ms-5">09：00 〜 17：00</span></p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">予約詳細</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">プラン</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">体験保育  <span class="px-3">|</span>  １歳児以上</p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">オプション</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">その他費用  <span class="px-3">|</span>  給食、その他費用  <span class="px-3">|</span>  おやつ </p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">利用者</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 田中 海  <span class="px-5"></span>  令和2年2月25日生（満１歳）<span class="px-2"></span>男児 アレルギー疾患：有  </p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-md-2">
                            <p class="m-0">送迎者</p>
                          </div>
                          <div class="col-md-3">
                            <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 田中 愛 </p>
                          </div>
                          <div class="col-md-7">
                            <p class="m-0"> 族柄：母 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-2">
                            
                          </div>
                          <div class="col-md-3">
                            <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">2</span> 田中 仁 </p>
                          </div>
                          <div class="col-md-7">
                            <p class="m-0"> 族柄：父 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">緊急連絡先追加</p>
                      </div>
                      <div class="col-md-3">
                        <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 上田 誠</p>
                      </div>
                      <div class="col-md-7">
                        <p class="m-0"> 族柄：祖父 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">支払い方法</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">クレジット支払い</p>
                      </div>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">アンケート</p>
                    </div>
                    <div class="row row-2 row-2-border p-3 mt-2 text-lg">
                       <div class="col-md-12 pb-2">
                           <div class="row">
                                <div class="col-4 pt-2">
                                    <p class="m-0">▶︎アレルギー</p>
                                </div>
                                <div class="col-5 pt-2">
                                    <p class="m-0">あり</p>
                                </div>
                                <div class="col-6">
                                    <p class="m-0 p-box-2 ps-3 py-2">卵アレルギーがあります。</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎ミルク</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">あり</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎おやつ</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">なし</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎給食</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">なし</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎離乳食のすすみ具合</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                             <div class="col-md-10">
                               <p class="m-0 p-box-2 ps-3 pt-2 pb-5">柔らかく煮たブロッコリーをお昼ごはんに食べています。それ以外はまだ食べられません。（好き嫌いかも…？）</p>
                             </div>
                           </div>
                       </div>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">備考</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                        <p class="">【園に伝えておきたいことなどを自由にご記入ください】親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。</p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">金額</p>
                    </div>
                    <div class="row row-7 mt-3 me-3 text-lg">
                        <div class="col-md-2 inner-left-1 pt-4">
                          <p class="m-0 text-center pt-5 fw-bold">内訳</p>
                        </div>
                        <div class="col-md-10">
                            <div class="row">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">体験保育  <span class="px-3">｜</span>  １歳児以上 プラン（9:00h × ¥10）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥5,400</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">施設利用料</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥500</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">その他費用 <span class="px-3">｜</span>  給食（１食）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥500</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">その他費用 <span class="px-3">｜</span>  おやつ（１食）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥100</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div class="row row-1 p-3 mt-3 text-lg">
                        <p class="m-0">支払い予定金額 <span class="mx-5"></span>￥6,500</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <p class="m-0">付与予定ポイント <span class="mx-5"></span>697ポイント</p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border">
                        <p class="p-text-color m-0">※キャンペーン内容や、プランによっては、実際の支払い金額や付与ポイントが異なる場合があります。</p>
                    </div>
                    <div class="row row-6 py-4 me-3 text-lg">
                      <div class="col-md-1"></div>
                       <div class="col-md-3 px-2">
                          <router-link :to="{name:'Talk'}">
                            <p class="m-0 text-center p-box-1 py-2 fw-bold">トークルーム</p>
                          </router-link>
                       </div>
                       <div class="col-md-3 px-2">
                          <router-link :to="{name:'todo', params:{page:66}}">
                            <p class="m-0 text-center p-box-2 py-2 fw-bold">予約内容の変更</p>
                          </router-link>
                       </div>
                       <div class="col-md-3 px-2">
                          <router-link :to="{name:'todo', params:{page:65}}">
                            <p class="m-0 text-center p-box-3 py-2 fw-bold">予約キャンセル</p>
                          </router-link>
                       </div>
                    </div>
                </div>
            </div>
            <!-- Tentative reservation in progress End -->

            <!-- Reservation Confirmed / Before Visiting Satrt -->
            <div v-if="activeTab===2" class="row">
                 <div class="col-md-12">
                    <div class="row  row-8 row-border-1 mt-1 py-4 px-3 text-base">
                      <p class=" text-lg"> <span class="span-1 px-3 py-2 fw-bold me-1 text-xl">!</span> 予約が【確定】しました。園からの連絡事項をご一読のうえ、ご指定の日時に保育園へご来園ください。</p>
                      <p class="m-0 ps-5 ms-2">※ご連絡のないキャンセルをされた場合、今後ご予約を承れなくなることがあります。</p>
                    </div>
                    <div class="row row-2 no-border pb-4 ps-3 mt-5">
                        <p class="top-p m-0"><span class="span-4">予約確定</span></p>
                    </div>
                    <div class="row row-2 ps-3 pb-5 no-border mt-2">
                        <div class="col-left">
                            <img src="../../assets/images/mypage/Mask_Group_60.png" alt="EXY" class="w-100">
                        </div>
                        <div class="col-middle">
                            <p class="text-xl text-decoration-underline fw-bold">COCOROHOIKUEN 弁天町園</p>
                            <p class="text-base mt-4 mb-3">
                                〒552-0002 大阪市港区市岡元町2-11-30 1階 <br>
                                JR大阪環状線「弁天町駅」から徒歩８分 <br>
                                電話番号：06-6539-8484
                            </p>
                            <p class="text-base"> 
                                <router-link :to="{name:'TalkResarvationConfirm'}">
                                    <span class="span-2">トークルーム</span>
                                </router-link>
                            </p>
                        </div>
                        <div class="col-right pe-4">
                            <router-link :to="{name:'todo', params:{page:62}}">
                                <p class="text-center right-p py-2 mb-4">予約内容の変更</p>
                            </router-link>
                            <router-link :to="{name:'todo', params:{page:65}}">
                                <p class="text-center m-0 right-p-2 py-2">予約キャンセル</p>
                            </router-link>
                            <p class="m-0 right-p-3 py-2 ps-3 mt-2 text-sm">キャンセル可能期日：<br>2021年2月15日(木) 〜23:59まで</p>
                        </div>
                    </div>
                    <div class="row row-1 p-3  text-lg">
                        <p class="m-0 text-lg fw-bold">予約内容 <span class="pull-right"><img src="../../assets/images/svg/collapse.svg" alt="EXY"></span></p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">登園日時</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                        <p class="m-0">2021年2月26日（金）<span class="ms-5">09：00 〜 17：00</span></p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">予約詳細</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">プラン</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">体験保育  <span class="px-3">|</span>  １歳児以上</p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">オプション</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">その他費用  <span class="px-3">|</span>  給食、その他費用  <span class="px-3">|</span>  おやつ </p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">利用者</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 田中 海  <span class="px-5"></span>  令和2年2月25日生（満１歳）<span class="px-2"></span>男児 アレルギー疾患：有  </p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-md-2">
                            <p class="m-0">送迎者</p>
                          </div>
                          <div class="col-md-3">
                            <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 田中 愛 </p>
                          </div>
                          <div class="col-md-7">
                            <p class="m-0"> 族柄：母 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-2">
                            
                          </div>
                          <div class="col-md-3">
                            <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">2</span> 田中 仁 </p>
                          </div>
                          <div class="col-md-7">
                            <p class="m-0"> 族柄：父 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">緊急連絡先追加</p>
                      </div>
                      <div class="col-md-3">
                        <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 上田 誠</p>
                      </div>
                      <div class="col-md-7">
                        <p class="m-0"> 族柄：祖父 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">支払い方法</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">クレジット支払い</p>
                      </div>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">アンケート</p>
                    </div>
                    <div class="row row-2 row-2-border p-3 mt-2 text-lg">
                       <div class="col-md-12 pb-2">
                           <div class="row">
                                <div class="col-4 pt-2">
                                    <p class="m-0">▶︎アレルギー</p>
                                </div>
                                <div class="col-5 pt-2">
                                    <p class="m-0">あり</p>
                                </div>
                                <div class="col-6">
                                    <p class="m-0 p-box-2 ps-3 py-2">卵アレルギーがあります。</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎ミルク</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">あり</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎おやつ</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">なし</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎給食</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">なし</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎離乳食のすすみ具合</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                             <div class="col-md-10">
                               <p class="m-0 p-box-2 ps-3 pt-2 pb-5">柔らかく煮たブロッコリーをお昼ごはんに食べています。それ以外はまだ食べられません。（好き嫌いかも…？）</p>
                             </div>
                           </div>
                       </div>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">備考</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                        <p class="">【園に伝えておきたいことなどを自由にご記入ください】親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。</p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">金額</p>
                    </div>
                    <div class="row row-7 mt-3 me-3 text-lg">
                        <div class="col-md-2 inner-left-1 pt-4">
                          <p class="m-0 text-center pt-5 fw-bold">内訳</p>
                        </div>
                        <div class="col-md-10">
                            <div class="row">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">体験保育  <span class="px-3">｜</span>  １歳児以上 プラン（9:00h × ¥10）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥5,400</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">施設利用料</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥500</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">その他費用 <span class="px-3">｜</span>  給食（１食）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥500</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">その他費用 <span class="px-3">｜</span>  おやつ（１食）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥100</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div class="row row-1 p-3 mt-3 text-lg">
                        <p class="m-0">支払い予定金額 <span class="mx-5"></span>￥6,500</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <p class="m-0">付与予定ポイント <span class="mx-5"></span>697ポイント</p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border">
                        <p class="p-text-color m-0">※キャンペーン内容や、プランによっては、実際の支払い金額や付与ポイントが異なる場合があります。</p>
                    </div>
                    <div class="row row-6 py-4 me-3 text-lg">
                      <div class="col-md-1"></div>
                       <div class="col-md-3 px-2">
                          <p class="m-0 text-center p-box-1 py-2 fw-bold">トークルーム</p>
                       </div>
                       <div class="col-md-3 px-2">
                          <p class="m-0 text-center p-box-2 py-2 fw-bold">予約内容の変更</p>
                       </div>
                       <div class="col-md-3 px-2">
                          <p class="m-0 text-center p-box-3 py-2 fw-bold">予約キャンセル</p>
                       </div>
                    </div>
                </div>
            </div>
            <!-- Reservation Confirmed / Before Visiting End -->

            <!-- Before Completion Report Start -->
            <div v-if="activeTab===3" class="row">
                <div class="col-md-12 text-sm">
                    <div class="row row-8 mt-4 px-3 py-2 text-base">
                      <p class="m-0 text-center"> <span class="span-1 px-2 py-1 fw-bold me-1">!</span> 完了報告が届いています。内容をご確認のうえ【完了報告の承認】をお願いいたします。</p>
                    </div>
                    <div class="row row-2 ps-3 pb-5 no-border mt-5">
                        <div class="col-left">
                            <img src="../../assets/images/mypage/Mask_Group_60.png" alt="EXY" class="w-100">
                        </div>
                        <div class="col-middle">
                            <p class="text-xl text-decoration-underline fw-bold">COCOROHOIKUEN 弁天町園</p>
                            <p class="text-base mt-4 mb-3">
                                〒552-0002 大阪市港区市岡元町2-11-30 1階 <br>
                                JR大阪環状線「弁天町駅」から徒歩８分 <br>
                                電話番号：06-6539-8484
                            </p>
                            <p class="text-base"> 
                                <router-link :to="{name:'TalkResarvationConfirm'}">
                                    <span class="span-2">トークルーム</span>
                                </router-link>
                            </p>
                        </div>
                        <div class="col-right pe-4">
                            <router-link :to="{name:'todo', params:{page:69}}">
                                <p class="text-center m-0 right-p-1 py-2">一覧から削除</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="row row-9 p-3 text-xl">
                      <p class="m-0 text-center fw-bold">完了報告内容</p>
                    </div>
                    <div class="row row-1 text-lg">
                      <div class="col-md-12 p-4">
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">利用時間</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0">2021年2月16日（火）<span class="ms-5">9:00〜16:00（7:00h）</span></p>
                        </div>
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">利用プラン</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0">体験保育 <span class="px-3">｜</span>１歳児以上</p>
                        </div>
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">オプション</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0">その他費用 <span class="px-3">｜</span>給食、その他費用 <span class="px-3">｜</span>おやつ</p>
                        </div>
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">お支払い総額</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0">￥6,500</p>
                        </div>
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">内訳</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0 pb-2">・体験保育  <span class="px-2">｜</span> １歳児以上 プラン（9:00h × ¥10）<span class="px-1"></span> … ￥5,400 </p>
                          <p class="m-0 pb-2">・施設利用料 <span class="px-1"></span>… ￥500 </p>
                          <p class="m-0 pb-2">・その他費用  <span class="px-2">｜</span> 給食（１食）<span class="px-1"></span>… ￥500 </p>
                          <p class="m-0 pb-2">・その他費用  <span class="px-2">｜</span> おやつ（１食）<span class="px-1"></span>… ￥100</p>
                        </div>
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">保育園からの一言</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0">親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰</p>
                        </div>
                        <div class="row inner-1 mt-5 "></div>
                        <div class="row mt-4">
                          <p class="text-center text-base">内容をご確認のうえ、【完了報告を承認】してください。</p>
                        </div>
                        <div class="row mt-4">
                          <router-link :to="{name:'todo', params:{page:69}}">
                            <p class="text-center"><span class="span-2 px-5 py-3">完了報告を承認する</span></p>
                          </router-link>
                        </div>
                        <div class="row mt-4">
                          <router-link :to="{name:'InquiryForm'}">
                            <p class="m-0 text-center text-base text-decoration-underline p-text-color-1">完了報告に間違いがある方はこちら ＞</p>
                          </router-link>
                        </div>
                      </div>
                    </div>
                    <div class="row row-1 p-3 mt-5 text-lg">
                        <p class="m-0 text-lg">予約内容 <span class="pull-right"><img src="../../assets/images/svg/collapse.svg" alt="EXY"></span></p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">登園日時</p>
                    </div>
                    <div class="row row-2 p-3 no-border text-lg">
                        <p class="m-0">2021年2月26日（金）<span class="ms-5">09：00 〜 17：00</span></p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">予約詳細</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">プラン</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">体験保育  <span class="px-3">|</span>  １歳児以上</p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">オプション</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">その他費用  <span class="px-3">|</span>  給食、その他費用  <span class="px-3">|</span>  おやつ </p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">利用者</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 田中 海  <span class="px-5"></span>  令和2年2月25日生（満１歳）<span class="px-2"></span>男児 アレルギー疾患：有  </p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-md-2">
                            <p class="m-0">送迎者</p>
                          </div>
                          <div class="col-md-3">
                            <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 田中 愛 </p>
                          </div>
                          <div class="col-md-7">
                            <p class="m-0"> 族柄：母 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-2">
                            
                          </div>
                          <div class="col-md-3">
                            <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">2</span> 田中 仁 </p>
                          </div>
                          <div class="col-md-7">
                            <p class="m-0"> 族柄：父 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">緊急連絡先追加</p>
                      </div>
                      <div class="col-md-3">
                        <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 上田 誠</p>
                      </div>
                      <div class="col-md-7">
                        <p class="m-0"> 族柄：祖父 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">支払い方法</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">クレジット支払い</p>
                      </div>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">アンケート</p>
                    </div>
                    <div class="row row-2 no-border p-3 mt-2 text-lg">
                       <div class="col-md-12 pb-2">
                           <div class="row">
                                <div class="col-4 pt-2">
                                    <p class="m-0">▶︎アレルギー</p>
                                </div>
                                <div class="col-5 pt-2">
                                    <p class="m-0">あり</p>
                                </div>
                                <div class="col-6">
                                    <p class="m-0 p-box-2 ps-3 py-2">卵アレルギーがあります。</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎ミルク</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">あり</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎おやつ</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">なし</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎給食</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">なし</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎離乳食のすすみ具合</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                             <div class="col-md-10">
                               <p class="m-0 p-box-2 ps-3 pt-2 pb-5">柔らかく煮たブロッコリーをお昼ごはんに食べています。それ以外はまだ食べられません。（好き嫌いかも…？）</p>
                             </div>
                           </div>
                       </div>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">備考</p>
                    </div>
                    <div class="row row-2 p-3 no-border text-lg">
                        <p class="">【園に伝えておきたいことなどを自由にご記入ください】親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。</p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">金額</p>
                    </div>
                    <div class="row row-7 mt-3 me-3 text-lg">
                        <div class="col-md-2 inner-left-1 pt-4">
                          <p class="m-0 text-center pt-5 fw-bold">内訳</p>
                        </div>
                        <div class="col-md-10">
                            <div class="row">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">体験保育  <span class="px-3">｜</span>  １歳児以上 プラン（9:00h × ¥10）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥5,400</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">施設利用料</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥500</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">その他費用 <span class="px-3">｜</span>  給食（１食）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥500</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">その他費用 <span class="px-3">｜</span>  おやつ（１食）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥100</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div class="row row-1 p-3 mt-3 text-lg">
                        <p class="m-0">支払い予定金額 <span class="mx-5"></span>￥6,500</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <p class="m-0">付与予定ポイント <span class="mx-5"></span>697ポイント</p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border">
                        <p class="p-text-color m-0">※キャンペーン内容や、プランによっては、実際の支払い金額や付与ポイントが異なる場合があります。</p>
                    </div>
                    <div class="row row-6 py-4 me-3 text-lg">
                       <div class="col-md-3 px-2">
                          <p class="m-0 text-center p-box-1 py-2 fw-bold">トークルーム</p>
                       </div>
                       <div class="col-md-3 px-2">
                          <p class="m-0 text-center p-box-2 py-2 fw-bold">完了報告を確認</p>
                       </div>
                       <div class="col-md-3 px-2">
                          <p class="m-0 text-center p-box-3 py-2 fw-bold">口コミをかく</p>
                       </div>
                       <div class="col-md-3 px-2">
                          <p class="m-0 text-center p-box-4 py-2 fw-bold">一覧から削除</p>
                       </div>
                    </div>
                </div>
            </div>
            <!-- Before Completion Report End -->

            <!-- at the time of canceled reservation Start -->
            <div v-if="activeTab===4" class="row">
                <div class="col-md-12 text-sm">
                    <div class="row row-1 py-4 ps-2">
                        <p class="m-0 text-lg">キャンセルを受付ました。(2021年2月1日)</p>
                    </div>
                    <div class="row row-2 pb-4 ps-3">
                        <p class="top-p"><span class="span-1">キャンセル済み</span></p>
                    </div>
                    <div class="row row-2 ps-3 pb-4">
                        <div class="col-left">
                            <img src="../../assets/images/mypage/Mask_Group_60.png" alt="EXY" class="w-100">
                        </div>
                        <div class="col-middle">
                            <p class="text-xl text-decoration-underline fw-bold">COCOROHOIKUEN 弁天町園</p>
                            <p class="text-base mt-4 mb-3">
                                〒552-0002 大阪市港区市岡元町2-11-30 1階 <br>
                                JR大阪環状線「弁天町駅」から徒歩８分 <br>
                                電話番号：06-6539-8484
                            </p>
                            <p class="text-base"> 
                                <router-link :to="{name:'Talk'}">
                                    <span class="span-2">トークルーム</span>
                                </router-link>
                            </p>
                        </div>
                        <div class="col-right pe-4">
                            <router-link :to="{name:'todo', params:{page:68}}">
                                <p class="text-center m-0 right-p py-2">一覧から削除</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="row row-1 p-3">
                        <p class="m-0 text-lg">予約内容 <span class="pull-right"><img src="../../assets/images/svg/collapse.svg" alt="EXY"></span></p>
                    </div>
                    <div class="row row-3 px-3 py-2">
                        <p class="m-0 text-sm">登園日時</p>
                    </div>
                    <div class="row row-2 p-3">
                        <p class="m-0 text-sm">2021年2月26日（金）<span class="ms-5">09：00 〜 17：00</span></p>
                    </div>
                    <div class="row row-3 px-3 py-2">
                        <p class="m-0 text-sm">予約詳細</p>
                    </div>
                    <div class="row row-2 right-border p-3">
                        <div class="col-left">
                            <p class="m-0">プラン</p>
                        </div>
                        <div class="col-middle">
                            <p class="m-0">体験保育  <span class="px-3">｜</span>  １歳児以上</p>
                        </div>
                    </div>
                    <div class="row row-4 px-3 py-2 me-3">
                        <p class="m-0">オプション</p>
                    </div>
                    <div class="row row-5 p-3 me-3">
                        <div class="col-1">
                            <p class="m-0">利用者</p>
                        </div>
                        <div class="col-2">
                            <p class="m-0">１. 田中 海</p>
                        </div>
                        <div class="col-3">
                            <p class="m-0">令和2年2月25日生（満１歳）<span class="px-2"></span> 男児 アレルギー疾患：有</p>
                        </div>
                    </div>
                    <div class="row row-5 p-3 me-3">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-1">
                                    <p class="m-0">送迎者</p>
                                </div>
                                <div class="col-2">
                                    <p class="m-0">１．田中 愛</p>
                                </div>
                                <div class="col-3">
                                    <p class="m-0">族柄：母 <span class="px-4"></span> <span class="pe-3">｜</span>携帯番号：090-0000-0000</p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-1">
                                    
                                </div>
                                <div class="col-2">
                                    <p class="m-0">２．田中 仁</p>
                                </div>
                                <div class="col-3">
                                    <p class="m-0">族柄：父 <span class="px-4"></span> <span class="pe-3">｜</span>携帯番号：090-0000-0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-5 p-3 me-3">
                        <div class="col-1">
                            <p class="m-0">緊急連絡先追加</p>
                        </div>
                        <div class="col-2">
                            <p class="m-0">１．上田 誠</p>
                        </div>
                        <div class="col-3">
                            <p class="m-0">族柄：祖父 <span class="px-3"></span> <span class="pe-3">｜</span>携帯番号：090-0000-0000</p>
                        </div>
                    </div>
                    <div class="row row-2 right-border p-3">
                        <div class="col-left">
                            <p class="m-0">支払い方法</p>
                        </div>
                        <div class="col-middle">
                            <p class="m-0">クレジット支払い</p>
                        </div>
                    </div>
                    <div class="row row-3 px-3 py-2">
                        <p class="m-0">アンケート</p>
                    </div>
                    <div class="row row-2 right-border p-3">
                       <div class="col-md-12 pb-4">
                           <div class="row">
                                <div class="col-4 pt-2">
                                    <p class="m-0">▶︎アレルギー</p>
                                </div>
                                <div class="col-5 pt-2">
                                    <p class="m-0">あり</p>
                                </div>
                                <div class="col-6">
                                    <p class="m-0 p-box-1 ps-3 py-2">卵アレルギーがあります。</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎ミルク</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">あり</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎おやつ</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">なし</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎給食</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">なし</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎離乳食のすすみ具合</p>
                                </div>
                                <div class="col-7">
                                    <p class="m-0 p-box-1 ps-3 py-2">柔らかく煮たブロッコリーをお昼ごはんに食べています。それ以外はまだ食べられません。（好き嫌いかも…？）</p>
                                </div>
                           </div>
                       </div>
                    </div>
                    <div class="row row-3 px-3 py-2">
                        <p class="m-0">備考</p>
                    </div>
                    <div class="row row-2 p-3">
                        <p class="">【園に伝えておきたいことなどを自由にご記入ください】親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。</p>
                    </div>
                    <div class="row row-3 px-3 py-2">
                        <p class="m-0">金額</p>
                    </div>
                    <div class="row row-2 right-border px-3 py-4">
                        <div class="col-md-12">
                            <div class="row inner-1">
                                <div class="col-md-11 ps-3 py-2">
                                    <p class="m-0">体験保育  <span class="px-3">｜</span>  １歳児以上 プラン（9:00h × ¥10）</p>
                                </div>
                                <div class="col-md-1 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥5,400</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-11 ps-3 py-2">
                                    <p class="m-0">施設利用料</p>
                                </div>
                                <div class="col-md-1 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥500</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-11 ps-3 py-2">
                                    <p class="m-0">その他費用 <span class="px-3">｜</span>  給食（１食）</p>
                                </div>
                                <div class="col-md-1 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥500</p>
                                </div>
                            </div>
                            <div class="row inner-2">
                                <div class="col-md-11 ps-3 py-2">
                                    <p class="m-0">その他費用 <span class="px-3">｜</span>  おやつ（１食）</p>
                                </div>
                                <div class="col-md-1 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥100</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="row row-1 p-3">
                        <p>お支払い予定金額 <span class="mx-5"></span>¥69,700</p>
                        <p>付与予定ポイント <span class="mx-5"></span>697ポイント</p>
                        <p class="p-text-color m-0">※キャンペーン内容や、プランによっては、実際の支払い金額や付与ポイントが異なる場合があります。</p>
                    </div>
                    <div class="row row-6 py-4 me-3">
                        <p class="m-0 text-center">
                            <router-link :to="{name:'todo', params:{page:68}}">
                                <span class="span-btn px-5 py-2">一覧から削除</span>
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
            <!-- at the time of canceled reservation End -->

            <!-- Before Completion Report – 1 Start -->
            <div v-if="activeTab===6" class="row">
                 <div class="col-md-12 text-sm">
                    <div class="row row-2 pb-4 ps-3 mt-5 no-border">
                        <p class="top-p"><span class="span-3">登園済み</span></p>
                    </div>
                    <div class="row row-2 ps-3 pb-5 no-border">
                        <div class="col-left">
                            <img src="../../assets/images/mypage/Mask_Group_60.png" alt="EXY" class="w-100">
                        </div>
                        <div class="col-middle">
                            <p class="text-xl text-decoration-underline fw-bold">COCOROHOIKUEN 弁天町園</p>
                            <p class="text-base mt-4 mb-3">
                                〒552-0002 大阪市港区市岡元町2-11-30 1階 <br>
                                JR大阪環状線「弁天町駅」から徒歩８分 <br>
                                電話番号：06-6539-8484
                            </p>
                            <p class="text-base"> 
                                <router-link :to="{name:'Talk'}">
                                    <span class="span-2">トークルーム</span>
                                </router-link>
                            </p>
                        </div>
                        <div class="col-right pe-4">
                            <router-link :to="{name:'todo', params:{page:68}}">
                                <p class="text-center m-0 right-p py-2">一覧から削除</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="row row-1 mt-5 text-lg">
                      <div class="col-md-12 p-4">
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">利用時間</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0">2021年2月16日（火）<span class="ms-5">9:00〜16:00（7:00h）</span></p>
                        </div>
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">利用プラン</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0">体験保育 <span class="px-3">｜</span>１歳児以上</p>
                        </div>
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">オプション</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0">その他費用 <span class="px-3">｜</span>給食、その他費用 <span class="px-3">｜</span>おやつ</p>
                        </div>
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">お支払い総額</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0">￥6,500</p>
                        </div>
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">内訳</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0 pb-2">・体験保育  <span class="px-2">｜</span> １歳児以上 プラン（9:00h × ¥10）<span class="px-1"></span> … ￥5,400 </p>
                          <p class="m-0 pb-2">・施設利用料 <span class="px-1"></span>… ￥500 </p>
                          <p class="m-0 pb-2">・その他費用  <span class="px-2">｜</span> 給食（１食）<span class="px-1"></span>… ￥500 </p>
                          <p class="m-0 pb-2">・その他費用  <span class="px-2">｜</span> おやつ（１食）<span class="px-1"></span>… ￥100</p>
                        </div>
                        <div class="row row-3 px-3 py-2 no-border text-base">
                          <p class="m-0">保育園からの一言</p>
                        </div>
                        <div class="row row-2 p-3 no-border">
                          <p class="m-0">親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰</p>
                        </div>
                        <div class="row inner-1 mt-5 "></div>
                      </div>
                    </div>
                    <div class="row row-1 p-3 mt-5 text-lg">
                        <p class="m-0 text-lg">予約内容</p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">登園日時</p>
                    </div>
                    <div class="row row-2 p-3 no-border text-lg">
                        <p class="m-0">2021年2月26日（金）<span class="ms-5">09：00 〜 17：00</span></p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">予約詳細</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">プラン</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">体験保育  <span class="px-3">|</span>  １歳児以上</p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">オプション</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">その他費用  <span class="px-3">|</span>  給食、その他費用  <span class="px-3">|</span>  おやつ </p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">利用者</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 田中 海  <span class="px-5"></span>  令和2年2月25日生（満１歳）<span class="px-2"></span>男児 アレルギー疾患：有  </p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-md-2">
                            <p class="m-0">送迎者</p>
                          </div>
                          <div class="col-md-3">
                            <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 田中 愛 </p>
                          </div>
                          <div class="col-md-7">
                            <p class="m-0"> 族柄：母 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-2">
                            
                          </div>
                          <div class="col-md-3">
                            <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">2</span> 田中 仁 </p>
                          </div>
                          <div class="col-md-7">
                            <p class="m-0"> 族柄：父 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">緊急連絡先追加</p>
                      </div>
                      <div class="col-md-3">
                        <p class="m-0"><span class="span-1 px-2 py-1 text-base me-2">1</span> 上田 誠</p>
                      </div>
                      <div class="col-md-7">
                        <p class="m-0"> 族柄：祖父 <span class="px-5">｜</span> 携帯番号：090-0000-0000</p>
                      </div>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <div class="col-md-2">
                        <p class="m-0">支払い方法</p>
                      </div>
                      <div class="col-md-10">
                        <p class="m-0">クレジット支払い</p>
                      </div>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">アンケート</p>
                    </div>
                    <div class="row row-2 no-border p-3 mt-2 text-lg">
                       <div class="col-md-12 pb-2">
                           <div class="row">
                                <div class="col-4 pt-2">
                                    <p class="m-0">▶︎アレルギー</p>
                                </div>
                                <div class="col-5 pt-2">
                                    <p class="m-0">あり</p>
                                </div>
                                <div class="col-6">
                                    <p class="m-0 p-box-2 ps-3 py-2">卵アレルギーがあります。</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎ミルク</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">あり</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎おやつ</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">なし</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎給食</p>
                                </div>
                                <div class="col-5">
                                    <p class="m-0">なし</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                                <div class="col-4">
                                    <p class="m-0">▶︎離乳食のすすみ具合</p>
                                </div>
                           </div>
                           <div class="row mt-3">
                             <div class="col-md-10">
                               <p class="m-0 p-box-2 ps-3 pt-2 pb-5">柔らかく煮たブロッコリーをお昼ごはんに食べています。それ以外はまだ食べられません。（好き嫌いかも…？）</p>
                             </div>
                           </div>
                       </div>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">備考</p>
                    </div>
                    <div class="row row-2 p-3 no-border text-lg">
                        <p class="">【園に伝えておきたいことなどを自由にご記入ください】親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。</p>
                    </div>
                    <div class="row row-3 px-3 py-2 no-border text-base">
                        <p class="m-0">金額</p>
                    </div>
                    <div class="row row-7 mt-3 me-3 text-lg">
                        <div class="col-md-2 inner-left-1 pt-4">
                          <p class="m-0 text-center pt-5 fw-bold">内訳</p>
                        </div>
                        <div class="col-md-10">
                            <div class="row">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">体験保育  <span class="px-3">｜</span>  １歳児以上 プラン（9:00h × ¥10）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥5,400</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">施設利用料</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥500</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">その他費用 <span class="px-3">｜</span>  給食（１食）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥500</p>
                                </div>
                            </div>
                            <div class="row inner-1">
                                <div class="col-md-10 ps-3 py-2">
                                    <p class="m-0">その他費用 <span class="px-3">｜</span>  おやつ（１食）</p>
                                </div>
                                <div class="col-md-2 ps-3 py-2 col-left-border">
                                    <p class="m-0">￥100</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div class="row row-1 p-3 mt-3 text-lg">
                        <p class="m-0">支払い予定金額 <span class="mx-5"></span>￥6,500</p>
                    </div>
                    <div class="row row-1 p-3 text-lg">
                      <p class="m-0">付与予定ポイント <span class="mx-5"></span>697ポイント</p>
                    </div>
                </div>
            </div>
            <!-- Before Completion Report – 1 End --> 
            <div v-if="activeTab===5" class="row">
                <p class="text-center">Tab 5</p>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Reservation",
   data() {
    return {
      activeTab: 1
    }
   },
}
</script>

<style scoped>

</style>