const fetcherGet = (url: string) => fetch(url).then((res) => res.json());

const fetcherImagePost = async <T extends object>(
  url: string,
  data: FormData
): Promise<Response> => {
  return await fetch(url, {
    method: "POST",
    body: data,
  }).then((res) => res.json());
};

export { fetcherGet, fetcherImagePost };
