import Particles from "react-tsparticles";

const Background = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        backgroundMode: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: {
            value: "#FCFCFC",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: ["#000000", "#ffffff"],
          },
          links: {
            color: "#000000",
            distance: 100,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 10000,
            },
            value: 400,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: "edge",
            stroke: {
              width: 1,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          size: {
            random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Background;
