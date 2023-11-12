import { BsArrowRight } from "react-icons/bs"

export default function Contact() {
  return (
    <main className={`h-full`}>
      <div className={`container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full`}>
        <div className={`flex flex-col w-full max-w-[700px]`}>
          <h2 className={`font-semibold text-3xl text-center mb-12`}>
            Vamos <span className="text-accent">Nos Conectar!</span>
          </h2>

          <form className={`flex-1 flex flex-col gap-6 w-full mx-auto z-10`}>
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="nome" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="assunto" className="input" />
            <textarea placeholder="mensagem" className="textarea"></textarea>

            <button className="btn rounded-full border border-white/50 max-w-[175px] transition-all ease-linear duration-500 flex item-center justify-center overflow-hidden hover:border-accent group">
              <span className="translate-y-[50%] group-hover:-translate-y-[100%] group-hover:opacity-0 transition-all ease-linear duration-500 ">Enviar Mensagem!</span>

              <BsArrowRight className="-translate-y-[100%] opacity-0 group-hover:flex group-hover:translate-y-[50%] group-hover:opacity-100 transition-all ease-linear duration-500 absolute text-[22px] text-accent" />
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}