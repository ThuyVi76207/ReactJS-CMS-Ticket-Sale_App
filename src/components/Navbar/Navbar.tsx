import avatar from "../../assets/avatar/avatar.png";
import iconSearch from "../../assets/icon/iconsearch.svg";
import iconEnvelope from "../../assets/icon/iconenvelope.svg";
import iconBell from "../../assets/icon/fi_bell.svg";

import { useState } from "react";

import { signInWithPopup, signOut } from "firebase/auth";

import Cookies from "universal-cookie";
import { auth, provider } from "../firebase/firebase-config";
const cookies = new Cookies();

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      cookies.set("get-name", result.user.displayName);
      cookies.set("get-photo-url", result.user.photoURL);
      console.log(result);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
  };

  return (
    <div className="flex items-center justify-between my-[17px] mr-[32px]">
      <div className="flex gap-[16px] items-center justify-between  w-[420px] h-[45px] bg-[#EDE6E6] rounded-[12px] py-[10px] px-[16px]">
        <input
          type="text"
          placeholder="Search"
          name="search"
          className="placeholder:italic placeholder:opacity-30 font-normal focus:outline-none bg-[#EDE6E6] w-[361px]"
        />
        <span className="">
          <img src={iconSearch} alt="icon" />
        </span>
      </div>
      <div className="flex gap-[24px] items-center">
        {isAuth ? (
          <h2 onClick={signUserOut} className="cursor-pointer">
            <ins>Đăng xuất</ins>
          </h2>
        ) : (
          <h2 onClick={signInWithGoogle} className="cursor-pointer">
            <ins>Đăng nhập</ins>
          </h2>
        )}

        <img src={iconEnvelope} alt="icon" />
        <img src={iconBell} alt="icon" />
        {auth.currentUser?.photoURL ? (
          <img
            src={auth.currentUser.photoURL}
            alt=""
            className="w-[48px] h-[48px] rounded-[50%]"
          />
        ) : (
          <img
            src={avatar}
            alt=""
            className="w-[48px] h-[48px] rounded-[50%]"
          />
        )}
      </div>
    </div>
  );
};
export default Navbar;
