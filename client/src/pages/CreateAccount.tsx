import { useSelector } from "react-redux"
import CreateAccountForm from "../components/Forms/auth/CreateAccountForm"
import { RootState } from "../store/srote";
import UserInfoTab from "./UserInfoTab";

function CreateAccount() {
  const state = useSelector((state: RootState) => state.user);

  if (state.currentStep) {
    return <UserInfoTab />
  }

  return (
    <main className="flex-col justify-center items-center w-screen min-h-full">
      <div className="py-5 w-full">
        <h1 className="poppins-bold text-[24px] text-center leading-[24px]">
          Create your account
        </h1>
        <p className="mt-2 poppins-regular text-center text-[14px] text-[#666666] leading-[16px]">
          Set-up your RentlyPass in as little as 2 minutes.
        </p>
      </div>
      <CreateAccountForm />
    </main>
  )
}

export default CreateAccount