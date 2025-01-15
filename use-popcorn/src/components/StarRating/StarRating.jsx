import { useState } from "react";
import Star from "../Star/Star";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  messages: PropTypes.array,
};

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  const messageStyle = {
    lineHeight: "1",
    margin: "0",
    color: color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onMouseOut={() => setTempRating(0)}
            size={size}
            color={color}
          />
        ))}
      </div>
      <p style={messageStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : rating || tempRating || ""}
      </p>
    </div>
  );
}
