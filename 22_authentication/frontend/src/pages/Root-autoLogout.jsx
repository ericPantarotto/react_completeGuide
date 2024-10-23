import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
// import { getTokenDuration } from '../util/auth';
import { getTokenDurationJwt } from '../util/auth-jwt';

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    // const tokenDuration = getTokenDuration();
    // NOTE: jwt-decode package
    const tokenDuration = getTokenDurationJwt(token);

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
      console.info('Logged OUT!');
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
