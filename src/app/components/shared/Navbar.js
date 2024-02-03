import logo from "@/app/assets/logo.png";
import home from "@/app/assets/home.jpg";
import allduas from "@/app/assets/all-duas.jpg";
import memorise from "@/app/assets/memorise.jpg";
import bookmark from "@/app/assets/bookmark.jpg";
import ruqyah from "@/app/assets/ruqyah.jpg";
import qa from "@/app/assets/qa.jpg";
import book from "@/app/assets/book.jpg";
import Image from "next/image";
import { BiDonateHeart } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-white rounded-2xl px-2 lg:px-4 py-10 h-[80vh] overflow-y-auto">
      <div className="flex flex-col justify-between items-center gap-6 min-h-[100vh] ">
        <div><Image src={logo} alt="logo" width={50} height={50}></Image>
      </div>
        <div className="space-y-4">
        <Image src={home} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={allduas} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={memorise} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={bookmark} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={ruqyah} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={qa} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={book} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        </div>
        <div className="rounded-md main-bg p-3">
      <BiDonateHeart className="text-3xl main-bg text-white " />
     
        </div>
      </div>

    </div>
  );
};

export default Navbar;
