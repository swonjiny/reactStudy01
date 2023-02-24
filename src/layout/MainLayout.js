import React from "react"
import MainHeader from "../components/common/MainHeader";
import MenuBar from "../components/common/MenuBar";
import Footer from "../components/common/Footer";

function MainLayout({children}) {
    return (
        <div align="center">
            <MainHeader/>
            <MenuBar/>
            {children}
            <Footer/>
        </div>
    )
}

export default MainLayout