// import { redirect } from 'react-router-dom';
import { json } from 'react-router-dom';

export function getAuthToken() {
  const token = localStorage.getItem('token');
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
