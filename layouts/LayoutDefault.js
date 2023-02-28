import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Banner from "../components/layout/partials/Banner";
import WhatsApp from "../components/elements/Whatsapp.js";

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">{children}
    <WhatsApp />
    </main>
  </>
);

export default LayoutDefault;
