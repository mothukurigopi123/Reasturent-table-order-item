import { useState } from "react";
import './Counter.css'; // Importing the CSS file

function Counter() {
  const [liked, setLiked] = useState(false); // to track if the heart is clicked

  function handleHeartClick() {
    setLiked(!liked); // Toggle liked state
  }

  return (
    <>
      <div
        className={`heart-container ${liked ? "liked" : ""}`}
        onClick={handleHeartClick}
      >
        ❤️ {/* Unicode character for heart */}
      </div>
    </>
  );
}

export default Counter;
