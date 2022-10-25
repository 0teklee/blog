import postTweet from "libs/utils/postTweet";

const testT = () => {
  return (
    <div>
      testT
      <button
        onClick={() => {
          postTweet(`https://teklog.site`, "test tweet from this");
        }}
      >
        트윗하기
      </button>
    </div>
  );
};

export default testT;
