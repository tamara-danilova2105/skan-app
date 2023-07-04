import { useEffect, useState } from "react";
import { AppRouter } from "./components/AppRouter";
import { Footer } from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getToken, setAuthStatus, setToken } from "./pages/AuthPage/services/slice";
import { NavbarDesktop } from "./components/Navbar/model/Desktop";
import { NavbarMobile } from "./components/Navbar/model/Mobile";

const App = () => {

  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const now = new Date().getTime();
  const [expireTime, setExpireTime] = useState(null);

  const width = window.innerWidth;
  const breakpoint = 620;

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
    setExpireTime(token !== null ? new Date(token.expire).getTime() : null)
  }, [token, dispatch]);

  useEffect(() => {
    if (now > expireTime && expireTime !== null) {
      localStorage.removeItem('token');
      dispatch(setAuthStatus(false));
      dispatch(setToken(null));
    }
  }, [now, expireTime, dispatch])

  return (
    <div>
      {
        width > breakpoint
          ? <NavbarDesktop />
          : <NavbarMobile />
      }
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
