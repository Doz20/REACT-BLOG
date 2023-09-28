import { useLoaderData ,Link} from "react-router-dom";
  export default function CardList(){
    const cards = useLoaderData()
  
    return (
        <>
  <div className="grid grid-cols-4 ml-10 mr-10 gap-4 top-10">
      {cards.map((card) => (
       // <Card key={card.id} cardtitle={card.cardtitle} image={card.image} caption={card.caption} />
       <div className="">
       <div className=" rounded mt-20 ml-1 mr-1 bg-purple-500  justify-center items-center  overflow-hidden shadow-lg h-50 w-30">
               <img
                 className="h-60 w-full py-0 px-0"
                 src={card.image}
                 alt={card.caption}
               />
           <div className="px-2 py-2">
           <div className="font-bold text-xl mb-2">{card.cardtitle}</div>
   
           </div>
           <div className="px-6 py-4">
               <Link to={'/details/' + card.id.toString()}>
              <span className="inline-block w-full bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">See Details</span>
              </Link>
           </div>
       </div>
       </div>


      ))}
    </div>
        </>
    
    );
  }

  //loader data 
export const cardsLoader = async() =>{
    const res = await fetch('http://localhost:4000/cardData')

    if(!res.ok)
    {
      throw Error('could not found that ');
    }
    return res.json()
}