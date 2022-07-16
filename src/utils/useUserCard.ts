import { inject } from "vue";

function useUserCard() {
  const isFetching = inject("isFetching");
  const fetchUser = inject("fetchUser");
  const error = inject("error");
  const user = inject("user");

  return [{ user, isFetching, error }, { fetchUser }] as const;
}

export default useUserCard;
