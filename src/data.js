import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Ma Way Bu",
      artist: "Hlawn Paing",
      audio: "/static/media/1.3fed8a0a.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Lay Htal Ka Eain",
      artist: "Bunny Phyo, Amara Phone",
      audio: "/static/media/3.effd2f56.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Chit Nay P",
      artist: "Oak Soe Khant",
      audio: "/static/media/5.4780277d.mp3",
      color: ["#BA4A46", "#FDF0DD"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
