const htmlReplace = (content) => {
  return content === "" || content === null || content === undefined
    ? content
    : content
        .toString()
        .replace(/&quot;/gi, "")
        .replace(/(<([^>]+)>)/gi, "")
        .replace(/&nbsp;/gi, "")
        .replace(/&gt;/gi, "")
        .replace(/&lt;/gi, "")
        .replace(/&amp;/gi, "")
        .replace(/\n/g, "")
        .trim();
};

export default htmlReplace;
