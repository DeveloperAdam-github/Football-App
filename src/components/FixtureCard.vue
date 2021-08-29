<template>
  <router-link
    class="card-container"
    v-for="fixture in renderedLastTenGames"
    :key="fixture.fixture.id"
    :to="{ name: 'GameStats', params: { id: fixture.fixture.id } }"
  >
    <!-- <div
      class="card-container"
      v-for="fixture in renderedLastTenGames"
      :key="fixture.fixture.id"
      :to="'/gameStats/' + fixture.fixture.id"
    > -->
    <img :src="fixture.teams.home.logo" alt="" />
    <h2>{{ fixture.goals.home }}</h2>
    <span>
      <h3>-</h3>
      <small>FT</small>
    </span>
    <h2>{{ fixture.goals.away }}</h2>
    <img :src="fixture.teams.away.logo" alt="" />
    <!-- </div> -->
  </router-link>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  props: ['renderedLastTenGames'],
  setup(props) {
    const router = useRouter();
  },
};
</script>

<style scoped>
span {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
small {
  position: absolute;
  bottom: 5px;
}
img {
  height: 60px;
  width: auto;
  object-fit: contain;
}

@media screen and (max-width: 800px) {
  img {
    height: 55px;
  }
}

.card-container:hover {
  background-color: #3333;
  cursor: pointer;
}
.card-container {
  background-color: whitesmoke;
  width: 25rem;
  min-height: 6rem;
  border-radius: 25px;
  padding: 1rem auto;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.3);
}

a {
  text-decoration: none;
  color: inherit;
}

@media screen and (max-width: 800px) {
  .card-container {
    width: 19rem;
    min-height: 5.5rem;
    padding: 0.5rem;
  }
}
</style>
