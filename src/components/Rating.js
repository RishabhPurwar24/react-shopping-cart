import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, starData, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          onClick={() => {
            console.log(i);
            starData(i + 1);
          }}
          style={style}
        >
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
