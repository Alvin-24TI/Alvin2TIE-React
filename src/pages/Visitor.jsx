import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";

// MENGAMBIL DATA DARI JSON (Memenuhi Aturan UTS Poin 4 & 5)
import productsData from "../DataProduct.json";
import customersData from "../DataCustomer.json";

const Visitor = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animate, setAnimate] = useState(false);

    // Data Slider (Oganik)
    const slides = [
        {
            bg: "https://html.ninetheme.com/oganik/assets/images/main-slider/main-slider-1-1.jpg",
            subtitle: "100% Organic Foods",
            title: "Organic Veggies",
        },
        {
            bg: "https://html.ninetheme.com/oganik/assets/images/main-slider/main-slider-1-2.jpg",
            subtitle: "Healthy Lifestyle",
            title: "Fresh Groceries",
        }
    ];

    // Data Kategori Bundar (Oganik)
    const categories = [
        { name: "Fresh Fruit", img: "https://html.ninetheme.com/oganik/assets/images/resources/categories-1-1.png" },
        { name: "Dried Fruit", img: "https://html.ninetheme.com/oganik/assets/images/resources/categories-1-2.png" },
        { name: "Vegetables", img: "https://html.ninetheme.com/oganik/assets/images/resources/categories-1-3.png" },
        { name: "Drink Fruits", img: "https://html.ninetheme.com/oganik/assets/images/resources/categories-1-4.png" }
    ];

    useEffect(() => {
        setAnimate(false);
        const timeout = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timeout);
    }, [currentSlide]);

    const nextSlide = () => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    const prevSlide = () => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);

    return (
        <div className="font-barlow text-[#7e7e7e]">
            {/* Import Font Asli Oganik */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Barlow:wght@400;500;600;700;800;900&display=swap');
          .font-cursive { font-family: 'Covered By Your Grace', cursive; }
          .font-barlow { font-family: 'Barlow', sans-serif; }
          .slider-content { transition: all 0.8s ease-in-out; }
          .slider-visible { opacity: 1; transform: translateY(0); }
          .slider-hidden { opacity: 0; transform: translateY(30px); }
        `}
            </style>

            {/* --- HERO SLIDER SECTION (Aturan 2) --- */}
            <section className="relative w-full h-[600px] lg:h-[800px] overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform scale-100" style={{ backgroundImage: `url(${slides[currentSlide].bg})` }}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                    <div className={`slider-content ${animate ? 'slider-visible' : 'slider-hidden'}`}>
                        <p className="text-[#7fad39] text-3xl md:text-5xl font-cursive mb-2 md:mb-4">{slides[currentSlide].subtitle}</p>
                        <h2 className="text-[#1f2226] text-5xl md:text-[90px] font-black uppercase leading-none mb-8 md:mb-10 tracking-tight">{slides[currentSlide].title}</h2>
                        <button className="bg-[#7fad39] text-white px-10 py-4 md:py-5 rounded-full text-sm font-bold uppercase tracking-[2px] hover:bg-[#1f2226] transition-colors duration-500">
                            Pesan Sekarang
                        </button>
                    </div>
                </div>
                <button onClick={prevSlide} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1f2226] text-xl shadow-md z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#7fad39] hover:text-white"><FaIcons.FaAngleLeft /></button>
                <button onClick={nextSlide} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1f2226] text-xl shadow-md z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#7fad39] hover:text-white"><FaIcons.FaAngleRight /></button>
            </section>

            {/* --- ABOUT SECTION (Aturan 3 - Poin Penuh) --- */}
            <section id="about" className="pt-24 pb-20 bg-white">
                <div className="container mx-auto px-4 max-w-[1200px]">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <span className="text-[#7fad39] text-3xl font-cursive">Tentang Foodies</span>
                        <h2 className="text-[#1f2226] text-5xl font-black uppercase mt-2 mb-4 tracking-tight">Layanan & Keunggulan Kami</h2>
                        <img src="https://html.ninetheme.com/oganik/assets/images/shapes/leaf-1-1.png" alt="leaf" className="mx-auto" />
                        <p className="text-[#7e7e7e] max-w-2xl mx-auto mt-6 text-lg font-medium leading-relaxed">
                            Foodies berkomitmen untuk menyediakan bahan pangan organik dan makanan sehat terbaik, yang diambil langsung dari petani lokal untuk diantarkan langsung ke dapur Anda.
                        </p>
                    </div>

                    {/* Grid Content: Tujuan, Layanan, Keunggulan */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                        {/* 1. Tujuan Aplikasi */}
                        <div className="group cursor-pointer">
                            <div className="w-[180px] h-[180px] mx-auto bg-[#f4f4f4] rounded-full flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-[#7fad39]">
                                <FaIcons.FaBullseye className="text-5xl text-[#7fad39] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[#1f2226] text-xl font-bold uppercase transition-colors duration-500 group-hover:text-[#7fad39] mb-3">Tujuan Aplikasi</h3>
                            <p className="text-[#7e7e7e] text-sm leading-relaxed px-4">
                                Mendukung gaya hidup sehat dengan menyediakan akses mudah ke produk pertanian organik berkualitas tinggi.
                            </p>
                        </div>

                        {/* 2. Layanan Utama */}
                        <div className="group cursor-pointer">
                            <div className="w-[180px] h-[180px] mx-auto bg-[#f4f4f4] rounded-full flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-[#7fad39]">
                                <FaIcons.FaTruck className="text-5xl text-[#7fad39] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[#1f2226] text-xl font-bold uppercase transition-colors duration-500 group-hover:text-[#7fad39] mb-3">Layanan Utama</h3>
                            <p className="text-[#7e7e7e] text-sm leading-relaxed px-4">
                                Pengiriman cepat di hari yang sama untuk memastikan kesegaran sayur dan buah tetap terjaga hingga ke tangan Anda.
                            </p>
                        </div>

                        {/* 3. Keunggulan Platform */}
                        <div className="group cursor-pointer">
                            <div className="w-[180px] h-[180px] mx-auto bg-[#f4f4f4] rounded-full flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-[#7fad39]">
                                <FaIcons.FaLeaf className="text-5xl text-[#7fad39] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[#1f2226] text-xl font-bold uppercase transition-colors duration-500 group-hover:text-[#7fad39] mb-3">Keunggulan Platform</h3>
                            <p className="text-[#7e7e7e] text-sm leading-relaxed px-4">
                                Produk 100% alami tanpa bahan kimia berbahaya, tersertifikasi organik, dan mendukung kesejahteraan petani lokal.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- NEW PRODUCTS SECTION (Aturan 4 - Dari JSON Product) --- */}
            <section id="menu" className="py-24 bg-white border-t border-[#f4f4f4]">
                <div className="container mx-auto px-4 max-w-[1200px]">
                    <div className="text-center mb-16">
                        <span className="text-[#7fad39] text-3xl font-cursive">Recently Added</span>
                        <h2 className="text-[#1f2226] text-5xl font-black uppercase mt-2 mb-4 tracking-tight">Menu Favorit</h2>
                        <img src="https://html.ninetheme.com/oganik/assets/images/shapes/leaf-1-1.png" alt="leaf" className="mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Mapping dari DataProduct.json */}
                        {productsData.map((prod, i) => (
                            <div key={i} className="group text-center">
                                <div className="relative overflow-hidden bg-[#f4f4f4] flex items-center justify-center pt-10 pb-6 px-4 mb-6 transition-all duration-500">
                                    <img src={prod.img} alt={prod.nama_produk} className="w-full h-auto object-contain" />
                                    <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 translate-y-full group-hover:-translate-y-6 transition-transform duration-500 z-10">
                                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1f2226] shadow-md hover:bg-[#7fad39] hover:text-white transition-colors duration-300"><FaIcons.FaHeart /></button>
                                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1f2226] shadow-md hover:bg-[#7fad39] hover:text-white transition-colors duration-300"><FaIcons.FaShoppingCart /></button>
                                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1f2226] shadow-md hover:bg-[#7fad39] hover:text-white transition-colors duration-300"><FaIcons.FaSyncAlt /></button>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-[#1f2226] hover:text-[#7fad39] transition-colors cursor-pointer mb-1">{prod.nama_produk}</h3>
                                    <div className="text-[#7fad39] flex justify-center text-xs mb-2">
                                        <FaIcons.FaStar /><FaIcons.FaStar /><FaIcons.FaStar /><FaIcons.FaStar /><FaIcons.FaStar />
                                    </div>
                                    <p className="text-[#7fad39] font-bold text-xl">{prod.harga}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIALS SECTION --- */}
            <section className="py-24 bg-[#f9f8f4]">
                <div className="container mx-auto px-4 max-w-[1200px]">
                    <div className="text-center mb-16">
                        <span className="text-[#7fad39] text-3xl font-cursive">Our Customers</span>
                        <h2 className="text-[#1f2226] text-5xl font-black uppercase mt-2 mb-4 tracking-tight">Review Pelanggan</h2>
                        <img src="https://html.ninetheme.com/oganik/assets/images/shapes/leaf-1-1.png" alt="leaf" className="mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {/* Mengambil 5 data pertama dari DataCustomer.json */}
                        {customersData.slice(0, 5).map((testi) => (
                            <div key={testi.id} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow group">

                                {/* SEKARANG MENGAMBIL DARI JSON: testi.avatar */}
                                <div className="w-20 h-20 mx-auto rounded-full mb-4 border-[3px] border-[#f4f4f4] overflow-hidden group-hover:border-[#7fad39] transition-colors bg-gray-100">
                                    <img
                                        src={testi.avatar}
                                        alt={testi.CustomerName}
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${testi.CustomerName}` }}
                                    />
                                </div>

                                <div className="text-[#7fad39] flex justify-center text-[10px] mb-3">
                                    <FaIcons.FaStar /><FaIcons.FaStar /><FaIcons.FaStar /><FaIcons.FaStar /><FaIcons.FaStar />
                                </div>
                                <h4 className="text-[#1f2226] font-bold uppercase text-sm mb-2">{testi.CustomerName}</h4>
                                <p className="text-[#7e7e7e] text-[13px] italic leading-relaxed">
                                    "{testi.review}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION BANNERS / PROMO SECTION --- */}
            <section id="promo" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-[1200px]">

                    {/* TAMBAHAN TEKS HEADER (Aturan Oganik) */}
                    <div className="text-center mb-12">
                        <span className="text-[#7fad39] text-3xl font-cursive">We’re On Instagram</span>
                        <h2 className="text-[#1f2226] text-5xl font-black uppercase mt-2 tracking-tight">Shop on Instagram</h2>
                        <img src="https://html.ninetheme.com/oganik/assets/images/shapes/leaf-1-1.png" alt="leaf" className="mx-auto mt-4" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Banner 1: Sayuran */}
                        <div className="relative overflow-hidden rounded-[10px] group cursor-pointer h-[250px] md:h-[350px] bg-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop"
                                alt="Fresh Vegetables"
                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 flex flex-col justify-center px-10">
                                <span className="text-white text-2xl font-cursive">Fresh & Organic</span>
                                <h3 className="text-white text-4xl font-black uppercase leading-tight tracking-tighter">
                                    Sayuran <br /> Segar 100%
                                </h3>
                            </div>
                        </div>

                        {/* Banner 2: Buah-buahan */}
                        <div className="relative overflow-hidden rounded-[10px] group cursor-pointer h-[250px] md:h-[350px] bg-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=1000&auto=format&fit=crop"
                                alt="Organic Fruits"
                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 flex flex-col justify-center px-10">
                                <span className="text-white text-2xl font-cursive">Healthy Food</span>
                                <h3 className="text-white text-4xl font-black uppercase leading-tight tracking-tighter">
                                    Koleksi <br /> Buah Organik
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Visitor;