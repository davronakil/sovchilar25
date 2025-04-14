import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <SignIn appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "bg-white dark:bg-gray-800 shadow-xl",
        }
      }} />
    </div>
  );
}
