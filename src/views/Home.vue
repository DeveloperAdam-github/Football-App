<template>
  <div class="home">
    <header>
      <h1>Welcome to Football World</h1>
      <small
        >Feel free to
        <router-link :to="{ name: 'Signin' }">register</router-link> or
        <router-link :to="{ name: 'Signin' }">login</router-link> if you already
        have an account</small
      >
    </header>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 800px) {
  header {
    padding: 0 0.5rem;
  }
  header h1 {
    font-size: 1.6rem;
  }
}

.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 2rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>
