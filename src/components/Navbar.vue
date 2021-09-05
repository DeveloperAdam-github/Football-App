<template>
  <nav>
    <div class="container">
      <router-link :to="{ name: 'Home' }"
        ><span class="material-icons">home</span>
        <p>Home</p></router-link
      >
      <div v-if="!user">
        <router-link to="/signin">
          <span class="material-icons">person</span>
          <p>Sign In</p>
        </router-link>
      </div>

      <div v-if="user">
        <router-link to="/profile">
          <span class="material-icons">person</span>
          <p>Profile</p>
        </router-link>
      </div>

      <router-link :to="{ name: 'LiveScores' }"
        ><span class="material-icons">sports_soccer</span>
        <p>Live Scores</p></router-link
      >
      <router-link :to="{ name: 'MyTeams' }"
        ><span class="material-icons">star</span>
        <p>My Teams</p></router-link
      >
      <router-link :to="{ name: 'LeagueTables' }"
        ><span class="material-icons">emoji_events</span>
        <p>League Tables</p></router-link
      >
      <router-link :to="{ name: 'TopScorers' }"
        ><span class="material-icons">military_tech</span>
        <p>Top Scorers</p></router-link
      >
      <router-link :to="{ name: 'Fixtures' }"
        ><span class="material-icons">event</span>
        <p>Fixtures</p></router-link
      >
    </div>
  </nav>
</template>

<script>
import { computed, watch } from '@vue/runtime-core';
import getUser from '../composables/getUser';
export default {
  setup(props) {
    const { user } = getUser();

    const userWatch = computed(user);

    return { user, userWatch };
  },
};
</script>

<style scoped>
nav {
  min-width: 300px;
  background-color: whitesmoke;
  box-sizing: border-box;
  height: 100vh;
  font-size: 1.2rem;
}

@media screen and (max-width: 800px) {
  nav {
    min-width: 5rem;
    position: relative;
    left: 0;
    top: 0;
    right: 10;
    padding-bottom: 2.5rem;
  }
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
}

.material-icons {
  font-size: 2rem;
}

a {
  height: 50px;
  width: 100%;
  text-decoration: none;
  color: #333;
  align-items: center;
  display: flex;
  margin-left: 1rem;
}
@media screen and (max-width: 800px) {
  a {
    width: 50%;
  }
}
p {
  padding-left: 2.5rem;
}
@media screen and (max-width: 800px) {
  p {
    display: none;
  }
}
.router-link-active {
  font-weight: bold;
  font-size: 1.4rem;
  transition: font-size 0.3s linear;
}

.router-link-active span {
  font-weight: bold;
  color: #5cdb95;
}
</style>
