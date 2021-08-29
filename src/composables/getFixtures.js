import { ref } from 'vue';

const getFixtures = () => {
  const fixtures = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const statData = await fetch(
        'https://api-football-beta.p.rapidapi.com/fixtures?season=2021&last=10&league=39',
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
      fixtures.value = await statData.json();
      console.log(fixtures.value, 'fixtures value from api call');
    } catch (err) {
      error.value = err.message;
    }
  };

  return { fixtures, error, load };
};

export default getFixtures;
