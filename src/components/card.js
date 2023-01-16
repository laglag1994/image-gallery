import React from 'react'

const card = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div className='my-10 mx-6'>
    <div class="max-w-sm rounded-lg overflow-hidden 
       shadow-lg hover:opacity-80">
      <img src={image.webformatURL} 
      alt="" className="w-full" />
      <div className="px-6 py-6">
        <div className="font-bold text-green-900 text-xl mb--2"> 
         Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Dowloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>

      <div className="px-6 py-4">
        {tags.map(tag=>(

           <span key={image.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
        ))}

      </div>
    </div>

    </div>
  )
}

export default card
