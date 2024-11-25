import { useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

export default function ChallengesContextProvider({ children }) {
  // const [challenges, setChallenges] = useState([]);
  // HACK: for testing
  const [challenges, setChallenges] = useState([
    {
      title: 'Learn React',
      description: 'Learn React description',
      deadline: new Date().toString(),
      image: {
        src: '/src/assets/constructing.png',
        alt: 'Person working on some furniture.',
      },
      id: Math.random().toString(),
      status: 'active',
    },
    {
      title: 'Learn how to animate with React ',
      description: 'Learn React animate description',
      deadline: new Date(new Date().getTime() + 60 * 60 * 24 * 1000).toString(),
      image: {
        src: '/src/assets/cooking.png',
        alt: 'Person cooking a meal.',
      },
      id: Math.random().toString(),
      status: 'active',
    },
  ]);

  function addChallenge(challenge) {
    setChallenges((prevChallenges) => [
      { ...challenge, id: Math.random().toString(), status: 'active' },
      ...prevChallenges,
    ]);
  }

  function deleteChallenge(challengeId) {
    setChallenges((prevChallenges) =>
      prevChallenges.filter((challenge) => challenge.id !== challengeId)
    );
  }

  function updateChallengeStatus(challengeId, newStatus) {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      })
    );
  }

  const challengesContext = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  };

  return (
    <ChallengesContext.Provider value={challengesContext}>
      {children}
    </ChallengesContext.Provider>
  );
}
