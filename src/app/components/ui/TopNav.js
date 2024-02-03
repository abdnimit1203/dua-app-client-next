
const TopNav = () => {
    return (
        <div className="flex w-full justify-between items-center">
             <h1 className="text-xl font-bold  ">Dua Page</h1>
             <form  className="relative">
        <span className="absolute inset-y-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>

          <label htmlFor="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>
          <input
            type="text"
            id="Search"
        //    onChange={(e)=> {setSearch(e.target.value)}}
            placeholder="Search by Dua Name..."
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm border my-4 pl-10 md:pl-[20%] focus:outline-green-300"
          />

         
        </form>
        </div>
    );
};

export default TopNav;
