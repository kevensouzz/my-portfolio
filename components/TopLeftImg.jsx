import Image from "next/image";
import topleft from "@/public/top-left-img.png"

export default function TopLeftImg() {
  return (
    <div className={`absolute left-0 top-0 mix-blend-color-dodge opacity-25`}>
      <Image
        src={topleft}
        alt=""
        draggable="false"
      />
    </div>
  )
}