import { useEffect, useState } from "react";
import { AppRouter } from "./components/AppRouter";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

const App = () => {

  const dataToken = JSON.parse(localStorage.getItem('token'));
  const [token, setToken] = useState(dataToken !== null ? dataToken : null)
  console.log(token);
  const [authStatus, setAuthStatus] = useState();
  console.log(authStatus);
  const [expireTime, setExpireTime] = useState(null);
  console.log(expireTime);

  const now = new Date().getTime();

  useEffect(() => {
    setAuthStatus(token === null ? false : true);
    setExpireTime(token !== null ? token.expire : null)
  }, [token]);

  useEffect(() => {
    if (now < expireTime) {
      localStorage.removeItem('token');
      setAuthStatus(false);
      setToken(null)
    }
  }, [now, expireTime])

  return (
    <div>
      <Navbar
        authStatus={authStatus}
        setAuthStatus={setAuthStatus}
        setToken={setToken}
      />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
