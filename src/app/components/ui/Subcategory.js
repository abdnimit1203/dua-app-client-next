import { getSubcategorybyCategory } from "@/app/utils/getSubCategorybyCategory";
import Link from "next/link";

const Subcategory = async (category_id) => {
  console.log(category_id.category_id);

  const subData = await getSubcategorybyCategory(category_id.category_id)
  console.log(subData);

  return (
    <>
    
        {
            subData.map((subCategory,idx)=> <li key={idx} className="step"><Link href={`/categories/dua?cat_id=${subCategory.cat_id}&subcat_id=${subCategory.subcat_id}`}>{subCategory?.subcat_name_en} </Link></li>)
        }  
    </>
   
  );
};

export default Subcategory;
