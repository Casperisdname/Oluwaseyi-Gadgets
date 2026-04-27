import Card from "./Card";
import Reveal from "./Reveal";

const Products = () => {
    return ( <div id="products" className="max-w-7xl mx-auto text-center md:pt-52 pt-24 px-4">
        <Reveal>
        <div className="text-orange-500 font-bold text-lg uppercase">Featured products</div>
        <div className="font-bold text-3xl md:text-4xl pt-2">Our Best Sellers</div>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
       <Card img={<img src="13.jpg"/> } name="Iphone 13" txt="256 * Excellent Condition" p="₦460k-₦420k" />
       <Card img={<img src="12.jpg"/> } name="Iphone 12" txt="Various Conditions Available" p="From ₦320k" />
        <Card img={<img src="ps4.webp"/> } name="Play Station 4" txt="With games and Controller" p="₦210k - ₦260k"/>
         <Card img={<img src="15.webp"/> } name="Iphone 15" txt="128GB * UK used and Open Box" p="₦680k - ₦780k"/>
          <Card img={<img src="s23.jpg"/> } name="Samsung S23" txt="Various Storage Options" p="From ₦520k" />
         <Card img={<img src="ps5.avif"/> }  name="Play Station 5" txt="Ps5 Slim * Disc/ Digital . With Games" p="₦720k - ₦850k"/>
        <Card img={<img src="apple.webp"/> } name="Apple Airpods Pro 2" txt="Brand New/ Original" p="₦310k - ₦380k"/>
         <Card img={<img src="20000.webp"/> } name="20000 MAH Power Bank" txt="Original" p="₦12500 - ₦22000"/>
        <Card img={<img src="30000.jpg"/> }name="30000 MAH Power Bank" txt="Original" p="₦22000 - ₦32000"/>
        <Card img={<img src="33000.webp"/> }name="33000 MAH Power Bank" txt="Original" p="₦28500 - ₦35000"/>
        <Card img={<img src="44000.webp"/> }name="44000 MAH Power Bank" txt="Original" p="₦35000 -₦45000"/>
            </div>
       
        </div>
       </Reveal>
    </div> );
}
 
export default Products;