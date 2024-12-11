
export function AddComments({taskList, setTasklist, task, setTask}) {
    const handleSubmit = (e) => {
        e.preventDefault();

            //Adding
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value, 
                time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
            }
            setTasklist([...taskList, newTask]);
            setTask({});
        }
        
    return (
        <section className="addTask dark:bg-gray-700">
            <p className="text-center py-5 text-gray-700 dark:text-gray-300 text-3xl font-bold underline underline-offset-8">Feedback</p>
            <form onSubmit={handleSubmit}>
                <input className="dark:bg-gray-600 dark:text-white" type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="Type your comment here..." onChange={e => setTask({...task, name: e.target.value})}/>
                <button hidden={ task.name ? "" : "disabled" } className={`text-white bg-gradient-to-r from-orange-500 to-orange-400`} type="submit">Submit</button>
            </form>
        </section>
    )
}
