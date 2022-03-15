import React from "react";

// createContext ထဲက default က string လည်းဖြစ်နိုင်တယ်။ တခြား ရိုးရှင်းတဲ့ value တွေလဲဖြစ်နိုင်တယ်
// အသုံးများတာကတော့ object ကို default value အနေနဲ့သုံးကြတယ်

// createContext return ပြန်တာက Component ပါတဲ့ Object တစ်ခုကို ပြန်ပေးတယ်
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
