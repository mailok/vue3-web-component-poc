import { inject } from "vue";

function useUserCard() {
  const isFetching = inject("isFetching");
  const fetchUser = inject<any>("fetchUser");
  const error = inject("error");
  const user = inject<any>("user");

  return [{ user, isFetching, error }, { fetchUser }] as const;
}

export default useUserCard;
