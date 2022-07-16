import { onMounted, ref } from "vue";
import Random from "./random";

function useFetchUser() {
  const user = ref<any>(null);
  const isFetching = ref<any>(false);
  const error = ref<any>(false);

  async function fetchUser() {
    isFetching.value = true;
    error.value = false;
    try {
      user.value = await Random.user();
    } catch (err) {
      error.value = true;
    }
    isFetching.value = false;
  }

  onMounted(fetchUser);

  return { user, isFetching, error, fetchUser };
}

export default useFetchUser;
