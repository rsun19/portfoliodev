import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment, OrbitControls } from '@react-three/drei';
import Home from './Home';

const Beginning = () => {
    const [click, setClick] = useState(false);
    const startAnimation = ()  => {
        const portfolioButton = document.getElementById('portfolioButton');
        setClick(true);
        if (portfolioButton) {
            portfolioButton.style.display = 'none';
        }
    }

    let isMidToggled = false;

    const [finishAnimation, setFinishAnimation] = useState(false);

    const finishAnimationChange = (change: boolean) => {
      setFinishAnimation(change);
    }

    const finishMidFunc = () => {
      if (!isMidToggled){
        const page = document.getElementById('home-page');
        if (page) {
          console.log("found")
          page.classList.toggle('show');
          console.log(page.classList);
          isMidToggled = true;
        }
      }
    }   

    return (
      <div>
        {/* <div style={{ zIndex: '5', background: "#D3D3D3" }}>
          <Home />
        </div>
        {!finishAnimation && <div style={{ margin: '0px', padding: '0px'}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button id='portfolioButton' style={{ position: 'absolute', backgroundColor: 'lightgray', cursor: 'pointer', zIndex: '1'}} onClick={startAnimation}>
                <p style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>View Portfolio Page!</p>
            </button>
          <div style={{ height: '100vh', width: '100vw', margin: '0px', padding: '0px'}}>
            <Canvas>
                <Environment files="./portfoliodev/farm_field_puresky_1k.hdr" background/>
                {click && <Suspense fallback={null}>
                    <Model onAnimationFinish={finishAnimationChange} onMidwayFinish={finishMidFunc} start={click}/>
                    <OrbitControls />
                </Suspense>}
            </Canvas>
          </div>
          </div>
        </div>} */}
        <Home />
      </div>
      );
};

export default Beginning;