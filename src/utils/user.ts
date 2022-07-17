import { ref } from "vue";
import Random from "@/utils/random";

const query = {
  data: ref<any>(null),
  isFetching: ref<boolean>(false),
  error: ref<any>(false),
};

function useQuery() {
  async function fetch() {
    query.isFetching.value = true;
    query.error.value = false;
    try {
      query.data.value = await Random.user();
    } catch (err) {
      query.error.value = true;
    }
    query.isFetching.value = false;
  }

  return { fetch, ...query };
}

export default { useQuery };
