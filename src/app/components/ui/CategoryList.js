// "use client"
import { getAllCategories } from "@/app/utils/getAllCategories";
import Subcategory from "./Subcategory";
import Image from "next/image";
import icon from "@/app/assets/hug.png";
import Link from "next/link";
// import { useState } from "react";
const CategoryList = async () => {

    const data = await getAllCategories();
    console.log(data);
    // const [search,setSearch] = useState("")
    // console.log(search);
  return (
    <div className=" max-h-[80vh] rounded-b-xl">
      <h2 className="main-bg rounded-t-xl text-white font-semibold md:text-lg text-center py-5">
        Categories
      </h2>
      <div className=" bg-white p-4 rounded-b-xl ">

        <form  className="relative">
        <span className="absolute inset-y-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>

          <label htmlFor="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>
          <input
            type="text"
            id="Search"
        //    onChange={(e)=> {setSearch(e.target.value)}}
            placeholder="Search by Category..."
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm border my-4 pl-10 md:pl-[10%] focus:outline-green-300"
          />

         
        </form>
{/* Search button ends */}
<div className="overflow-y-scroll px-2 max-h-[80vh]">


        {data.map((category) => (
        

            <div className="collapse mb-3" key={category?.id}>
              <input type="radio" name="my-accordion-1"  />

              <div className="flex  bg-slate-100 px-2 py-4 rounded-xl justify-between collapse-title">
              <Link href={`/categories/dua?cat_id=${category.cat_id}`}>
                <div className="flex gap-4  items-center">
                  <div className="">
                    <Image
                      src={icon}
                      alt="icon"
                      height={30}
                      width={30}
                      className="w-full bg-slate-300 p-2 rounded-lg"
                    ></Image>
                  </div>
                  <div className="space-y-1">
                    <p className="main-clr font-semibold ">
                      {category?.cat_name_en}
                    </p>

                    <p className="text-gray-400 text-sm">
                      Subcategory: {category?.no_of_subcat}
                    </p>
                  </div>
                </div>
</Link>
                <div className="">
                  <p className="font-bold ">{category?.no_of_dua}</p>
                  <p className="text-gray-400">Duas</p>
                </div>
              </div>

              <div className=" px-2 collapse-content ">
                <ul>
                  <div className="p-1">
                    <ul className="steps steps-vertical ">
                      <Subcategory category_id={category?.cat_id} />
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
           
        ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
