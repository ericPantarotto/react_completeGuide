import { createContext } from 'react';

export const OpinionsContext = createContext({
  opinions: null,
  addOpinion: (opinion) => console.log(opinion),
  upvoteOpinion: (id) => console.log(id),
  downvoteOpinion: (id) => console.log(id),
});
