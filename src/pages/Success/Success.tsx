import successLocationIcon from '../../assets/success/successLocationIcon.svg'
import clockIcon from '../../assets/clockIcon.svg'
import dollarIcon from '../../assets/success/dollarIcon.svg'
import successImage from '../../assets/success/successImage.svg'

export function Success() {
  return (
    <div className="w-full mt-20">
      <span className="text-product-yellowDark text-[32px] not-italic font-extrabold leading-10 ">
        Uhu! Pedido confirmado
      </span>
      <p className="text-xl not-italic font-normal text-base-subtitle leading-[26px]">
        Agora é só aguardar que logo o café chegará até você
      </p>
      <div className="w-full flex gap-[102px]">
        <div className="flex w-[526px] p-10 flex-col items-start gap-8 rounded-tl-md rounded-br-md rounded-bl-[36px] rounded-tr-[36px] border border-solid border-product-yellow mt-10 box-content">
          <div className="flex items-center gap-3">
            <span className="flex p-2 justify-center items-center gap-2 rounded-full bg-product-purple">
              <img src={successLocationIcon} alt="" />
            </span>
            <p className="text-base not-italic font-normal leading-5 text-base-text">
              Entrega em{' '}
              <span className="font-bold">Rua João Daniel Martinelli, 102</span>
              <p>Farrapos - Porto Alegre, RS</p>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex p-2 justify-center items-center gap-2 rounded-full bg-product-yellow">
              <img src={clockIcon} alt="" />
            </span>
            <p className="text-base not-italic font-normal leading-5 text-base-text">
              Previsão de entrega
              <p className="text-base not-italic leading-5 text-base-text font-bold">
                20 min - 30 min
              </p>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex p-2 justify-center items-center gap-2 rounded-full bg-product-yellowDark">
              <img src={dollarIcon} alt="" />
            </span>
            <p className="text-base not-italic font-normal leading-5 text-base-text">
              Pagamento na entrega
              <p className="text-base not-italic leading-5 text-base-text font-bold">
                Cartão de Crédito
              </p>
            </p>
          </div>
        </div>
        <img src={successImage} alt="" />
      </div>
    </div>
  )
}
