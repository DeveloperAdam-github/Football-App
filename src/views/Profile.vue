<template>
  <div class="container">
    <header>
      <h1>Hello {{ user?.displayName }}</h1>
    </header>

    <div class="profile-container">
      <form @submit.prevent>
        <label for="">Display Name</label>
        <input
          type="text"
          :placeholder="user?.displayName"
          v-model="displayName"
        />
        <label> Current Email Address</label>
        <input type="email" :placeholder="user?.email" v-model="email" />
        <button @click="updateUserInformation">Edit Info</button>
      </form>
    </div>
    <button @click="logOutButton">Log out</button>
  </div>
</template>

<script>
import { ref, watch } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import getUser from '../composables/getUser';
import useLogout from '../composables/useLogout';
import useUpdateUser from '../composables/useUpdateUser';
export default {
  setup(props) {
    const email = ref('');
    const displayName = ref('');
    const { user } = getUser();
    const router = useRouter();

    const { logout } = useLogout();
    const { updateUser } = useUpdateUser();

    const logOutButton = async () => {
      await logout();
      router.push('/');
    };

    const updateUserInformation = async () => {
      updateUser(email.value, displayName.value);
      console.log('updated user information');
    };

    watch(user, () => {
      if (!user.value) {
        router.push('/');
      }
    });

    return { user, logOutButton, updateUser, updateUserInformation };
  },
};
</script>

<style scoped>
label {
  margin: 0.5rem auto;
}
input {
  height: 25px;
  width: 80%;
  border-radius: 15px;
  border: none;
  outline: none;
  padding: 1rem;
  margin: 0.5rem;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
}
button {
  width: 120px;
  height: 40px;
  background-color: #5cdb95;
  border-radius: 15px;
  border: none;
  margin: 1rem;
  padding: 0.5rem;
}
.profile-container {
  height: 300px;
  width: 300px;
  background-color: whitesmoke;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
