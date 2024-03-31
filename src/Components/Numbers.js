import { useEffect, useRef } from "react";

function Numbers(props) {
  const { time, isRunning, enterTime } = props;

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const resizeFont = () => {
    const height = containerRef.current.style.height;
    if (height) {
      const fontSize = parseInt(height) * 0.85;
      containerRef.current.style.fontSize = `${fontSize}px`;
      inputRef.current.style.fontSize = `${fontSize}px`;
    }
  };

  useEffect(() => {
    resizeFont();

    if (window.ResizeObserver) {
      const observer = new ResizeObserver(() => {
        resizeFont();
      });

      observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
      };
    } else {
      console.log("ope");
      return () => {};
    }
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const updateMinutes = (event) => {
    const newMinutes = event.target.value;
    const newTime = newMinutes * 60;
    enterTime(newTime);
  };

  return (
    <div className="numbersContainer" ref={containerRef}>
      <input
        size={2}
        className="minutesInput"
        readOnly={isRunning}
        type="text"
        value={minutes}
        autoComplete="false"
        onChange={updateMinutes}
        style={isRunning ? { cursor: "not-allowed" } : {}}
        ref={inputRef}
      />
      :{String(seconds).padStart(2, "0")}
    </div>
  );
}

export default Numbers;
