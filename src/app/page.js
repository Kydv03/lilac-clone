import ScrollAnimation from "./components/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="flex justify-between items-center px-16 py-4 text-[#2F3D26]">
        <h1 className="text-3xl font-semibold">Lilac Template</h1>

        <div className="flex space-x-8">
          <a href="#" className="text-xl font-medium">
            Blog
          </a>
          <a href="#" className="text-xl font-medium">
            Contact
          </a>
        </div>
      </nav>
      <ScrollAnimation>
        <section className="grid grid-cols-1 md:grid-cols-2 px-4 py-4 pb-0 gap-4 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="/hero-flower.jpg"
              alt="Flower"
              className="w-[85%] md:w-[75%] pt-8 rounded-t-[300px] md:ml-8"
            />
          </div>

          <div className="space-y-4 text-center md:text-center md:-mt-8 flex flex-col items-center md:items-center pb-20 pr-36">
            <h1 className="text-5xl md:text-7xl font-[550] leading-tight text-[#2F3D26]">
              Live your life <br /> in full bloom
            </h1>

            <p className="text-lg text-[#555]">
              Therapy for Adults in Minneapolis, MN.
            </p>

            <button className="border border-[#2F3D26] px-8 py-3 rounded-md text-[#2F3D26] text-sm tracking-wide hover:bg-[#2F3D26] hover:text-white transition">
              CONNECT WITH ME →
            </button>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#D9D1C5] flex flex-col ">
            <div className="space-y-4 flex flex-col justify-center text-left pl-16 flex-grow">
              <h2 className="text-5xl font-semibold text-[#2F3D26] pb-8 ">
                Live a fulfilling life.
              </h2>

              <p className="text-lg text-[#3A3A3A] leading-relaxed font-medium">
                Life can be challenging—especially when you're trying to balance{" "}
                <br></br>
                <span>your personal and professional life.</span>
              </p>

              <p className="text-lg text-[#3A3A3A] leading-relaxed font-medium">
                It's easy to feel like you're alone in facing these
                challenges,but I <br></br>
                <span> want you to know that I'm here to help.</span>
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#"
                className="block w-full text-center border-t border-[#2F3D26] pt-6 pb-6 tracking-wide text-sm font-medium text-[#2F3D26] hover:bg-[#2F3D26] hover:text-white hover:cursor-pointer transition-all duration-300"
              >
                GET IN TOUCH →
              </a>
            </div>
          </div>

          <div className="h-[700px]">
            <img
              src="/section2.jpg"
              alt="About section image"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="min-h-[600px] px-12 py-32 pb-0 mb-24">
          <h2 className="text-5xl font-semibold text-center mb-16 text-[#2F3D26]">
            My Specialties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#2F3D26] p-4 bg-[#E7E1D7] min-h-[500px] flex flex-col">
              <div>
                <h3 className="text-xl font-semibold text-[#2F3D26]">
                  Self-Esteem
                </h3>
                <p className="text-[#3A3A3A] mt-4 pt-4 text-sm font-medium">
                  Building a strong sense of self-worth is key to living a
                  fulfilled life. Let's work together to bolster your
                  self-esteem.
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow pt-12">
                <img
                  src="/special1.jpg"
                  alt="Self Esteem"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="border border-[#2F3D26] p-4 bg-[#E7E1D7] min-h-[500px] flex flex-col">
              <div>
                <h3 className="text-xl font-semibold text-[#2F3D26]">
                  Relationships
                </h3>
                <p className="text-[#3A3A3A] mt-4 pt-4 text-sm font-medium">
                  Navigating relationships can be complex. I'm here to guide you
                  through these complexities to help you form healthier
                  connections.
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow pt-12">
                <img
                  src="/special2.jpg"
                  alt="Relationships"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="border border-[#2F3D26] p-4 bg-[#E7E1D7] min-h-[500px] flex flex-col">
              <div>
                <h3 className="text-xl font-semibold text-[#2F3D26]">
                  Burnout
                </h3>
                <p className="text-[#3A3A3A] mt-4 pt-4 text-sm font-medium">
                  Feeling overwhelmed by your career is more common than you
                  think. Together, we'll identify strategies to manage and
                  prevent burnout.
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow pt-12">
                <img
                  src="/special3.jpg"
                  alt="Burnout"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src="/section4.jpg"
              alt="Therapy woman"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#B7B0B9] min-h-[800px] flex flex-col">
            <div className="space-y-6 px-10 py-20">
              <h2 className="text-5xl pt-16 font-semibold text-[#2F3D26]">
                You don't have to do this <br />
                <span>all</span> <span className="italic"> alone.</span>
              </h2>

              <p className="text-[#2F3D26] text-lg font-medium">
                If you are facing any of these, there's hope:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-[#2F3D26] text-lg font-medium pt-4">
                <li>Persistent feelings of sadness or hopelessness</li>
                <li>Trouble focusing or making decisions</li>
                <li>Difficulty maintaining relationships</li>
                <li>Feeling constantly exhausted or unmotivated</li>
                <li>A pervasive sense of being overwhelmed</li>
              </ul>

              <p className="text-[#2F3D26] text-lg font-medium pt-4">
                With empathy and guidance, we'll work together to navigate the
                challenges life throws your way.
              </p>
            </div>

            <div className="mt-auto">
              <a
                href="#"
                className="block w-full text-center border-t border-[#2F3D26] pt-6 pb-6 tracking-wide text-sm text-[#2F3D26] font-medium hover:bg-[#2F3D26] hover:text-white hover:cursor-pointer transition-all duration-300"
              >
                WORK WITH ME →
              </a>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="grid grid-cols-1 md:grid-cols-2 bg-[#D9D1C5] px-10 py-20 pb-40 gap-10">
          <div className="space-y-6 flex flex-col justify-center pl-20">
            <h2 className="text-5xl font-semibold text-[#2F3D26]">
              Hi, I'm Lilac.
            </h2>

            <p className="text-[#2F3D26] leading-relaxed mt-4 text-lg font-medium">
              I'm committed to providing a safe and supportive environment where
              we can explore your thoughts, feelings, and behaviors. With
              empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>

            <div className="flex justify-center font-medium mt-16">
              <button className="border border-[#2F3D26] px-6 py-2 w-fit hover:bg-[#2F3D26] hover:text-white transition-colors duration-300 cursor-pointer">
                LET'S CHAT →
              </button>
            </div>
          </div>

          <div className="relative w-full flex justify-center">
            <img
              src="/section5-main.jpg"
              alt="Lilac main"
              className="w-[64%] rounded-t-[300px]"
            />

            <img
              src="/section5-small.jpg"
              alt="Lilac small"
              className="absolute bottom-[-65px] right-1 w-72 h-72 rounded-full object-cover"
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="grid grid-cols-1 md:grid-cols-2 px-10 py-16 gap-10">
          <div className="flex justify-center">
            <img
              src="/section6.jpg"
              alt="FAQ image"
              className="w-[65%] rounded-t-[300px]"
            />
          </div>

          <div className="space-y-10 flex flex-col justify-center">
            <h2 className="text-5xl font-semibold text-[#2F3D26]">FAQs</h2>

            <div className="space-y-6">
              <a
                href="#"
                className="border-t border-b border-[#2F3D26] pt-4 pb-4 block hover: cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl text-[#2F3D26]/40">+</span>
                  <span className="text-4xl font-semibold text-[#2F3D26]">
                    Do you take insurance?
                  </span>
                </div>
              </a>

              <a
                href="#"
                className="border-b border-[#2F3D26] pb-4 block hover: cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl text-[#2F3D26]/40">+</span>
                  <span className="text-4xl font-semibold text-[#2F3D26]">
                    What are your rates?
                  </span>
                </div>
              </a>

              <a
                href="#"
                className="border-b border-[#2F3D26] pb-4 block hover: cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl text-[#2F3D26]/40">+</span>
                  <span className="text-4xl font-semibold text-[#2F3D26]">
                    Do you have any openings?
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="bg-[#D9D1C5] px-10 py-20">
          <h2 className="text-5xl font-semibold text-center text-[#2F3D26] pt-12 mb-14">
            My Professional Background
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <a
              href="#"
              className="flex justify-between items-center border-t border-b border-[#1a2913] pt-4 pb-4 hover:cursor-pointer"
            >
              <p className="text-2xl font-medium text-[#2F3D26]">Education</p>
              <span className="text-3xl text-[#2F3D26]">+</span>
            </a>

            <a
              href="#"
              className="flex justify-between items-center border-b border-[#2F3D26] pt-2 pb-2 hover:cursor-pointer"
            >
              <p className="text-2xl font-medium text-[#2F3D26]">Licensure</p>
              <span className="text-3xl text-[#2F3D26]">+</span>
            </a>

            <a
              href="#"
              className="flex justify-between items-center border-b border-[#2F3D26] pt-2 pb-2 hover:cursor-pointer"
            >
              <p className="text-2xl font-medium text-[#2F3D26]">
                Certifications
              </p>
              <span className="text-3xl text-[#2F3D26]">+</span>
            </a>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="min-h-[600px] bg-[hsla(56.79,28.57%,38.43%,1)] text-white px-10 py-16 text-center flex flex-col justify-between">
          <div className="pt-10">
            <h2 className="text-5xl font-semibold mb-6">Get started today.</h2>

            <div className="max-w-2xl font-medium text-lg mx-auto pt-4">
              <p>
                Ready to take the first step towards a happier, healthier you?
              </p>
              <p>
                Contact me to book your first session. I look forward to
                starting this
              </p>
              <p> therapeutic journey with you.</p>
            </div>
          </div>

          <div className="pb-10">
            <button className="border border-white px-6 py-3 font-medium text-sm hover:bg-white hover:text-[#6B6B34] transition-all duration-300 cursor-pointer">
              GET IN TOUCH →
            </button>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <footer className="min-h-[400px] bg-[#F1ECE3] px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div className="space-y-4">
              <h3 className="text-4xl font-semibold text-[#2F3D26]">
                Lilac Template
              </h3>
              <p className="text-[#2F3D26] text-lg font-medium pt-6">
                123 Example Road <br />
                Minneapolis, MN
              </p>
              <p className="text-[#2F3D26] text-lg font-medium underline pt-4">
                <a href="#">email@example.com</a>
                <br></br>
                <a href="#">(555) 555-5555</a>
              </p>
            </div>

            <div className="md:text-right">
              <h3 className="text-4xl font-semibold text-[#2F3D26] mb-4 md:text-right">
                Hours
              </h3>
              <p className="text-[#2F3D26] text-lg font-medium pt-6 md:text-right">
                Monday – Friday <br />
                10am – 6pm
              </p>
            </div>

            <div className="md:text-right">
              <h3 className="text-4xl font-semibold text-[#2F3D26] mb-4">
                Find
              </h3>
              <div className="space-y-2 pt-6">
                <p>
                  <a
                    href="#"
                    className="text-lg font-medium underline text-[#2F3D26]"
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-lg font-medium underline text-[#2F3D26]"
                  >
                    Contact
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-lg font-medium underline text-[#2F3D26]"
                  >
                    Blog
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </ScrollAnimation>

      <div className="w-full bg-[#D9D1C5] text-center py-10 text-[#2F3D26]">
        <div className="space-x-4 text-md font-medium">
          <a href="#" className="underline">
            Privacy & Cookies Policy
          </a>
          <a href="#" className="underline">
            Good Faith Estimate
          </a>
          <a href="#" className="underline">
            Website Terms & Conditions
          </a>
          <a href="#" className="underline">
            Disclaimer
          </a>
        </div>

        <p className="mt-4 text-md">
          Website Template Credits:
          <a href="#" className="font-medium underline">
            {" "}
            Go Bloom Creative
          </a>
        </p>
        <p className="mt-12 text-md ">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
      </div>
    </main>
  );
}
