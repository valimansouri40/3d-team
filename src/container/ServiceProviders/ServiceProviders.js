import React, { useState } from "react";
import Layout from "../../component/Layout/Layout";
import  "./ServiceProviders.css"


const ServiceProviders=(props)=>{
    const [num, setnum]=useState(1)
    return(
        <Layout>
                <div className="sp-target">
                    <div className="ts-head">
                        <h2 className="ts-head-h2">SERVICES PROVIDERS LIST</h2>
                        <input type='text'  className="sp-input" placeholder="Enter Service Provider ID or Name"/>
                    </div>

                        <table width="110%" >
                                    <tr className="sp-tr">
                                    <td className="sp-td">#</td>
                                    <td className="sp-td">Service Provider</td>
                                    <td className="sp-td"> ID</td>
                                        <td className="sp-td">Person In Change</td>
                                        <td className="sp-td">Main Trade </td>
                                        <td className="sp-td">Trade</td>
                                    <td className="sp-td">Sub Trade</td>
                                    <td className="sp-td">Type Of Work</td>
                                    <td className="sp-td">Type Of Finishes</td>
                                        <td className="sp-td">Status</td>
                                    </tr>
                                    <tr className="sp-tr">
                                    <td className="sp-td"> 1</td>
                                    <td className="sp-td"> NIPPON PAINT</td>
                                    <td className="sp-td">SER100001614</td>
                                        <td className="sp-td">JANICE</td>
                                        <td className="sp-td">WINDOW,SNAITARY WARES, FITTINGS
                                        AND ACCESSORIES ELECTRICAL FITTINGS</td>
                                    <td className="sp-td">Finishes</td>
                                    <td className="sp-td">Csement Window,
                                    Water Closer,LED Downlight</td>
                                    <td className="sp-td"></td>
                                    <td className="sp-td"></td>
                                        <td className="sp-td">
                                            <button className="sp-btn">APPROACH</button>
                                        </td>
                                        
                                    </tr>
                        </table>
                        <div className="sp-utils">
                            <div className="sp-change-nm">
                            <span className="sp-less" onClick={()=>setnum(e=>e - 1)}>{"<"}</span>
                            <span className="sp-less" >{num}</span>

                                <span className="sp-add" onClick={()=>setnum(e=>e + 1)}>{">"}</span>
                                <span className="sp-go"> Go To</span>
                                <span className="sp-1">1</span>
                                <select className="sp-select">
                                    <option>10/page</option>
                                </select>
                                <span className="sp-go">Total 1</span>
                            </div>
                        </div>
                </div>
        </Layout>
    )
}

export default ServiceProviders;