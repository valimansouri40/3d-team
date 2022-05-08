import React from "react";
import './Layout.css';
import Header from "../header/header";
import NavigationItem from "../navigationItem/navigationItem";

const Layout = (props)=>{


    return(
        <section className="all">
            <Header/>
            <div className="layout">
                    <NavigationItem></NavigationItem>
                    <div className="page">
                       {props.children}
                    </div>
            </div>

        </section>
    )
}

export default Layout;