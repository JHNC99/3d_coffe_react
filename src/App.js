

import React, { useEffect } from 'react';
import moveEffect from "./MoveEfect"

import { Header } from './Components/Header';
/* IMPORT IMG  */
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"
import img5 from "./img/img5.png"
import img6 from "./img/img6.png"
import "./style/style.scss";

function App() {

  useEffect(() => {
    moveEffect();
  })
  return (
    < >
      <Header />
      <main className="l-main">

        <section className="home" id="home">
          <div className="home__container bd-grid">
            <div className="home__img fade-in">
              <img
                src={img1}
                alt=""
                data-speed="-2"
                className="move"
              />
              <img
                src={img2}
                alt=""
                data-speed="2"
                className="move"
              />
              <img
                src={img3}
                alt=""
                data-speed="2"
                className="move"
              />
              <img
                src={img4}
                alt=""
                data-speed="-2"
                className="move"
              />
              <img
                src={img5}
                alt=""
                data-speed="-2"
                className="move"
              />
              <img
                src={img6}
                alt=""
                data-speed="2"
                className="move"
              />
            </div>

            <div className="home__data">
              <h1 className="home__title top-animation">
                Coffee<br />
                Drink 3D
              </h1>
              <p className="home__description top-animation">
                Let's help discover the best coffee drink <br />
                of the week.
              </p>
              <button className="home__button top-animation" >Get Started</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
