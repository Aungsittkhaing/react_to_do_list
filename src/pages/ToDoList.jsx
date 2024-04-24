import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "to learn about react(js)",
    "to eat snack",
    "to go cafe",
    "to chat with my love",
  ]);
  const [newTasks, setNewTasks] = useState([]);

  let handleInputChange = (e) => {
    setNewTasks(e.target.value);
  };
  let addTaskBtn = () => {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  };
  let deleteTaskBtn = (index) => {
    // let deleteTask = tasks.filter((element, i) => i !== index);
    // setTasks(deleteTask);
    setTasks((t) => t.filter((element, i) => i != index));
  };
  let moveTaskUp = (index) => {
    if (index > 0) {
      let upTasks = [...tasks];
      [upTasks[index], upTasks[index - 1]] = [
        upTasks[index - 1],
        upTasks[index],
      ];
      setTasks(upTasks);
    }
  };
  let moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      let upTasks = [...tasks];
      [upTasks[index], upTasks[index + 1]] = [
        upTasks[index + 1],
        upTasks[index],
      ];
      setTasks(upTasks);
    }
  };
  return (
    <div className="">
      <h3 className="text-gray-500 font-bold text-3xl mt-3 text-center">
        My Daily Lists
      </h3>

      <div className="flex justify-center mt-3">
        <input
          type="text"
          className="block p-2 w-[75%] text-gray-300 border-gray-300 dark:bg-gray-700 rounded-lg"
          value={newTasks}
          onChange={handleInputChange}
        />
        <button
          onClick={addTaskBtn}
          className="px-3 mx-3 bg-gray-400 text-white rounded-lg active:ring-2 active:ring-gray-700 duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center">
        <ul className="my-4 space-y-3 p-4 bg-white">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="p-2 bg-blue-500 rounded-lg font-bold text-xl flex justify-between items-center"
            >
              <span className="text-white me-2">{task}</span>
              <div className="">
                <button
                  className="bg-gray-500 px-2 py-3 text-white rounded-lg me-2"
                  onClick={() => deleteTaskBtn(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>

                <button
                  className="bg-gray-500 px-2 py-3 text-white rounded-lg me-2"
                  onClick={() => moveTaskUp(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
                <button
                  className="bg-gray-500 px-2 py-3 text-white rounded-lg"
                  onClick={() => moveTaskDown(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
