"use client";
import { useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import { send } from "@emailjs/browser"
import Modal from "@/components/Modal";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }

    send("service_p5xpphp", "template_saxmi7v", templateParams, "xqQ4FzHJkP_V5OyqY")
      .then(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setModal(true);
      });
  }

  return (
    <main className={`h-full`}>
      <div className={`container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full`}>
        <div className={`flex flex-col w-full max-w-[700px] max-lg:max-w-[500px] gap-3`}>
          <h2 className={`font-semibold text-3xl text-center max-[375px]:text-xl`}>
            Vamos <span className="text-accent">Nos Conectar!</span>
          </h2>

          <form method="POST" onSubmit={sendEmail} className={`flex-1 flex flex-col gap-6 w-full mx-auto z-10 max-[320px]:gap-3`}>
            <div className="flex gap-6 w-full max-[320px]:gap-3">
              <input type="text" placeholder="Nome" aria-label="Nome" required className="input" maxLength={40} onChange={(e) => setName(e.target.value)} value={name} />
              <input type="email" placeholder="Email" aria-label="Email" required className="input" maxLength={56} onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <input type="text" placeholder="Assunto" aria-label="Assunto" required className="input" maxLength={48} onChange={(e) => setSubject(e.target.value)} value={subject} />
            <textarea placeholder="Mensagem" aria-label="Mensagem" required className="textarea" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>

            <button className="max-md:cursor-default btn rounded-full border max-md:border-accent border-white/50 max-w-[175px] max-md:max-w-[50px] transition-all duration-300 flex item-center justify-center overflow-hidden focus-visible:outline-0 md:focus-visible:border-accent md:hover:border-accent group">
              <span className="hidden md:flex translate-y-[50%] md:group-focus-visible:-translate-y-[100%] md:group-hover:-translate-y-[100%] md:group-focus-visible:opacity-0 md:group-hover:opacity-0 transition-all duration-500 ">Enviar Mensagem!</span>

              <BsArrowRight className="md:-translate-y-[100%] max-md:translate-y-[60%] md:opacity-0 md:group-focus-visible:flex md:group-hover:flex md:group-focus-visible:translate-y-[50%] md:group-hover:translate-y-[50%] md:group-focus-visible:opacity-100 md:group-hover:opacity-100 transition-all duration-500 absolute text-[22px] text-accent" />
            </button>
          </form>
        </div>
        {modal && <Modal message={"Enviado com Sucesso!"} onClose={() => setModal(false)} />}
      </div>
    </main>
  )
}