import { IoDiamondOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbPigMoney } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { LiaNewspaperSolid } from "react-icons/lia";
import { IoMdPaperPlane } from "react-icons/io";
import { LiaPenAltSolid } from "react-icons/lia";
import { BsPersonVcard } from "react-icons/bs";
import { RxTarget } from "react-icons/rx";
import { PersonOne, PersonTwo, PersonThree, PersonFour, UserOne, UserTwo, UserThree, BlogOne, BlogTwo, BlogThree } from "../assets";

export const serviceCardData = [
  {
    id: 1,
    icon: IoDiamondOutline,
    title: "Digital Design",
    desc: `Some quick example text to build on the card title and make up the bulk
        of the card's content. Moltin gives you the platform.`,
  },
  {
    id: 2,
    icon: HiOutlineComputerDesktop,
    title: "Unlimited Colors",
    desc: `Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.`,
  },
  {
    id: 3,
    icon: TbPigMoney,
    title: "Strategy Solutions",
    desc: `Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.`,
  },
  {
    id: 4,
    icon: FaReact,
    title: "Awesome support",
    desc: `It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.`,
  },
  {
    id: 5,
    icon: LiaNewspaperSolid,
    title: "Truly Multipurpose",
    desc: `Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.`,
  },
  {
    id: 6,
    icon: IoMdPaperPlane,
    title: "Easy to customize",
    desc: `Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.`,
  },
];

export const PriceCardData = [
  {
    id: 1,
    category: "ECONOMY",
    price: "$9.9",
    bandwidth: "1GB",
    onlineSpace: "50MB",
    support: "No",
    domain: "1",
    hiddenFees: "No",
  },
  {
    id: 2,
    category: "DELUXE",
    price: "$19.90",
    bandwidth: "10GB",
    onlineSpace: "500MB",
    support: "Yes",
    domain: "10",
    hiddenFees: "No",
  },
  {
    id: 3,
    category: "ULTIMATE",
    price: "$29.9",
    bandwidth: "100GB",
    onlineSpace: "2GB",
    support: "Yes",
    domain: "Unlimited",
    hiddenFees: "No",
  },
];

export const TeamCardData = [
  {
    id: 1,
    image: PersonOne,
    title: "Frank Johnson",
    Designation: "CEO",
  },
  {
    id: 2,
    image: PersonTwo,
    title: "Elaine Stclair",
    Designation: "DESIGNER",
  },
  {
    id: 3,
    image: PersonThree,
    title: "Wanda Arthur",
    Designation: "DEVELOPER",
  },
  {
    id: 4,
    image: PersonFour,
    title: "Joshua Stemple",
    Designation: "MANAGER",
  },
];
export const ReviewCardData = [
  {
    id: 1,
    image: UserOne,
    review: `"I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls."`,
    title: "RUBEN REED ",
    area: "Charleston",
  },
  {
    id: 2,
    image: UserTwo,
    review: `"Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures Integer varius lacus non magna tempor congue natuasre the whole its beauty."`,
    title: "MICHAEL P. HOWLETT",
    area: "Worcester",
  },
  {
    id: 3,
    image: UserThree,
    review: `“I've learned that people will forget what you said, people will forget what you did, but people will never aliquam in nunc quis tincidunt forget how you vestibulum egestas them feel.”`,
    title: "THERESA D. SINCLAIR",
    area: "THERESA D. SINCLAIR",
  },
];
export const WorkCardData = [
  {
    id: 1,
    icon: LiaPenAltSolid,
    title: "Tell us what you need",
    desc: `The Big Oxmox advised her not to do so.`,
  },
  {
    id: 2,
    icon: BsPersonVcard,
    title: "Get free quotes",
    desc: `Little Blind Text didn’t listen.`,
  },
  {
    id: 3,
    icon: RxTarget,
    title: "Deliver high quality product",
    desc: `When she reached the first hills.`,
  },
];
export const BlogCardData = [
  {
    id: 1,
    image: BlogOne,
    category:'UI & UX Design',
    title: "Doing a cross country road trip",
    Desc: `Doing a cross country road trip
    She packed her seven versalia, put her initial into the belt and made herself on the way..`,
  },
  {
    id: 2,
    image: BlogTwo,
    category:'Digital Marketing',
    title: "New exhibition at our Museum",
    Desc: `Pityful a rethoric question ran over her cheek, then she continued her way.`,
  },
  {
    id: 3,
    image: BlogThree,
    category:'Travelling',
    title: "Why are so many people..",
    Desc: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.`,
  },
];