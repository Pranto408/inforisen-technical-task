import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaTelegramPlane,
  FaDiscord,
  FaSpotify,
  FaSoundcloud,
  FaSnapchatGhost,
  FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const platforms = [
  {
    id: "facebook",
    label: "Facebook",
    icon: FaFacebookF,
    color: "#1877F2",
    active: true,
  },
  { id: "instagram", label: "Instagram", icon: FaInstagram, color: "#E1306C" },
  { id: "twitter", label: "X (Twitter)", icon: FaXTwitter, color: "#000000" },
  { id: "youtube", label: "YouTube", icon: FaYoutube, color: "#FF0000" },
  { id: "tiktok", label: "TikTok", icon: FaTiktok, color: "#010101" },
  { id: "linkedin", label: "LinkedIn", icon: FaLinkedinIn, color: "#0A66C2" },
  {
    id: "telegram",
    label: "Telegram",
    icon: FaTelegramPlane,
    color: "#26A5E4",
  },
  { id: "discord", label: "Discord", icon: FaDiscord, color: "#5865F2" },
  { id: "spotify", label: "Spotify", icon: FaSpotify, color: "#1DB954" },
  {
    id: "soundcloud",
    label: "SoundCloud",
    icon: FaSoundcloud,
    color: "#FF5500",
  },
  {
    id: "snapchat",
    label: "Snapchat",
    icon: FaSnapchatGhost,
    color: "#FFFC00",
  },
  { id: "website", label: "Website Traffic", icon: FaGlobe, color: "#334155" },
];

const facebookServices = [
  {
    name: "Facebook Post Likes",
    desc: "Boost post engagement and credibility with real likes.",
  },
  {
    name: "Facebook Likes",
    desc: "Grow your page popularity with high-quality likes.",
  },
  {
    name: "Facebook Comments",
    desc: "Increase interaction with engaging comments.",
  },
  { name: "Facebook Shares", desc: "Expand your reach with powerful shares." },
  {
    name: "Facebook Video Views",
    desc: "Get more visibility with high-retention video views.",
  },
  {
    name: "Facebook Reactions",
    desc: "Make your posts more engaging with diverse reactions.",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-[1536px]">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">
            our services
          </span>
          <h2 className="mt-3 font-parkinsans text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful <span className="text-orange-500">SMM Services</span> for
            Fast Growth
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
            Explore our comprehensive range of social media marketing services
            designed to help you grow your presence across all major platforms.
            From Facebook to TikTok, we&apos;ve got you covered.
          </p>
        </div>

        {/* Platform pills — static, decorative only */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.id}
                className={`flex items-center justify-center gap-2 rounded-xl border border-orange-400 px-4 py-3 text-sm font-semibold ${
                  platform.active
                    ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md"
                    : "bg-orange-50 text-gray-800"
                }`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
                  <Icon size={13} style={{ color: platform.color }} />
                </span>
                {platform.label}
              </div>
            );
          })}
        </div>

        {/* Facebook services card — static content, matches the design */}
        <div className="relative rounded-2xl border border-orange-200 p-6 sm:p-10">
          {/* Decorative floating Facebook icon */}
          <div className="absolute -left-70 bottom-6 -rotate-20 hidden h-60 w-60 items-center justify-center md:flex">
            <img src="/images/Floting-FB_Icon.png" alt="#" />
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Left — image, added manually */}
            <div className="flex min-h-[300px] w-full items-center justify-center rounded-xl sm:min-h-[360px]">
              <img
                src="/images/Service-banner.png"
                alt="Facebook Marketing Services"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Right — details */}
            <div>
              <h3 className="mb-3 text-2xl font-bold text-orange-500">
                Facebook Marketing Services
              </h3>
              <p className="mb-6 text-[15px] leading-relaxed text-gray-600">
                Boost your brand visibility, connect with your ideal audience,
                and drive more traffic, engagement, and sales through strategic
                Facebook marketing campaigns.
              </p>

              <ul className="mb-8 flex flex-col gap-3">
                {facebookServices.map((service, i) => (
                  <li key={service.name} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-[11px] font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold text-orange-500">
                        {service.name}
                      </span>
                      {" - "}
                      {service.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="cursor-pointer rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 active:scale-95"
              >
                View Facebook Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
