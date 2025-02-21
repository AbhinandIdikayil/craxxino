import Dropdown from "../../Dropdown/Dropdown"
import { useForm, Controller } from "react-hook-form";
import { FinancialInfoFormData, financialInfoSchema } from "../../../utils/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { AXIOS_INSTANCE } from "../../../constants/axios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/srote";
import { setCurrentStep, setFinancialInfo } from "../../../store/userSlice";
import { useNavigate } from "react-router-dom";

function FinancialInfoForm() {
  const state = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>();
  const options = ['Employed', 'Unemployed']
  const navigate = useNavigate()
  const { register, control, handleSubmit, formState: { errors, isSubmitting } } = useForm<FinancialInfoFormData>({
    resolver: zodResolver(financialInfoSchema)
  });

  async function onSubmit(formData: FinancialInfoFormData) {
    try {
      const { data } = await AXIOS_INSTANCE.post('/auth/info',
        {
          personalInfo: state.form.personalInfo,
          financialInfo: formData
        },
        {
          params: {
            userId: state.form.id
          }
        });
      console.log(data)
      dispatch(setFinancialInfo(data.data));
      dispatch(setCurrentStep(3));
      return navigate('/user/' + state.form.id, { replace: true })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center w-full ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[416px] space-y-2.5 w-full max-md:px-5 poppins-regular "
      >
        <div className='flex relative max-w-[416px] gap-2.5 h-[52px]'>
          {
            errors.employmentStatus && (
              <span className="z-50 poppins-regular absolute left-0 ml-2 top-0 -translate-y-[60%] px-2 text-red-500  bg-white text-[12px] leading-[12px] ">
                {errors.employmentStatus.message}
              </span>
            )
          }
          <Controller
            control={control}
            name="employmentStatus"
            defaultValue={undefined}
            render={({ field }) => (
              <Dropdown
                className="w-full poppins-regular text-[14px] "
                options={options}
                selected={field.value}
                setSelected={field.onChange}
              />
            )} />
          {/* <Dropdown className='w-full' options={options} selected={selectedOption} setSelected={setSelectedOption} /> */}
        </div>

        <div className="relative max-w-[416px] z-48">
          {
            errors.savingsOrInvestments && (
              <span className="z-50 poppins-regular absolute left-0 ml-2 top-0 -translate-y-[60%] px-2 text-red-500  bg-white text-[12px] leading-[12px] ">
                {errors.savingsOrInvestments.message}
              </span>
            )
          }
          <input
            type="text"
            {...register('savingsOrInvestments')}
            placeholder="Additional savings/investments"
            className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
          />
        </div>

        {
          isSubmitting ? (
            <button type='submit' className='poppins-semibold flex justify-center items-center text-white max-w-[416px] w-full bg-[#0075FF] h-[52px] rounded-[10px]'>
              <Loader className='animate-spin' />
            </button>
          ) : (
            <button type='submit' className='poppins-semibold flex justify-center items-center text-white max-w-[416px] w-full bg-[#0075FF] h-[52px] rounded-[10px]'>
              Save and continue
            </button>
          )
        }

      </form>
    </div>
  )
}

export default FinancialInfoForm