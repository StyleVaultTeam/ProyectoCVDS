
import React , { useState } from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import '../Slider/Slider.css';
import '../MyCloset/MyCloset.css';
import Slider from '../Slider/Slider.js';
import MyGallery from '../MyGallery/MyGallery.js';
import Camisetas from '../ImagesClothes/camisetas';
import Pantalones from '../ImagesClothes/pantalones.js';
import Gorras from '../ImagesClothes/gorras.js';
import Footer from '../Reusable/Footer.js';
//import { useHistory } from 'react-router-dom'

const gorras = Gorras;
const camisetas = Camisetas;
const pantalones = Pantalones;
const MiRopa = gorras.concat(camisetas, pantalones);

function myCloset() {

  const[activeTab, setActiveTab] = useState("1");

  const cambiarTab = (numeroTab) =>{
      if(activeTab !== numeroTab){
          setActiveTab(numeroTab);
      }
  }

  //const history = useHistory();

  const handleClick = () => {
    <MyGallery arregloImagenes={Gorras} ></MyGallery>
  }

  return (
    <div>
      <div className="myCloset">
        <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </header>
        <body>
          <Nav tabs>
            <NavItem>
              <NavLink className={(activeTab === "1" ? "activeTabs baseTabs" : "baseTabs")} onClick={() => cambiarTab("1")}>
                Mi armario
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className={(activeTab === "2" ? "activeTabs baseTabs" : "baseTabs")} onClick={() => cambiarTab("2")}>
                Mi ropa
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div>
                <h1>Mi armario</h1>
                <MyGallery arregloImagenes={Gorras} ></MyGallery>
                <MyGallery arregloImagenes={Camisetas} ></MyGallery>
                <MyGallery arregloImagenes={Pantalones} ></MyGallery>
                {/* Commented by JParroquiano
                <Slider arregloImagenes={Gorras} />
                <Slider arregloImagenes={Camisetas} />
                <Slider arregloImagenes={Pantalones} />*/}
              </div>
            </TabPane>

            <TabPane tabId="2">
              <div className='row'>
                {MiRopa.map((myImage, index) => (
                  <div 
                    className='col-md-2 p-1 card-image' 
                    onClick={handleClick} 
                    key={index}
                    >
                    <img src={myImage} alt="slide_image" className='img-fluid h-100 w-100' />
                  </div>                 
                ))}

              </div>
            </TabPane>
          </TabContent>
        </body>
      </div>
      <Footer />
    </div>
  );
};

export default myCloset;