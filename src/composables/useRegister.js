import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);

const register = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    await res.user.updateProfile({ displayName });
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = 'Incorrect register credentials';
  }
};

const useRegister = () => {
  return { error, register };
};

export default useRegister;
