interface IPostGuestbookPostProps {
  author: string;
  post: string;
  isPrivate: boolean;
}

interface IPostGuestbookCommentProps {
  comment_id: number;
  author: string;
  comment: string;
  isPrivate: boolean;
}

const getGuestbookListFetcher = async (
  cursorIn: number,
  access_token?: string
) => {
  try {
    const res = await fetch(
      `/api/getGuestbookList?cursor=${cursorIn}&access_token=${access_token}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );
    const pageData = await res.json();
    return pageData;
  } catch (err) {
    console.error(err);
    return err;
  }
};

const postGuestbookPostFetcher = async (
  access_token: string,
  body: IPostGuestbookPostProps
) => {
  try {
    const res = await fetch(
      `/api/postGuestbookPost?access_token=${access_token}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      }
    );

    return res.json();
  } catch (err) {
    console.error(err);
    return err;
  }
};

const postGuestbookCommentFetcher = async (
  access_token: string,
  body: IPostGuestbookCommentProps
) => {
  try {
    const res = await fetch(
      `/api/postGuestbookComment?access_token=${access_token}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      }
    );

    return res;
  } catch (err) {
    return err;
  }
};

const getScope = async (access_token: string) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`
    );
    const resJson = await res.json();

    return { ...resJson };
  } catch (err) {
    console.error(err);
    return err;
  }
};

export {
  getGuestbookListFetcher,
  postGuestbookPostFetcher,
  postGuestbookCommentFetcher,
  getScope,
};
