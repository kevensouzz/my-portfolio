"use client";
import { useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import { send } from "@emailjs/browser"
import Modal from "@/components/Modal";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

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
    <main className={`h-full w-screen overflow-hidden`}>
      <div className={`container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full`}>
        <div className={`flex flex-col w-full max-w-[700px] max-lg:max-w-[500px] gap-3`}>
          <motion.h2 variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden" className={`font-semibold text-3xl text-center max-[375px]:text-xl`}>
            Vamos <span className="text-accent">Nos Conectar!</span>
          </motion.h2>

          <form method="POST" onSubmit={sendEmail} className={`flex-1 flex flex-col gap-6 w-full mx-auto z-10 max-[320px]:gap-3`}>
            <div className="flex gap-6 w-full max-[320px]:gap-3">
              <motion.input variants={fadeIn("right", 0.3)} initial="hidden" animate="show" exit="hidden" type="text" placeholder="Nome" aria-label="Nome" required className="input" maxLength={40} onChange={(e) => setName(e.target.value)} value={name} />
              <motion.input variants={fadeIn("left", 0.3)} initial="hidden" animate="show" exit="hidden" type="email" placeholder="Email" aria-label="Email" required className="input" maxLength={56} onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <motion.input variants={fadeIn("up", 0.3)} initial="hidden" animate="show" exit="hidden" type="text" placeholder="Assunto" aria-label="Assunto" required className="input" maxLength={48} onChange={(e) => setSubject(e.target.value)} value={subject} />
            <motion.textarea variants={fadeIn("up", 0.5)} initial="hidden" animate="show" exit="hidden" placeholder="Mensagem" aria-label="Mensagem" required className="textarea" onChange={(e) => setMessage(e.target.value)} value={message} />

            <motion.button variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden" className="max-md:cursor-default btn rounded-full border max-md:hover:border-accent border-white/25 text-white/50 max-w-[175px] max-md:max-w-[50px] flex item-center justify-center overflow-hidden focus-visible:outline-0 md:focus-visible:border-accent md:hover:border-accent transition-all duration-300 ease-linear group">
              <span className="hidden md:flex translate-y-[50%] md:group-focus-visible:-translate-y-[100%] md:group-hover:-translate-y-[100%] md:group-focus-visible:opacity-0 md:group-hover:opacity-0 transition-all duration-500 ease-linear">Enviar Mensagem!</span>

              <BsArrowRight className="md:-translate-y-[100%] max-md:translate-y-[60%] md:opacity-0 md:group-focus-visible:flex md:group-hover:flex md:group-focus-visible:translate-y-[50%] md:group-hover:translate-y-[50%] md:group-focus-visible:opacity-100 md:group-hover:opacity-100 transition-all duration-300 md:duration-500 ease-linear absolute text-[22px] text-accent max-md:text-white/50 max-md:group-hover:text-accent" />
            </motion.button>
          </form>
        </div>
        {modal && <Modal message={"Enviado com Sucesso!"} onClose={() => setModal(false)} />}
      </div>
    </main>
  )
}