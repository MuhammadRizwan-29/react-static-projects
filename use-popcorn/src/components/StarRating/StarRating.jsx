import { useState } from "react";
import Star from "../Star/Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
const starContainerStyle = {
  display: "flex",
  gap: "4px",
};
const messageStyle = {
  lineHeight: "1",
  margin: "0",
  color: "#FFF",
};
export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => setRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onMouseOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={messageStyle}>{rating || tempRating || ""}</p>
    </div>
  );
}
