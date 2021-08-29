<template>
  <div class="page-container">
    <header>
      <h1>Check out the games statistics..</h1>
      <h4>
        {{
          new Date(stats?.response[0]?.fixture?.timestamp * 1000).toDateString()
        }}
      </h4>
    </header>

    <div class="stat-card">
      <img :src="stats?.response[0].teams.home.logo" alt="" />
      <h1>{{ stats?.response[0].score.fulltime.home }}</h1>
      <span>
        <h5 class="stadium-name">
          {{ stats?.response[0].fixture.venue.name }}
        </h5>
        <h3>-</h3>
        <small>FT</small>
      </span>
      <h1>{{ stats?.response[0].score.fulltime.away }}</h1>
      <img :src="stats?.response[0].teams.away.logo" alt="" />
    </div>

    <!-- GOALSCORERS -->
    <!-- <div v-if="event?.detail === 'Red Card'">
        <p>🟥{{ event.player.name }}{{ ' ' }}{{ event.time.elapsed }}'</p>
      </div> -->
    <div
      class="goalscorers"
      v-for="(event, index) in stats.response[0].events"
      :key="index"
    >
      <div class="goalscorers-goals">
        <p
          v-if="
            event.team.name === stats.response[0].teams.home.name &&
              event?.type === 'Goal'
          "
        >
          ⚽️ {{ event?.player?.name }}{{ ' ' }}{{ event?.time?.elapsed }}'
        </p>
        <p
          v-if="
            event.team.name === stats.response[0].teams.home.name &&
              event?.detail === 'Red Card'
          "
        >
          🟥 {{ event?.player?.name }}{{ ' ' }}{{ event?.time?.elapsed }}'
        </p>
      </div>
      <div class="goalscorers-goals-away">
        <p
          v-if="
            event.team.name === stats.response[0].teams.away.name &&
              event?.type === 'Goal'
          "
        >
          ⚽️ {{ event?.player?.name }}{{ ' ' }}{{ event?.time?.elapsed }}'
        </p>
        <p
          v-if="
            event.team.name === stats.response[0].teams.away.name &&
              event?.detail === 'Red Card'
          "
        >
          🟥 {{ event?.player?.name }}{{ ' ' }}{{ event?.time?.elapsed }}'
        </p>
      </div>
    </div>

    <div class="stat-container-one">
      <h5>Possession</h5>
      <div class="bar-container">
        <div class="bar-1" :style="[homeSwitch()]">
          <p>{{ stats.response[0].statistics[0].statistics[9].value }}</p>
        </div>
        <div class="bar-2" :style="[awaySwitch()]">
          <p>{{ stats.response[0].statistics[1].statistics[9].value }}</p>
        </div>
      </div>
      <h5>Shots</h5>
      <div class="bar-container">
        <div class="bar-1" :style="[homeSwitch()]">
          <p>{{ stats.response[0].statistics[0].statistics[2].value }}</p>
        </div>
        <div class="bar-2" :style="[awaySwitch()]">
          <p>{{ stats.response[0].statistics[1].statistics[2].value }}</p>
        </div>
      </div>

      <h5>Shots on Target</h5>
      <div class="bar-container">
        <div class="bar-1" :style="[homeSwitch()]">
          <p>
            {{
              stats.response[0].statistics[0].statistics[0].value === null
                ? 0
                : stats.response[0].statistics[0].statistics[0].value
            }}
          </p>
        </div>
        <div class="bar-2" :style="[awaySwitch()]">
          <p>
            {{
              stats.response[0].statistics[1].statistics[0].value === null
                ? 0
                : stats.response[0].statistics[1].statistics[0].value
            }}
          </p>
        </div>
      </div>

      <h5>Corners</h5>

      <div class="bar-container">
        <div class="bar-1" :style="[homeSwitch()]">
          <p>{{ stats.response[0].statistics[0].statistics[7].value }}</p>
        </div>
        <div class="bar-2" :style="[awaySwitch()]">
          <p>
            {{
              stats.response[0].statistics[1].statistics[7].value === null
                ? 0
                : stats.response[0].statistics[1].statistics[7].value
            }}
          </p>
        </div>
      </div>

      <h5>Fouls</h5>

      <div class="bar-container">
        <div class="bar-1" :style="[homeSwitch()]">
          <p>{{ stats.response[0].statistics[0].statistics[6].value }}</p>
        </div>
        <div class="bar-2" :style="[awaySwitch()]">
          <p>{{ stats.response[0].statistics[1].statistics[6].value }}</p>
        </div>
      </div>
    </div>

    <div class="line-up-container">
      <div v-if="stats.response[0].lineups[0].formation === '4-4-2'">
        <img :src="stats?.response[0].teams.home.logo" alt="" />
        <LineUp442 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[0].formation === '4-2-3-1'">
        <img :src="stats?.response[0].teams.home.logo" alt="" />
        <LineUp4231 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[0].formation === '3-4-3'">
        <img :src="stats?.response[0].teams.home.logo" alt="" />
        <LineUp343 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[0].formation === '4-3-3'">
        <img :src="stats?.response[0].teams.home.logo" alt="" />
        <LineUp433 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[0].formation === '3-4-2-1'">
        <img :src="stats?.response[0].teams.home.logo" alt="" />
        <LineUp3421 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[0].formation === '3-3-3-1'">
        <img :src="stats?.response[0].teams.home.logo" alt="" />
        <LineUp3331 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[0].formation === '4-1-4-1'">
        <img :src="stats?.response[0].teams.home.logo" alt="" />
        <LineUp4141 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[0].formation === '3-5-2'">
        <img :src="stats?.response[0].teams.home.logo" alt="" />
        <LineUp352 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[0].formation === '4-4-1-1'">
        <img :src="stats?.response[0].teams.home.logo" alt="" />
        <LineUp4411 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[0].formation === '3-4-1-2'">
        <img :src="stats?.response[0].teams.home.logo" alt="" />
        <LineUp3412 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[0].formation === '5-4-1'">
        <img :src="stats?.response[0].teams.home.logo" alt="" />
        <LineUp541 :stats="stats" />
      </div>

      <!-- AWAY LINE UPS -->
      <div v-if="stats.response[0].lineups[1].formation === '4-2-3-1'">
        <img :src="stats?.response[0].teams.away.logo" alt="" />
        <LineUpAway4231 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[1].formation === '4-4-2'">
        <img :src="stats?.response[0].teams.away.logo" alt="" />
        <LineUpAway442 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[1].formation === '3-4-3'">
        <img :src="stats?.response[0].teams.away.logo" alt="" />
        <LineUpAway343 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[1].formation === '4-3-3'">
        <img :src="stats?.response[0].teams.away.logo" alt="" />
        <LineUpAway433 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[1].formation === '3-4-2-1'">
        <img :src="stats?.response[0].teams.away.logo" alt="" />
        <LineUpAway3421 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[1].formation === '3-3-3-1'">
        <img :src="stats?.response[0].teams.away.logo" alt="" />
        <LineUpAway3331 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[1].formation === '4-1-4-1'">
        <img :src="stats?.response[0].teams.away.logo" alt="" />
        <LineUpAway4141 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[1].formation === '3-5-2'">
        <img :src="stats?.response[0].teams.away.logo" alt="" />
        <LineUpAway352 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[1].formation === '4-4-1-1'">
        <img :src="stats?.response[0].teams.away.logo" alt="" />
        <LineUpAway4411 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[1].formation === '3-4-1-2'">
        <img :src="stats?.response[0].teams.away.logo" alt="" />
        <LineUpAway3412 :stats="stats" />
      </div>
      <div v-if="stats.response[0].lineups[1].formation === '5-4-1'">
        <img :src="stats?.response[0].teams.away.logo" alt="" />
        <LineUpAway541 :stats="stats" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

// HOME LINEUPS
import LineUp4231 from '../components/GameStats/Line-Ups/LineUp4231.vue';
import LineUp343 from '../components/GameStats/Line-Ups/LineUp343.vue';
import LineUp433 from '../components/GameStats/Line-Ups/LineUp433.vue';
import LineUp442 from '../components/GameStats/Line-Ups/LineUp442.vue';
import LineUp3421 from '../components/GameStats/Line-Ups/LineUp3421.vue';
import LineUp3331 from '../components/GameStats/Line-Ups/LineUp3331.vue';
import LineUp4141 from '../components/GameStats/Line-Ups/LineUp4141.vue';
import LineUp352 from '../components/GameStats/Line-Ups/LineUp352.vue';
import LineUp4411 from '../components/GameStats/Line-Ups/LineUp4411.vue';
import LineUp3412 from '../components/GameStats/Line-Ups/LineUp3412.vue';
import LineUp541 from '../components/GameStats/Line-Ups/LineUp541.vue';

// AWAY LINEUPS
import LineUpAway343 from '../components/GameStats/Away Line-Ups/LineUpAway343.vue';
import LineUpAway433 from '../components/GameStats/Away Line-Ups/LineUpAway433.vue';
import LineUpAway442 from '../components/GameStats/Away Line-Ups/LineUpAway442.vue';
import LineUpAway4231 from '../components/GameStats/Away Line-Ups/LineUpAway4231.vue';
import LineUpAway3421 from '../components/GameStats/Away Line-Ups/LineUpAway3421.vue';
import LineUpAway3331 from '../components/GameStats/Away Line-Ups/LineUpAway3331.vue';
import LineUpAway4141 from '../components/GameStats/Away Line-Ups/LineUpAway4141.vue';
import LineUpAway3412 from '../components/GameStats/Away Line-Ups/LineUpAway3412.vue';
import LineUpAway352 from '../components/GameStats/Away Line-Ups/LineUpAway352.vue';
import LineUpAway4411 from '../components/GameStats/Away Line-Ups/LineUpAway4411.vue';
import LineUpAway541 from '../components/GameStats/Away Line-Ups/LineUpAway541.vue';

export default {
  props: ['fixture.fixture.id'],
  components: {
    LineUp4231,
    LineUp343,
    LineUp433,
    LineUp442,
    LineUp3421,
    LineUp3331,
    LineUp4141,
    LineUp352,
    LineUp3412,
    LineUp4411,
    LineUp541,
    LineUpAway343,
    LineUpAway433,
    LineUpAway442,
    LineUpAway4231,
    LineUpAway3421,
    LineUpAway3331,
    LineUpAway4141,
    LineUpAway4411,
    LineUpAway3412,
    LineUpAway352,
    LineUpAway541,
  },
  setup(props) {
    const stats = ref(null);
    const error = ref(null);
    const route = useRoute();

    const homeSwitch = () => {
      switch (stats?.value?.response[0]?.teams?.home?.name) {
        case 'Arsenal':
          return 'background: #E12F32';
        case 'Aston Villa':
          return 'background: #94BEE5';
        case 'Brentford':
          return 'background: #E30613';
        case 'Brighton':
          return 'background: #0054A5';
        case 'Burnley':
          return 'background: #81204C';
        case 'Chelsea':
          return 'background: #273A90';
        case 'Crystal Palace':
          return 'background: #0055A5';
        case 'Everton':
          return 'background: #00009E';
        case 'Leeds':
          return 'background: #DDCE1E';
        case 'Leicester':
          return 'background: #004B96';
        case 'Liverpool':
          return 'background: #D30D14';
        case 'Manchester City':
          return 'background: #98C5E9';
        case 'Manchester United':
          return 'background: #C30202';
        case 'Newcastle':
          return 'background: #000000';
        case 'Norwich':
          return 'background: #00A650';
        case 'Southampton':
          return 'background: #DA2128';
        case 'Tottenham':
          return 'background: #060D3C';
        case 'Watford':
          return 'background: #FBEE23';
        case 'West Ham':
          return 'background: #7C2C3B';
        case 'Wolves':
          return 'background: #FAA61A';
        default:
          return 'background: purple';
      }
    };

    const awaySwitch = () => {
      switch (stats?.value?.response[0]?.teams?.away?.name) {
        case 'Arsenal':
          return 'background: #E12F32';
        case 'Aston Villa':
          return 'background: #94BEE5';
        case 'Brentford':
          return 'background: #E30613';
        case 'Brighton':
          return 'background: #0054A5';
        case 'Burnley':
          return 'background: #81204C';
        case 'Chelsea':
          return 'background: #273A90';
        case 'Crystal Palace':
          return 'background: #0055A5';
        case 'Everton':
          return 'background: #00009E';
        case 'Leeds':
          return 'background: #DDCE1E';
        case 'Leicester':
          return 'background: #004B96';
        case 'Liverpool':
          return 'background: #D30D14';
        case 'Manchester City':
          return 'background: #98C5E9';
        case 'Manchester United':
          return 'background: #C30202';
        case 'Newcastle':
          return 'background: #000000';
        case 'Norwich':
          return 'background: #00A650';
        case 'Southampton':
          return 'background: #DA2128';
        case 'Tottenham':
          return 'background: #060D3C';
        case 'Watford':
          return 'background: #FBEE23';
        case 'West Ham':
          return 'background: #7C2C3B';
        case 'Wolves':
          return 'background: #FAA61A';
        default:
          return 'background: purple';
      }
    };

    const id = route.params.id;

    // let renderedEvents = computed(() => {
    //   if (stats.value) {
    //     return stats.value.response[0].events.map((events) => {
    //       // console.log(events, 'im the events');
    //       return events;
    //     });
    //   }
    //   // console.log(renderedEvents, 'im the array of team stats....');
    // });

    const timestamp = stats?.value?.response[0]?.fixture?.timestamp;
    const matchDate = new Date(timestamp * 1000).toLocaleString();

    const load = async () => {
      try {
        const statData = await fetch(
          `https://api-football-beta.p.rapidapi.com/fixtures?id=${id}`,
          {
            method: 'GET',
            headers: {
              'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
              'x-rapidapi-key':
                '31234a753fmshbb821baef065780p1537f5jsn2b4c493eb3d6',
            },
          }
        );
        if (!statData.ok) {
          throw Error('Data wasnt retrieved');
        }
        stats.value = await statData.json();
        console.log(stats.value, 'the game stats value from api call');
      } catch (err) {
        error.value = err.message;
      }
    };
    load();

    return { stats, error, load, id, homeSwitch, awaySwitch, matchDate };
  },
};
</script>

<style scoped>
.goalscorers-goals {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.goalscorers-goals-away {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.goalscorers {
  width: 23rem;
  display: flex;
  font-weight: 700;
  font-size: 14px;
}
@media screen and (max-width: 800px) {
  .goalscorers {
    width: 19rem;
  }
}
/* .goalscorers p {
  background-color: red;
  border-radius: 15px;
  padding: 2px;
  margin: 1px;
} */

button {
  width: 100px;
  margin: auto 1rem;
  border-radius: 15px;
  padding: 5px;
}

.home-header h3 {
  display: flex;
  align-items: center;
  align-content: center;
}
.home-header img {
  width: 40px;
  height: auto;
}
.home-header {
  margin: 1rem;
}

.line-up-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  /* flex-direction: column;
  align-items: center; */
  margin: 2rem;
}

@media screen and (max-width: 1000px) {
  .line-up-container {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 80%;
  }
}

.arsenal {
  width: 50%;
  background-color: red;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  justify-content: flex-start;
  padding-left: 12px;
  color: white;
  font-weight: 700;
}
.bar-1 {
  width: 50%;
  /* background-color: red; */
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  justify-content: flex-start;
  padding-left: 12px;
  color: white;
  font-weight: 700;
}
.bar-2 {
  width: 50%;
  background-color: green;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: flex-end;
  padding-right: 12px;
  color: white;
  font-weight: 700;
}
.bar-container {
  width: 100%;
  display: flex;
}
.bar {
  width: 100%;
  /* background-color: #7c2c3b; */
  background: linear-gradient(to right, #7c2c3b 50%, #0e559c 50%);
  height: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
}
.stat-container-one {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
  width: 25rem;
  height: 300px;
  background-color: whitesmoke;
  border-radius: 25px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 800px) {
  .stat-container-one {
    width: 19rem;
  }
}

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
.stadium-name {
  position: absolute;
  top: 0;
  padding: 10px;
  width: 280px;
}
img {
  height: 80px;
  width: auto;
  object-fit: contain;
}
@media screen and (max-width: 800px) {
  img {
    height: 60px;
  }
}
.stat-card {
  background-color: whitesmoke;
  width: 25rem;
  min-height: 12rem;
  border-radius: 25px;
  padding: 1rem auto;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.3);
}
@media screen and (max-width: 800px) {
  .stat-card {
    width: 19rem;
    min-height: 11rem;
    padding: 0.5rem;
  }
}
header {
  padding: 2rem;
  height: 8rem;
}
.page-container {
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 800px) {
  .page-container {
    width: 95%;
    overflow: none;
  }
}
</style>
