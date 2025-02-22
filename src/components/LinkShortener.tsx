function LinkShortenerer() {
  return (
    <div>
      <div className="flex flex-row items-center gap-2 pt-2 px-1">
        <h1 className="font-bold">2. LINK SHORTENING APP</h1>
        <div className="flex flex-row gap-2 font-light text-xs">
          {/* <a href="#">DEMO</a> */}
          <a href="https://github.com/aj1234530/linkShortnerV2" target="_blank">
            GITHUB
          </a>
        </div>
      </div>
      <div>
        <p className="px-2 pt-2">
          <strong>TECH:</strong> TypeScript, React, Redis, Express, PostgreSQL,
          CRON JOB
        </p>
        <h2 className="px-2 pt-2 font-bold">Description:</h2>
        <ul className="list-disc px-6">
          <li>Redis used as an in-memory store for link counts</li>
          <li>Batch updating analytics to postgres at scheduled interval</li>
        </ul>
      </div>
    </div>
  );
}

export default LinkShortenerer;
