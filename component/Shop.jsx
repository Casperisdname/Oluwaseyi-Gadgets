import Cards from "./Cards";
import Reveal from "./Reveal";

const Shop = () => {
    return ( 
    <div id="shop" className="max-w-7xl mx-auto text-center pt-24 pb-8 px-8">
        <Reveal>
        <div className="text-orange-500 text-lg font-bold uppercase tracking-widest">Shop by Category</div>
        <div className="font-bold text-3xl md:text-4xl pb-12 pt-2">Explore Top Categories</div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
            <Cards src="14.webp" text="Smartphones" />
            <Cards src="ps4.webp" text="Gaming" />
            <Cards src="apple.webp" text="Accessories" />
            <Cards src="20000.webp" text="Power Banks" />
        </div>
        </Reveal>
    </div> 
    );
}
export default Shop


