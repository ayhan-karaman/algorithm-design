import { Link } from "react-router";
import ComponentCard from "../../components/common/ComponentCard";

type NavItem = {
  name: string;
  path: string;
};
const navItems:NavItem[] = [
  {
    
    name: "Tek mi?",
    path: "/isoddnumber",
  },
  {
    name: "Çift mi?",
    path: "/isevennumber",
  },
  {
    name: "Mutlak Değer",
    path: "/absolute-value",
  },
  {
    name: "Asal Sayı mı?",
    path: "/is-prime-number",
  },
  {
    name: "Rakamların Toplamı",
    path: "/sum-of-numbers",
  },
  {
    name: "Tek Sayı Toplamı(N)",
    path: "/sum-of-odd-number",
  },
  {
    name: "Çift Sayı Toplamı(N)",
    path: "/sum-of-even-number",
  },
];

export default function Home() {
  const getRandomColor = () => {
    const colors = [
      "bg-red-400", "bg-red-500", "bg-red-600",
      "bg-orange-400", "bg-orange-500", "bg-orange-600",
      "bg-amber-400", "bg-amber-500", "bg-amber-600",
      "bg-yellow-400", "bg-yellow-500",
      "bg-lime-400", "bg-lime-500", "bg-lime-600",
      "bg-green-400", "bg-green-500", "bg-green-600",
      "bg-emerald-400", "bg-emerald-500", "bg-emerald-600",
      "bg-teal-400", "bg-teal-500", "bg-teal-600",
      "bg-cyan-400", "bg-cyan-500", "bg-cyan-600",
      "bg-sky-400", "bg-sky-500", "bg-sky-600",
      "bg-blue-400", "bg-blue-500", "bg-blue-600",
      "bg-indigo-400", "bg-indigo-500", "bg-indigo-600",
      "bg-violet-400", "bg-violet-500", "bg-violet-600",
      "bg-purple-400", "bg-purple-500", "bg-purple-600",
      "bg-fuchsia-400", "bg-fuchsia-500", "bg-fuchsia-600",
      "bg-pink-400", "bg-pink-500", "bg-pink-600",
      "bg-rose-400", "bg-rose-500", "bg-rose-600"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <>
      <div className="p-4 flex justify-center mx-auto max-w-(--breakpoint-2xl) md:p-6">
        <ComponentCard className="w-6xl" title="Siteme hoş geldiniz!">
          <p className="text-sm font-medium text-gray-800 dark:text-white/90">
            Algoritmaları öğrenmek, doğru yaklaşımı bildiğinizde oldukça keyifli olabilir.
            BTK Akademi’deki Zafer Cömert algoritma eğitiminden ilham alarak hazırladığım bu React projesinde,
            temel konuları anlaşılır ve interaktif bir şekilde sunmaya çalıştım.
          </p>
        </ComponentCard>
      </div>
      <div className="p-4 flex justify-center flex-wrap mx-auto max-w-(--breakpoint-2xl) md:p-6">
        {
          navItems.map((e, i) => {
            const randomBg = getRandomColor();
            return (
              <Link key={i} to={e.path} className={`${randomBg} hover:opacity-80 text-white font-bold py-2 mx-2 my-2 px-4 rounded-full`}>
                {e.name}
              </Link>
            )
          })
        }
      </div>
    </>
  );
}
