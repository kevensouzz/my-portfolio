"use client";
import { Particles } from "react-particles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

export default function ParticlesContainer() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);

  return <Particles
    className={`w-full h-full absolute`}
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fullScreen: {
        enable: true
      },
      background: {
        color: {
          value: ""
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 1
          }
        }
      },
      particles: {
        color: {
          value: "#e68e2e"
        },
        links: {
          color: "#f5d393",
          distance: 100,
          enable: true,
          opacity: 0.25,
          width: 0.5
        },
        collisions: {
          enable: true
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce"
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 1000
          },
          value: 100
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: "circle"
        },
        size: {
          value: {
            min: 1,
            max: 3
          }
        },
        detectRetina: true
      }
    }}
  />
}