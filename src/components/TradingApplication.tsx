function TradingApplication() {
  return (
    <div>
      <div className="flex flex-row items-center gap-2 pt-2 px-1">
        <h1 className="font-bold">1. TRADING APPLICATION</h1>
        <div className="flex flex-row gap-2 font-light font text-xs ">
          <a href="https://github.com/aj1234530/proboV2.0" target="_blank">
            GITHUB
          </a>
          <a
            href="https://www.loom.com/share/67296796d0424c179b467d93b4802eac?sid=7b4e0d1b-942f-4b89-a6e4-b2616319572d"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEMO
          </a>
          <a href="http://trade.abhi-jay.in" target="_blank">
            LIVE
          </a>
        </div>
      </div>
      <div>
        <p className="px-2 pt-2">
          <strong>TECH:</strong> Microservices (Next.js, Express, TS), Redis,
          WebSockets, Docker, Kubernetes, TurboRepo, CI/CD
        </p>
        <h2 className="px-2 pt-2 font-bold">Description:</h2>
        <ul className="list-disc px-6">
          <li>
            Four Micro-services(NEXT JS frontend, rest api server, websocket
            server, trading engine) built in turborepo
          </li>
          <li>redis used as pub-sub and queues,</li>
          <li>docker for containerisation and k8 as container orchestration</li>
        </ul>
      </div>
    </div>
  );
}

export default TradingApplication;
