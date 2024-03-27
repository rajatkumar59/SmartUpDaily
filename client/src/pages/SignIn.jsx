import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate} from "react-router-dom";
import {useState} from "react";

function SignIn() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username  || !formData.password){
      setError("Please fill all the fields");
      return;
    }
    console.log(formData);
    console.log("handling submit")
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
     console.log("in the try block");
     setLoading(false);

      const data = await response.json();
      console.log(data); 
      if(data.success === false){
        console.log("in the if block of false")
        return setError(data.message); 
      }
      if(response.status === 201 && data.success === true){
        console.log("in the if block of true")
        
      }
      navigate("/");
     

    } catch (error) {
        console.log("in the catch block")
        setLoading(false);
        setError(error.message)
    }
  } 

  return (
    <div className="min-h-screen flex mt-20 justify-center">
      <div className="max-w-96 w-full p-3">
        <div className="flex flex-col justify-center">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label className="text-sm block text-left">Your Username</Label>
              <TextInput className="" placeholder="Username" id="username" onChange={handleChange}/>
            </div>
            
            <div>
              <Label className="text-sm block text-left">Your Password</Label>
              <TextInput type="password" className="" placeholder="Password" id="password" onChange={handleChange}/>
            </div>
            <Button className="w-full bg-red-500" type="submit" disabled={loading}>
              {
                loading ? (
                <>
                  <Spinner size="sm" color="white" />
                  <span className="ml-2">Signing In...</span>
                </>
                ) : "Sign In"
              }
            </Button>
          </form>
          <div className="block text-left mt-2 text-sm">
            <span className="mr-1">
              Don&apos;t have an account?  
            </span>
              <Link to="/signup" className="text-blue-500">
                Sign In
              </Link>
          </div>
          {
            error && (<Alert className="mt-4" color="red">{error}</Alert>)
          }
        </div>
      </div>
    </div>
  );
}

export default SignIn;
