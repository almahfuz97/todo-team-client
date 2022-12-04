import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const todo = () => {
  const [task, setTask] = useState(0);

  const handleTask = (event) => {
    if (event.code === "Enter") {
      console.log(task);
      // send task to database from here
    }
  };

  const handleRemoveTask = id => {
    console.log('Clicked');
    // remove task using task id
  }

  const handleCompleteTask = (e, id) =>{
    if(e.target.checked === true){
      console.log("Task completed");
      // save completed task in database.
    }
  }

  return (
    <div className="bg-black min-h-screen p-10 pb-7 flex flex-col">
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="text-white text-3xl font-semibold mb-4">Tasks</h3>
          <button className="bg-base-300 hover:bg-base-300 btn btn-sm text-black  capitalize"><AiOutlineRight className="mr-1"></AiOutlineRight> <p>Completed <span>0</span></p> </button>
        </div>

        {/* Tasks container */}
        <div className="overflow-y-scroll h-[73vh]" id="task-container">

          {/* map tasks from here */}

          <div className="flex justify-between bg-white hover:bg-base-200 p-3 rounded-lg mb-2">
            <input
              type="checkbox"
              onChange={(e)=>handleCompleteTask(e)}
              className="checkbox mr-3 border-2 border-gray-600"
            />
            <p className="flex-grow font-semibold">Complete the todo app</p>
            <div className="flex ">
              <p className="font-semibold ml-5 mr-3">status</p>
              <button className="btn btn-xs " onClick={()=>handleRemoveTask()}>X</button>
            </div>
          </div>

          <div className="flex justify-between bg-white hover:bg-base-200 p-3 rounded-lg mb-2">
            <input
              type="checkbox"
              onChange={(e)=>handleCompleteTask(e)}
              className="checkbox mr-3 border-2 border-gray-600"
            />
            <p className="flex-grow font-semibold">Complete the todo app</p>
            <div className="flex ">
              <p className="font-semibold ml-5 mr-3">status</p>
              <button className="btn btn-xs " onClick={()=>handleRemoveTask()}>X</button>
            </div>
          </div>

          <div className="flex justify-between bg-white hover:bg-base-200 p-3 rounded-lg mb-2">
            <input
              type="checkbox"
              onChange={(e)=>handleCompleteTask(e)}
              className="checkbox mr-3 border-2 border-gray-600"
            />
            <p className="flex-grow font-semibold">Complete the todo app</p>
            <div className="flex ">
              <p className="font-semibold ml-5 mr-3">status</p>
              <button onClick={()=>handleRemoveTask()} className="btn btn-xs ">X</button>
            </div>
          </div>
        </div>
      </div>

      {/* Task input  */}
      <div>
        <input
          type="text"
          name="addTask"
          placeholder="Add a task"
          className="input input-bordered w-full "
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleTask}
        />
      </div>
    </div>
  );
};

export default todo;
