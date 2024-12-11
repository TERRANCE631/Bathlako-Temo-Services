import { AddComments } from "./components/AddComments";
import { ShowComments } from "./components/ShowComments";
import { useState } from "react";

export function RateUS() {
    const [taskList, setTasklist] = useState([]);
    const [task, setTask] = useState({})

    // useEffect(() => {
    //   localStorage.setItem("taskList", JSON.stringify(taskList))
    // }, [taskList]);

    return (
        <div className="mt-20">

            <AddComments
                taskList={taskList}
                setTasklist={setTasklist}
                task={task}
                setTask={setTask}
            />
            <ShowComments
                taskList={taskList}
                setTasklist={setTasklist}
                setTask={setTask}
                task={task}
            />

        </div>
    )
}
