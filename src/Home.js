import React from "react";
import Logo from "./asserts/logo.png";
import AwardPic from "./asserts/1.png";
import AwardPic2 from "./asserts/2.png";
import AwardPic3 from "./asserts/3.png";
import { IoIosCall } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import "./Home.css";
const Home = () => {
  return (
    <section className="container">
      <div className="c-div">
        <div className="top">
          <img src={Logo} alt={Logo} className="top-logo" />
        </div>
        <div className="middle">
          <div className="m-left">
            <img src={AwardPic} alt={AwardPic} className="m-l-img" />
          </div>
          <div className="m-right">
            <div className="m-r-top">
              <h4>
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </h4>
              <div>
             
                <ul>
                <li>
                  C.R.I.'s energy efficient products are well
                  recognized by various Government Institutions, as trustworthy
                  products for various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
                </ul>
              </div>
            </div>
            <div className="m-r-middle">
              <img src={AwardPic2} alt={AwardPic} className="m-r-m-img" />
            </div>
            <div className="m-r-bottom">
              <p>
                Government of India has awarded the{" "}
                <span style={{ fontWeight: "bold" }}>
                  "National Energy Conservation Award 2018"
                </span>
                . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
                received the award from Smt. Sumitra Mahajan, Speaker of Lok
                Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
              </p>
            </div>
          </div>
        </div>
        <div className="middle2">
          <h4>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </h4>
          <img src={AwardPic3} alt={AwardPic3} />
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </p>
        </div>
        <div className="border"></div>
        <div className="middle3">
          <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          <p>
            CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA
            SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING
            FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE
            FIGHTING AGRICULTURE & RESIDENTIAL
          </p>
        </div>
        <div className="bottom">
          <div>
            <span>
              <IoIosCall />
            </span>
            <span>Toll free 1800 200 1234</span>
          </div>
          <div>
            <span>
              <TiSocialFacebook />
            </span>
            <span>www.facebook.com/cripumps</span>
          </div>
          <div>
            <TbWorld className="icon" />
            <span>www.crigroups.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
