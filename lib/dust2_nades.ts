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

export const DUST2_NADES: INades = {
  smokes: [
    {
      name: "B Window",
      top: "19.2%",
      left: "34.2%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "B Doors",
      top: "27.5%",
      left: "34.3%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "B Upper Tunnel",
      top: "36%",
      left: "28.5%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "X-box",
      top: "42%",
      left: "43.5%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Mid doors",
      top: "39%",
      left: "42.5%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Short",
      top: "28%",
      left: "50.8%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "CT",
      top: "28%",
      left: "51.8%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "CT",
      top: "29%",
      left: "44%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Avanguard",
      top: "25%",
      left: "51.2%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Long",
      top: "47%",
      left: "57%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "One way long",
      top: "55%",
      left: "52%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "One ways",
      top: "23%",
      left: "56.2%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Elevator",
      top: "28.5%",
      left: "57%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "One way platform",
      top: "15%",
      left: "28%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Suicide",
      top: "67%",
      left: "42.2%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Hold Short + one way lower",
      top: "42%",
      left: "45%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    }
  ],
  flashbangs: [
    {
      name: "Help teammate to peek short",
      top: "40.5%",
      left: "49%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Mid",
      top: "40%",
      left: "42.5%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Site B",
      top: "30%",
      left: "31%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Long",
      top: "55%",
      left: "55.5%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "A Site",
      top: "34%",
      left: "58.5%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "A Site",
      top: "24%",
      left: "53%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    }
  ],
  molotovs: [
    {
      name: "Elevator",
      top: "25%",
      left: "54.8%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "A Site",
      top: "22%",
      left: "56.2%",
      image: "/images/molotov.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Car",
      top: "32%",
      left: "61.3%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Peek platform and Site",
      top: "32%",
      left: "28%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Platform back",
      top: "12%",
      left: "28%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Ninja",
      top: "18%",
      left: "50.3%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Blue container",
      top: "48%",
      left: "52%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Long doors",
      top: "55%",
      left: "51.7%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Close mid doors",
      top: "36%",
      left: "43.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    }
  ],
  grenades: []
};