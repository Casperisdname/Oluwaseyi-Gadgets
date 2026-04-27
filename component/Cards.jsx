import Reveal from "./Reveal";

const Cards = ({ src, text }) => (
    <div className="group  shadow-lg rounded-b-3xl cursor-pointer">
      
        <div className="bg-stone-100 rounded-3xl p-6 transition-transform group-hover:-translate-y-2">
            <img src={src} alt={text} className="h-32 w-full object-contain mx-auto" />
        </div>
        <div className="mt-4 font-bold text-lg">{text}</div>
       
    </div>
);
export default Cards
