import { reactive, toRefs } from "vue";
import Random from "@/utils/random";
import type { User } from "@/utils/random";

const query = reactive({
  data: null as User | null,
  isFetching: false,
  error: false,
});

function useQuery() {
  async function fetch() {
    query.isFetching = true;
    query.error = false;
    try {
      query.data = await Random.user();
    } catch (err) {
      query.error = true;
    }
    query.isFetching = false;
  }

  return { ...toRefs(query), fetch };
}

export default { useQuery };
