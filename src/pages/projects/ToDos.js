import { useDispatch, useSelector } from "react-redux";
// import { setUserProfile } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { setProductList, setTaskList } from "../../redux/actions/actions";
import { CustomDataTable } from "./components/customDataTable";
import { setMeta } from "../../01utils/functions";

const ToDos = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const TaskList = authState?.TaskList;
  useEffect(() => {
    setMeta("https://devkumar-parekh.vercel.app/images/projects/todos.gif");
  }, []);
  const [taskToDo, setTaskTodo] = useState("");
  const deleteTask = (index) => {
    const temp = TaskList;

    dispatch(
      setTaskList(
        temp.filter((item, i) => {
          return index != i;
        })
      )
    );
  };
  return (
    // <div className="d-flex align-items-center justify-content-center vh-100 ">
    <div className="container">
      <div className="row justify-content-center mt-5 ">
        <div className="col-md-10">
          <div className="card my-3 text-warning bg-dark ">
            <div
              className="card-body p-5 bg-yellow-pink rounded"
              style={{
                background: `linear-gradient(320.82deg, #fa709a61 0%, #000000 100%)`,
              }}
            >
              <div className="row">
                <div className="col-md-6">
                  <h1 className="text-center mb-2 text-light">
                    Add Tasks To Do
                  </h1>
                  <div>
                    <div className=" mb-3">
                      <label className="text-light">Task</label>
                      <textarea
                        className="form-control"
                        id="floatingInput"
                        style={{ height: "100px" }}
                        value={taskToDo}
                        onChange={(e) => setTaskTodo(e.target.value)}
                      />
                    </div>

                    <div className="mb-3 row p-2 ">
                      <button
                        className="btn btn-outline-light "
                        onClick={() => {
                          if (taskToDo != "") {
                            dispatch(setTaskList([...TaskList, taskToDo]));
                            setTaskTodo("");
                          }
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 text-light table-responsive"
                  style={{ maxHeight: "80vh", overflow: "auto" }}
                >
                  <table
                    className="table table-dark border"
                    style={{ background: "#ffffff00" }}
                  >
                    <thead>
                      <tr>
                        <th>Task</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TaskList?.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>{item}</td>
                            <td>
                              <button
                                className="btn btn-danger fs-5"
                                onClick={() => {
                                  deleteTask(key);
                                }}
                              >
                                🗑
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ToDos;
