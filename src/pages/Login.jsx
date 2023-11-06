import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const [remember, setRemember] = useState(null);

  const handleLogin = () => {
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4 ">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex space-x-48">
            <button className="bg-accent text-white font-semibold py-1 px-2 rounded">
              <Link to="/">Back</Link>
            </button>
            <button
              type="button"
              className="bg-accent text-white font-semibold py-2 px-5 rounded"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
