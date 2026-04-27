import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/12f84001-4d16-456b-85c6-800b45d20a5b/files/73fd658a-af75-4353-8e46-30fd0e846afa.jpg"
            alt="Digital data flow"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/60 z-[1]" />
      <h3 className="absolute top-12 left-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest opacity-70">
        Цифровая реальность
      </h3>

      <div id="impact" className="absolute bottom-12 left-6 right-6 z-10 max-w-3xl">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold mb-6">
          Каждую минуту в интернете отправляется 16 млн SMS, публикуется 500 часов видео и совершается 4,5 млн поисковых запросов.
        </p>
        <div className="flex flex-wrap gap-8 mt-4">
          <div>
            <p className="text-white text-3xl md:text-4xl font-bold">93%</p>
            <p className="text-white/70 text-sm mt-1">российских подростков<br/>пользуются интернетом ежедневно</p>
          </div>
          <div>
            <p className="text-white text-3xl md:text-4xl font-bold">7 часов</p>
            <p className="text-white/70 text-sm mt-1">среднее время в сети<br/>в день для человека 16–24 лет</p>
          </div>
          <div>
            <p className="text-white text-3xl md:text-4xl font-bold">30 лет</p>
            <p className="text-white/70 text-sm mt-1">с момента появления<br/>первого сайта (1991)</p>
          </div>
        </div>
      </div>
    </div>
  );
}