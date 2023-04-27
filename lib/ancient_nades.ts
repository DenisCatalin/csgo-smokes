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
        "https://www.youtube.com/watch?v=KPydTrCup-A",
        "https://www.youtube.com/watch?v=Jgoa5BwZXAw"
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
  flashbangs: [
    {
      name: "B doors",
      top: "60%",
      left: "55.5%",
      image: "/images/flashbang.png",
      tooltipPosition: "right",
      urls: [
        "https://www.youtube.com/watch?v=hYX2Wqo9miE"
      ]
    },
    {
      name: "Construction, Cave",
      top: "56%",
      left: "49%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=SwO3oUgALDM",
        "https://www.youtube.com/watch?v=gNcepeAYAFY",
        "https://www.youtube.com/watch?v=MiLjTZjUxjE"
      ]
    },
    {
      name: "Mid - 1",
      top: "59%",
      left: "42%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=mvF95HJa58c"
      ]
    },
    {
      name: "Mid - 2",
      top: "50%",
      left: "41.5%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=tLmo8ncC02I"
      ]
    },
    {
      name: "A site - 1",
      top: "36%",
      left: "38%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=ht_PCIG0NgE"
      ]
    },
    {
      name: "A site - 2",
      top: "35%",
      left: "35%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=KsaROVYUCcU"
      ]
    },
    {
      name: "B site",
      top: "57%",
      left: "58%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=1S76id19fj8"
      ]
    },
    {
      name: "Xbox",
      top: "58.5%",
      left: "45%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=1wbFe4dZVaQ"
      ]
    }
  ],
  molotovs: [
    {
      name: "Ninja",
      top: "49%",
      left: "52.5%",
      image: "/images/molotov.png",
      tooltipPosition: "right",
      urls: [
        "https://www.youtube.com/watch?v=R2a6o3Kn0rE"
      ]
    },
    {
      name: "Banana",
      top: "56.5%",
      left: "53.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=ZCt8tJgDN10"
      ]
    },
    {
      name: "B Doors",
      top: "60%",
      left: "55.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=HgcUoGaz_gc"
      ]
    },
    {
      name: "Cave, Pillar",
      top: "42%",
      left: "52.5%",
      image: "/images/molotov.png",
      tooltipPosition: "top",
      urls: [
        "https://www.youtube.com/watch?v=VsN5i31Rqzo",
        "https://www.youtube.com/watch?v=teJ_wFI0cXI",
        "https://www.youtube.com/watch?v=D-e3RywdMrY",
        "https://www.youtube.com/watch?v=ojpNfJLXtPQ",
        "https://www.youtube.com/watch?v=mXntpsaeYdc",
        "https://www.youtube.com/watch?v=wdhF0f2pIc8"
      ]
    },
    {
      name: "Temple",
      top: "25%",
      left: "35%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=zKFLAEddwlE"
      ]
    },
    {
      name: "One way",
      top: "49%",
      left: "50.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: [
        "https://www.youtube.com/watch?v=cXjUs-lkAVI"
      ]
    },
    {
      name: "Pit",
      top: "48%",
      left: "45.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Wood",
      top: "45%",
      left: "52.5%",
      image: "/images/molotov.png",
      tooltipPosition: "right",
      urls: []
    }
  ],
  grenades: []
};

// https://www.youtube.com/watch?v=EWTXTSnxjbI - smokes
// https://www.youtube.com/watch?v=Jr4y7hbleVM - smokes
// https://www.youtube.com/watch?v=uuI6GMHlYrs - smokes