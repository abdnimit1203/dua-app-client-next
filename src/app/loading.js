import Image from "next/image";
import loader from "./assets/loader.png"

const loading = () => {
    return (
        <div className="flex min-h-screen justify-center items-center w-full">
            <Image src={loader} alt="loading" width={80} height={80} className="animate-spin transition duration-200 "></Image>
        </div>
    );
};

export default loading;