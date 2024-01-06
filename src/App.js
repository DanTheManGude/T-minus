import { useState, useEffect } from "react";

import { backgroundUrls, testBackgroundUrl } from "./Constants";
import TimerContainer from "./Components/TimerContainer";

const chooseRandomBackgroundUrl = () =>
  backgroundUrls[Math.floor(Math.random() * backgroundUrls.length)];

function App() {
  const [backgroundUrl, setBackgroundUrl] = useState();
  const isTestingBackground = !!testBackgroundUrl;

  useEffect(() => {
    const pathBackgroundUrlRaw = window.location.pathname.slice(1);

    let initialBackgroundUrl;

    if (isTestingBackground) {
      initialBackgroundUrl = testBackgroundUrl;
    } else if (pathBackgroundUrlRaw) {
      initialBackgroundUrl = decodeURIComponent(pathBackgroundUrlRaw);
    } else {
      initialBackgroundUrl = chooseRandomBackgroundUrl();
    }

    setBackgroundUrl(initialBackgroundUrl);
  }, [isTestingBackground]);

  useEffect(() => {
    if (backgroundUrl) {
      const backgroundUrlPath = encodeURIComponent(backgroundUrl);

      if (window.location.pathname.slice(1) !== backgroundUrlPath) {
        window.location.assign(backgroundUrlPath);
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
