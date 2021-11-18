import baby1 from "../../assets/banner/baby1.png";
import baby2 from "../../assets/banner/baby2.png";
import baby3 from "../../assets/banner/baby3.png";
import baby4 from "../../assets/banner/baby4.png";
import baby5 from "../../assets/banner/Angel Zombie.png";
import baby6 from "../../assets/banner/Alien.png";
import baby7 from "../../assets/banner/Ape Zombie.png";
import baby8 from "../../assets/banner/Demon Red.png";
import baby9 from "../../assets/banner/Frankenstein Female.png";
import baby10 from "../../assets/banner/Frankenstein Male.png";
import baby11 from "../../assets/banner/Golden Vampire.png";
import baby12 from "../../assets/banner/ORC Female.png";
import baby13 from "../../assets/banner/ORC Male.png";
import baby14 from "../../assets/banner/Mummy.png";
import baby15 from "../../assets/banner/Robot Female.png";
import baby16 from "../../assets/banner/Robot Male.png";
import baby17 from "../../assets/banner/Vampire Female.png";
import baby18 from "../../assets/banner/Vampire Male.png";
// import baby1 from '../../assets/banner/baby1.png'
// import baby1 from '../../assets/banner/baby1.png'

interface RarityData {
  data: {
    img: string;
    name: string;
    percent: string;
  }[];
}

export const data: RarityData["data"] = [
  { img: baby5, name: "Angel Zombie", percent: "1.36%" },
  { img: baby6, name: "Alien", percent: "1.15%" },
  { img: baby7, name: "Ape Zombie", percent: "1.84%" },
  { img: baby8, name: "Demon", percent: "2.95%" },
  { img: baby9, name: "Female Frankenstein", percent: "7.87%" },
  { img: baby10, name: "Male Frankenstein", percent: "12.92%" },
  { img: baby11, name: "Golden Vampire", percent: "1.53%" },
  { img: baby12, name: "Female ORC", percent: "10.94%" },
  { img: baby13, name: "Male ORC", percent: "11.49%" },
  { img: baby14, name: "Mummy", percent: "0.68%" },
  { img: baby15, name: "Female Robot", percent: "8.94%" },
  { img: baby16, name: "Male Robot", percent: "12.35%" },
  { img: baby17, name: "Female Vampire", percent: "10.97%" },
  { img: baby18, name: "Male Vampire", percent: "14.97%" },
  // { img: baby15, name: "", percent: "" },
  // { img: baby16, name: "", percent: "" },
  // { img: baby17, name: "", percent: "" },
  // { img: baby18, name: "", percent: "" },
];
