import React, { useState } from "react";
import Navigationitems from "./navigationItems/navigationItems";
import "./navigationItem.css";


const NavigationItem=(props)=>{
    const [path, setpath] = useState();

    const pathhandller =(e)=>{
            setpath(e);
    }

    return(
        <div className="nav-box">
            <div className="nav-target">
            <ul className="nav-ul">
               <Navigationitems setpath={pathhandller} path={path} link="/"
                img="https://img.icons8.com/ios/50/000000/home.png" 
                >Dashboard</Navigationitems>
            </ul>
            <ul className="nav-ul">
               <Navigationitems setpath={pathhandller} path={path} link="/inbox"
                img="https://img.icons8.com/metro/26/000000/box.png" 
                label="Application">inbox</Navigationitems>
            </ul>
            <ul className="nav-ul">
                <Navigationitems setpath={pathhandller} path={path} link="/newSupplier"
                 img="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000
                /external-Plus-add-and-remove-simple-solid-edt.graphics.png" 
                label="Supplier">New Supplier</Navigationitems>
                <Navigationitems setpath={pathhandller} path={path} link="/Suppliers"
                 img="https://img.icons8.com/metro/26/000000/box.png" 
                > Suppliers</Navigationitems>
                <Navigationitems setpath={pathhandller} path={path} link="/Inventory"
                 img="https://img.icons8.com/fluency-systems-filled/48/000000/circled-i.png" 
                >Inventory</Navigationitems>
                <Navigationitems setpath={pathhandller} path={path} link="/3DTeam"
                 img="https://img.icons8.com/metro/26/000000/box.png" 
                >3D Team </Navigationitems>
                <Navigationitems setpath={pathhandller} path={path} link="/Products"
                 img="https://img.icons8.com/metro/26/000000/rocket.png"
                > Products </Navigationitems>
            </ul>
            <ul className="nav-ul">
               <Navigationitems setpath={pathhandller} path={path} link="/NewServiceProvider"
                img="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000
                /external-Plus-add-and-remove-simple-solid-edt.graphics.png" 
                label="Service Providers">New Service Provider</Navigationitems>
                <Navigationitems setpath={pathhandller} path={path} link="/ServiceProviders"
                 img="https://img.icons8.com/metro/26/000000/box.png"
                > Service Providers</Navigationitems>
                <Navigationitems setpath={pathhandller} path={path} link="/Services"
                 img="https://img.icons8.com/material-sharp/24/000000/support--v1.png" 
                >Services</Navigationitems>
            </ul>
            <ul className="nav-ul">
               <Navigationitems setpath={pathhandller} path={path} link="/HR"
                img="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/000000/
               external-letter-mailing-smashingstocks-glyph-smashing-stocks-2.png" 
               label="HR" >HR</Navigationitems>
            </ul>
            </div>
        </div>
    )
}

export default NavigationItem;