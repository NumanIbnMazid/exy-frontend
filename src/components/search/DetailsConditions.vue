<template>
  <div class="modal show" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="container py-3">
          <div class="modal-header">
            <h5 class="modal-title">絞り込み条件</h5>
            <button type="button" class="btn-close" @click="$emit('close')" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-3">
                <h5>カリキュラム・⽅針</h5>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-sm-6">
                    <ul>
                      <li><label><input class="form-check-input me-1" type="checkbox"> のびのび元気に⼦どもらしく</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ⼦どものサポートを優先</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> 保護者のサポートを優先</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ⾷育重視</label></li>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <ul>
                      <li><label><input class="form-check-input me-1" type="checkbox"> 就学前教育充実</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> モンテッソーリ教育</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> 英語教育</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> その他</label></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="dashed-border"></div>
            <div class="row">
              <div class="col-md-3">
                <h5>教育(習い事)あり</h5>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-sm-6">
                    <ul>
                      <li><label><input class="form-check-input me-1" type="checkbox"> 外国語</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> 運動</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> 絵画</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> その他</label></li>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <ul>
                      <li><label><input class="form-check-input me-1" type="checkbox"> 幼児教育</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ⾳楽</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> 習字</label></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="dashed-border"></div>
            <div class="row">
              <div class="col-md-3">
                <h5>保護者サービス</h5>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="parent-service">
                      <div class="parent-item">
                        <div class="parent-label">連絡帳アプリ導⼊</div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> あり</label>
                        </div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> なし</label>
                        </div>
                      </div>
                      <div class="parent-item">
                        <div class="parent-label">PTA・保護者会</div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> あり</label>
                        </div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> なし</label>
                        </div>
                      </div>
                      <div class="parent-item">
                        <div class="parent-label">保護者参加</div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> あり</label>
                        </div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> なし</label>
                        </div>
                      </div>
                      <div class="parent-item">
                        <div class="parent-label">制服</div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> あり</label>
                        </div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> なし</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="parent-service">
                      <div class="parent-item">
                        <div class="parent-label">連絡帳アプリ導⼊</div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> あり</label>
                        </div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> なし</label>
                        </div>
                      </div>
                      <div class="parent-item">
                        <div class="parent-label">PTA・保護者会</div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> あり</label>
                        </div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> なし</label>
                        </div>
                      </div>
                      <div class="parent-item">
                        <div class="parent-label">保護者参加</div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> あり</label>
                        </div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> なし</label>
                        </div>
                      </div>
                      <div class="parent-item">
                        <div class="parent-label">制服</div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> あり</label>
                        </div>
                        <div class="parent-checkbox">
                          <label><input class="form-check-input me-1" type="checkbox"> なし</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dashed-border"></div>
            <div class="row">
              <div class="col-md-3">
                <h5>キャンペーン</h5>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-sm-6">
                    <ul>
                      <li><label><input class="form-check-input me-1" type="checkbox"> お祝い⾦あり</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> 無料体験保育あり</label></li>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <ul>
                      <li><label><input class="form-check-input me-1" type="checkbox"> ⼊園時割引あり</label></li>
                      <li><label><input class="form-check-input me-1" type="checkbox"> 保育料割引あり</label></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" @click="$emit('close')">検索する</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsConditions",
}
</script>
<style scoped>
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
}

.modal-content:before {
  content: '';
  display: block;
  border-right: 30px solid #f9fafb;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  position: absolute;
  top: 20px;
  right: 100%;
}

.modal-header {
  background: #707070;
  color: #FFF;
  padding: .7rem 1rem;
  border-radius: inherit;
}

.parent-item {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 6px;
}

.parent-item .parent-label {
  width: 50%;
}

.parent-item .parent-checkbox {
  width: 25%;
}

.parent-item .parent-checkbox input,
.parent-item .parent-checkbox label {
  cursor: pointer;
}

.modal-footer {
  display: block;
  text-align: center;
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

@media (max-width: 1025px) {
  .modal-content {
    height: 80vh;
    overflow-y: auto;
  }
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