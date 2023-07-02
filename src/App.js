import { useEffect, useState } from "react";
import { AppRouter } from "./components/AppRouter";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar/model";
import { useDispatch, useSelector } from "react-redux";
import { getToken, setAuthStatus, setToken } from "./pages/AuthPage/services/slice";

const App = () => {

  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [expireTime, setExpireTime] = useState(null);
  const now = new Date().getTime();

  useEffect(() => {
    const dataToken = JSON.parse(localStorage.getItem('token'));
    if (dataToken !== null) {
      dispatch(setToken(dataToken))
      dispatch(setAuthStatus(true))
    } else {
      dispatch(setToken(null))
      dispatch(setAuthStatus(false))
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(setAuthStatus(token === null ? false : true))
    setExpireTime(token !== null ? token.expire : null)
  }, [token, dispatch]);

  useEffect(() => {
    if (now < expireTime) {
      localStorage.removeItem('token');
      dispatch(setAuthStatus(false));
      dispatch(setToken(null));
    }
  }, [now, expireTime, dispatch])

  return (
    <div>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
