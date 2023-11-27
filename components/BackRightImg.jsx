import Image from "next/image";

export default function BackRightImg() {
  return (
    <div className={`absolute right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-300 ease-linear`}>
      <Image
        src={"/back-right-img.png"}
        alt=""
        draggable="false"
        width={450}
        height={273}
      />
    </div>
  )
}