<template>
  <div>
    <!-- Start Home Slider -->
    <div id="homeSlider" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#homeSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#homeSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://via.placeholder.com/1920x1080/f9fafb" class="d-block w-100" alt="">
          <div class="carousel-caption"></div>
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/1920x1080/f9fafb" class="d-block w-100" alt="">
          <div class="carousel-caption"></div>
        </div>
      </div>
    </div>
    <!-- End Home Slider -->
  </div>
</template>

<script>

export default {  name: 'Home',
  components: {}
}
</script>
