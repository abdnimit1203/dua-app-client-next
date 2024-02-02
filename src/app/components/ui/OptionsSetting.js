import allduas from "@/app/assets/all-duas.jpg";
import Image from "next/image";
import { IoLanguageSharp } from "react-icons/io5";
import { HiOutlineRectangleStack } from "react-icons/hi2";
const OptionsSetting = () => {
    return (
        <div className="grid grid-cols-1 justify-center items-center gap-6 pt-10">
          <div className="flex items-center gap-3 p-2 px-10 bg-slate-100 rounded-md">
            <div className="rounded-full bg-gray-200 w-fit aspect-square p-3">
              <IoLanguageSharp className="text-xl z-10 inline" />
            </div>
            <span>Language Settings</span>
          </div>
          <div className="flex items-center gap-3 p-2 px-10 bg-slate-100 rounded-md">
            <div className="rounded-full bg-gray-200 w-fit aspect-square p-3">
              <HiOutlineRectangleStack className="text-xl " />
            </div>
            <span>General Settings</span>
          </div>
          <div className="flex items-center gap-3 p-2 px-10 bg-slate-100 rounded-md">
            {" "}
            <Image
              src={allduas}
              alt="logo"
              width={38}
              height={38}
              className="rounded-full border-2 border-black cursor-pointer"
            ></Image>
            <span>Font Settings</span>
          </div>
          <div className="flex items-center gap-3 p-2 px-10 bg-slate-100 rounded-md border-l-4 border-green-500">
            {" "}
            <Image
              src={allduas}
              alt="logo"
              width={38}
              height={38}
              className="rounded-full border-2 border-black cursor-pointer"
            ></Image>
            <span>Appearance Settings</span>

          </div>
          <div className="flex justify-between border p-6">
            <p>Night Mode</p>
            <input type="checkbox" className="toggle" checked />
          </div>
        </div>
    );
};

export default OptionsSetting;