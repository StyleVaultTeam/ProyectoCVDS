
import '../OutfitsStylesReferences/OutfitsStylesReferences.css';
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import React , { useState } from 'react';
import classic1 from '../OutfitsStylesReferences/Classic1.jpg';
import classic2 from '../OutfitsStylesReferences/Classic2.jpg';
import classic3 from '../OutfitsStylesReferences/Classic3.jpg';
import rock1 from '../OutfitsStylesReferences/Rock1.png';
import rock2 from '../OutfitsStylesReferences/Rock2.png';
import rock3 from '../OutfitsStylesReferences/Rock3.png';
import punk1 from '../OutfitsStylesReferences/punk1.jpeg';
import punk2 from '../OutfitsStylesReferences/punk2.jpg';
import punk3 from '../OutfitsStylesReferences/punk3.jpg';
import oversize1 from '../OutfitsStylesReferences/oversize1.jpg';
import oversize2 from '../OutfitsStylesReferences/oversize2.jpg';
import oversize3 from '../OutfitsStylesReferences/oversize3.jpg';
import oficina1 from '../OutfitsStylesReferences/oficina1.jpg';
import oficina2 from '../OutfitsStylesReferences/oficina2.jpg';
import oficina3 from '../OutfitsStylesReferences/oficina3.jpg';
import matrimonio1 from '../OutfitsStylesReferences/matrimonio.jpg';
import matrimonio2 from '../OutfitsStylesReferences/matrimonio2.jpg';
import matrimonio3 from '../OutfitsStylesReferences/matrimoni3.jpg';
import Sport1 from '../OutfitsStylesReferences/sport1.png';
import Sport2 from '../OutfitsStylesReferences/sport2.png';
import Sport3 from '../OutfitsStylesReferences/sport3.jpg';
import Funeral1 from '../OutfitsStylesReferences/funeral1.jpg';
import Funeral2 from '../OutfitsStylesReferences/funeral2.jpg';
import Funeral3 from '../OutfitsStylesReferences/funeral3.jpg';
import Footer from '../Reusable/Footer.js';

function OutfitsStylesReferences (){

    const[activeTab, setActiveTab] = useState("1");

    const cambiarTab = (numeroTab) =>{
        if(activeTab !== numeroTab){
            setActiveTab(numeroTab);
        }
    } 

    return (
    <div>
      <div className='OutfitsStylesReferences'>
          <body className='outfitBody'>
              <Nav tabs>
                <NavItem>
                    <NavLink className={(activeTab==="1" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("1")}>
                        Rock
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(activeTab==="2" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("2")}>
                        Classic
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(activeTab==="3" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("3")}>
                        Punk
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(activeTab==="4" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("4")}>
                        Oversize
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(activeTab==="5" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("5")}>
                        Oficina
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(activeTab==="6" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("6")}>
                        Matrimonio
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(activeTab==="7" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("7")}>
                        Sport
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(activeTab==="8" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("8")}>
                        Funeral
                    </NavLink>
                </NavItem>
              </Nav>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="8">
                            <div className="outfitContainer">
                                <span className="slider" id="slider22"></span>
                                <span className="slider" id="slider23"></span>
                                <span className="slider" id="slider24"></span>

                                <div className="imgContainer">
                                    <div className="slide_div" id="slide_22">
                                        <img src={Funeral1} alt="" className="outfitImg" id="img22" />
                                        <a href="#slider22" className="button" id="button22"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_23">
                                        <img src={Funeral2} alt="" className="outfitImg" id="img23" />
                                        <a href="#slider23" className="button" id="button23"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_24">
                                        <img src={Funeral3} alt="" className="outfitImg" id="img24" />
                                        <a href="#slider24" className="button" id="button24"></a>
                                    </div>
                                    <div className="card-bodyRef">
                                        <a href="https://acortar.link/hxBkVS" className="btn btn-primary">Ver mas</a>
                                    </div>
                                </div>

                            </div>
                        </TabPane>

                        <TabPane tabId="7">
                            <div className="outfitContainer">
                                <span className="slider" id="slider19"></span>
                                <span className="slider" id="slider20"></span>
                                <span className="slider" id="slider21"></span>

                                <div className="imgContainer">
                                    <div className="slide_div" id="slide_19">
                                        <img src={Sport1} alt="" className="outfitImg" id="img19" />
                                        <a href="#slider19" className="button" id="button19"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_20">
                                        <img src={Sport2} alt="" className="outfitImg" id="img20" />
                                        <a href="#slider20" className="button" id="button20"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_21">
                                        <img src={Sport3} alt="" className="outfitImg" id="img21" />
                                        <a href="#slider21" className="button" id="button21"> </a>
                                    </div>
                                    <div className="card-bodyRef">
                                        <a href="https://co.pinterest.com/pin/744993963372368304/" className="btn btn-primary">Ver mas</a>
                                    </div>
                                </div>

                            </div>
                        </TabPane>

                        <TabPane tabId="6">
                            <div className="outfitContainer">
                                <span className="slider" id="slider16"></span>
                                <span className="slider" id="slider17"></span>
                                <span className="slider" id="slider18"></span>

                                <div className="imgContainer">
                                    <div className="slide_div" id="slide_16">
                                        <img src={matrimonio1} alt="" className="outfitImg" id="img16" />
                                        <a href="#slider16" className="button" id="button16"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_17">
                                        <img src={matrimonio2} alt="" className="outfitImg" id="img17" />
                                        <a href="#slider17" className="button" id="button17"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_18">
                                        <img src={matrimonio3} alt="" className="outfitImg" id="img18" />
                                        <a href="#slider18" className="button" id="button18"> </a>
                                    </div>
                                    <div className="card-bodyRef">
                                        <a href="https://co.pinterest.com/search/pins/?q=outfit%20matrimonio&rs=typed" className="btn btn-primary">Ver mas</a>
                                    </div>
                                </div>

                            </div>
                        </TabPane>

                        <TabPane tabId="5">
                            <div className="outfitContainer">
                                <span className="slider" id="slider13"></span>
                                <span className="slider" id="slider14"></span>
                                <span className="slider" id="slider15"></span>

                                <div className="imgContainer">
                                    <div className="slide_div" id="slide_13">
                                        <img src={oficina1} alt="" className="outfitImg" id="img13" />
                                        <a href="#slider13" className="button" id="button13"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_14">
                                        <img src={oficina2} alt="" className="outfitImg" id="img14" />
                                        <a href="#slider14" className="button" id="button14"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_15">
                                        <img src={oficina3} alt="" className="outfitImg" id="img15" />
                                        <a href="#slider15" className="button" id="button15"> </a>
                                    </div>
                                    <div className="card-bodyRef">
                                        <a href="https://co.pinterest.com/search/pins/?q=outfit%20oficina&rs=typed" className="btn btn-primary">Ver mas</a>
                                    </div>
                                </div>

                            </div>
                        </TabPane>

                        <TabPane tabId="1">
                            <div className="outfitContainer">
                                <span className="slider" id="slider1"></span>
                                <span className="slider" id="slider2"></span>
                                <span className="slider" id="slider3"></span>

                                <div className="imgContainer">
                                    <div className="slide_div" id="slide_1">
                                        <img src={rock1} alt="" className="outfitImg" id="img1" />
                                        <a href="#slider1" className="button" id="button1"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_2">
                                        <img src={rock2} alt="" className="outfitImg" id="img2" />
                                        <a href="#slider2" className="button" id="button2"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_3">
                                        <img src={rock3} alt="" className="outfitImg" id="img3" />
                                        <a href="#slider3" className="button" id="button3"> </a>
                                    </div>
                                </div>
                            </div>
                        </TabPane>

                        <TabPane tabId="2">
                            <div className="outfitContainer">
                                <span className="slider" id="slider4"></span>
                                <span className="slider" id="slider5"></span>
                                <span className="slider" id="slider6"></span>

                                <div className="imgContainer">
                                    <div className="slide_div" id="slide_4">
                                        <img src={classic1} alt="" className="outfitImg" id="img4" />
                                        <a href="#slider4" className="button" id="button4"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_5">
                                        <img src={classic2} alt="" className="outfitImg" id="img5" />
                                        <a href="#slider5" className="button" id="button5"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_6">
                                        <img src={classic3} alt="" className="outfitImg" id="img6" />
                                        <a href="#slider6" className="button" id="button6"> </a>
                                    </div>
                                </div>

                            </div>
                        </TabPane>

                        <TabPane tabId="3">
                            <div className='outfitContainer'>
                                <span className="slider" id="slider7"></span>
                                <span className="slider" id="slider8"></span>
                                <span className="slider" id="slider9"></span>

                                <div className="imgContainer">
                                    <div className="slide_div" id="slide_7">
                                        <img src={punk1} alt="" className="outfitImg" id="img7" />
                                        <a href="#slider7" className="button" id="button7"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_8">
                                        <img src={punk2} alt="" className="outfitImg" id="img8" />
                                        <a href="#slider8" className="button" id="button8"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_9">
                                        <img src={punk3} alt="" className="outfitImg" id="img9" />
                                        <a href="#slider9" className="button" id="button9"> </a>
                                    </div>
                                </div>
                            </div>
                        </TabPane>

                        <TabPane tabId="4">
                            <div className='outfitContainer'>
                                <span className="slider" id="slider10"></span>
                                <span className="slider" id="slider11"></span>
                                <span className="slider" id="slider12"></span>

                                <div className="imgContainer">
                                    <div className="slide_div" id="slide_10">
                                        <img src={oversize1} alt="" className="outfitImg" id="img10" />
                                        <a href="#slider10" className="button" id="button10"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_11">
                                        <img src={oversize2} alt="" className="outfitImg" id="img11" />
                                        <a href="#slider11" className="button" id="button11"> </a>
                                    </div>
                                    <div className="slide_div" id="slide_12">
                                        <img src={oversize3} alt="" className="outfitImg" id="img12" />
                                        <a href="#slider12" className="button" id="button12"> </a>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
          </body>
      </div>
      <Footer />
    </div>
    );
};

export default OutfitsStylesReferences;