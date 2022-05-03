import Button from "@material-tailwind/react/Button";
import React from "react";
import { signIn } from "next-auth/client";
import Image from "next/image";
const Login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <img
        src="https://www.technipages.com/wp-content/uploads/2019/08/Google-Docs-Header.jpg"
        height="300"
        width="550"
        objectFit="contain"
      />
      <Button
        className="mt-10 w-44"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
