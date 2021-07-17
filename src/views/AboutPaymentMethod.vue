<template>
  <div>
    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">料金説明</li>
        </ol>
      </nav>
    </div>

    <div class="space-100"></div>
    <registration-link />
    <div class="space-100"></div>
  </div>
</template>

<script>
import RegistrationLink from "../components/RegistrationLink";
export default {
  name: "AboutPaymentMethod",
  components: { RegistrationLink }
}
</script>

<style scoped>

</style>