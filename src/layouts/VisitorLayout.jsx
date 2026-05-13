import React from "react";
import { Outlet, Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const VisitorLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-[#7e7e7e]">
      {/* --- TOPBAR 1 (Static) --- */}
      <div className="bg-white border-b border-[#f1f1f1]">
        <div className="container mx-auto px-4 h-[100px] flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#1f2226]">
            <a href="#" className="hover:text-[#7fad39] transition-colors text-lg"><FaIcons.FaInstagram /></a>
            <div className="h-4 border-r border-gray-300"></div>
            <a href="#" className="hover:text-[#7fad39] transition-colors text-lg"><FaIcons.FaTwitter /></a>
            <div className="h-4 border-r border-gray-300"></div>
            <a href="#" className="hover:text-[#7fad39] transition-colors text-lg"><FaIcons.FaFacebookF /></a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-[#1f2226]">
              <FaIcons.FaEnvelope className="text-[#7fad39] text-base" />
              <span className="hidden md:inline font-medium">info@foodies.com</span>
            </div>
            <div className="h-4 border-r border-gray-300 hidden md:block"></div>
            <Link to="/visitor" className="text-3xl font-black text-[#1f2226] tracking-tighter mx-4">
              FOOD<span className="text-[#7fad39]">IES</span>
            </Link>
            <div className="h-4 border-r border-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-2 text-sm text-[#1f2226]">
              <FaIcons.FaPhoneAlt className="text-[#7fad39] text-sm" />
              <span className="hidden md:inline font-medium">92 666 888 0000</span>
            </div>
          </div>

          <div className="flex items-center gap-5 pl-6">
            <button className="text-[#1f2226] text-xl hover:text-[#7fad39] transition-colors"><FaIcons.FaSearch /></button>
            <div className="h-4 border-r border-gray-300"></div>
            <button className="text-[#1f2226] text-xl hover:text-[#7fad39] transition-colors relative">
              <FaIcons.FaShoppingBasket />
              <span className="absolute -top-2 -right-2 bg-[#7fad39] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-white">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- TOPBAR 2 (Sticky) - Aturan 1 Terpenuhi --- */}
      <header className="sticky top-0 z-50 bg-[#f4f4f4] text-[#757a7b] shadow-md">
        <div className="container mx-auto px-4 h-[50px] flex items-center justify-between">
          
          {/* BAGIAN KIRI: Sign In & Sign Up */}
          <div className="flex gap-4 text-[11px] font-bold uppercase tracking-widest text-[#1f2226] w-[150px]">
            <Link to="/login" className="hover:text-[#7fad39] transition-colors">Sign In</Link>
            <span className="text-gray-300">|</span>
            <Link to="/register" className="hover:text-[#7fad39] transition-colors">Sign Up</Link>
          </div>

          {/* BAGIAN TENGAH: Menu Navigasi UTS */}
          <nav className="flex gap-10 text-[11px] font-semibold uppercase tracking-[2px]">
            <Link to="/visitor" className="hover:text-[#7fad39] transition-colors">Home</Link>
            <a href="#menu" className="hover:text-[#7fad39] transition-colors">Menu</a>
            <a href="#promo" className="hover:text-[#7fad39] transition-colors">Promo</a>
            <a href="#about" className="hover:text-[#7fad39] transition-colors">Tentang</a>
            <a href="#contact" className="hover:text-[#7fad39] transition-colors">Kontak</a>
          </nav>

          {/* Spacer untuk menjaga menu tetap di tengah */}
          <div className="w-[150px] hidden md:block"></div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* --- FOOTER (Aturan 6 Terpenuhi) --- */}
      <footer id="contact" className="bg-[#1f2226] pt-20 pb-10 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-gray-700">
            <div className="text-sm">
              <h3 className="text-white text-2xl font-black mb-8 italic tracking-tighter">FOOD<span className="text-[#7fad39]">IES</span></h3>
              <ul className="text-[#b2b2b2] space-y-4">
                <li>Address: 60-49 Road 11354 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: hello@foodies.com</li>
              </ul>
            </div>
            <div className="text-sm">
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Useful Links</h4>
              <div className="flex gap-16">
                <ul className="text-[#b2b2b2] space-y-4">
                  <li><a href="#" className="hover:text-[#7fad39]">About Us</a></li>
                  <li><a href="#" className="hover:text-[#7fad39]">Secure Shopping</a></li>
                </ul>
                <ul className="text-[#b2b2b2] space-y-4">
                  <li><a href="#" className="hover:text-[#7fad39]">Our Services</a></li>
                  <li><a href="#" className="hover:text-[#7fad39]">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="text-sm">
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Join Our Newsletter Now</h4>
              <p className="text-[#b2b2b2] mb-6">Get E-mail updates about our latest shop.</p>
              <form className="relative flex h-[45px]">
                <input type="email" placeholder="Enter your mail" className="w-full bg-white px-5 text-sm focus:outline-none" />
                <button className="bg-[#7fad39] text-white px-6 font-bold uppercase text-[11px] tracking-widest h-full hover:bg-[#6d9630] transition-colors">Subscribe</button>
              </form>
              <div className="flex gap-4 mt-8 text-white">
                <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#7fad39] hover:border-[#7fad39] cursor-pointer"><FaIcons.FaFacebookF /></div>
                <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#7fad39] hover:border-[#7fad39] cursor-pointer"><FaIcons.FaInstagram /></div>
                <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#7fad39] hover:border-[#7fad39] cursor-pointer"><FaIcons.FaTwitter /></div>
              </div>
            </div>
          </div>
          <div className="pt-8 text-[#b2b2b2] text-[13px] text-center">
            <p>Copyright ©2024 All rights reserved | Foodies</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisitorLayout;