import { useState, useEffect } from "react";

import { backgroundUrls, testBackgroundUrl } from "./Constants";
import TimerContainer from "./Components/TimerContainer";

const chooseRandomBackgroundUrl = () =>
  backgroundUrls[Math.floor(Math.random() * backgroundUrls.length)];

const getPotentialBackgroundUrlPath = () => {
  const parts = window.location.pathname.split("/");
  if (parts.length < 3) {
    return "";
  }
  return parts[2];
};

function App() {
  const [backgroundUrl, setBackgroundUrl] = useState();
  const isTestingBackground = !!testBackgroundUrl;

  useEffect(() => {
    const pathBackgroundUrlRaw = getPotentialBackgroundUrlPath();

    let initialBackgroundUrl;

    if (isTestingBackground) {
      initialBackgroundUrl = testBackgroundUrl;
    } else if (pathBackgroundUrlRaw) {
      initialBackgroundUrl = atob(pathBackgroundUrlRaw);
    } else {
      initialBackgroundUrl = chooseRandomBackgroundUrl();
    }

    setBackgroundUrl(initialBackgroundUrl);
  }, [isTestingBackground]);

  useEffect(() => {
    if (backgroundUrl) {
      const backgroundUrlPath = btoa(backgroundUrl);

      if (getPotentialBackgroundUrlPath() !== backgroundUrlPath) {
        window.location.assign(`/t-minus/${backgroundUrlPath}`);
      }
    }
  }, [backgroundUrl]);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <TimerContainer
        updateBackground={() => {
          if (isTestingBackground) {
            return;
          }
          let newBackground = backgroundUrl;
          while (newBackground === backgroundUrl) {
            newBackground = chooseRandomBackgroundUrl();
          }
          setBackgroundUrl(newBackground);
        }}
        isTestingBackground={isTestingBackground}
      />
    </div>
  );
}

export default App;
