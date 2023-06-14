import { writable, type Writable } from "svelte/store";

export const movieList: Writable<IMovie[]> = writable([]);
