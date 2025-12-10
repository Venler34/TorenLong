interface ContactCardProps {
  title: string;
  link: string;
  isExternal?: boolean; // optional, for target="_blank"
}

export default function ContactCard({ title, link, isExternal = false }: ContactCardProps) {
  return (
    <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02] flex flex-col items-start gap-4">
      <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
      <a
        href={link}
        target={isExternal ? "_blank" : "_self"}
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-0.5 cursor-pointer"
      >
        Click Here
      </a>
    </div>
  );
}
