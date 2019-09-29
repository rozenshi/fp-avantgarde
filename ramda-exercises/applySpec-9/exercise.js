const R = require("ramda");
const { pipe, applySpec, prop, length } = R;
const { chain, uniqBy, mergeDeepRight } = R;

const data = {
  movies: [
    {
      id: 1,
      name: "movie_1",
      starts: 5,
      actors: [
        {
          id: 1,
          name: "actor_1",
          starts: 5
        },
        {
          id: 2,
          name: "actor_2",
          starts: 40
        },
        {
          id: 3,
          name: "actor_3",
          starts: 1
        }
      ]
    },
    {
      id: 2,
      name: "movie_2",
      starts: 2,
      actors: [
        {
          id: 1,
          name: "actor_1",
          starts: 5
        },
        {
          id: 3,
          name: "actor_3",
          starts: 4
        }
      ]
    },
    {
      id: 3,
      name: "movie_3",
      starts: 4,
      actors: [
        {
          id: 2,
          name: "actor_2",
          starts: 3
        },
        {
          id: 3,
          name: "actor_3",
          starts: 1
        }
      ]
    }
  ]
};

/**
 * Create a new object containing total number of movies and actors
 * @example
 * {
 *   totalMovies: (total number of movies),
 *   actors: (list of actors, not repeated)
 * }
 * deriveMovies(data)
 */
const deriveMovies = () => { /* TODO */ };

/**
 * Combine total number of movies and actors with original structure
 */
const enrichMovies = () => { /* TODO */ };
