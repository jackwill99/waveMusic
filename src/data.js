import { v4 as uuidv4 } from "uuid";
import song1 from './songs/1.mp3';
import song3 from './songs/3.mp3';
import song5 from './songs/5.mp3';

function chillHop() {
  return [
    {
      name: "Ma Way Bu",
      artist: "Hlawn Paing",
      audio: song1,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Lay Htal Ka Eain",
      artist: "Bunny Phyo, Amara Phone",
      audio: song3,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Chit Nay P",
      artist: "Oak Soe Khant",
      audio: song5,
      color: ["#BA4A46", "#FDF0DD"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
