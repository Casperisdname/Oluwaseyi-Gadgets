import Reveal from "./Reveal";

const Card = ({img,name,txt,p}) => {
    return ( <div className="pt-8 flex px-4 gap-4 pb-4 bg-stone-50 rounded-3xl shadow-2xl  ">
       
         <div className="w-36 md:w-2xs">
           {img}
        </div>
        <div className="space-y-4">
            <div className="font-bold">{name}</div>
             <div>{txt}</div>
              <div className="text-orange-500 font-medium">{p}</div>
              <div className=" text-left">
                <button className="px-4 py-3 bg-green-600 text-green-100 font-bold rounded-2xl"><a href="https://wa.me/2348101428609"> Order on whatsapp</a></button>
              </div>
              
        </div>
       
    </div> );
}
 
export default Card;
