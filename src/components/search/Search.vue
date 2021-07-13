<template>
  <div>
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">検索</li>
            <li class="breadcrumb-item active" aria-current="page">検索結果</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="row py-3">
        <aside class="col-lg-3 sidebar-search mobile-sidebar-search">
          <div class="widget">
            <div class="widget-title">⽬的からさがす</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <ul>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⼀時保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⽉極保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 病児・病後児保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 障がい児保育</label></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="widget">
            <div class="widget-title">エリアさがす</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <div class="widget-body-title mt-0">地域</div>

                <button class="add-detail-condition mb-3" @click="RailwayLineModel = true">地域を追加する +</button>
                <railway-line v-if="RailwayLineModel" @close="RailwayLineModel = false"></railway-line>

                <div class="widget-body-title mt-0">沿線</div>

                <button class="add-detail-condition" @click="RailwayLineModel = true">地域を追加する +</button>
                <railway-line v-if="RailwayLineModel" @close="RailwayLineModel = false"></railway-line>
              </div>
            </div>
          </div>

          <div class="widget">
            <div class="widget-title">⽇付からさがす</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <div class="mb-3 row">
                  <label class="col-sm-3 col-form-label">⽇付</label>
                  <div class="col-sm-9">
                    <date-picker
                        v-model="date"
                        valueType="format"
                        :disabled-date="disabledBeforeToday"
                        placeholder="日付を選択"
                    ></date-picker>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-sm-3 col-form-label">開始</label>
                  <div class="col-sm-9">
                    <date-picker
                        v-model="start_time"
                        :time-picker-options="timePickerOptions"
                        format="HH:mm"
                        type="time"
                        placeholder="開始時間"
                    ></date-picker>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-sm-3 col-form-label">終了</label>
                  <div class="col-sm-9">
                    <date-picker
                        v-model="end_time"
                        :time-picker-options="timePickerOptions"
                        format="HH:mm"
                        type="time"
                        placeholder="終了時間"
                    ></date-picker>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="widget">
            <div class="widget-title">⼦どもの年齢</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <div class="row">
                  <div class="col-6">
                    <ul>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ０歳児</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ２歳児</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ４歳児</label></li>
                    </ul>
                  </div>
                  <div class="col-6">
                    <ul>
                      <li><label><input class="form-check-input me-1" type="checkbox"> １歳児</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ３歳児</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ５歳児</label></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="widget">
            <div class="widget-title">絞り込み条件</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <div class="widget-body-title mt-0">保育時間</div>
                <ul>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 早朝保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 延⻑保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 夜間保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> お泊まり保育</label></li>
                </ul>
                <div class="widget-body-title">受け⼊れ可能年齢</div>
                <ul>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⽣後半年以内受け⼊れ</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ２歳児まで</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ５歳児まで</label></li>
                </ul>
                <div class="widget-body-title">園規模</div>
                <ul>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⼩規模（19名以下）</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 中規模（59名以下）</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⼤規模（60名以上）</label></li>
                </ul>
                <div class="widget-body-title">特⾊</div>
                <ul>
                  <li><label><input class="form-check-input me-1" type="checkbox"> アレルギー対応可</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 教育(習い事)あり</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⽇・祝開園</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> ⼿ぶら登園</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 早朝・延⻑保育</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 園庭あり</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 無添加給⾷あり</label></li>
                  <li><label><input class="form-check-input me-1" type="checkbox"> 送迎あり</label></li>
                </ul>
                <button class="add-detail-condition" @click="ShowConditionModel = true">地域を追加する +</button>
                <details-conditions v-if="ShowConditionModel" @close="ShowConditionModel = false"></details-conditions>
              </div>
            </div>
          </div>

          <div class="widget">
            <div class="widget-title">キーワードからさがす</div>
            <div class="widget-body-outer">
              <div class="widget-body">
                <div class="color-b2 py-2">キーワードで絞り込む</div>
                <div class="input-group search-by-keyword">
                  <input type="text" class="form-control">
                  <div class="input-group-append">
                    <button class="btn btn-secondary" type="button">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div class="col-lg-9 search-result">

          <h3 class="fw-bold">検索結果</h3>

          <div class="d-flex align-items-center text-center search-result-tab">
            <div class="p-10 flex-fill cursor-pointer text-base" @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]">おすすめ</div>
            <div class="p-10 flex-fill cursor-pointer text-base" @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]">口コミランキング</div>
            <div class="p-10 flex-fill cursor-pointer text-base" @click="activeTab=3" :class="[ activeTab === 3 ? 'active' : '' ]">新着</div>
            <div class="p-10 flex-fill cursor-pointer text-base" @click="activeTab=4" :class="[ activeTab === 4 ? 'active' : '' ]">価格</div>
          </div>

          <div class="search-result-total py-4">検索結果 <span class="text-2xl fw-bold" style="color: #84C942">120</span> 件</div>

          <div class="search-result-content">
            <div v-if="activeTab === 1">
              <search-result-item v-for="n in 1" :key="n"></search-result-item>
            </div>
            <div v-if="activeTab === 2">
              <search-result-item v-for="n in 2" :key="n"></search-result-item>
            </div>
            <div v-if="activeTab === 3">
              <search-result-item v-for="n in 1" :key="n"></search-result-item>
            </div>
            <div v-if="activeTab === 4">
              <search-result-item v-for="n in 2" :key="n"></search-result-item>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import RailwayLine from "./RailwayLine";
import SearchResultItem from "./SearchResultItem";
import DetailsConditions from "./DetailsConditions";

export default {
  name: "Search",
  data() {
    return {
      date: '',
      end_time: '',
      start_time: '',
      activeTab: 1,
      RailwayLineModel: false,
      ShowConditionModel: false,
      timePickerOptions: {
        start: '00:00',
        step: '00:15',
        end: '23:45'
      }
    }
  },
  components: {
    DatePicker,
    RailwayLine,
    SearchResultItem,
    DetailsConditions
  },
  methods: {
    disabledBeforeToday(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return date < today;
    }
  },
}
</script>

<style scoped>
.mx-datepicker {
  width: 100%;
}
</style>