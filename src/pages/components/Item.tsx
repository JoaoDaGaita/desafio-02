interface ItemProps {
  icon: string
  text: string
  color: string
}

export function Item({ icon, text, color }: ItemProps) {
  return (
    <div className="flex w-[231px] items-center gap-3">
      <span
        className={`flex p-2 w-8 h-8 justify-center items-center gap-2 rounded-[1000px] ${color}`}
      >
        <img src={icon} alt="" />
      </span>
      <p className="flex-1 text-base-text text-base not-italic font-normal leading-5">
        {text}
      </p>
    </div>
  )
}
