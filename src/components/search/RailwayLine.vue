<template>
  <div class="modal show" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="container py-3">
          <div style="border: 2px solid #707070">
            <div class="modal-header">
              <h5 class="modal-title">沿線からさがす</h5>
              <button type="button" class="btn-close" @click="$emit('close')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>JR</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> JR⼤阪環状線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> JR桜島線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> JR関⻄空港線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> JR⼤おおさか東線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> JR東海道本線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> JR関⻄本線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> JR福知⼭線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 東海道新幹線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> JR⽚町線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> JR阪和線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> JR東⻄線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> JR⼤阪環状線</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>近畿⽇本鉄道</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 近鉄けいはんな線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 近鉄⼤阪線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 近鉄⻑野線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 近鉄奈良線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 近鉄信貴線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 近鉄道明寺線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 近鉄難波線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 近鉄南⼤阪線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 近鉄⻄信貴ケーブル</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>Osaka Metro</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 地下鉄御堂筋線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 南港ポートタウン線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 地下鉄堺筋線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 地下鉄⾕町線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 地下鉄中央線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 地下鉄⻑堀鶴⾒緑地線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 地下鉄四つ橋線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 地下鉄千⽇前線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 地下鉄今⾥筋線</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>Demo</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 北⼤阪急⾏</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>南海電鉄</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 南海本線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 南海多奈川線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 南海空港線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 南海⾼野線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 南海⾼師浜線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 南海汐⾒橋線</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>泉北⾼速鉄道</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 泉北⾼速鉄道</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>阪急電鉄</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 阪急神⼾線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 阪急千⾥線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 阪急宝塚線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 阪急京都線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 阪急箕⾯線</label></li>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 阪急神⼾線</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>⼤阪モノレール</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> ⼤阪モノレール本線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> ⼤阪モノレール彩都線</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>京阪電鉄</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 京阪本線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 京阪交野線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 京阪中之島線</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>阪堺電気軌道</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 阪堺電気軌道上町線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 阪堺電気軌道阪堺線</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>阪神電鉄</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 阪神本線</label></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 阪神電鉄阪神なんば線</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>能勢電鉄</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> 能勢電鉄妙⾒線</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border"></div>

              <div class="row py-md-3">
                <div class="col-md-3">
                  <h5>⽔間電鉄</h5>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li><label><input class="form-check-input me-1" type="checkbox"> ⽔間鉄道</label></li>
                  </ul>
                </div>
              </div>

              <div class="dashed-border mb-5"></div>

              <div class="further-collapse-btn" @click="furtherCollapseClose">さらに絞り込む</div>

              <transition name="fade">
                <div class="further-collapse" v-if="furtherCollapse">
                  <div class="row">
                    <div class="col-md-3">
                      <ul>
                        <li class="text-center"><label><input class="form-check-input me-1" @click="selectAll" type="checkbox" v-model="selectedAll"> 京阪本線</label></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="1" v-model="selected"> 淀屋橋</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="2" v-model="selected"> 京橋</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="3" v-model="selected"> 森⼩路</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="4" v-model="selected"> ⼟居</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="5" v-model="selected"> ⾨真市</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="6" v-model="selected"> 萱島</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="7" v-model="selected"> 光善寺</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="8" v-model="selected"> 御殿⼭</label></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="9" v-model="selected"> 北浜</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="10" v-model="selected"> 野江</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="11" v-model="selected"> 千林</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="12" v-model="selected"> 守⼝市</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="13" v-model="selected"> 古川橋</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="14" v-model="selected"> 寝屋川市</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="15" v-model="selected"> 枚⽅公園</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="16" v-model="selected"> 牧野</label></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="17" v-model="selected"> 天満橋</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="18" v-model="selected"> 関⽬</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="19" v-model="selected"> 滝井</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="20" v-model="selected"> ⻄三荘</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="21" v-model="selected"> ⼤和⽥</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="22" v-model="selected"> ⾹⾥園</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="23" v-model="selected"> 枚⽅市</label></li>
                        <li><label><input class="form-check-input me-1" type="checkbox" value="24" v-model="selected"> 樟葉</label></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </transition>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-light" @click="$emit('close')">追加する</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RailwayLine",
  data() {
    return {
      selected: [],
      selectedAll: false,
      furtherCollapse: false
    }
  },
  watch: {
    selected: function (selected) {
      this.selectedAll = (selected.length === 24);
    }
  },
  methods: {
    /**
     * Select all checkbox
     * @param event
     */
    selectAll: function (event) {
      if (event.target.checked === false) {
        this.selected = [];
      } else {
        for (let key = 1; key <= 24; key++) {
          if (this.selected.indexOf(key) === -1) {
            this.selected.push(key);
          }
        }
      }
    },
    furtherCollapseClose: function () {
      this.furtherCollapse = !this.furtherCollapse
      if (!this.furtherCollapse) {
        this.selected = []
        this.selectedAll = false
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.dashed-border {
  margin-top: 15px;
  margin-bottom: 15px;
}

.modal {
  display: block;
  background: rgba(0, 0, 0, .5);
}

.modal-dialog {
  overflow-y: initial !important;
}

.modal-content {
  background: #f9fafb;
  height: 90vh;
  overflow-y: auto;
}

.modal-header {
  background: #707070;
  color: #FFF;
  padding: .7rem 1rem;
  border-radius: inherit;
}

.modal-body h5 {
  text-align: center;
  color: #383838;
  font-weight: 400;
}

.further-collapse-btn {
  background: #C6C3C3;
  color: #FFF;
  padding: 12px;
  cursor: pointer;
  margin: 60px 0 25px;
}

.modal-footer {
  display: block;
  text-align: center;
  border-color: #707070;
}

.modal-footer button {
  background: #3d3442;
  border: none;
  padding: 12px 60px;
  font-size: 1.4rem;
  color: #FFFFFF;
  border-radius: 0;
}

.btn:focus {
  box-shadow: inherit;
}

@media (max-width: 500px) {
  .parent-item .parent-label {
    width: 100%;
    margin-bottom: 2px;
  }

  .parent-item .parent-checkbox {
    width: 50%;
  }
}
</style>