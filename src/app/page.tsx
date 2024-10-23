"use client";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  const assignments = [
    {
      title: "Business Assignment",
      description: "Get professional help with your business assignments. We cover all topics, from marketing to finance.",
      imageUrl: "/bg.jpg",
      whatsappLink: "https://wa.me/1234567890",
    },
    {
      title: "Math Assignment",
      description: "Struggling with math problems? Let us help you solve them and improve your grades.",
      imageUrl: "/bg.jpg",
      whatsappLink: "https://wa.me/1234567890",
    },
    {
      title: "Computer Science Assignment",
      description: "Get assistance with programming, algorithms, and other computer science topics.",
      imageUrl: "/bg.jpg",
      whatsappLink: "https://wa.me/1234567890",
    },
    {
      title: "Economics Assignment",
      description: "Need help with supply and demand or economic theory? We've got you covered.",
      imageUrl: "/bg.jpg",
      whatsappLink: "https://wa.me/1234567890",
    },
    {
      title: "Psychology Assignment",
      description: "Get expert help with psychology papers and research projects.",
      imageUrl: "/bg.jpg",
      whatsappLink: "https://wa.me/1234567890",
    },
    {
      title: "Marketing Assignment",
      description: "Let us assist you with your marketing strategies and case studies.",
      imageUrl: "/bg.jpg",
      whatsappLink: "https://wa.me/1234567890",
    },
    {
      title: "History Assignment",
      description: "Get professional help with history papers and research.",
      imageUrl: "/bg.jpg",
      whatsappLink: "https://wa.me/1234567890",
    },
    {
      title: "Physics Assignment",
      description: "Need help with complex physics problems? We're here to assist.",
      imageUrl: "/bg.jpg",
      whatsappLink: "https://wa.me/1234567890",
    },
    {
      title: "Chemistry Assignment",
      description: "Struggling with chemistry? Our experts can guide you through.",
      imageUrl: "/bg.jpg",
      whatsappLink: "https://wa.me/1234567890",
    },
    {
      title: "Law Assignment",
      description: "Get professional assistance with legal case studies and assignments.",
      imageUrl: "/bg.jpg",
      whatsappLink: "https://wa.me/1234567890",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            Get Your Assignments Done with Ease
          </h1>
          <p className="text-white text-lg md:text-2xl lg:text-3xl mb-8 animate-fadeInUp delay-1s">
            Fast, reliable, and affordable assignment help for university students.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 animate-bounce">
            <Link href={"https://wa.me/1234567890"}>Order Now</Link>
          </button>
        </div>

        {/* Animation Keyframes */}
        <style jsx>{`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }
          .animate-fadeInUp.delay-1s {
            animation-delay: 1s;
          }
        `}</style>
      </section>

      {/* Assignment Cards Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h2>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment, index) => (
              <div
                key={index}
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300"
              >
                {/* Image */}
                <img
                  src={assignment.imageUrl}
                  alt={assignment.title}
                  className="w-full h-48 object-cover border-4"
                />

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{assignment.title}</h2>
                  <p className="text-gray-700 text-base mb-4">
                    {assignment.description}
                  </p>

                  {/* WhatsApp Button */}
                  <a
                    href={assignment.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}
