import { getSubcategorybyCategory } from "@/app/utils/getSubCategorybyCategory";

const Subcategory = async (category_id) => {
  console.log(category_id.category_id);

  const subData = await getSubcategorybyCategory(category_id.category_id)
  console.log(subData);

  return (
    <>
        {
            subData.map((subCategory,idx)=> <li key={idx} className="step">{subCategory.subcat_name_en}</li>)
        }
        
    </>
   
  );
};

export default Subcategory;
