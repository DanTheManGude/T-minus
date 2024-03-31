import { useEffect, useRef } from "react";

function MainTask(props) {
  const { mainTask, enterMainTask } = props;

  const textAreaRef = useRef(null);

  useEffect(() => {
    if (window.ResizeObserver) {
      const observer = new ResizeObserver(() => {
        const textAreaHeight = textAreaRef.current.style.height;
        if (textAreaHeight) {
          const fontSize = parseInt(textAreaHeight) - 12;
          textAreaRef.current.style.fontSize = `${fontSize}px`;
        }
      });

      observer.observe(textAreaRef.current);

      return () => {
        observer.disconnect();
      };
    } else {
      console.log("ope");
      return () => {};
    }
  }, []);

  const updateMainTask = (event) => {
    const element = event.target;
    enterMainTask(element.value);
  };

  return (
    <div>
      <textarea
        id="mainTaskInput"
        ref={textAreaRef}
        type="text"
        value={mainTask}
        autoComplete="false"
        onChange={updateMainTask}
        rows={1}
      />
    </div>
  );
}

export default MainTask;
