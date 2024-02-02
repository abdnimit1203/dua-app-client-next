
export const getDuabySub = async(cat_id,sub_cat)=>{
    console.log(cat_id);
    console.log(sub_cat);
    const res = await fetch(`http://localhost:3003/api/dua?cat_id=${cat_id}`)
    return res.json()
}