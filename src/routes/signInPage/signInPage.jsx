import { SignIn } from "@clerk/clerk-react";
import "./signInPage.css";

const SignInPage = () => {
  return (
    <div className="signInPage">
      <SignIn path="/sign-in" signUpUrl="/sign-up"></SignIn>
    </div>
  );
};

export default SignInPage;
