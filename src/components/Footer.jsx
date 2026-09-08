import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full font-sans select-none">
      {/* Full-Width Outer Container with Rounded Top Only */}
      <div className="w-full rounded-t-3xl sm:rounded-t-[2.5rem] bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 text-white overflow-hidden shadow-2xl">
        {/* Subtle Geometric Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Main Links & Info Grid */}
        <div className="relative z-10 max-w-410 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 sm:p-12 lg:p-16">
          {/* Column 1: Logo & About */}
          <div className="space-y-5">
            {/* Logo Placeholder Box */}
            <div className="bg-white text-orange-600 font-black text-lg px-6 py-2.5 rounded-xl inline-block shadow-sm tracking-wider">
              LOGO
            </div>

            <p className="text-orange-100/90 text-xs sm:text-sm leading-relaxed pr-2">
              SMM is Bangladesh's most trusted SMM panel. We offer fast,
              affordable social media growth services for every platform, with
              full support for local payments like bKash and Nagad.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaYoutube, href: "#" },
                { icon: FaXTwitter, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="w-9 h-9 rounded-xl bg-orange-700/40 hover:bg-orange-700/80 border border-orange-400/30 flex items-center justify-center text-white transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-orange-100/80">
              {[
                "Home",
                "About Us",
                "Services",
                "Blog",
                "Contact Us",
                "Terms of Service",
                "Privacy Policy",
                "Refund Policy",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-150 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Pages */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide">
              Services Pages
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-orange-100/80">
              {[
                "Facebook SMM Panel",
                "Instagram SMM Panel",
                "YouTube SMM Panel",
                "TikTok SMM Panel",
                "Telegram SMM Panel",
                "X-Twitter SMM Panel",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-150 block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide">
              Contact Info
            </h3>
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-700/40 border border-orange-400/30 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-orange-200" />
                </div>
                <a
                  href="mailto:info@smmsun.com"
                  className="text-xs sm:text-sm text-orange-100/90 hover:text-white transition-colors"
                >
                  info@smmsun.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-700/40 border border-orange-400/30 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-orange-200" />
                </div>
                <a
                  href="tel:+1833252278"
                  className="text-xs sm:text-sm text-orange-100/90 hover:text-white transition-colors"
                >
                  +1 833 252 278
                </a>
              </div>

              {/* Address / Support */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-700/40 border border-orange-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-orange-200" />
                </div>
                <div className="text-xs sm:text-sm text-orange-100/90 leading-tight">
                  <p>Serving all of Bangladesh</p>
                  <p className="text-orange-200/80 text-[11px] mt-1">
                    Support: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="relative z-10 bg-amber-950/60 backdrop-blur-md py-4 px-6 text-center border-t border-orange-500/20">
          <p className="text-[11px] sm:text-xs text-orange-100/70 font-medium">
            © 2026 SMM Limited. All Rights Reserved.{" "}
            <span className="mx-1">|</span> Operated under the Bangladesh ICT
            framework.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
