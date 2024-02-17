import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../firebase/FirebaseConfig";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignInWithEmail = async () => {
    try {
      if (!email || !password) {
        setError("Email and password are required.");
        return;
      }
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        toast.success("Sign Up Successful", { position: "top-center" });
        // redirect to home page
        navigate("/");
      }

      // User signed in successfully
      setError(null);
    } catch (error) {
      setError("Error creating user. Please try again.");
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error("Error creating user. Please try again.");
      console.error("Error creating user:", errorCode, errorMessage);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
        toast.success("Sign Up Successful", { position: "top-center" });

        // redirect to home page
        navigate("/");
      } else {
        toast.warning("User already exists. Redirecting to home page.");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error("Error creating user. Please try again.");
      console.error("Error creating user:", errorCode, errorMessage);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-white">
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-md">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="mr-1 text-white">Sign in with</label>
            <button
              onClick={handleSignInWithGoogle}
              type="button"
              className="inline-block mx-1 h-9 w-9 rounded-full bg-blue-200 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <FcGoogle
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-100">
              Or
            </p>
          </div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-90">{error}</p>}
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-100 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" required />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              onClick={handleSignInWithEmail}
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-100 text-center md:text-left">
            Don&apos;t have an account?{" "}
            <a
              className="text-red-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Register
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
