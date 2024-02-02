import { getDuabySub } from "@/app/utils/getDuabySub";
import Subcategory from "./../../components/ui/Subcategory";
import DuaCard from "@/app/components/ui/DuaCard";

const DuaPage = async ({ searchParams }) => {
  console.log(searchParams);
  const data = await getDuabySub(searchParams.cat_id);
  return (
    <div className="rounded-xl w-full flex-1 ">
      <p>Category no : {searchParams?.cat_id}</p>
      <p>Subcategory no: {searchParams?.subcat_id}</p>
      Total Dua: {data.length}
      <div>
        <div className="bg-white rounded-xl p-4 mb-4">
          Section: The servant is dependent on his Lord
        </div>
        {
            data?.map(dua=> <DuaCard key={dua.id} dua={dua}/>)
        }
        
      </div>
    </div>
  );
};

export default DuaPage;
