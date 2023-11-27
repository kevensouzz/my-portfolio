import Image from "next/image";

export default function TopLeftImg() {
  return (
    <div className={`absolute left-0 top-0 mix-blend-color-dodge opacity-25`}>
      <Image
        src={"/top-left-img.png"}
        alt=""
        draggable="false"
        width={411}
        height={405}
      />
    </div>
  )   
}