import { ref } from 'vue';

const getStats = () => {
  const stats = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const statData = await fetch(
        'https://api-football-beta.p.rapidapi.com/standings?season=2021&league=39',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
            'x-rapidapi-key':
              'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
          },
        }
      );
      if (!statData.ok) {
        throw Error('Data wasnt retrieved');
      }
      stats.value = await statData.json();
      // console.log(stats.value, 'stats value from api call');
    } catch (err) {
      error.value = err.message;
    }
  };

  return { stats, error, load };
};

export default getStats;
