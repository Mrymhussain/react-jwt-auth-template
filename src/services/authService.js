const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

const signUp = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/sign-up`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.err) {
      throw new Error(data.err);
    }

    if (data.token) {
      localStorage.setItem('token', data.token);

      const payload = data.token.split('.')[1];

      // Convert the serialized data into JSON
      const tokenJson = atob(payload);

      // Convert JSON into JS and return the user
      return JSON.parse(tokenJson).payload;
    }

    throw new Error('Invalid response from server');
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const signIn = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/sign-in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.err) {
      throw new Error(data.err);
    }

    if (data.token) {
      localStorage.setItem('token', data.token);

      const payload = data.token.split('.')[1];
      const tokenJson = atob(payload);

      return JSON.parse(tokenJson).payload;
    }

    throw new Error('Invalid response from server');
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export {
  signUp,
  signIn,
};