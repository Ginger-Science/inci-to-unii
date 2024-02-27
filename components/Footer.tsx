import { TbCoffee } from "react-icons/tb";
import { PiHeartFill } from "react-icons/pi";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full text-emerald-950 text-center py-2">
        <span className="flex flex-row items-center justify-center gap-x-2">
            <h1>Made with</h1>
            <TbCoffee className="text-xl" />
            <h1>&</h1>
            <PiHeartFill className="text-xl" />
            <h1>by Isaac Vargas</h1>
            <SocialLink social="github" url="https://github.com/isaac-varg" />
            <SocialLink social="twitter" url="https://twitter.com/isaacisvargas" />
        </span>
  </div>
  )
}

export default Footer
