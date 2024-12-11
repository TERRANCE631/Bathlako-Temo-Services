import { useState } from "react";

export function ShowComments({ taskList, setTasklist, onRatingSelect }) {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    if (onRatingSelect) {
      onRatingSelect(value);
    }
  };

  return (
    <div>
      <section className="showTask dark:bg-gray-700">
        <div className="head">
          <div>
            <span className="title dark:text-white">Comments</span>
            <span className="count dark:text-white bg-gradient-to-r from-orange-500 to-orange-400">{taskList.length}</span>
          </div>
          {/* <button className="clearAll" onClick={() => setTasklist([])}>Clear All</button> */}
        </div>
        <ul>
          {taskList.map((todo) => (
            <li className="dark:text-white hover:dark:bg-gray-500" key={todo.id}>
              <p>
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
              </p>
              <p>Rate us: </p>

              {/* Rating component */}
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRating(star)}
                    className={`text-4xl ${star <= rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                  >
                    ★
                  </button>
                ))}
              </div>

            </li>))}
        </ul>
      </section>
    </div>
  )
}
