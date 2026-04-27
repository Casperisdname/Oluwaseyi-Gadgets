import Reveal from "./Reveal";

const Hero = () => {
    return ( 
    <div id="home" className="pt-32 md:pt-48 text-center px-6 max-w-7xl mx-auto">
        <Reveal>
        <div className="font-bold text-xl md:text-2xl text-stone-600 uppercase tracking-wide">
            Your one stop shop for
        </div>
        <div className="text-5xl md:text-7xl font-extrabold pt-4 tracking-tight">
            Phones & <span className="text-orange-500">Gadgets</span>
        </div>
        <div className="pt-6 text-lg md:text-xl font-medium text-stone-500 max-w-2xl mx-auto">
            Buy top quality smartphones, gaming consoles, and accessories at the best prices in Abuja.
        </div>
        
        <div className="pt-10 flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="#shop" className="w-full md:w-auto px-10 py-4 hover:bg-orange-600 transition-all rounded-2xl bg-orange-500 font-bold shadow-lg text-white"> 
                Shop Now 
            </a>
            <a href="#products" className="w-full md:w-auto px-10 py-4 rounded-2xl border-2 border-stone-200 hover:bg-stone-50 transition-all font-bold">
                View Products 
            </a>
        </div>

        <div className="pt-16 flex justify-center">
            <img src="./iphone.png" alt="Featured iPhone" className="max-h-[400px] object-contain" />
        </div>
        </Reveal>
    </div> 
    );
}
export default Hero