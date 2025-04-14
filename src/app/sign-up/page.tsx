import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <SignUp appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "bg-white dark:bg-gray-800 shadow-xl",
        }
      }} />
    </div>
  );
}
