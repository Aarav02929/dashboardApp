"use client";

import React, { useState } from "react";

const Tasks = [
  {
    id: 1,
    title: "Finish project report",
    description: "Complete the final report for the project and submit it.",
    status: "In progress",
    dueDate: "2025-02-18",
  },
  {
    id: 2,
    title: "Update website content",
    description: "Revise the homepage text to reflect recent changes.",
    status: "Pending",
    dueDate: "2025-02-20",
  },
  {
    id: 3,
    title: "Team meeting",
    description: "Discuss the project milestones and progress with the team.",
    status: "Completed",
    dueDate: "2025-02-15",
  },
];

const Task = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tasks, setTasks] = useState(Tasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });
  const [editingTask, setEditingTask] = useState<number | null>(null);
  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "",
  });

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    if (newTask.title && newTask.description && newTask.dueDate) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          ...newTask,
        },
      ]);
      setNewTask({
        title: "",
        description: "",
        dueDate: "",
        status: "Pending",
      });
      setIsModalOpen(false);
    }
  };

  const handleEdit = (task: (typeof Tasks)[0]) => {
    setEditingTask(task.id);
    setEditTask({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      status: task.status,
    });
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    if (editTask.title && editTask.description && editTask.dueDate) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask ? { ...task, ...editTask } : task
        )
      );
      setEditingTask(null);
      setEditTask({
        title: "",
        description: "",
        dueDate: "",
        status: "",
      });
      setIsModalOpen(false);
    }
  };

  const handleComplete = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: "Completed" } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text ">
            Tasks
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            + Add Task
          </button>
        </div>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full p-4 pl-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <section className="space-y-4">
          {filteredTasks.map((Task) => (
            <div
              key={Task.id}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm p-6 border-l-4 hover:shadow-md transition-all duration-200"
              style={{
                borderColor:
                  Task.status === "Completed"
                    ? "#22c55e"
                    : Task.status === "In progress"
                    ? "#eab308"
                    : "#ef4444",
              }}
            >
              <div className="flex flex-col flex-grow mr-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {Task.title}
                </h2>
                <p className="text-gray-600 mt-2">{Task.description}</p>
                <div className="flex items-center mt-3 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {Task.dueDate}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span
                  className={`px-4 py-2 text-sm font-medium rounded-full ${
                    Task.status === "Completed"
                      ? "text-green-700 bg-green-100"
                      : Task.status === "In progress"
                      ? "text-yellow-700 bg-yellow-100"
                      : "text-red-700 bg-red-100"
                  }`}
                >
                  {Task.status}
                </span>
                <button
                  onClick={() => handleEdit(Task)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                {Task.status !== "Completed" && (
                  <button
                    onClick={() => handleComplete(Task.id)}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => handleDelete(Task.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Modal with improved styling */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md m-4 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {editingTask ? "Edit Task" : "Add New Task"}
            </h2>
            <input
              type="text"
              placeholder="Task Title"
              className="w-full p-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={editingTask ? editTask.title : newTask.title}
              onChange={(e) =>
                editingTask
                  ? setEditTask({ ...editTask, title: e.target.value })
                  : setNewTask({ ...newTask, title: e.target.value })
              }
            />
            <textarea
              placeholder="Task Description"
              className="w-full p-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              value={editingTask ? editTask.description : newTask.description}
              onChange={(e) =>
                editingTask
                  ? setEditTask({ ...editTask, description: e.target.value })
                  : setNewTask({ ...newTask, description: e.target.value })
              }
            />
            <input
              type="date"
              className="w-full p-3 mb-6 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={editingTask ? editTask.dueDate : newTask.dueDate}
              onChange={(e) =>
                editingTask
                  ? setEditTask({ ...editTask, dueDate: e.target.value })
                  : setNewTask({ ...newTask, dueDate: e.target.value })
              }
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingTask(null);
                }}
                className="px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={editingTask ? handleUpdate : handleAddTask}
                className="px-6 py-2.5 text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                {editingTask ? "Update Task" : "Add Task"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
