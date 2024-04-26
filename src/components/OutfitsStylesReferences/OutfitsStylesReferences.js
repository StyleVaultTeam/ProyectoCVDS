
import '../OutfitsStylesReferences/OutfitsStylesReferences.css';
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import React , { useState } from 'react';
import imagen1 from '../OutfitsStylesReferences/muro2.jpg';
import classic1 from '../OutfitsStylesReferences/Classic1.jpg';
import classic2 from '../OutfitsStylesReferences/Classic2.jpg';
import classic3 from '../OutfitsStylesReferences/Classic3.jpg';
import rock1 from '../OutfitsStylesReferences/Rock1.png';
import rock2 from '../OutfitsStylesReferences/Rock2.png';
import rock3 from '../OutfitsStylesReferences/Rock3.png';
import Slider from '../Slider/Slider.js';
import Gorras from '../ImagesClothes/gorras.js';

function OutfitsStylesReferences (){

    const[activeTab, setActiveTab] = useState("0");

    const cambiarTab = (numeroTab) =>{
        if(activeTab !== numeroTab){
            setActiveTab(numeroTab);
        }
    } 

    return (
      <div className='OutfitsStylesReferences'>

          <body className='outfitBody'>


              <Nav tabs>
                <NavItem>
                    <NavLink className={(activeTab=="1" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("1")}>
                        Rock
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(activeTab=="2" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("2")}>
                        Classic
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(activeTab=="3" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("3")}>
                        Punk
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(activeTab=="4" ? "activeTab baseTab" : "baseTab")} onClick={()=>cambiarTab("4")}>
                        Hupper
                    </NavLink>
                </NavItem>
              </Nav>

                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <div class="container">
                            <span class="slider" id="slider1"></span>
                            <span class="slider" id="slider2"></span>
                            <span class="slider" id="slider3"></span>

                            <div class="imgContainer">

                                <div class="slide_div" id="slide_1">
                                    <img src={rock1} alt="" class="outfitImg" id="img1" />
                                    <a href="#slider1" class="button" id="button1"></a>
                                </div>
                                <div class="slide_div" id="slide_2">
                                    <img src={rock2} alt="" class="outfitImg" id="img2" />
                                    <a href="#slider2" class="button" id="button2"></a>
                                </div>
                                <div class="slide_div" id="slide_3">
                                    <img src={rock3} alt="" class="outfitImg" id="img3" />
                                    <a href="#slider3" class="button" id="button3"></a>
                                </div>

                            </div>

                        </div>
                    </TabPane>

                    <TabPane tabId="2">
                        <div class="container">
                            <span class="slider" id="slider4"></span>
                            <span class="slider" id="slider5"></span>
                            <span class="slider" id="slider6"></span>

                            <div class="imgContainer">

                                <div class="slide_div" id="slide_4">
                                    <img src={classic1} alt="" class="outfitImg" id="img4" />
                                    <a href="#slider4" class="button" id="button4"></a>
                                </div>
                                <div class="slide_div" id="slide_5">
                                    <img src={classic2} alt="" class="outfitImg" id="img5" />
                                    <a href="#slider5" class="button" id="button5"></a>
                                </div>
                                <div class="slide_div" id="slide_6">
                                    <img src={classic3} alt="" class="outfitImg" id="img6" />
                                    <a href="#slider6" class="button" id="button6"></a>
                                </div>

                            </div>

                        </div>
                    </TabPane>

                <TabPane tabId="3">
                    <div className='container'>
                        <br />
                        <p>parrafo de Punk</p>
                    </div>
                </TabPane>

                <TabPane tabId="4">
                    <div className='container'>
                        <br />
                        <p>parrafo de Hupper</p>
                    </div>
                </TabPane>
            </TabContent>
   
          </body>
      </div>
    );
};

export default OutfitsStylesReferences;