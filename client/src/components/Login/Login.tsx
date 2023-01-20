import TextField from "@mui/material/TextField";
import { LoginWrapper } from "./Login.style";

const Login = () => {
  return (
    <LoginWrapper>
      <form>
        <TextField
          label="Enter your email"
          type="email"
          autoComplete="current-password"
        />
        <TextField
          label="Enter your password"
          type="password"
          autoComplete="current-password"
        />
        <button type="submit">Login</button>
      </form>
    </LoginWrapper>
  );
};

export default Login;
