import React from 'react';
import CategoryList from '../components/ui/CategoryList';
import TopNav from '../components/ui/TopNav';

const CategoryLayout = ({children}) => {
    return (
        
        <div className='mx-6 '>
            <TopNav/>
      <div className="flex p-2 gap-4 ">

            <div >
                <CategoryList/>
            </div>
            <div className=' w-full rounded-xl'>
            asdas
             {children}
            </div>
      </div>
        </div>
    );
};

export default CategoryLayout;