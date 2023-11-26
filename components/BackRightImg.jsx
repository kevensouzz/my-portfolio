import Image from "next/image";
import backright from "@/public/back-right-img.png"

export default function BackRightImg() {
  return (
    <div className={`absolute right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-300 ease-linear`}>
      <Image
        src={backright}
        alt=""
        draggable="false"
      />
    </div>
  )
}