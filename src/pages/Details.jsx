import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function CareerDetails() {
  const card = useLoaderData()
  //const { id } = useParams()
  return (
    <>
       <div className=" rounded  bg-purple-200  justify-center items-center  overflow-hidden shadow-lg h-screen w-30">
       <div className="mx-auto grid max-w-2xl grid-cols-2 items-center gap-x-8 gap-y-2 px-4 py-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

               <div>
               <img
                 className="rounded h-25 w-full m-5"
                 src={card.image}
                 alt={card.caption}
               />
               </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{card.cardtitle}</h2>

              <div  className="border-t-4 mt-4 border-gray-100 pt-4 tracking-tight">
             <p className='text-xl'>
              {card.detail}
             </p>
              </div>
        </div>
        </div>
       </div>
    </>
  )
}

// data loader
export const DetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('  http://localhost:4000/cardData/' + id)

  return res.json()
}