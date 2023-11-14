export function TotalCard() {
  return (
    <div className="flex flex-col justify-center items-start gap-3 self-stretch">
      <div className="flex justify-between items-center self-stretch">
        <p className="text-sm not-italic font-normal text-base-text leading-[18.2px]">
          Total de itens
        </p>
        <p className="text-base not-italic font-normal text-base-text leading-5">
          R$ 29,70
        </p>
      </div>
      <div className="flex justify-between items-center self-stretch">
        <p className="text-sm not-italic font-normal text-base-text leading-[18.2px]">
          Entrega
        </p>
        <p className="text-base not-italic font-normal text-base-text leading-5">
          R$ 3,50
        </p>
      </div>
      <div className="flex justify-between items-center self-stretch">
        <p className="text-xl not-italic font-bold text-base-text leading-[26px]">
          Total
        </p>
        <p className="text-xl not-italic font-bold text-base-text leading-[26px]">
          R$ 33,20
        </p>
      </div>
    </div>
  )
}
