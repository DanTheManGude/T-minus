import { useEffect, useRef } from "react";

const textAreaId = "mainTaskInput";

function resizeTextArea(element) {
  element.style.height = "auto";
  element.style.height = `${element.scrollHeight}px`;
}

function MainTask(props) {
  const { mainTask, enterMainTask } = props;

  const textAreaRef = useRef(null);

  useEffect(() => {
    const element = textAreaRef.current;
    if (element !== null) {
      resizeTextArea(element);
    }
  }, []);

  const updateMainTask = (event) => {
    const element = event.target;
    enterMainTask(element.value);
    resizeTextArea(element);
  };

  return (
    <div>
      <textarea
        id={textAreaId}
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
