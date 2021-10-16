import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);

const updateUser = async (email, displayName) => {
  error.value = null;

  try {
    const res = await projectAuth.currentUser();

    await res.user.updateProfile({ displayName, email });
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = 'Incorrect updateUser credentials';
  }
};

const useUpdateUser = () => {
  return { error, updateUser };
};

export default useUpdateUser;
