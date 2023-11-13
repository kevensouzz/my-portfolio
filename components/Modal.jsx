import { GrClose } from "react-icons/gr"

export default function Modal({ onClose, message }) {
  return (
    <section className={`fixed z-50 inset-0 bg-black text-accent bg-opacity-75 backdrop-blur-[2px] flex flex-col justify-center items-center`}>
      <div
        className={`w-[450px] h-[125px] overflow-hidden flex flex-col rounded-2xl border-t-4 border-accent bg-opacity-75 max-sm:w-[375px] max-sm:h-[100px] max-[400px]:w-[275px] max-[320px]:w-[225px]`}
      >
        <span
          className={`w-full h-3/5 flex items-center justify-center font-semibold text-2xl max-sm:text-xl max-[400px]:text-lg max-[320px]:text-base`}
        >
          {message}
        </span>

        <span
          onClick={onClose}
          className={`md:cursor-pointer bg-accent text-primary flex items-center justify-center w-full h-2/5`}
        >
          <GrClose />
        </span>
      </div>
    </section>
  )

}