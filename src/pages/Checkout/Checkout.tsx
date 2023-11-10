import checkoutLocationIcon from '../../assets/checkoutLocationIcon.svg'
import dollarIcon from '../../assets/checkout/dollarIcon.svg'
import creditCardIcon from '../../assets/checkout/creditCardIcon.svg'
import { SelectButton } from '../../components/SelectButton'

export function Checkout() {
  return (
    <div className="w-full h-[1013px] pt-10">
      <span className="text-base-subtitle text-lg leading-6 not-italic font-bold">
        Complete seu pedido
      </span>
      <span className="text-base-subtitle text-lg leading-6 not-italic font-bold pl-[502px]">
        Cafés selecionados
      </span>
      <div className="flex w-[640px] flex-col items-start gap-3">
        <div className="flex p-10 flex-col items-start gap-8 self-stretch rounded-md bg-base-card">
          <div className="flex items-start gap-2 self-stretch">
            <img src={checkoutLocationIcon} alt="" />
            <div className="flex flex-col items-start gap-[2px] flex-1">
              <span className="self-stretch text-base-subtitle text-base not-italic font-normal leading-5">
                Endereço de Entrega
              </span>
              <span className="flex h-[21px] text-base-text text-sm not-italic font-normal leading-[18px]">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 self-stretch">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <input
                type="text"
                className="flex w-[200px] p-3 items-center gap-1 rounded border border-solid border-base-button bg-base-input text-sm not-italic font-normal leading-[18px]"
                placeholder="CEP"
              />
              <input
                type="text"
                className="flex p-3 items-center gap-1 self-stretch rounded border border-solid border-base-button bg-base-input text-sm not-italic font-normal leading-[18px]"
                placeholder="Rua"
              />
              <div className="flex items-center gap-3 self-stretch">
                <input
                  type="text"
                  className="flex w-[200px] p-3 items-center gap-1 text-sm not-italic font-normal leading-[18px]"
                  placeholder="Número"
                />
                <input
                  type="text"
                  className="flex p-3 items-center gap-1 flex-1 rounded border-solid border border-base-button bg-base-input text-sm not-italic font-normal leading-[18px]"
                  placeholder="Complemento"
                />
                <p className="text-xs italic font-normal leading-4 text-base-label">
                  Opcional
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 self-stretch">
              <input
                type="text"
                className="flex w-[200px] p-3 items-center gap-1 rounded border border-solid border-base-button bg-base-input text-sm not-italic font-normal leading-[18px]"
                placeholder="Bairro"
              />
              <input
                type="text"
                className="flex w-[200px] p-3 items-center gap-1 flex-1 rounded border border-solid border-base-button bg-base-input text-sm not-italic font-normal leading-[18px]"
                placeholder="Cidade"
              />
              <input
                type="text"
                className="flex w-[60px] p-3 items-center gap-1 rounded border border-solid border-base-button bg-base-input text-sm not-italic font-normal leading-[18px]"
                placeholder="UF"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-10 flex-col items-start gap-8 self-stretch rounded-lg bg-base-card">
        <div className="flex items-start gap-2 self-stretch">
          <img src={dollarIcon} alt="" />
          <div>
            <span className="self-stretch text-base-subtitle text-base not-italic font-normal leading-5">
              Pagamento
            </span>
            <p className="flex h-[21px] flex-col justify-center items-stretch text-base-text text-sm font-normal leading-[18px]">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 self-stretch">
          <SelectButton src={creditCardIcon} content="cartao de crédito" />
          <SelectButton src={creditCardIcon} content="cartão de débito" />
          <SelectButton src={creditCardIcon} content="dinheiro" />
        </div>
      </div>
      {/* <div className="flex w-[448px] p-10 flex-col items-start gap-6 rounded-t-md rounded-b-[44px]"></div> */}
    </div>
  )
}
