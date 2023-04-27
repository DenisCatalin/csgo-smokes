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

export const INFERNO_NADES: INades = {
  smokes: [
    {
      name: "Coffins",
      top: "21%",
      left: "45%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "CT",
      top: "28%",
      left: "48%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "One way to cross - 1",
      top: "26%",
      left: "41.5%",
      image: "/images/smoke.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "One way to cross - 2",
      top: "28.5%",
      left: "46%",
      image: "/images/smoke.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "One way to cross - 3",
      top: "26%",
      left: "43.5%",
      image: "/images/smoke.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "Dark",
      top: "20%",
      left: "41.2%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "One way to peek car",
      top: "39%",
      left: "44%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "One way to peek banana",
      top: "44%",
      left: "43%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Top mid",
      top: "65%",
      left: "50.5%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Top mid",
      top: "65%",
      left: "50.5%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "One way to top mid - 1",
      top: "67%",
      left: "51%",
      image: "/images/smoke.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "Short",
      top: "70%",
      left: "52%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "One way to top mid - 2",
      top: "74%",
      left: "52.2%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Long",
      top: "59%",
      left: "52.2%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "One way to long",
      top: "55%",
      left: "54%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Arch",
      top: "51%",
      left: "55.4%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Library",
      top: "55%",
      left: "60%",
      image: "/images/smoke.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Moto",
      top: "62%",
      left: "59%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Pit",
      top: "74%",
      left: "60%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Mini pit",
      top: "75%",
      left: "58.8%",
      image: "/images/smoke.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "One way to peek short",
      top: "75%",
      left: "56.5%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "One way to peek 2nd mid",
      top: "75%",
      left: "48.6%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "One way to peek aps",
      top: "80%",
      left: "51.3%",
      image: "/images/smoke.png",
      tooltipPosition: "bottom",
      urls: []
    }
  ],
  flashbangs: [
    {
      name: "Popflash B",
      top: "28%",
      left: "45.5%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "B site",
      top: "21%",
      left: "44%",
      image: "/images/flashbang.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Car",
      top: "40.5%",
      left: "45%",
      image: "/images/flashbang.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Banana",
      top: "35.5%",
      left: "43%",
      image: "/images/flashbang.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Peek banana",
      top: "39.5%",
      left: "44%",
      image: "/images/flashbang.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "Popflash top mid",
      top: "65%",
      left: "52.5%",
      image: "/images/flashbang.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "A Site",
      top: "65%",
      left: "59%",
      image: "/images/flashbang.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Cart",
      top: "75%",
      left: "56.5%",
      image: "/images/flashbang.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Pit & A Site",
      top: "85%",
      left: "59%",
      image: "/images/flashbang.png",
      tooltipPosition: "top",
      urls: []
    }
  ],
  molotovs: [
    {
      name: "One way to peek 2nd mid",
      top: "70%",
      left: "60.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Peek aps",
      top: "78%",
      left: "56.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Site A - 1",
      top: "68%",
      left: "56.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Site A - 2",
      top: "65%",
      left: "56.5%",
      image: "/images/molotov.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Second mid",
      top: "68.5%",
      left: "47.5%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Short",
      top: "74.5%",
      left: "52.3%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    },
    {
      name: "Long",
      top: "53%",
      left: "51.3%",
      image: "/images/molotov.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Car",
      top: "39%",
      left: "44%",
      image: "/images/molotov.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "Sandbags",
      top: "41.5%",
      left: "47.5%",
      image: "/images/molotov.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Hold B (close)",
      top: "44%",
      left: "43.3%",
      image: "/images/molotov.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "Hold B (deep)",
      top: "49.5%",
      left: "42.3%",
      image: "/images/molotov.png",
      tooltipPosition: "right",
      urls: []
    },
    {
      name: "Sandwich",
      top: "32%",
      left: "43.8%",
      image: "/images/molotov.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Boost Boxes",
      top: "32%",
      left: "45.3%",
      image: "/images/molotov.png",
      tooltipPosition: "top",
      urls: []
    },
    {
      name: "Newbox",
      top: "29.5%",
      left: "41.5%",
      image: "/images/molotov.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "Dark",
      top: "19.5%",
      left: "41.1%",
      image: "/images/molotov.png",
      tooltipPosition: "left",
      urls: []
    },
    {
      name: "Boost",
      top: "29%",
      left: "49%",
      image: "/images/molotov.png",
      tooltipPosition: "bottom",
      urls: []
    }
  ],
  grenades: []
};