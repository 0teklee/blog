import postTwitter from "libs/twitter/postTwitter";
import postTweet from "pages/api/postTweet";

const test = (props) => {
  console.log(props);

  return (
    <div>
      <h1>test</h1>
      <button
        onClick={async () => {
          await postTweet();
        }}
      >
        테스트 보내기
      </button>
    </div>
  );
};

export default test;

export const getServersideProps = async () => {
  console.log("serverside");
  await postTweet();
  return {
    props: {
      er: "this",
    },
  };
};
