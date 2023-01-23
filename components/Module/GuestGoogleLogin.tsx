import { Dispatch, SetStateAction, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import Cookie from "js-cookie";
import styled from "styled-components";
import Modal from "react-modal";

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 10,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    height: "50vh",
    background: "#ffffff",
    overflow: "auto",
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
    WebkitOverflowScrolling: "touch",
    borderRadius: "14px",
    outline: "none",
    zIndex: 10,
  },
};

const GuestGoogleLogin = ({
  setIsLogin,
}: {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isModal, setIsModal] = useState(false);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const { access_token } = response;
      if (!Cookie.get("guest_access_token")) {
        Cookie.set("guest_access_token", access_token);
      }
      setIsLogin(true);
    },
    onError: (error) => {
      console.error(error);
      alert("Please login again");
    },
  });

  return (
    <__Container>
      <Modal
        isOpen={isModal}
        onRequestClose={() => setIsModal(false)}
        style={modalStyle}
        ariaHideApp={false}
      >
        <__ModalContainer>
          <h2>개인 정보 이용 동의</h2>
          <h3>Privacy Policy</h3>
          <div className="kr">
            <p>1) 제공하는 개인정보의 항목 : 성명, 이메일</p>
            <p>2) 개인정보를 제공받는 자의 개인정보 이용 목적 : 유저 관리</p>
            <p>
              3) 개인정보를 제공받는 자의 개인정보 보유 및 이용 기간 : 제공 후
              1년
            </p>
            <p>
              4) 동의를 거부할 수 있으며, 동의 거부시 서비스가 제공되지
              않습니다.
            </p>
          </div>
          <h3 className="agree">※ 위 고유식별정보 수집이용에 동의하십니까?</h3>
          <div className="btns">
            <button onClick={() => login()}>YES</button>
            <button onClick={() => setIsModal(false)}>NO</button>
          </div>
        </__ModalContainer>
      </Modal>
      {/*<__Button onClick={() => login()}>Login with Google to post</__Button>*/}
      <__Button onClick={() => setIsModal(true)}>
        Login with Google to post
      </__Button>
    </__Container>
  );
};

export default GuestGoogleLogin;

const __Container = styled.div`
  display: flex;
  justify-content: center;
`;

const __Button = styled.button`
  font-size: 0.9rem;
`;

const __ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    padding: 1rem;

    color: #000;
    text-align: center;
    font-size: 1.5rem;
    word-break: keep-all;
  }

  h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  .kr {
    margin: 1rem;

    p {
      margin: 0.5rem;
    }
  }

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100%;

    button {
      width: 100%;
      padding: 1rem;
      margin-bottom: 2rem;
      border: 1px solid #eaeaea;
      border-radius: 1rem;
    }

    button:hover {
      color: #fff;
    }

    button:first-child:hover {
      background: #81d0ff;
    }

    button:last-child:hover {
      background: #ff8a8a;
    }
  }
`;
