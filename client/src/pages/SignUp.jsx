import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen flex mt-20 justify-center">
      <div className="max-w-96 w-full p-3">
        <div className="flex flex-col justify-center">
          <form className="flex flex-col gap-4">
            <div>
              <Label className="text-sm block text-left">Your Username</Label>
              <TextInput className="" placeholder="Username" id="username" />
            </div>
            <div>
              <Label className="text-sm block text-left">Your Email</Label>
              <TextInput className="" placeholder="Email@example.com" id="email" />
            </div>
            <div>
              <Label className="text-sm block text-left">Your Password</Label>
              <TextInput className="" placeholder="Password" id="password" />
            </div>
            <Button className="w-full bg-red-500" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="block text-left mt-2 text-sm">
            <span className="mr-1">
              Already have an account?  
            </span>
              <Link to="/signin" className="text-blue-500">
                Sign In
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
