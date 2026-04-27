import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/12f84001-4d16-456b-85c6-800b45d20a5b/files/178bb918-2d72-4d0d-b6be-17c108f67cd6.jpg"
          alt="Internet network globe"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">Обществознание · 9 класс</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ИНТЕРНЕТ<br/>В ОБЩЕСТВЕ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Как глобальная сеть изменила коммуникацию, экономику, образование и повседневную жизнь каждого из нас
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm opacity-80">
          <span className="border border-white/40 px-4 py-2 rounded-full">5,4 млрд пользователей</span>
          <span className="border border-white/40 px-4 py-2 rounded-full">67% населения Земли</span>
          <span className="border border-white/40 px-4 py-2 rounded-full">Создан в 1991 году</span>
        </div>
      </div>
    </div>
  );
}