import Random from "@/utils/random";
import type { User } from "@/utils/random";
import {
  catchError,
  exhaustMap,
  map,
  of,
  share,
  startWith,
  Subject,
} from "rxjs";

const defaultQuery = {
  data: null,
  isFetching: true,
  error: null,
};

function toQuery(user: User | null) {
  return { data: user, isFetching: false, error: null };
}
function toErrorQuery(error: any) {
  return of({ data: null, isFetching: false, error: true });
}

const fetch$ = new Subject();

const query$ = fetch$.pipe(
  exhaustMap(() =>
    Random.user$.pipe(
      map(toQuery),
      startWith(defaultQuery),
      catchError(toErrorQuery)
    )
  ),
  share()
);

function fetch() {
  fetch$.next(null);
}

export default { query$, fetch };
