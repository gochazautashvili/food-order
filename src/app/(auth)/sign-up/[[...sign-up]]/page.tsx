import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-brand">
      <SignUp path="/sign-up" />
    </main>
  );
}
