import { getDuabySub } from "@/app/utils/getDuabySub";

import DuaCard from "@/app/components/ui/DuaCard";
// export function generateStaticParams() {
//   return [{ cat_id: 1 }, { cat_id: 2 }, { cat_id: 3 },{ cat_id: 4 }, { cat_id: 5 }, { cat_id: 6 },{ cat_id: 7 }, { cat_id: 8}, { cat_id: 9 },{ cat_id: 10 }];
// }
const DuaPage = async ({ params,searchParams }) => {
  console.log(searchParams);
  const data = await getDuabySub(searchParams.cat_id);
  return (
    <div className="rounded-xl w-full flex-1 ">
      <p>Category no : {searchParams?.cat_id}</p>
      <p>Subcategory no: {searchParams?.subcat_id}</p>
      Total Dua: {data.length}
      <div>
        <div className="bg-white rounded-xl p-4 mb-4">
          <span className="main-clr font-semibold">Section:</span> The servant
          is dependent on his Lord
        </div>
        {data?.map((dua) => (
          <DuaCard key={dua.id} dua={dua} />
        ))}
      </div>
    </div>
  );
};

export default DuaPage;
