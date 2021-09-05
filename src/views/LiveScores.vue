<template>
  <div class="container">
    <header>
      <h1>Live Game Scores</h1>
      <h4>{{ new Date().toDateString() }}</h4>
    </header>

    <div class="games-container">
      <FixtureCard :renderedLastTenGames="renderedLastTenGames" />
    </div>
    <h2 style="color: red" v-if="renderedLastTenGames.length === 0">
      There are no live games right now, check back later.
    </h2>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import FixtureCard from '../components/FixtureCard.vue';
import getLiveFixtures from '../composables/getLiveFixtures';
export default {
  components: { FixtureCard },
  setup() {
    const { liveFixtures, error, load } = getLiveFixtures();

    load();

    let renderedLastTenGames = computed(() => {
      if (liveFixtures.value) {
        return liveFixtures?.value?.response?.map((liveGame) => {
          // console.log(liveGame, 'im the single live game');
          return liveGame;
        });
      }
      // console.log(renderedLastTenGames, 'im the live games');
    });

    return { liveFixtures, error, renderedLastTenGames };
  },
};
</script>

<style scoped>
.games-container {
  width: 100%;
  margin-bottom: 30px;
}
header {
  margin: 1rem;
}
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  overflow: scroll;
}
</style>
