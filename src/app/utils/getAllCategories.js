
export const getAllCategories = async()=>{
    const res = await fetch("http://localhost:3003/api/category",{ cache: "force-cache"})
    return res.json()
}