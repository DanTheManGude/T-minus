import { useState, useEffect } from "react";

import { backgroundUrls } from "./Constants";
import TimerContainer from "./Components/TimerContainer";

const chooseRandomBackgroundUrl = () =>
  backgroundUrls[Math.floor(Math.random() * backgroundUrls.length)];

function App() {
  const [backgroundUrl, setBackgroundUrl] = useState();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialBackgroundUrlRaw = searchParams.get("backgroundUrl");
    if (initialBackgroundUrlRaw) {
      const decodedUrl = decodeURIComponent(initialBackgroundUrlRaw);
      setBackgroundUrl(decodedUrl);
      console.log("decodedUrl", decodedUrl);
    }
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
          let newBackground = backgroundUrl;
          while (newBackground === backgroundUrl) {
            newBackground = chooseRandomBackgroundUrl();
          }
          setBackgroundUrl(newBackground);
        }}
      />
    </div>
  );
}

export default App;
