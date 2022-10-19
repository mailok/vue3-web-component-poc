import type { User } from "@/utils/random";
import API from "@/utils/random";
import {
  catchError,
  exhaustMap,
  map,
  Observable,
  of,
  pipe,
  share,
  startWith,
  Subject,
} from "rxjs";

const defaultValue = {
  data: null,
  isFetching: true,
  error: null,
};

function toQuery(user: User | null) {
  return { data: user, isFetching: false, error: null };
}
function toErrorQuery() {
  return of({ data: null, isFetching: false, error: true });
}

function oneAtTime(observable: Observable<any>) {
  return pipe(exhaustMap(() => observable));
}

const source$ = new Subject<void>();

const query$ = source$.pipe(
  oneAtTime(
    API.user$.pipe(
      map(toQuery),
      startWith(defaultValue),
      catchError(toErrorQuery)
    )
  ),
  share()
);

function fetch() {
  source$.next();
}

export default { query$, fetch };
