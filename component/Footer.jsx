import Reveal from "./Reveal";

const Footer = () => {
    return ( 
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 px-6 mt-20">
        <Reveal>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            {/* Column 1: Brand */}
            <div>
                <div className="text-white font-bold text-2xl pb-4">
                    Oluwaseyi <span className="text-orange-500">Gadgets 🔌</span>
                </div>
                <p className="text-sm leading-relaxed">
                    Abuja's most trusted plug for original and high-quality UK used smartphones and gaming consoles.
                </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <div className="text-white font-bold text-lg pb-4">Quick Links</div>
                <div className="flex flex-col space-y-3">
                    <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
                    <a href="#products" className="hover:text-orange-500 transition-colors">Featured Products</a>
                    <a href="#contact" className="hover:text-orange-500 transition-colors">Contact Us</a>
                </div>
            </div>

            {/* Column 3: Contact & Policy */}
            <div>
                <div className="text-white font-bold text-lg pb-4">Contact & Info</div>
                <div className="space-y-3 text-sm">
                    <p>📍 Abuja, Nigeria</p>
                    <p>💬 WhatsApp: +234 810 142 8609</p>
                    <p className="text-orange-400 italic">
                        * All Prices are subject to availability & exchange rate.
                    </p>
                </div>
            </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs uppercase tracking-widest text-stone-500">
            © 2026 Oluwaseyi Gadgets. Fast Reliable Delivery. Shop With Confidence.
        </div>
        </Reveal>
    </footer> 
    );
}
export default Footer