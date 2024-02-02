import { IoIosSettings } from "react-icons/io";
import OptionsSetting from "./OptionsSetting";

const DrawerSettings = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button ">
        <IoIosSettings className="inline text-3xl main-clr " />

        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white text-base-content rounded-l-2xl">
          {/* Sidebar content here */}
          <h2 className=" text-center text-xl pt-10">Settings</h2>
          <OptionsSetting/>
        </ul>
      </div>
    </div>
  );
};

export default DrawerSettings;
