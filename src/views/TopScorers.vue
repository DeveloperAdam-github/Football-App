<template>
  <div class="page-container">
    <header>
      <h1>This seasons top scorers in the premier league</h1>
    </header>
    <table style="width:80%">
      <tr class="first-row">
        <th>Player Photo</th>
        <th>Name</th>
        <th>Played</th>
        <th>Goals</th>
        <th>Assists</th>
      </tr>
      <TopScorerCard :renderedTopScorers="renderedTopScorers" />
    </table>
  </div>
</template>

<script>
import { computed } from 'vue';
import TopScorerCard from '../components/TopScorerCard.vue';

import getTopScorers from '../composables/getTopScorers';
export default {
  components: {
    TopScorerCard,
  },
  setup() {
    const { topScorers, error, load } = getTopScorers();

    load();

    let renderedTopScorers = computed(() => {
      if (topScorers.value) {
        return topScorers?.value?.response?.map((topScorer) => {
          // console.log(topScorer, 'im the topScorers12344');
          return topScorer;
        });
      }
      // console.log(renderedTopScorers, 'im the array of team topScorers....');
    });

    return { topScorers, error, load, renderedTopScorers };
  },
};
</script>

<style scoped>
.first-row {
  background-color: #555;
  color: whitesmoke;
  height: 30px;
}

@media screen and (max-width: 800px) {
  .first-row th {
    font-size: 0.8rem;
    padding-left: 5px;
    padding-right: 5px;
  }
}
table {
  width: 25rem;
}
header {
  margin: 1.5rem;
  padding: 1rem;
}
.page-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}
</style>
