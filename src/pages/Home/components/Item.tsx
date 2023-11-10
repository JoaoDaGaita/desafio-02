interface ItemProps {
  icon: string
  text: string
  color: string
  width: string
}

export function Item({ icon, text, color, width }: ItemProps) {
  return (
    <div className={`flex items-center gap-3 ${width}`}>
      <span
        className={`flex p-2 justify-center items-center gap-2 rounded-[1000px] ${color}`}
      >
        <img src={icon} alt="" />
      </span>
      <p className="w-full text-base not-italic font-normal leading-5">
        {text}
      </p>
    </div>
  )
}
