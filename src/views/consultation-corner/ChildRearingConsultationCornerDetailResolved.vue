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
          <li class="breadcrumb-item">お悩みきいて！</li>
        </ol>
      </nav>
    </div>
    <div class="container-fluid pt-4">
      <div class="row">
        <div class="col-md-8 col-lg-9 mb-4 mb-md-0">

          <div class="border border-2 border-color-707070 rounded mt-4">
            <div class="d-flex align-items-center bg-fefdfc p-2 border-bottom border-2">
              <div>
                <img src="../../assets/images/consultation-corner/4.png" alt="EXY">
              </div>
              <div class="text-sm ms-2">
                <span class="fw-bold">まま〜さん</span><br/>
                <span class="text-xs color-707070">2021/03/09 15:11</span>
              </div>
              <div class="ms-auto text-base fw-bold">
                <span class="color-cb3a82">2</span>
                回答
              </div>
            </div>
            <div class="p-2 color-707070">
              現在小6、春から中1になる息子がいる母です。<br/>
              体が小さめで心も幼く、中学でちゃんとやっていけるのか、特にいじめられないか心配です。<br/>
              先日息子の授業参観で感謝の気持ちや目標などをテーマとして皆の前で発表すると言うことがありました。中には声変わりしてるの？と思うくらい声が低い男の子もいれば親より大きいのではと思う男の子もちらほら。びっくりしてしまいました。<br/>
              話はずれましたが、中には恥じらい持っていたのか小さめに話したり、しっかり親や友達に感謝の気持ちを話してるお子さんが多い中、息子は恥じらいもなく大きい声を出しながら叫んでいてしかも自分で描いた絵をアップしたのですがその絵がなんとも言えず幼くて….。<br/>
              でもそんな一生懸命な息子に感動して涙ぐんでしまいました。<br/><br/>

              今のところ、息子の担任の先生がすごく理解ある先生なので先生のおかげもあってか周りのお友達にも息子の良いところを引き出してくれて楽しくやれていますが、中学になってからもこの調子だと心配に思う部分があります。(中学は地元の公立中学に進学予定です)<br/><br/>

              まだ起きてもないことを心配する必要はないのかなとも思いますし、親である私自身は息子なりの成長があるから息子らしくいてもらいたいと願っていていますが….。授業参観で他の6年生を目の当たりにしたら心配になってしまいました。<br/><br/>

              同じように精神的にも身体的にも幼いお子様をお持ちのお母様、ぜひお子様の体験談や親としてどう心構えを持っていたなどをお聞かせ頂けたら幸いです。
            </div>

            <div class="d-flex align-items-center justify-content-between p-2">
              <div class="color-cb3a82 text-sm">
                <span class="text-decoration-underline me-4">＃回答受付中</span>
                <span class="text-decoration-underline me-4">＃とりあえず聞いて</span>
                <span class="text-decoration-underline me-4">＃働くママ・働くパパ</span>
                <span class="text-decoration-underline">＃5歳児</span>
              </div>
              <div>
                <div class="d-inline-block text-sm border py-1 px-2 rounded-3 cursor-pointer" @click="violationModal = true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                    <path id="ban-solid" d="M14,8a6,6,0,1,0,6,6A6,6,0,0,0,14,8Zm3.148,2.852a4.452,4.452,0,0,1,.5,5.7l-6.2-6.2A4.452,4.452,0,0,1,17.148,10.852Zm-6.3,6.3a4.452,4.452,0,0,1-.5-5.7l6.2,6.2A4.452,4.452,0,0,1,10.852,17.148Z" transform="translate(-7.5 -7.5)" fill="#707070" stroke="#fff" stroke-width="1"/>
                  </svg>
                  違反報告
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <div class="d-flex align-items-center border-bottom pb-1 border-color-707070">
              <div class="fw-bold">
                <img src="../../assets/images/consultation-corner/oukan.png" alt="EXY">
                ベストアンサー
              </div>
            </div>
            <div class="border-bottom exy-pt-1 border-color-707070"></div>

            <div class="border border-2 border-color-707070 rounded mt-3">
              <div class="d-flex align-items-center justify-content-between bg-fefdfc p-2 border-bottom border-2">
                <div class="d-flex align-items-center">
                  <div>
                    <img src="../../assets/images/consultation-corner/8.png" alt="EXY">
                  </div>
                  <div class="text-sm ms-2">
                    <span class="fw-bold">さちこさん</span><br/>
                    <span class="text-xs color-707070">2021/03/09 15:11</span>
                  </div>
                </div>
                <div>
                  <img src="../../assets/images/consultation-corner/bestA2x.png" alt="EXY">
                </div>
              </div>
              <div class="p-2 color-707070">
                そろそろ子離れの準備をされた方がいいと思いました。<br/><br/>

                お子さんは、健康なら大丈夫です。相談者さんが稀有したところで何にもなりません。心配心を別のエネルギーに変えて、楽しくお過ごしください。
              </div>

              <div class="p-2">
                <div class="d-flex justify-content-end">
                  <div class="d-inline-block text-sm border py-1 px-2 rounded-3 cursor-pointer" @click="violationModal = true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                      <path id="ban-solid" d="M14,8a6,6,0,1,0,6,6A6,6,0,0,0,14,8Zm3.148,2.852a4.452,4.452,0,0,1,.5,5.7l-6.2-6.2A4.452,4.452,0,0,1,17.148,10.852Zm-6.3,6.3a4.452,4.452,0,0,1-.5-5.7l6.2,6.2A4.452,4.452,0,0,1,10.852,17.148Z" transform="translate(-7.5 -7.5)" fill="#707070" stroke="#fff" stroke-width="1"/>
                    </svg>
                    違反報告
                  </div>
                </div>
                <div class="dashed-border pt-2"></div>
              </div>

              <div class="text-sm p-2">
                <div class="fw-bold color-cb3a82">質問者からのお礼のコメント</div>
                <div class="color-707070 py-2">はっきりと言っていただいて気持ちの整理がつきました。心配しすぎず、信じて見守りたいと思います。</div>
                <div class="color-707070">お礼日時：2021/03/10 12:30</div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <div class="d-flex align-items-center justify-content-between border-bottom pb-1 border-color-707070">
              <div class="fw-bold">
                <img src="../../assets/images/svg/title-left.svg" alt="EXY">
                この相談への回答
              </div>
              <div>
                <label>並べ替え：</label>
                <select class="mx-2 border rounded py-1 px-2">
                  <option>新着順</option>
                  <option>投稿順</option>
                </select>
              </div>
            </div>
            <div class="border-bottom exy-pt-1 border-color-707070"></div>

            <div class="border border-2 border-color-707070 rounded mt-3">
              <div class="d-flex align-items-center bg-fefdfc p-2 border-bottom border-2">
                <div>
                  <img src="../../assets/images/consultation-corner/6.png" alt="EXY">
                </div>
                <div class="text-sm ms-2">
                  <span class="fw-bold">さちこさん</span><br/>
                  <span class="text-xs color-707070">2021/03/09 15:11</span>
                </div>
              </div>
              <div class="p-2 color-707070">
                ５人の息子が居ます！<br/><br/>

                勿論、質問者さん同様に身体も心も小さく幼いおっとりタイプもいれば、サッカーやっていて明るく友達多く身長も高くの子も。<br/><br/>

                同じ環境で育った兄弟でさえ、かなりの差はありますので気にしない事かな。<br/>
                特に男の子は中学入学あたりなら女の子(親)より小さい方が割と多い。心も割と幼いです。<br/><br/>

                ちなみに三男(春から中1)はギリギリ140cmです。<br/><br/>

                女の子も２人居ますが、やはり女の子より男の子の方がシャイだったり考え方とか幼い。
              </div>

              <div class="d-flex justify-content-end p-2">
                <div class="d-inline-block text-sm border py-1 px-2 rounded-3 cursor-pointer" @click="violationModal = true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                    <path id="ban-solid" d="M14,8a6,6,0,1,0,6,6A6,6,0,0,0,14,8Zm3.148,2.852a4.452,4.452,0,0,1,.5,5.7l-6.2-6.2A4.452,4.452,0,0,1,17.148,10.852Zm-6.3,6.3a4.452,4.452,0,0,1-.5-5.7l6.2,6.2A4.452,4.452,0,0,1,10.852,17.148Z" transform="translate(-7.5 -7.5)" fill="#707070" stroke="#fff" stroke-width="1"/>
                  </svg>
                  違反報告
                </div>
              </div>
            </div>
            <div class="border border-2 border-color-707070 rounded mt-3">
              <div class="d-flex align-items-center bg-fefdfc p-2 border-bottom border-2">
                <div>
                  <img src="../../assets/images/consultation-corner/6.png" alt="EXY">
                </div>
                <div class="text-sm ms-2">
                  <span class="fw-bold">さちこさん</span><br/>
                  <span class="text-xs color-707070">2021/03/09 15:11</span>
                </div>
              </div>
              <div class="p-2 color-707070">
                ５人の息子が居ます！<br/><br/>

                勿論、質問者さん同様に身体も心も小さく幼いおっとりタイプもいれば、サッカーやっていて明るく友達多く身長も高くの子も。<br/><br/>

                同じ環境で育った兄弟でさえ、かなりの差はありますので気にしない事かな。<br/>
                特に男の子は中学入学あたりなら女の子(親)より小さい方が割と多い。心も割と幼いです。<br/><br/>

                ちなみに三男(春から中1)はギリギリ140cmです。<br/><br/>

                女の子も２人居ますが、やはり女の子より男の子の方がシャイだったり考え方とか幼い。
              </div>

              <div class="d-flex justify-content-end p-2">
                <div class="d-inline-block text-sm border py-1 px-2 rounded-3 cursor-pointer" @click="violationModal = true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                    <path id="ban-solid" d="M14,8a6,6,0,1,0,6,6A6,6,0,0,0,14,8Zm3.148,2.852a4.452,4.452,0,0,1,.5,5.7l-6.2-6.2A4.452,4.452,0,0,1,17.148,10.852Zm-6.3,6.3a4.452,4.452,0,0,1-.5-5.7l6.2,6.2A4.452,4.452,0,0,1,10.852,17.148Z" transform="translate(-7.5 -7.5)" fill="#707070" stroke="#fff" stroke-width="1"/>
                  </svg>
                  違反報告
                </div>
              </div>
            </div>
            <div class="border border-2 border-color-707070 rounded mt-3">
              <div class="d-flex align-items-center bg-fefdfc p-2 border-bottom border-2">
                <div>
                  <img src="../../assets/images/consultation-corner/6.png" alt="EXY">
                </div>
                <div class="text-sm ms-2">
                  <span class="fw-bold">さちこさん</span><br/>
                  <span class="text-xs color-707070">2021/03/09 15:11</span>
                </div>
              </div>
              <div class="p-2 color-707070">
                ５人の息子が居ます！<br/><br/>

                勿論、質問者さん同様に身体も心も小さく幼いおっとりタイプもいれば、サッカーやっていて明るく友達多く身長も高くの子も。<br/><br/>

                同じ環境で育った兄弟でさえ、かなりの差はありますので気にしない事かな。<br/>
                特に男の子は中学入学あたりなら女の子(親)より小さい方が割と多い。心も割と幼いです。<br/><br/>

                ちなみに三男(春から中1)はギリギリ140cmです。<br/><br/>

                女の子も２人居ますが、やはり女の子より男の子の方がシャイだったり考え方とか幼い。
              </div>

              <div class="d-flex justify-content-end p-2">
                <div class="d-inline-block text-sm border py-1 px-2 rounded-3 cursor-pointer" @click="violationModal = true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                    <path id="ban-solid" d="M14,8a6,6,0,1,0,6,6A6,6,0,0,0,14,8Zm3.148,2.852a4.452,4.452,0,0,1,.5,5.7l-6.2-6.2A4.452,4.452,0,0,1,17.148,10.852Zm-6.3,6.3a4.452,4.452,0,0,1-.5-5.7l6.2,6.2A4.452,4.452,0,0,1,10.852,17.148Z" transform="translate(-7.5 -7.5)" fill="#707070" stroke="#fff" stroke-width="1"/>
                  </svg>
                  違反報告
                </div>
              </div>
            </div>
            <div class="border border-2 border-color-707070 rounded mt-3">
              <div class="d-flex align-items-center bg-fefdfc p-2 border-bottom border-2">
                <div>
                  <img src="../../assets/images/consultation-corner/6.png" alt="EXY">
                </div>
                <div class="text-sm ms-2">
                  <span class="fw-bold">さちこさん</span><br/>
                  <span class="text-xs color-707070">2021/03/09 15:11</span>
                </div>
              </div>
              <div class="p-2 color-707070">
                ５人の息子が居ます！<br/><br/>

                勿論、質問者さん同様に身体も心も小さく幼いおっとりタイプもいれば、サッカーやっていて明るく友達多く身長も高くの子も。<br/><br/>

                同じ環境で育った兄弟でさえ、かなりの差はありますので気にしない事かな。<br/>
                特に男の子は中学入学あたりなら女の子(親)より小さい方が割と多い。心も割と幼いです。<br/><br/>

                ちなみに三男(春から中1)はギリギリ140cmです。<br/><br/>

                女の子も２人居ますが、やはり女の子より男の子の方がシャイだったり考え方とか幼い。
              </div>

              <div class="d-flex justify-content-end p-2">
                <div class="d-inline-block text-sm border py-1 px-2 rounded-3 cursor-pointer" @click="violationModal = true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                    <path id="ban-solid" d="M14,8a6,6,0,1,0,6,6A6,6,0,0,0,14,8Zm3.148,2.852a4.452,4.452,0,0,1,.5,5.7l-6.2-6.2A4.452,4.452,0,0,1,17.148,10.852Zm-6.3,6.3a4.452,4.452,0,0,1-.5-5.7l6.2,6.2A4.452,4.452,0,0,1,10.852,17.148Z" transform="translate(-7.5 -7.5)" fill="#707070" stroke="#fff" stroke-width="1"/>
                  </svg>
                  違反報告
                </div>
              </div>
            </div>
            <div class="border border-2 border-color-707070 rounded mt-3">
              <div class="d-flex align-items-center bg-fefdfc p-2 border-bottom border-2">
                <div>
                  <img src="../../assets/images/consultation-corner/6.png" alt="EXY">
                </div>
                <div class="text-sm ms-2">
                  <span class="fw-bold">さちこさん</span><br/>
                  <span class="text-xs color-707070">2021/03/09 15:11</span>
                </div>
              </div>
              <div class="p-2 color-707070">
                ５人の息子が居ます！<br/><br/>

                勿論、質問者さん同様に身体も心も小さく幼いおっとりタイプもいれば、サッカーやっていて明るく友達多く身長も高くの子も。<br/><br/>

                同じ環境で育った兄弟でさえ、かなりの差はありますので気にしない事かな。<br/>
                特に男の子は中学入学あたりなら女の子(親)より小さい方が割と多い。心も割と幼いです。<br/><br/>

                ちなみに三男(春から中1)はギリギリ140cmです。<br/><br/>

                女の子も２人居ますが、やはり女の子より男の子の方がシャイだったり考え方とか幼い。
              </div>

              <div class="d-flex justify-content-end p-2">
                <div class="d-inline-block text-sm border py-1 px-2 rounded-3 cursor-pointer" @click="violationModal = true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                    <path id="ban-solid" d="M14,8a6,6,0,1,0,6,6A6,6,0,0,0,14,8Zm3.148,2.852a4.452,4.452,0,0,1,.5,5.7l-6.2-6.2A4.452,4.452,0,0,1,17.148,10.852Zm-6.3,6.3a4.452,4.452,0,0,1-.5-5.7l6.2,6.2A4.452,4.452,0,0,1,10.852,17.148Z" transform="translate(-7.5 -7.5)" fill="#707070" stroke="#fff" stroke-width="1"/>
                  </svg>
                  違反報告
                </div>
              </div>
            </div>
          </div>

          <pagination/>

          <related-consultation/>

        </div>
        <div class="col-md-4 col-lg-3">
          <right-sidebar/>
        </div>
      </div>
    </div>

    <violation-report-modal v-if="violationModal" @close="violationModal = false"></violation-report-modal>
    <div class="space-100"></div>
  </div>
</template>

<script>
import RightSidebar from "../consultation-corner/RightSidebar";
import Pagination from "../../components/Pagination";
import RelatedConsultation from "./RelatedConsultation";
import ViolationReportModal from "./ViolationReportModal";

export default {
  name: "ChildRearingConsultationCornerDetailResolved",
  data() {
    return {
      violationModal: false
    }
  },
  components: { ViolationReportModal, RelatedConsultation, Pagination, RightSidebar }
}
</script>

<style scoped lang="scss">
.link {
  border: 1px solid #707070;
  border-radius: 60px 15px 15px 60px;
  border-left: inherit;
}

.link2 {
  border: 1px solid #707070;
  border-radius: 15px 60px 60px 15px;
  border-right: inherit;
  margin-top: 15px;
}

.link, .link2 {
  .u-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}
</style>