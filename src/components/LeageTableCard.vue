<template>
  <div
    :v-for="stat in stats"
    :key="stat.response[0].league.standings[0][0].team.id"
  ></div>
</template>

<script>
export default {
  props: ['stats'],
  setup(props) {},
};
</script>

<style scoped></style>
