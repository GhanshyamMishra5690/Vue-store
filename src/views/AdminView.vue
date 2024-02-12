<template>
  <div class="container py-4">
    <router-link :to="{ name: 'Category' }">
      <button class="btn btn-primary btn-lg mt-5">Admin Category</button>
    </router-link>
    <br />
    <router-link :to="{ name: 'ProductView' }">
      <button class="btn btn-primary btn-lg mt-5">Admin Products</button>
    </router-link>
    <br />
  </div>
</template>

<script>
export default {};
</script>
