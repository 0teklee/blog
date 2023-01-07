import { Dispatch, SetStateAction } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import Cookie from "js-cookie";
import styled from "styled-components";

const GuestGoogleLogin = ({
  setIsLogin,
}: {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}) => {
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
      <__Button onClick={() => login()}>Login with Google to post</__Button>
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
