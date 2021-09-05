import { ref } from 'vue';

const getLiveFixtures = () => {
  const liveFixtures = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const statData = await fetch(
        'https://api-football-beta.p.rapidapi.com/fixtures?season=2021&live=all&league=39',
        // &league=39
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
            'x-rapidapi-key':
              '1e38d4a4b1msh50e5e3c351f6026p115a54jsne7350a753294',
          },
        }
      );
      if (!statData.ok) {
        throw Error('Data wasnt retrieved');
      }
      liveFixtures.value = await statData.json();
      console.log(liveFixtures.value, 'live -- Fixtures value from api call');
    } catch (err) {
      error.value = err.message;
    }
  };

  return { liveFixtures, error, load };
};

export default getLiveFixtures;
