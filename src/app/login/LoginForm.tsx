"use client";

import { useFormStatus } from "react-dom";

export default function LoginForm() {
  return (
    <form className="flex max-w-[300px] flex-col gap-2">
      <div className="flex flex-col gap-3">
        <input id="name" name="name" placeholder="Name" />
      </div>
      <div className="flex flex-col gap-2">
        <input id="email" name="email" placeholder="Email" />
      </div>
      <div className="flex flex-col gap-2">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button>Login</button>;
}
