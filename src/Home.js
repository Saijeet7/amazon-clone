import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image"src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            <div className="home__row">
                <Product id="1" title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover' price={29.99}rating={5} image='https://m.media-amazon.com/images/I/51T-sMqSMiL._AC_SY780_.jpg'/>
                <Product id="2" title='Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50' price={19.99}rating={3} image='https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg'/>
            </div>
            
            <div className="home__row">
                <Product id="3" title='GSM Fitness Hex Dumbbell, 7.5 kgs, Pack of 2, Rubber Coatedo' price={4051.00}rating={3} image='https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg'/>
                <Product id="4" title='Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)' price={9.99}rating={5} image='https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg'/>
                <Product id="5" title='Awestuffs LED Lights for Home Decoration (20 LED Photo Clip 3 Metre String (Warm White))' price={3.99}rating={5} image='https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg'/>
            </div>
            <div className="home__row">
                <Product id="6" title='Natural Life Fda Approved Disinfectant Surface Sanitizer, Citrus 500 Ml (Pack Of 3)' price={12.99}rating={5} image='https://images-na.ssl-images-amazon.com/images/I/61jj-MeJbvL._SL1200_.jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Home
