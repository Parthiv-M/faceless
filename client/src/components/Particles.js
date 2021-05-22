import Particles from 'react-particles-js';
 
const ParticlesYellow = (props) => {
    return (
        <Particles 
            params={{
                "particles": {
                    "number": {
                      "value": props.value,
                      "density": {
                        "enable": true,
                        "value_area": 900
                      }
                    },
                    "color": {
                      "value": props.dotColour
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": props.dotColour
                      },
                      "polygon": {
                        "nb_sides": 5
                      },
                    },
                    "opacity": {
                      "value": 0.5,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 4.008530152163807,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 150,
                      "color": props.lineColor,
                      "opacity": 0.2966312312601217,
                      "width": 1.2827296486924182
                    },
                    "move": {
                      "enable": true,
                      "speed": 0.3,
                      "direction": "none",
                      "random": true,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "window",
                    "events": {
                      "onhover": {
                        "enable": false,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 1
                      },
                      "remove": {
                        "particles_nb": 1
                      }
                    }
                  },
            }} />
    );
}

export default ParticlesYellow;