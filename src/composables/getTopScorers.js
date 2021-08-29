import { ref } from 'vue';

const getTopScorers = () => {
  const topScorers = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const statData = await fetch(
        'https://api-football-beta.p.rapidapi.com/players/topscorers?season=2021&league=39',
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
      topScorers.value = await statData.json();
      // console.log(topScorers.value, 'topScorers value from api call');
    } catch (err) {
      error.value = err.message;
    }
  };

  return { topScorers, error, load };
};

export default getTopScorers;
