interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  links?: ProjectLink[];
  attributes?: string[];
}

export default function ProjectCard({ title, description, image, links, attributes }: ProjectCardProps) {
  return (
    <div className="bg-white/30 backdrop-blur-xl rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5 p-6 flex flex-col md:flex-row gap-6">
      
      {/* Text always on the left */}
      <div className="flex flex-col justify-center gap-4 flex-1">
        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-900">{title}</h2>
        
        {/* Description */}
        <p className="text-gray-800 mb-6">{description}</p>
        
        {/* Optional divider */}
        {/* {attributes && attributes.length > 0 && <hr className="border-gray-300 my-2" />} */}

        {/* Attributes */}
        {attributes && attributes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {attributes.map((attr, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded"
              >
                {attr}
              </span>
            ))}
          </div>
        )}

        {/* Links styled as buttons, closer to attributes */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-1">
            {links.map((linkItem, idx) => (
              <a
                key={idx}
                href={linkItem.url}
                target="_blank"
                className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                {linkItem.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Image always on the right */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full md:w-48 h-48 object-cover rounded-lg flex-shrink-0"
        />
      )}
    </div>
  );
}
