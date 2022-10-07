import { fromFetch } from "rxjs/internal/observable/dom/fetch";
import { switchMap, map } from "rxjs";

export type User = {
  name: string;
  avatar: string;
  location: string;
  photos: number;
  followers: number;
  following: number;
};

const END_POINT = "https://randomuser.me/api/?inc=name,picture,location";

function number(min = 100, max = 5000) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function toJson$(response: Response) {
  return response.json();
}

function toUser(userData: any): User | null {
  if (
    userData &&
    userData.results &&
    Array.isArray(userData.results) &&
    userData.results.length >= 1
  ) {
    const userResponse = userData.results[0];
    return {
      name: `${userResponse.name.first} ${userResponse.name.last}`,
      avatar: userResponse.picture.large,
      location: `${userResponse.location.state}, ${userResponse.location.country}`,
      photos: number(5, 200),
      followers: number(),
      following: number(),
    };
  }

  return null;
}

const user$ = fromFetch(END_POINT).pipe(switchMap(toJson$), map(toUser));

export default { user$ };
