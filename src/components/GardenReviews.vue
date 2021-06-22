<template>
  <hooper :settings="hooperSettings">

    <slide v-for="n in 5" :key="n">
      <div class="garden-review-item">
        <div class="date-time">2021年2月利用者</div>
        <a href="#" class="review-title">一時保育 - １歳児プラン</a>
        <ul class="review">
          <li>
            <div class="title">雰囲気</div>
            <div class="count">4</div>
            <div class="star">
              <i class="fa fa-star color"></i>
              <i class="fa fa-star color"></i>
              <i class="fa fa-star color"></i>
              <i class="fa fa-star color"></i>
              <i class="fa fa-star"></i>
            </div>
          </li>
          <li>
            <div class="title">環境・施設</div>
            <div class="count">4</div>
            <div class="star">
              <i class="fa fa-star color"></i>
              <i class="fa fa-star color"></i>
              <i class="fa fa-star color"></i>
              <i class="fa fa-star color"></i>
              <i class="fa fa-star"></i>
            </div>
          </li>
          <li>
            <div class="title">保育内容</div>
            <div class="count">4</div>
            <div class="star">
              <i class="fa fa-star color"></i>
              <i class="fa fa-star color"></i>
              <i class="fa fa-star color"></i>
              <i class="fa fa-star color"></i>
              <i class="fa fa-star"></i>
            </div>
          </li>
        </ul>
        <div class="review-text">
          この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章…
        </div>
        <img class="rounded-circle" src="../assets/images/WEB04_ha.png" alt="EXY">
      </div>
    </slide>

  </hooper>
</template>

<script>
import {Hooper, Slide} from "hooper";
import 'hooper/dist/hooper.css';

export default {
  name: "GardenReviews",
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        autoPlay: false,
        playSpeed: "2000",
        infiniteScroll: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 2
          },
          1100: {
            itemsToShow: 4,
            pagination: 'fraction'
          }
        }
      }
    };
  },
  components: {
    Hooper,
    Slide
  }
}
</script>

<style scoped>

</style>