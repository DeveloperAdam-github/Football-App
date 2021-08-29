<template>
  <div class="container">
    <header>
      <h1>Last 10 Fixtures</h1>
    </header>
    <FixturedCard :renderedLastTenGames="renderedLastTenGames" />
  </div>
</template>

<script>
import getFixtures from '../composables/getFixtures';
import FixturedCard from '../components/FixtureCard.vue';
import { computed } from '@vue/reactivity';
export default {
  components: {
    FixturedCard,
  },
  setup() {
    const { fixtures, error, load } = getFixtures();

    load();

    let renderedLastTenGames = computed(() => {
      if (fixtures.value) {
        return fixtures?.value?.response?.map((lastTenGames) => {
          // console.log(lastTenGames, 'im the fixtures12344');
          return lastTenGames;
        });
      }
      // console.log(renderedLastTenGames, 'im the array of team fixtures....');
    });

    return { fixtures, error, renderedLastTenGames };
  },
};
</script>

<style scoped>
header {
  height: 100px;
  padding: 2rem;
}
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow: scroll;
}
</style>
