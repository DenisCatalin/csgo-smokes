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

export const ANCIENT_NADES: INades = {
  smokes: [
    {
      name: "Long",
      top: "39%",
      left: "56%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: [
        "https://www.youtube.com/watch?v=Gtd6lbYzen8",
        "https://www.youtube.com/watch?v=ZmRYMOJP5Z0",
        "https://www.youtube.com/watch?v=hTaariGFT6k"
      ]
    },
    {
      name: "Short",
      top: "37%",
      left: "52.5%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: [
        "https://www.youtube.com/watch?v=AJoJ6LE_Mdk",
        "https://www.youtube.com/watch?v=BFh32MA1XxM"
      ]
    },
    {
      name: "Cave",
      top: "41%",
      left: "52%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=9Y9c8g1rpS0"
      ]
    },
    {
      name: "Donut - A",
      top: "37%",
      left: "36.5%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: [
        "https://www.youtube.com/watch?v=uOCLNdqX6rI"
      ]
    },
    {
      name: "Temple",
      top: "25%",
      left: "35%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: [
        "https://www.youtube.com/watch?v=b63hodjguhw",
        "https://www.youtube.com/watch?v=flNMD8w2uww"
      ]
    },
    {
      name: "CT",
      top: "26%",
      left: "39%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: [
        "https://www.youtube.com/watch?v=9p399-AZeos",
        "https://www.youtube.com/watch?v=2fmVZ7m4z7k",
        "https://www.youtube.com/watch?v=TEhOaBGhb4k"
      ]
    },
    {
      name: "Donut - Mid",
      top: "47%",
      left: "40%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: [
        "https://www.youtube.com/watch?v=jcKmJ5Yguu4",
        "https://www.youtube.com/watch?v=tZdjXDf1wwc",
        "https://www.youtube.com/watch?v=eoFIrv08p2k",
        "https://www.youtube.com/watch?v=9ouidsAOris"
      ]
    },
    {
      name: "Mid & one way",
      top: "40%",
      left: "43.2%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: [
        "https://www.youtube.com/watch?v=3acorz7su0U",

      ]
    },
    {
      name: "Construction",
      top: "57%",
      left: "48.7%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=nhVxVRhBiO8"
      ]
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

// https://www.youtube.com/watch?v=EWTXTSnxjbI - smokes
// https://www.youtube.com/watch?v=Jr4y7hbleVM - smokes
// https://www.youtube.com/watch?v=uuI6GMHlYrs - smokes