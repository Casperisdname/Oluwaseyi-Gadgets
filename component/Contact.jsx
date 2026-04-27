import Reveal from "./Reveal";

const Contact = () => {
    return ( <div id="contact" className="text-center bg-stone-300 md:mt-40 pt-16 px-4 pb-16">
        <Reveal>
        <div className="font-bold text-orange-500 text-3xl pb-4">Contact US</div>
          <div className="font-medium text-lg">
           Need Help? We are just a mesaage away!
        </div>
        <div className="font-medium text-lg pt-4">
          Chat with us on whatsapp fo quick response and amazing deals.
        </div>
        <div className="pt-6">
            <button className="px-4 py-5 bg-green-600 text-green-100 font-bold text-lg rounded-2xl">
              <a  href="https://wa.me/2348101428609"> Chat on whatsapp</a> 
            </button>
        </div>
        </Reveal>
    </div>  );
}
 
export default Contact;