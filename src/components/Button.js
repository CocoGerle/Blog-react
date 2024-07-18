export const Button = (props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {props.tag &&
        props.tag.split(",").slice(0,3).map((item) => (
          <div
            key={item}
            className={`${props.color} ${props.textColor} w-fit px-[10px] py-[4px] rounded-md flex gap-2 `}
          >
            {item}
          </div>
        ))}
    </div>
  );
};
