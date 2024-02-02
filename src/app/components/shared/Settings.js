import profile from "@/app/assets/profile.png";
import allduas from "@/app/assets/all-duas.jpg";
import Image from "next/image";
import { IoLanguageSharp } from "react-icons/io5";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import DrawerSettings from "../ui/DrawerSettings";
import OptionsSetting from "../ui/OptionsSetting";

const Settings = () => {
  return (
    <div className="flex flex-col justify-start items-end">
      <div className="h-24 w-fit flex items-center">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className=" m-1">
            <Image src={profile} alt="logo" width={45} height={45}></Image>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Support Us</a>
            </li>
            <li>
              <a>Download Dua App</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Thanks & Credits</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
            <DrawerSettings/>
        </div>
      </div>
      <div className="bg-white rounded-2xl px-2 py-10 flex-1 items-center text-center gap-6 hidden lg:block">
        <h2 className="font-bold ">Settings</h2>
        <OptionsSetting/>
      </div>
    </div>
  );
};

export default Settings;
