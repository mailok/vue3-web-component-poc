import { onMounted, provide, ref } from "vue";
import Random from "./random";

function useFetchUser() {
  const user = ref<any>(null);
  const isFetching = ref<any>(false);
  const error = ref<any>(false);

  async function fetchUser() {
    isFetching.value = true;
    try {
      user.value = await Random.user();
    } catch (err) {
      error.value = false;
    }
    isFetching.value = false;
  }

  onMounted(fetchUser);

  return { user, isFetching, error, fetchUser };
}

export default useFetchUser;
