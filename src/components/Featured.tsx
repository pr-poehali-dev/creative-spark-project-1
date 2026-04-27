import Icon from "@/components/ui/icon";

const aspects = [
  {
    icon: "MessageCircle",
    title: "Коммуникация",
    color: "bg-blue-50 text-blue-600",
    stat: "3,6 млрд",
    statLabel: "пользователей соцсетей",
    description:
      "Мессенджеры, соцсети и видеозвонки стёрли расстояния. Теперь можно общаться с кем угодно в любой точке планеты мгновенно.",
  },
  {
    icon: "GraduationCap",
    title: "Образование",
    color: "bg-green-50 text-green-600",
    stat: "220 млн",
    statLabel: "онлайн-студентов в мире",
    description:
      "Онлайн-курсы, электронные библиотеки и обучающие платформы дают доступ к знаниям из любой точки мира.",
  },
  {
    icon: "TrendingUp",
    title: "Экономика",
    color: "bg-amber-50 text-amber-600",
    stat: "5,8 трлн $",
    statLabel: "объём e-commerce в 2023",
    description:
      "Интернет-торговля, фриланс, стриминг и цифровые услуги создали целые новые отрасли глобальной экономики.",
  },
  {
    icon: "ShieldAlert",
    title: "Угрозы",
    color: "bg-red-50 text-red-600",
    stat: "каждые 39 сек",
    statLabel: "происходит кибератака",
    description:
      "Кибербуллинг, фейки, зависимость и мошенничество — обратная сторона цифрового мира, о которой важно знать.",
  },
];

export default function Featured() {
  return (
    <div
      id="communication"
      className="min-h-screen px-6 py-20 bg-white flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-3">
          Ключевые аспекты
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Интернет изменил всё —<br />
          <span className="text-neutral-400">буквально всё</span>
        </h2>
        <p className="text-neutral-600 max-w-xl mb-14 text-lg">
          Четыре сферы, где влияние глобальной сети ощущается сильнее всего
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aspects.map((item) => (
            <div
              key={item.title}
              className="border border-neutral-100 p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color}`}>
                <Icon name={item.icon} fallback="CircleAlert" size={22} />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
              <div>
                <p className="text-2xl font-bold text-neutral-900">{item.stat}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{item.statLabel}</p>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}