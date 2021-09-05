import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  console.log(
    'User auth state has changed, the user is currently:',
    _user.email
  );
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
