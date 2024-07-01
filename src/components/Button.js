export const Button = (props) =>{
    return (
        <div className={`${props.color} ${props.textColor} w-fit px-[10px] py-[4px] rounded-md`}>
            {props.value}
        </div>
    )
}