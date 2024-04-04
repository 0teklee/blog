"use client";

import { signIn } from "next-auth/react";
import { clsx } from "clsx";

const GuestGoogleLogin = () => {
  return (
    <div className={clsx("flex justify-center mt-6")}>
      <button
        onClick={async () => await signIn("google", { redirect: true })}
        className={clsx("text-sm")}
      >
        Login with Google to post
      </button>
    </div>
  );
};

export default GuestGoogleLogin;
