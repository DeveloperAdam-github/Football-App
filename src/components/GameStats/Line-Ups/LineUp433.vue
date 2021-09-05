<template>
  <div class="home-line-up">
    <p
      class="GK"
      :data-active="stats?.response[0]?.lineups[0]?.startXI[0]?.player?.number"
      :data-hover="stats?.response[0]?.lineups[0]?.startXI[0]?.player?.name"
    >
      <!-- {{ stats?.response[0]?.lineups[0]?.startXI[0]?.player?.number }} -->
    </p>
    <p
      class="D1"
      :data-active="stats?.response[0]?.lineups[0]?.startXI[1]?.player?.number"
      :data-hover="stats?.response[0]?.lineups[0]?.startXI[1]?.player?.name"
    >
      <!-- {{ stats?.response[0]?.lineups[0]?.startXI[1]?.player?.number }} -->
    </p>
    <p
      class="D2"
      :data-active="stats?.response[0]?.lineups[0]?.startXI[2]?.player?.number"
      :data-hover="stats?.response[0]?.lineups[0]?.startXI[2]?.player?.name"
    >
      <!-- {{ stats?.response[0]?.lineups[0]?.startXI[2]?.player?.number }} -->
    </p>
    <p
      class="D3"
      :data-active="stats?.response[0]?.lineups[0]?.startXI[3]?.player?.number"
      :data-hover="stats?.response[0]?.lineups[0]?.startXI[3]?.player?.name"
    >
      <!-- {{ stats?.response[0]?.lineups[0]?.startXI[3]?.player?.number }} -->
    </p>
    <p
      class="D4"
      :data-active="stats?.response[0]?.lineups[0]?.startXI[4]?.player?.number"
      :data-hover="stats?.response[0]?.lineups[0]?.startXI[4]?.player?.name"
    >
      <!-- {{ stats?.response[0]?.lineups[0]?.startXI[4]?.player?.number }} -->
    </p>
    <p
      class="C1"
      :data-active="stats?.response[0]?.lineups[0]?.startXI[5]?.player?.number"
      :data-hover="stats?.response[0]?.lineups[0]?.startXI[5]?.player?.name"
    >
      <!-- {{ stats?.response[0]?.lineups[0]?.startXI[5]?.player?.number }} -->
    </p>
    <p
      class="C2"
      :data-active="stats?.response[0]?.lineups[0]?.startXI[6]?.player?.number"
      :data-hover="stats?.response[0]?.lineups[0]?.startXI[6]?.player?.name"
    >
      <!-- {{ stats?.response[0]?.lineups[0]?.startXI[6]?.player?.number }} -->
    </p>
    <p
      class="C3"
      :data-active="stats?.response[0]?.lineups[0]?.startXI[7]?.player?.number"
      :data-hover="stats?.response[0]?.lineups[0]?.startXI[7]?.player?.name"
    >
      <!-- {{ stats?.response[0]?.lineups[0]?.startXI[7]?.player?.number }} -->
    </p>

    <p
      class="M1"
      :data-active="stats?.response[0]?.lineups[0]?.startXI[8]?.player?.number"
      :data-hover="stats?.response[0]?.lineups[0]?.startXI[8]?.player?.name"
    >
      <!-- {{ stats?.response[0]?.lineups[0]?.startXI[8]?.player?.number }} -->
    </p>
    <p
      class="M2"
      :data-active="stats?.response[0]?.lineups[0]?.startXI[9]?.player?.number"
      :data-hover="stats?.response[0]?.lineups[0]?.startXI[9]?.player?.name"
    >
      <!-- {{ stats?.response[0]?.lineups[0]?.startXI[9]?.player?.number }} -->
    </p>

    <p
      class="M3"
      :data-active="stats?.response[0]?.lineups[0]?.startXI[10]?.player?.number"
      :data-hover="stats?.response[0]?.lineups[0]?.startXI[10]?.player?.name"
    >
      <!-- {{ stats?.response[0]?.lineups[0]?.startXI[10]?.player?.number }} -->
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
.D3,
.D4,
.C1,
.C2,
.C3,
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
  grid-area: 2 / 1 / 3 / 2;
}
.D2 {
  grid-area: 2 / 2 / 3 / 3;
}
.D3 {
  grid-area: 2 / 4 / 3 / 5;
}
.D4 {
  grid-area: 2 / 5 / 3 / 6;
}
.C1 {
  grid-area: 3 / 2 / 4 / 3;
}
.C2 {
  grid-area: 3 / 3 / 4 / 4;
}
.C3 {
  grid-area: 3 / 4 / 4 / 5;
}
.M1 {
  grid-area: 5 / 2 / 6 / 3;
}
.M2 {
  grid-area: 5 / 3 / 6 / 4;
}
.M3 {
  grid-area: 5 / 4 / 6 / 5;
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
  position: relative;
}

.GK:after,
.D1:after,
.D1:after,
.D2:after,
.D3:after,
.D3:after,
.D4:after,
.C1:after,
.C2:after,
.C3:after,
.M1:after,
.M2:after,
.M3:after,
.ST:after {
  content: attr(data-active);
}
.GK:hover:after,
.D1:hover:after,
.D1:hover:after,
.D2:hover:after,
.D3:hover:after,
.D3:hover:after,
.D4:hover:after,
.C1:hover:after,
.C2:hover:after,
.C3:hover:after,
.M1:hover:after,
.M2:hover:after,
.M3:hover:after,
.ST:hover:after {
  content: attr(data-hover);
}
.GK:hover,
.D1:hover,
.D1:hover,
.D2:hover,
.D3:hover,
.D3:hover,
.D4:hover,
.C1:hover,
.C2:hover,
.C3:hover,
.M1:hover,
.M2:hover,
.M3:hover,
.ST:hover {
  background-color: transparent;
  color: white;
  font-weight: 900;
  padding: 10px;
  display: flex;
  font-size: 15px;
  flex-direction: row;
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
