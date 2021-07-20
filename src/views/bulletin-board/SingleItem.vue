<template>
  <div class="single-item">
    <div class="d-flex">
      <img src="../../assets/images/bulletin-board/3b52a332-s.png" alt="EXY" class="img-fluid flex-shrink-1 me-3">
      <div>
        <div class="d-flex align-items-center mb-2">
          <span class="text-sm border border-color-e6006e me-3 --color-e6006e px-2">施設</span>
          <a href="" class="text-sm fw-bold text-decoration-underline">枚方市に新しい保育園ができるらしい</a>
        </div>
        <p class="text-sm color-707070">府道144号線沿い中宮北町に「いろは保育園」ができるようです。↓こちら 以前は「じてんしゃ工房 PUMP it」があったところ。地図ではここ↓大阪府枚方市中宮北町2-18が住所です。大阪府枚方市中宮北町2-18が住所です。大阪府枚方市中宮北町2-18が住所です。大阪府…</p>
      </div>
    </div>
    <div class="text-end text-muted text-sm">
      <i class="fa fa-heart"></i>
      <span class="ms-1">30</span>
      <span class="ms-3">4月1日</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleItem"
}
</script>

<style scoped lang="scss">
.single-item {
  padding: 10px 0 5px;
  border-bottom: 1px dashed #707070;

  &:last-child {
    border-bottom: inherit;
  }
}
</style>