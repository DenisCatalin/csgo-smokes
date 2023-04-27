type INade = {
  name: string,
  top: string,
  left: string,
  image: string,
  tooltipPosition: string,
  urls: string[]
}

type INades = {
  smokes: INade[],
  flashbangs: INade[],
  molotovs: INade[],
  grenades: INade[]
}

export const OVERPASS_NADES: INades = {
  smokes: [
    {
      name: "Outside smoke - 1",
      top: "67%",
      left: "46%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "One way to peek outsite",
      top: "67%",
      left: "44.8%",
      image: "/images/smoke.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "Outside smoke - 2",
      top: "69%",
      left: "48%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Outside smoke - 3",
      top: "69%",
      left: "49.5%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Garage",
      top: "65.5%",
      left: "50.8%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "One way secret",
      top: "71%",
      left: "50.8%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Main - 1",
      top: "62.25%",
      left: "48.5%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Main & one way",
      top: "60.5%",
      left: "47%",
      image: "/images/smoke.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "Squeaky",
      top: "58%",
      left: "45.5%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Heaven & one ways",
      top: "47.5%",
      left: "49%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "One way ramp",
      top: "38%",
      left: "45.5%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    }
  ],
  flashbangs: [],
  molotovs: [
    {
      name: "Ninja",
      top: "49%",
      left: "52.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    }
  ],
  grenades: []
};

//https://www.youtube.com/watch?v=FH-igEx5aqY - smokes
//https://www.youtube.com/watch?v=vOAiu2YgRlQ - nades