export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="md:flex md:space-x-10">
        {/* Profile Section */}
        <div className="md:w-1/3 flex flex-col items-center text-center md:text-left">
          <img
            src="/profile.jpg" // Change this to your actual image path
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover"
          />
          <h1 className="text-3xl font-bold mt-4">ABHIMANYU JAY</h1>
          <a href="https://abhi-jay.in" className="text-blue-500 italic">
            abhi-jay.in
          </a>
          <div className="mt-2 space-y-2 text-gray-700">
            <p>
              <a href="https://github.com/aji234530" className="text-blue-500">
                GitHub
              </a>
            </p>
            <p>plzkepmeposted@gmail.com</p>
          </div>
          {/* Skills */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Skills</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>JavaScript, TypeScript, React, Next.js, Tailwind</li>
              <li>MongoDB, PostgreSQL</li>
              <li>AWS (EC2, S3, CloudFront), Git</li>
              <li>Docker, Kubernetes, GitHub Actions</li>
            </ul>
          </div>
          {/* Education */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Education</h2>
            <p className="text-gray-600 mt-2">
              Attended the SUPER-30 bootcamp under mentorship of Harkirat Singh
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold">Projects</h2>
          {/* Project 1 */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Trading Application{" "}
              <a href="#" className="text-blue-500">
                GITHUB
              </a>{" "}
              <a href="#" className="text-blue-500">
                DEMO
              </a>{" "}
              <a href="#" className="text-blue-500">
                LIVE
              </a>
            </h3>
            <p className="text-gray-700">
              <strong>TECH:</strong> Microservices (Next.js, Express, TS),
              Redis, WebSockets, Docker, Kubernetes, TurboRepo, CI/CD
            </p>
          </div>

          {/* Project 2 */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Link Shortening App{" "}
              <a href="#" className="text-blue-500">
                GITHUB
              </a>{" "}
              <a href="#" className="text-blue-500">
                DEMO
              </a>
            </h3>
            <p className="text-gray-700">
              <strong>TECH:</strong> TypeScript, React, Redis, Express, CRON Job
            </p>
          </div>

          {/* Project 3 */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Typing Test App{" "}
              <a href="#" className="text-blue-500">
                GITHUB
              </a>{" "}
              <a href="#" className="text-blue-500">
                DEMO
              </a>
            </h3>
            <p className="text-gray-700">
              <strong>TECH:</strong> TypeScript, React, AWS S3, CloudFront,
              CI/CD
            </p>
          </div>

          {/* More Projects */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">More Projects</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                <strong>Course Selling App</strong> –{" "}
                <a href="#" className="text-blue-500">
                  GITHUB
                </a>
              </li>
              <li>
                <strong>REST API Testing App</strong> –{" "}
                <a href="#" className="text-blue-500">
                  GITHUB
                </a>
              </li>
              <li>
                <strong>Snake & Ladder Game</strong> –{" "}
                <a href="#" className="text-blue-500">
                  GITHUB
                </a>
              </li>
              <li>
                <strong>Portfolio Website</strong> (Hosted on S3 & CloudFront)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
