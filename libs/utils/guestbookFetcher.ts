import getGuestbookList from "../../pages/api/getGuestbookList";

const getGuestbookListFetcher = async (cursor: number, email?: string) => {
  try {
    const res = await fetch(
      `/api/getGuestbookList?cursor=${cursor}&email=${email}`
    );
    const data = await res.json();
    const isLast = data.length < 20;
    return {
      data,
      isLast,
      cursor: cursor,
    };
  } catch (err) {
    console.error(err);
  }
};

export { getGuestbookListFetcher };
