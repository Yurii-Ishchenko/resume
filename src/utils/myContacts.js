import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";

const contacts = [
  { title: "+38(098)-26-37-74", url: "+38(098)-26-37-74", icon: GiSmartphone },
  {
    title: "yuriyich123@gmail.com",
    url: "yuriyich123@gmail.com",
    icon: BsFillEnvelopeFill,
  },
  {
    title: "https://github.com/Yurii-Ishchenko",
    url: "https://github.com/Yurii-Ishchenko",
    icon: AiOutlineGithub,
  },
  {
    title: "linkedin.com/in/yurii-ishchenko-react",
    url: "linkedin.com/in/yurii-ishchenko-react",
    icon: AiFillLinkedin,
  },
  // { title: "Skype", url: "www.skype.com", icon: AiFillSkype },
];
export default contacts;
