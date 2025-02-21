import PersonalnfoForm from '../components/Forms/auth/PersonalnfoForm'

function PersonalInfo() {
  return (
    <main className="flex-col justify-center items-center w-full min-h-full">
      <div className="py-3 w-full">
        <h1 className="poppins-bold text-[24px] text-center leading-[24px]">
          Personal information
        </h1>
        <p className="mt-2 poppins-regular text-center text-[14px] text-[#666666] leading-[16px]">
          Please answer questions as accurately as possible.        </p>
      </div>
      <PersonalnfoForm />
    </main>
  )
}

export default PersonalInfo