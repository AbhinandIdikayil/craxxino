import FinancialInfoForm from '../components/Forms/auth/FinancialInfoForm'

function FinancialInfo() {
  return (
    <main className="flex-col justify-center items-center w-full min-h-full">
      <div className="py-3 w-full">
        <h1 className="poppins-bold text-[24px] text-center leading-[24px]">
          Financial information
        </h1>
        <p className="mt-2 poppins-regular text-center text-[14px] text-[#666666] leading-[16px]">
          All your information is stored securely.
        </p>
      </div>
      <FinancialInfoForm />
    </main>
  )
}

export default FinancialInfo