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

export const ANUBIS_NADES: INades = {
  smokes: [
    {
      name: "Heaven",
      top: "27%",
      left: "52.8%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "A-Connector",
      top: "40%",
      left: "50.5%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "CT",
      top: "44%",
      left: "35.9%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Temple",
      top: "44.5%",
      left: "38%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "B-Connector",
      top: "55.5%",
      left: "39%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Mid",
      top: "50%",
      left: "44.5%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
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
    },
    {
      name: "Deny plant A",
      top: "30%",
      left: "36.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    }
  ],
  grenades: []
};

// https://www.youtube.com/watch?v=PzOE0nF81CM&t=131s - smokes