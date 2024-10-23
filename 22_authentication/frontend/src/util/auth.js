// import { redirect } from 'react-router-dom';
import { json } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

// export function getAuthToken() {
//   const token = localStorage.getItem('token');
//   return token;
// }

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    // return redirect('/auth');

    // NOTE: we could also throw an error, and show the error page instead
    throw json(
      { message: 'Could access this resource. Please authenticate.' },
      { status: 401 }
    );
  }
  return null;
}
