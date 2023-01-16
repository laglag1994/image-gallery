import React from 'react'

const Search = () => {
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form className='w-full max-w-small'>
            <div className="flex items-center borderb borderb-2 border-teal-500 py-2">
               <input className='apperance-none bg-transperent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="text" placeholder='Search Image' />
               <button className='flex-shrink-0 bg-teal-500 hovoer:bg-teal-700 border-teal-500 hovoer:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type='submit'>Search</button>
            </div>
        </form>      
    </div>
  )
}

export default Search;
