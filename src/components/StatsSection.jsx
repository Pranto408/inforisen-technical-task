const stats = [
  {
    icon: "/images/Order Processed.png",
    value: "321,879",
    label: "Order Processed",
  },
  {
    icon: "/images/Available Services.png",
    value: "6,245",
    label: "Available Services",
  },
  {
    icon: "/images/Registered User.png",
    value: "8,552",
    label: "Registered User",
  },
  {
    icon: "/images/Regional Rank.png",
    value: "#1",
    label: "Regional Rank",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-50 px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-[1536px] grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={stat.icon}
              alt={stat.label}
              className="mb-5 h-14 w-14 object-contain"
            />
            <span className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              {stat.value}
            </span>
            <span className="mt-1 text-sm font-semibold text-orange-500">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
