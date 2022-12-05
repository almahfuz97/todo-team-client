import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { connectToDatabase } from "../util/mongodb";

const todo = ({ todos }) => {
  console.log(todos);
  const [task, setTask] = useState(0);

  const handleTask = async (event) => {
    if (event.code === "Enter") {
      const todo = {
        task,
        status: "Not Complete"
      }
      console.log(todo);

      // send task to database from here
      const data = await fetch('http://localhost:3000/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      })
      console.log(data);
    }
  };

  const handleRemoveTask = id => {
    console.log('Clicked');
    // remove task using task id
  }

  const handleCompleteTask = (e, id) => {
    if (e.target.checked === true) {
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
          {
            todos?.map(todo => <div key={todo._id} className="flex justify-between bg-white hover:bg-base-200 p-3 rounded-lg mb-2">
              <input
                type="checkbox"
                onChange={(e) => handleCompleteTask(e)}
                className="checkbox mr-3 border-2 border-gray-600"
              />
              <p className="flex-grow font-semibold">{todo?.task}</p>
              <div className="flex ">
                <p className="font-semibold ml-5 mr-3">{todo?.status}</p>
                <button className="btn btn-xs " onClick={() => handleRemoveTask()}>X</button>
              </div>
            </div>)
          }



          {/* <div className="flex justify-between bg-white hover:bg-base-200 p-3 rounded-lg mb-2">
            <input
              type="checkbox"
              onChange={(e) => handleCompleteTask(e)}
              className="checkbox mr-3 border-2 border-gray-600"
            />
            <p className="flex-grow font-semibold">Complete the todo app</p>
            <div className="flex ">
              <p className="font-semibold ml-5 mr-3">status</p>
              <button className="btn btn-xs " onClick={() => handleRemoveTask()}>X</button>
            </div>
          </div>

          <div className="flex justify-between bg-white hover:bg-base-200 p-3 rounded-lg mb-2">
            <input
              type="checkbox"
              onChange={(e) => handleCompleteTask(e)}
              className="checkbox mr-3 border-2 border-gray-600"
            />
            <p className="flex-grow font-semibold">Complete the todo app</p>
            <div className="flex ">
              <p className="font-semibold ml-5 mr-3">status</p>
              <button onClick={() => handleRemoveTask()} className="btn btn-xs ">X</button>
            </div>
          </div> */}
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

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase();
  const data = await db.collection("todos").find({}).toArray();
  const todos = JSON.parse(JSON.stringify(data));

  return {
    props: { todos: todos },
  }
}
