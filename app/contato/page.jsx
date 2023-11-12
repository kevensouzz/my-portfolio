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
              <input type="text" placeholder="nome" aria-label="nome" required className="input" maxLength={40} />
              <input type="text" placeholder="email" aria-label="email" required className="input" maxLength={56} />
            </div>
            <input type="text" placeholder="assunto" aria-label="assunto" required className="input" maxLength={48} />
            <textarea placeholder="mensagem" aria-label="mensagem" required className="textarea"></textarea>

            <button className="max-md:cursor-default btn rounded-full border max-md:border-accent border-white/50 max-w-[175px] max-md:max-w-[50px] transition-all duration-300 flex item-center justify-center overflow-hidden md:hover:border-accent group">
              <span className="hidden md:flex translate-y-[50%] md:group-hover:-translate-y-[100%] md:group-hover:opacity-0 transition-all duration-500 ">Enviar Mensagem!</span>

              <BsArrowRight className="md:-translate-y-[100%] max-md:translate-y-[50%] md:opacity-0 md:group-hover:flex md:group-hover:translate-y-[50%] md:group-hover:opacity-100 transition-all duration-500 absolute text-[22px] text-accent" />
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}