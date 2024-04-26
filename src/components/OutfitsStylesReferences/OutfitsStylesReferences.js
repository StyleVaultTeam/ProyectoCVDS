
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
                                    <a href="#slider1" class="button" id="button1"> </a>
                                </div>
                                <div class="slide_div" id="slide_2">
                                    <img src={rock2} alt="" class="outfitImg" id="img2" />
                                    <a href="#slider2" class="button" id="button2"> </a>
                                </div>
                                <div class="slide_div" id="slide_3">
                                    <img src={rock3} alt="" class="outfitImg" id="img3" />
                                    <a href="#slider3" class="button" id="button3"> </a>
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
                                    <a href="#slider4" class="button" id="button4"> </a>
                                </div>
                                <div class="slide_div" id="slide_5">
                                    <img src={classic2} alt="" class="outfitImg" id="img5" />
                                    <a href="#slider5" class="button" id="button5"> </a>
                                </div>
                                <div class="slide_div" id="slide_6">
                                    <img src={classic3} alt="" class="outfitImg" id="img6" />
                                    <a href="#slider6" class="button" id="button6"> </a>
                                </div>

                            </div>

                        </div>
                    </TabPane>

                <TabPane tabId="3">
                    <div className='container'>
                        <span class="slider" id="slider7"></span>
                        <span class="slider" id="slider8"></span>
                        <span class="slider" id="slider9"></span>

                        <div class="imgContainer">

                            <div class="slide_div" id="slide_7">
                                    <img src={punk1} alt="" class="outfitImg" id="img7" />
                                    <a href="#slider7" class="button" id="button7"> </a>
                                </div>
                                <div class="slide_div" id="slide_8">
                                    <img src={punk2} alt="" class="outfitImg" id="img8" />
                                    <a href="#slider8" class="button" id="button8"> </a>
                                </div>
                                <div class="slide_div" id="slide_9">
                                    <img src={punk3} alt="" class="outfitImg" id="img9" />
                                    <a href="#slider9" class="button" id="button9"> </a>
                                </div>
                            </div>
                    </div>
                </TabPane>

                <TabPane tabId="4">
                    <div className='container'>
                    <span class="slider" id="slider10"></span>
                        <span class="slider" id="slider11"></span>
                        <span class="slider" id="slider12"></span>

                        <div class="imgContainer">

                            <div class="slide_div" id="slide_10">
                                    <img src={oversize1} alt="" class="outfitImg" id="img10" />
                                    <a href="#slider10" class="button" id="button10"> </a>
                                </div>
                                <div class="slide_div" id="slide_11">
                                    <img src={oversize2} alt="" class="outfitImg" id="img11" />
                                    <a href="#slider11" class="button" id="button11"> </a>
                                </div>
                                <div class="slide_div" id="slide_12">
                                    <img src={oversize3} alt="" class="outfitImg" id="img12" />
                                    <a href="#slider12" class="button" id="button12"> </a>
                                </div>
                            </div>
                    </div>
                </TabPane>
            </TabContent>
   
          </body>
      </div>
    );
};

export default OutfitsStylesReferences;