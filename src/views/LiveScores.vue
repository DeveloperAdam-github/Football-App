<template>
  <h1>live scores</h1>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const fixtures = ref(null);
    const error = ref(null);

    const load = async () => {
      try {
        const statData = await fetch(
          'https://api-football-beta.p.rapidapi.com/fixtures?id=710574',
          {
            method: 'GET',
            headers: {
              'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
              'x-rapidapi-key':
                '5ee839aacfmsh9ead2a5c2e634cep1e4af1jsn6cf3f3f58df2',
            },
          }
        );
        if (!statData.ok) {
          throw Error('Data wasnt retrieved');
        }
        fixtures.value = await statData.json();
        console.log(fixtures.value, 'fixtures value from api call');
      } catch (err) {
        error.value = err.message;
      }
    };

    load();

    return { fixtures, error, load };
  },
};
</script>

<style></style>
