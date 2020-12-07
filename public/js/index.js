/* Particles Loading */
let backgroundParticles, downParticles;

function generateParticles() {
  const SCREEN_AVERAGE = (window.innerHeight + window.innerWidth) / 2;
  
  const backgroundParticleOptions = {
    "fpsLimit": 60,
    "particles": {
        "color": {
        "value": "#141617"
        },
        "links": {
            "color": {
                "value": "#FAF0F0"
            },
            "distance": SCREEN_AVERAGE / 10,
            "enable": true,
            "opacity": 0.4
        },
        "move": {
            "attract": {
                "rotate": {
                "x": 600,
                "y": 1200
                }
            },
            "enable": true,
            "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
            }
        },
        "opacity": {
            "value": 0.9
        },
        "shape": {
            "options": {
                "polygon": {
                    "nb_sides": 3
                }
            }
        },
        "number": {
            "value": SCREEN_AVERAGE / 15
        },
        "size": {
            "value": 0,
        }
    }
  }

  backgroundParticles = tsParticles.load("backgroundParticles", backgroundParticleOptions);
}

window.addEventListener("load", generateParticles);
window.addEventListener("resize", generateParticles);

/* Link Scrolloing */

document.querySelector("#aboutLink").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({behavior: "smooth"});
})
  