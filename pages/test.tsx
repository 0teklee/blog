import postTwitter from "libs/twitter/postTwitter";

const test = (props) => {
  console.log(props);

  return (
    <div>
      <h1>test</h1>
      <button
        onClick={async () => {
          await postTwitter();
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
  return {
    props: {
      er: "this",
    },
  };
};
