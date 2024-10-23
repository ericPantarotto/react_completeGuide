import { jwtDecode } from 'jwt-decode';
import { json } from 'react-router-dom';

export function getTokenDurationJwt(token) {
  const decodedToken = jwtDecode(token);
  // console.log(decodedToken);
  const duration = decodedToken.exp - Math.round(new Date().getTime() / 1000);

  return duration;
}

export function getAuthTokenJwt() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDurationJwt(token);

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  return getAuthTokenJwt();
}

export function checkAuthLoader() {
  const token = getAuthTokenJwt();

  if (!token) {
    throw json(
      { message: 'Could access this resource. Please authenticate.' },
      { status: 401 }
    );
  }
  return null;
}
