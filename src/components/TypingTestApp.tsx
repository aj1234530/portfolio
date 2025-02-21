function TypingTestApp() {
  return (
    <div>
      <div className="flex flex-row items-center gap-2 pt-2 px-1">
        <h1 className="font-bold">3. TYPING TEST APP</h1>
        <div className="flex flex-row gap-2 font-light text-xs">
          <a href="#">DEMO</a>
          <a href="#">GITHUB</a>
        </div>
      </div>
      <div>
        <p className="px-2 pt-2">
          <strong>TECH:</strong> TypeScript, React, Amazon S3, CloudFront, CI/CD
        </p>
        <h2 className="px-2 pt-2 font-bold">Description:</h2>
        <ul className="list-disc px-6">
          <li>Frontend web app</li>
          <li>
            Deployed on object storage (S3) and distributed through CDN
            (CloudFront)
          </li>
          <li>Uses GitHub Actions for CI/CD</li>
        </ul>
      </div>
    </div>
  );
}

export default TypingTestApp;
