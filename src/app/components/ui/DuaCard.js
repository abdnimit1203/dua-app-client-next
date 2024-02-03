import Image from "next/image";
import AllahLogo from "@/app/assets/allah1.PNG";
import { FaPlayCircle } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { RiLightbulbLine } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import { PiWarningOctagonLight } from "react-icons/pi";

const DuaCard = ({ dua }) => {
  console.log(dua);
  return (
    <div className="flex flex-col gap-4 w-full bg-white p-4 lg:px-8 rounded-xl mb-6">
      <div className="flex gap-2  items-center main-clr font-semibold">
        <Image
          src={AllahLogo}
          alt="Allah name"
          width={40}
          height={40}
          className="rounded-full md:w-fit md:aspect-square md:object-cover w-10"
        ></Image>
        <p>
          {" "}
          <span>{dua?.dua_id}. </span> {dua?.dua_name_en}
        </p>
      </div>
      <div className="space-y-8">
        <p>{dua?.top_en}</p>
        <p className="text-right font-medium text-lg lg:text-2xl">{dua?.dua_arabic}</p>
        {
dua?.transliteration_en?
        <p><span className="font-bold">Transliteration: </span>{dua?.transliteration_en}</p>:""
        }
        {
            dua?.translation_en?
            <p><span className="font-bold">Transltion: </span>{dua?.translation_en}</p>:""
        }
      </div>
      <div>
        <p className="font-semibold main-clr">Reference:</p>
        <p className="font-semibold">Surah Al-Fatir 35:15</p>
      </div>
      <div className="flex items-center justify-between ">
        <div>
          <FaPlayCircle className="main-clr text-2xl" />
        </div>
        <div className="flex gap-2 text-slate-500 md:text-xl">
          <IoCopyOutline className="inline gap-2" />
          <CiBookmark className="inline gap-2" />
          <RiLightbulbLine className="inline gap-2" />
          <GoShareAndroid className="inline gap-2" />
          <PiWarningOctagonLight className="inline gap-2" />
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
