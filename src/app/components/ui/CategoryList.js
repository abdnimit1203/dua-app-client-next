import { getAllCategories } from "@/app/utils/getAllCategories";
import Subcategory from "./Subcategory";
import Image from "next/image";
import icon from "@/app/assets/hug.png";
import Link from "next/link";
const CategoryList = async () => {
  const data = await getAllCategories();
  console.log(data);
  return (
    <div>
      <h2 className="main-bg rounded-t-xl text-white font-semibold text-center py-3">
        Categories
      </h2>
      <div className=" bg-white p-4 rounded-b-xl ">
        {data.map((category) => (
             <Link href={`/categories/duas?cat_id=${category?.cat_id}`}>
          <div className="collapse" key={category?.id}>
            
            <input type="radio" name="my-accordion-1" checked="checked" />
           
            <div
              className="flex gap-2 bg-slate-100 px-2 py-4 rounded-xl justify-between collapse-title"
            >
             
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
                
                <div className="text-center ">
                  <p className="font-bold ">{category?.no_of_dua}</p>
                  <p className="text-gray-400">Duas</p>
                </div>
     
            </div>
            
            <div className=" px-2 collapse-content ">
              <ul>
                <div className="p-1">
                  <ul className="steps steps-vertical">
                    <Subcategory category_id={category?.cat_id} />
                  </ul>
                </div>
              </ul>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
