import { useState, useEffect } from "react";

import { backgroundUrls, testBackgroundUrl } from "./Constants";
import TimerContainer from "./Components/TimerContainer";

const chooseRandomBackgroundUrl = () =>
  backgroundUrls[Math.floor(Math.random() * backgroundUrls.length)];

function App() {
  const [backgroundUrl, setBackgroundUrl] = useState();
  const isTestingBackground = !!testBackgroundUrl;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchBackgroundUrlRaw = searchParams.get("backgroundUrl");

    let initialBackgroundUrl;

    if (isTestingBackground) {
      initialBackgroundUrl = testBackgroundUrl;
    } else if (searchBackgroundUrlRaw) {
      initialBackgroundUrl = decodeURIComponent(searchBackgroundUrlRaw);
    } else {
      initialBackgroundUrl = chooseRandomBackgroundUrl();
    }

    setBackgroundUrl(initialBackgroundUrl);
  }, []);

  useEffect(() => {
    console.log("backgroundUrl", backgroundUrl);

    if (backgroundUrl) {
      const backgroundUrlSearchParam = encodeURIComponent(backgroundUrl);
      console.log(backgroundUrlSearchParam);
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
