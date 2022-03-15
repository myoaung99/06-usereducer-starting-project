import React, { useState, useEffect } from "react";

// createContext ထဲက default က string လည်းဖြစ်နိုင်တယ်။ တခြား ရိုးရှင်းတဲ့ value တွေလဲဖြစ်နိုင်တယ်
// အသုံးများတာကတော့ object ကို default value အနေနဲ့သုံးကြတယ်

// createContext return ပြန်တာက Component ပါတဲ့ Object တစ်ခုကို ပြန်ပေးတယ်
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
