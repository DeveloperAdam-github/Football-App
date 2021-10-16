<template>
  <div class="container">
    <header>
      <h2>Live Premier League Table</h2>
    </header>
    <div class="table-container">
      <table style="width:100%">
        <tr class="first-row">
          <th>Pos</th>
          <th>Team Name</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>Pts</th>
          <th>GD</th>
        </tr>
        <tr v-for="(teamStats, index) in renderedStats" :key="index">
          <td>
            {{ teamStats?.rank }}
          </td>
          <td>
            {{ teamStats?.team.name }}
          </td>
          <td>
            {{ teamStats?.all.played }}
          </td>
          <td>
            {{ teamStats?.all.win }}
          </td>
          <td>
            {{ teamStats?.all.draw }}
          </td>
          <td>
            {{ teamStats?.all.lose }}
          </td>
          <td>
            {{ teamStats?.points }}
          </td>
          <td>{{ teamStats?.goalsDiff }}</td>
        </tr>
        <!-- </div> -->
      </table>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import LeagueTableCard from '../components/LeageTableCard.vue';
import getStats from '../composables/getStats';
export default {
  components: { LeagueTableCard },
  setup() {
    const { stats, error, load } = getStats();

    load();

    let renderedStats = computed(() => {
      if (stats.value) {
        return stats.value.response[0].league.standings[0].map((teamStats) => {
          // console.log(teamStats, 'im the teamstats');
          return teamStats;
        });
      }
      // console.log(renderedStats, 'im the array of team stats....');
    });

    return { stats, error, renderedStats };
  },
};
</script>

<style scoped>
.first-row {
  background-color: #5cdb95;
  color: whitesmoke;
  height: 30px;
}

th {
  padding: 4px;
}

tr {
  font-weight: 500;
  height: 30px;
  background-color: #999;
  color: whitesmoke;
  font-weight: 900;
}

@media screen and (max-width: 800px) {
  tr {
    font-size: 0.8rem;
  }
}
table {
  width: 100%;
}
.table-header {
  background-color: #555;
  width: 100%;
  height: 2.5rem;
  display: flex;
  color: whitesmoke;
  margin-bottom: 10px;
}
.table-container {
  background: white;

  min-height: 700px;
  width: 90%;
  max-width: 800px;
  margin: 1rem auto;
}
header {
  padding: 2rem;
}
.container {
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
</style>
