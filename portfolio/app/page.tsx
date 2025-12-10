import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-300 via-cyan-200 to-blue-400">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6">
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-6 lg:p-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 max-h-[90vh] overflow-auto">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold mb-4 text-blue-900">
              Hi, I’m Toren
            </h1>
            <p className="text-xl text-blue-800 mb-6">
              Glad you're here. I'm a honors student at Texas A&M studying Computer Science. I'm interested in building full scale web applications, machine learning, and basketball.
            </p>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 w-48 h-48 lg:w-64 lg:h-64 relative rounded-full overflow-hidden shadow-xl ring-2 ring-blue-200/40">
            {/* <Image
              src="/profile.jpg"
              alt="Your Name"
              fill
              className="object-cover"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
