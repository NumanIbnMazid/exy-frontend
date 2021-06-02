<template>
  <div>
    <!-- Slider Start -->
    <div id="homeSlider" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#homeSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#homeSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>

      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active">
          <img src="https://via.placeholder.com/1920x1080/f9fafb" class="d-block w-100" alt="">
          <div class="carousel-caption">
            <img src="https://dummyimage.com/346x125/f9fafb/CB3A82&text=EXY" alt="Logo">
            <h3>WEBで予約、WEBで決済 <br/>保育園探しは <br/>キガルニホイク</h3>
          </div>
        </div>
        <!-- Slide 2 -->
        <div class="carousel-item">
          <img src="https://via.placeholder.com/1920x1080/f9fafb" class="d-block w-100" alt="">
          <div class="carousel-caption">
            <img src="https://dummyimage.com/346x125/f9fafb/CB3A82&text=EXY" alt="Logo">
            <h3>WEBで予約、WEBで決済 <br/>保育園探しは <br/>キガルニホイク</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider End -->

    <!-- Search Section Start -->
    <div class="search-section">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <date-picker
                valueType="format"
                :disabled-date="disabledBeforeToday"
                placeholder="日付からさがす"
            ></date-picker>
          </div>
          <div class="col-5">

          </div>
          <div class="col-2">
            
          </div>
        </div>
      </div>
    </div>
    <!-- Search Section End -->

  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ja';

export default {
  name: 'Home',
  components: { DatePicker },
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
