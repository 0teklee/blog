import getGuestbookList from "../../pages/api/getGuestbookList";

const getGuestbookListFetcher = async (cursor: number, email?: string) => {
  try {
    const res = await fetch(
      `/api/getGuestbookList?cursor=${cursor}&email=${email}`
    );
    const pageData = await res.json();
    const isLast = pageData.length < 20;
    return {
      pageData,
      isLast,
      cursor,
    };
  } catch (err) {
    console.error(err);
  }
};

export { getGuestbookListFetcher };
