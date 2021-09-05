<template>
  <div class="container">
    <header>
      <h1>Welcome..</h1>
    </header>
    <div v-if="showLogin">
      <LoginForm />
      <p>
        Not registered?
        <span @click="showLogin = false">Register</span>
        here
      </p>
    </div>
    <div v-else>
      <RegisterForm />
      <p>
        Already registered? <span @click="showLogin = true">Login</span> here
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
export default {
  components: { LoginForm, RegisterForm },
  methods: {
    showLogin(e) {
      console.log(e);
    },
  },
  setup() {
    const showLogin = ref(true);

    return { showLogin };
  },
};
</script>

<style scoped>
p {
  margin: 2rem;
}
span {
  color: #5cdb95;
  font-weight: 900;
  text-decoration: underline;
  cursor: pointer;
}
header {
  margin: 1rem;
  padding: 1rem;
}
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
}
</style>
