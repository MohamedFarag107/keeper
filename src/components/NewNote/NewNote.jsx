import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../Colors/Colors";
import Modal from "../Modal/Modal";
import { notesActions } from "../../store/notesSlice";

function NewNote({ onClick }) {
  const taskTitleRef = useRef();
  const taskContentRef = useRef();
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch();
  const [color, setColor] = useState(colors[0]);
  const colorName = (name) => {
    setColor(() => {
      return colors.find((color) => color.name === name);
    });
  };
  const addTask = () => {
    if (
      taskContentRef.current.value.trim().length > 0 &&
      taskTitleRef.current.value.trim().length > 0
    ) {
      const task = {
        title: taskTitleRef.current.value,
        content: taskContentRef.current.value,
        time: new Date().toLocaleDateString(),
        id: new Date().getTime(),
        taskColor: color,
      };
      dispatch(notesActions.addNote(task));
      onClick();
    }
  };
  return (
    <Modal>
      <div
        className={`max-w-[600px] mt-48 m-auto p-2 rounded-md transition`}
        style={{ backgroundColor: color.lightBG, color: color.text }}
      >
        <Colors colorName={colorName} />
        <input
          type="text"
          ref={taskTitleRef}
          placeholder="Title"
          className="font-bold text-2xl bg-transparent outline-none placeholder:text-inherit mb-4"
        />
        <textarea
          ref={taskContentRef}
          className="w-full min-h-[200px] pl-4 bg-transparent outline-none resize-none"
          name="task"
          id="task"
        ></textarea>
        <div className="flex gap-2">
          <button
            className=" w-full py-2 px-6 rounded-sm border font-bold"
            style={{ borderColor: color.text, backgroundColor: color.darkBG }}
            onClick={addTask}
          >
            Add New Note
          </button>
          <button
            className="py-2 px-6 rounded-sm border font-bold"
            style={{ borderColor: color.text, backgroundColor: color.darkBG }}
            onClick={onClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default NewNote;
