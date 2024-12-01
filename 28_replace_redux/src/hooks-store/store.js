import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1]; //NOTE: just interested in the updating function, not the first argument, the current state

  useEffect(() => {
    listeners.push(setState);

    //NOTE: triggered when a component unmounts (cleaning function)
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

};