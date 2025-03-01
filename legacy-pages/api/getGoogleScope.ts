const getGoogleScope = async (access_token?: string) => {
  try {
    if (!access_token) {
      return { email: null };
    }

    const res = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`
    );
    const resJson = await res.json();

    return { ...resJson };
  } catch (err) {
    console.error(err);
    return { error: err };
  }
};

export default getGoogleScope;
