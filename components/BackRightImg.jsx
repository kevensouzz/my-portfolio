import Image from "next/image";

export default function BackRightImg() {
  return (
    <div className={`absolute z-10 right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-300 ease-linear`}>
      <Image
        className={`w-full h-full`}
        src={"/back-right-img.png"}
        width={200}
        height={200}
        alt=""
        draggable="false"
      />
    </div>
  )
}