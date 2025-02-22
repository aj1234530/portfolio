function MoreProjects() {
  return (
    <div>
      <div className="flex flex-row items-center gap-2 pt-4 px-1">
        <h1 className="font-bold">4. MORE PROJECTS</h1>
      </div>
      <div>
        <ul className="flex flex-col gap-2 px-6">
          <li className="flex flex-row items-center gap-2">
            <h1 className="font-bold">COURSE SELLING APP: </h1>
            <p>TS, React, PostgreSQL, Express</p>
            <a className="font-light text-xs">GITHUB</a>
          </li>
          <li className="flex flex-row items-center gap-2">
            <h1 className="font-bold">REST APIs TESTING APP: </h1>
            <p>TS, Express, React, PostgreSQL</p>
            <a
              href="https://github.com/aj1234530/apistest.git"
              className="font-light text-xs"
            >
              GITHUB
            </a>
          </li>
          <li className="flex flex-row items-center gap-2">
            <h1 className="font-bold">PORTFOLIO-WEBSITE: </h1>
            <p>
              React App deployed on S3 and distributed through CloudFront,
              Github Actions for CI/CD
            </p>
            <a
              href="https://github.com/aj1234530/portfolio"
              target="_blank"
              className="font-light text-xs"
            >
              GITHUB
            </a>
            <a
              href="http://abhi-jay.in"
              target="_blank"
              className="font-light text-xs"
            >
              LIVE
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoreProjects;
