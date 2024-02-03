export const getSubcategorybyCategory = async (id) => {
  const res = await fetch(
    `http://localhost:3003/api/sub_category?cat_id=${id}`,{ cache: "force-cache"}
  );

  return res.json();
};
