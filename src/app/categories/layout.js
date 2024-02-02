import React from 'react';
import CategoryList from '../components/ui/CategoryList';

const CategoryLayout = ({children}) => {
    return (
        
        <div className='flex w-full p-2 gap-4'>
            <div className=''>
                <CategoryList/>
            </div>
            <div className='bg-white flex-1 '>
             {children}
            </div>
        </div>
    );
};

export default CategoryLayout;