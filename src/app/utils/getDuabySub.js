
export const getDuabySub = async(cat_id)=>{
    console.log(cat_id);
    const res = await fetch(`http://localhost:3003/api/dua?cat_id=${cat_id}`,{ cache: "force-cache"})
    return res.json()
}