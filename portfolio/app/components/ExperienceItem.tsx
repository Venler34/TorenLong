interface ExperienceItemProps {
  company: string;
  role: string;
  year: string;
  details: string;
}

export default function ExperienceItem({ company, role, year, details }: ExperienceItemProps) {
  return (
    <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02]">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-2xl font-bold text-blue-900">{company}</h3>
        <span className="text-gray-700 font-medium">{year}</span>
      </div>
      <p className="text-blue-800 font-semibold mb-2">{role}</p>
      <p className="text-gray-800">{details}</p>
    </div>
  );
}
