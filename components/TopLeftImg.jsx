import Image from "next/image";

export default function TopLeftImg() {
  return (
    <div className={`absolute left-0 top-0 mix-blend-color-dodge w-[200px] md:w-[400px] opacity-25`}>
      <Image src={"/top-left-img.png"} width={400} height={400} alt="" draggable="false" />
    </div>
  )
}