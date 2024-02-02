import { getDuabySub } from "@/app/utils/getDuabySub";
import Subcategory from "./../../components/ui/Subcategory";

const DuaPage = async ({ searchParams }) => {
//   console.log(searchParams);
  const data = await getDuabySub(searchParams.cat_id);
  return (
    <div className="rounded-xl">
      <p>Category no : {searchParams?.cat_id}</p>
      <p>Subcategory no: {searchParams?.subcat_id}</p>
        {data.length}
      <div>

      </div>
    </div>
  );
};

export default DuaPage;
