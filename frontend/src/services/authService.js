// const BACKEND_URL = process.env.EXPRESS_BACKEND_URL;
// const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const BACKEND_URL = '/api'

const testBackendConnection = async () => {
    console.log('hit')
    try {
        const response = await fetch(`${BACKEND_URL}/users/ping`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Backend response:', data);
            return data;
        } else {
            console.error('Failed to connect to backend. Status:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error connecting to backend:', error);
        return null;
    }
};

const getUser = () => {
  const token = localStorage.getItem('jwtToken');
  if (!token) return null;
  const user = JSON.parse(atob(token.split('.')[1]));
  return user;
};

const signup = async (formData) => {
  console.log('form',formData)
  try {
    const res = await fetch(`${BACKEND_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
    console.log(json)
    localStorage.setItem('token', json.jwtToken);
    return json;
  } catch (err) {
    throw new Error(err);
  }
};

const signin = async (user) => {
  console.log('signin')
  try {
    const res = await fetch(`${BACKEND_URL}/auth/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
    console.log('json',json)
    if (json.jwtToken) {
      localStorage.setItem('token', json.jwtToken);
      const user = JSON.parse(atob(json.jwtToken.split('.')[1]));
      return user;
    }
  } catch (err) {
    throw err;
  }
};

const signout = () => {
  localStorage.removeItem('token');
};

export {
    signup, 
    signin, 
    getUser, 
    signout,
    testBackendConnection,
};
