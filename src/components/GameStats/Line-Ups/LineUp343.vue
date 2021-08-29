<template>
  <div class="home-line-up">
    <p class="GK">
      {{ stats?.response[0]?.lineups[0]?.startXI[0]?.player?.number }}
    </p>
    <p class="D1">
      {{ stats?.response[0]?.lineups[0]?.startXI[1]?.player?.number }}
    </p>
    <p class="D2">
      {{ stats?.response[0]?.lineups[0]?.startXI[2]?.player?.number }}
    </p>
    <p class="D3">
      {{ stats?.response[0]?.lineups[0]?.startXI[3]?.player?.number }}
    </p>
    <p class="C1">
      {{ stats?.response[0]?.lineups[0]?.startXI[4]?.player?.number }}
    </p>
    <p class="C2">
      {{ stats?.response[0]?.lineups[0]?.startXI[5]?.player?.number }}
    </p>
    <p class="C3">
      {{ stats?.response[0]?.lineups[0]?.startXI[6]?.player?.number }}
    </p>
    <p class="C4">
      {{ stats?.response[0]?.lineups[0]?.startXI[7]?.player?.number }}
    </p>

    <p class="M1">
      {{ stats?.response[0]?.lineups[0]?.startXI[8]?.player?.number }}
    </p>
    <p class="M2">
      {{ stats?.response[0]?.lineups[0]?.startXI[9]?.player?.number }}
    </p>

    <p class="M3">
      {{ stats?.response[0]?.lineups[0]?.startXI[10]?.player?.number }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['stats'],
  setup() {},
};
</script>

<style scoped>
.D1,
.D2,
.D3,
.C1,
.C2,
.C3,
.C4,
.M1,
.M2,
.M3,
.ST {
  height: 28px;
  background-color: whitesmoke;
  width: 30px;
  padding: 2px;
  border-radius: 25px;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
.D1 {
  grid-area: 2 / 2 / 3 / 3;
}
.D2 {
  grid-area: 2 / 3 / 3 / 4;
}
.D3 {
  grid-area: 2 / 4 / 3 / 5;
}
.C1 {
  grid-area: 3 / 1 / 4 / 2;
}
.C2 {
  grid-area: 3 / 2 / 4 / 3;
}
.C3 {
  grid-area: 3 / 4 / 4 / 5;
}
.C4 {
  grid-area: 3 / 5 / 4 / 6;
}
.M1 {
  grid-area: 4 / 2 / 5 / 3;
}
.M2 {
  grid-area: 4 / 3 / 5 / 4;
}
.M3 {
  grid-area: 4 / 4 / 5 / 5;
}
.GK {
  height: 28px;
  background-color: whitesmoke;
  width: 30px;
  padding: 2px;
  border-radius: 25px;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  grid-area: 1 / 3 / 2 / 4;
}
.home-line-up {
  width: 19.333rem;
  height: 550px;
  padding: 1rem;
  background-image: url('https://wallpaperaccess.com/full/4567364.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin: 2rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  justify-items: center;
}
@media screen and (max-width: 800px) {
  .home-line-up {
    margin: 0;
    margin-bottom: 1rem;
  }
}
</style>
