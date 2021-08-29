<template>
  <tr v-for="(topScorer, index) in renderedTopScorers" :key="index">
    <td>
      <img :src="topScorer?.player?.photo" alt="" srcset="" />
    </td>
    <td>
      <p class="name">{{ topScorer?.player?.name }}</p>
      <p>{{ topScorer?.statistics[0].team.name }}</p>
    </td>
    <td>{{ topScorer?.statistics[0].games.appearences }}</td>
    <td>{{ topScorer?.statistics[0].goals.total }}</td>
    <td>
      {{
        topScorer?.statistics[0].goals.assists == null
          ? 0
          : topScorer?.statistics[0].goals.assists
      }}
    </td>
  </tr>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
export default {
  props: ['renderedTopScorers'],
};
</script>

<style scoped>
.name {
  font-weight: bolder;
}
tr {
  height: 120px;
}
td {
  font-weight: 600;
}
img {
  height: 100px;
  width: 100px;
  border-radius: 15px;
  object-fit: cover;
}
@media screen and (max-width: 800px) {
  img {
    height: 64px;
    width: 64px;
  }
}
</style>
