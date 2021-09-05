<template>
  <div class="container">
    <header>
      <h1>Hello {{ user?.email }}</h1>
    </header>

    <div class="profile-container">
      <button @click="logOutButton">Log out</button>
    </div>
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import getUser from '../composables/getUser';
import useLogout from '../composables/useLogout';
export default {
  setup(props) {
    const { user } = getUser();
    const router = useRouter();

    const { logout } = useLogout();

    const logOutButton = async () => {
      await logout();
      router.push('/');
    };

    watch(user, () => {
      if (!user.value) {
        router.push('/');
      }
    });

    return { user, logOutButton };
  },
};
</script>

<style scoped>
button {
  width: 120px;
  height: 40px;
  background-color: #5cdb95;
}
.profile-container {
  height: 300px;
  width: 300px;
  background-color: whitesmoke;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  margin: 2rem auto;
}
header {
  margin: 1rem;
  padding: 1rem;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
