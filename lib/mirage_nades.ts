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

export const MIRAGE_NADES: INades = {
  smokes: [
    {
      name: "One way to peek short",
      top: "33%",
      left: "34%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Market window",
      top: "41%",
      left: "34.5%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Market door",
      top: "41%",
      left: "31%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Hold aps",
      top: "27%",
      left: "42.5%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "One way bench",
      top: "34%",
      left: "41.6%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Arch left",
      top: "33.5%",
      left: "37.7%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Arch right",
      top: "28.5%",
      left: "37.7%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Peek lower",
      top: "31.5%",
      left: "41.5%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Catwalk",
      top: "43%",
      left: "49%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Short",
      top: "40%",
      left: "43%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "One way to peek mid",
      top: "43.5%",
      left: "43%",
      image: "/images/smoke.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "Window & one ways",
      top: "47%",
      left: "41%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Connector & one ways",
      top: "53%",
      left: "44.2%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Jungle",
      top: "60.5%",
      left: "42%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Top connector",
      top: "59%",
      left: "44.2%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Cover jungle & con",
      top: "63%",
      left: "44.2%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Stairs & one way",
      top: "63%",
      left: "45.8%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "CT",
      top: "76%",
      left: "42.4%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Palace & one way",
      top: "74%",
      left: "50%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Ramp",
      top: "62%",
      left: "51%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    }
  ],
  flashbangs: [
    {
      name: "Flash Long",
      top: "38%",
      left: "32%",
      image: "/images/flashbang.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Flash Mid",
      top: "39%",
      left: "49%",
      image: "/images/flashbang.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Flash Site",
      top: "26%",
      left: "36.6%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Flash Site",
      top: "26%",
      left: "39%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Flash Site",
      top: "61%",
      left: "51%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Retake B",
      top: "40%",
      left: "29%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    }
  ],
  molotovs: [
    {
      name: "Chair",
      top: "51%",
      left: "46.7%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Top mid boxes",
      top: "47.5%",
      left: "52.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Connector",
      top: "53%",
      left: "44.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Jungle",
      top: "60%",
      left: "40%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Window & one way",
      top: "47%",
      left: "40.7%",
      image: "/images/molotov.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Under palace",
      top: "70%",
      left: "50%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Firebox",
      top: "71%",
      left: "44%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Sandwich",
      top: "62%",
      left: "47%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Short",
      top: "34%",
      left: "41.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Ramp",
      top: "63%",
      left: "52.4%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Tetris",
      top: "60%",
      left: "48.6%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Stairs",
      top: "63%",
      left: "45.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Ninja",
      top: "76%",
      left: "48%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Car",
      top: "24%",
      left: "32%",
      image: "/images/molotov.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Hold B",
      top: "24%",
      left: "35.5%",
      image: "/images/molotov.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Bench",
      top: "31%",
      left: "29.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Stop plant on B",
      top: "31%",
      left: "33.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Stop plant on A",
      top: "73%",
      left: "45.8%",
      image: "/images/molotov.png",
      tooltipPosition: "top",
      urls: []
    }
  ],
  grenades: []
};

// https://www.youtube.com/watch?v=4EVA6PTF6Yo - molly