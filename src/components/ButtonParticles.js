import React from 'react';
import Particles from 'react-particles-js';
import group1 from '../images/Group_189.svg'
import group2 from '../images/Group_189.svg'
 
function ButtonParticles() {
    return (
<Particles
    params={{
        "particles": {
            "number": {
                "value": 8,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "speed": 1,
                "out_mode": "out"
            },
            "shape": {
                "type": [
                    "image"
                ],
                "image": [
                    {
                        "src": group1,
                        "height": 20,
                        "width": 23
                    },
                    {
                        "src": group1,
                        "height": 20,
                        "width": 20
                    },
                    {
                        "src": group2,
                        "height": 20,
                        "width": 20
                    }
                ]
            },
            "color": {
                "value": "#CCC"
            },
            "size": {
                "value": 30,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 10,
                    "sync": false
                }
            }
        },
        "retina_detect": false
    }} />
        );
}
      

export default ButtonParticles;