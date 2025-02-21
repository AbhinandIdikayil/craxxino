import info from '../../../assets/info.svg'
import Dropdown from '../../Dropdown/Dropdown';
import { useForm, Controller } from 'react-hook-form';
import { PersonalInfoFormData, personalInfoSchema } from '../../../utils/validation/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/srote';
import { setCurrentStep, setPersonalInfo } from '../../../store/userSlice';
import { format } from "date-fns";


function PersonalnfoForm() {
  const options = ['Mr', 'Mrs'];
  const state = useSelector((state: RootState) => state.user)
  const { control, register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      about: state.form.personalInfo.about || '',
      address: state.form.personalInfo.address || '',
      addressDuration: state.form.personalInfo.addressDuration || '',
      fullName: state.form.personalInfo.fullName || '',
      title: state.form.personalInfo.title || undefined,
      dob: state.form.personalInfo.dob ? new Date(state.form.personalInfo.dob) : undefined // Convert to Date
    }
  })
  const dispatch = useDispatch<AppDispatch>();
  function onSubmit(formData: PersonalInfoFormData) {
    try {
      dispatch(setPersonalInfo(formData));
      dispatch(setCurrentStep(2));
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(parseISO(state?.form?.personalInfo?.date), format(state.form.personalInfo.date, "yyyy-MM-dd"))
  return (
    <div className="flex items-center justify-center w-full ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[416px] space-y-2.5 w-full max-md:px-5 poppins-regular "
      >
        <div className='flex relative max-w-[416px] gap-2.5 h-[52px] '>

          {/* <Dropdown className='w-1/5' options={options} selected={selectedOption} setSelected={setSelectedOption} /> */}
          <Controller
            name="title" // Match this with your schema
            control={control}
            defaultValue={undefined} // Set initial value
            render={({ field }) => (
              <Dropdown
                className="w-1/5 "
                options={options}
                selected={field.value} // Connect field value to selected
                setSelected={field.onChange} // Connect onChange handler
              />
            )}
          />

          {
            errors.title && (
              <span className="poppins-regular absolute left-0 ml-1 top-0 -translate-y-[60%] px-2 text-red-500  bg-white text-[12px] leading-[12px] ">
                {errors.title.message}
              </span>
            )
          }

          <div style={{ zIndex: 99 }} className="relative w-4/5">
            <input
              type="text"
              placeholder='Full name'
              {...register('fullName')}
              className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border text-gray-400 border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none " // Added peer class
            />

            {
              errors.fullName && (
                <span className="poppins-regular absolute left-0 ml-2 top-0 -translate-y-[60%] px-2 text-red-500  bg-white text-[12px] leading-[12px] ">
                  {errors.fullName.message}
                </span>
              )
            }

          </div>
        </div>

        <div className="relative max-w-[416px] z-49">
          <input
            type="date"
            value={state.form.personalInfo.dob
              ? format(new Date(state.form.personalInfo.dob), "yyyy-MM-dd") // Ensure it's a Date
              : ""
            }
            onChange={(e) => setValue('dob', new Date(e.target.value))}
            placeholder="date"
            className="px-4 text-[14px] text-gray-400 h-[52px] rounded-[10px] w-full border  border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer"
          />
          {
            errors.dob && (
              <span className="poppins-regular absolute left-0 ml-2 top-0 -translate-y-[60%] px-2 text-red-500  bg-white text-[12px] leading-[12px] ">
                {errors.dob.message}
              </span>
            )
          }
        </div>

        <div className="relative max-w-[416px] z-48">
          <input
            type="text"
            {...register('address')}
            placeholder='Cureent address'
            autoComplete="off"
            className="px-4 text-[14px] text-gray-400 h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
          />

          {
            errors.address && (
              <span className="poppins-regular absolute left-0 ml-2 top-0 -translate-y-[60%] px-2 text-red-500  bg-white text-[12px] leading-[12px] ">
                {errors.address.message}
              </span>
            )
          }
        </div>

        <div className="relative max-w-[416px] z-47">
          <input
            type="text"
            autoComplete="off"
            placeholder='How long you lived at this address'
            {...register('addressDuration')}
            className="px-4 text-[14px] text-gray-400 h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
          />

          {
            errors.addressDuration && (
              <span className="poppins-regular absolute left-0 ml-2 top-0 -translate-y-[60%] px-2 text-red-500  bg-white text-[12px] leading-[12px] ">
                {errors.addressDuration.message}
              </span>
            )
          }
        </div>

        <div className="relative max-w-[416px] z-47 ">
          {
            errors.about && (
              <span className="z-50 poppins-regular absolute left-0 ml-2 top-0 -translate-y-[60%] px-2 text-red-500  bg-white text-[12px] leading-[12px] ">
                {errors.about.message}
              </span>
            )
          }
          <textarea
            onChange={(e) => setValue('about', e.target.value)}
            placeholder="Tell us a bit about yourself (what are you like as a person, do you have any hobbies, etc.)"
            name=""
            id=""
            defaultValue={state.form.personalInfo.about ? state.form.personalInfo.about : ''}
            className='text-gray-400  leading-[16px] px-4 py-3 w-full h-[80px]  border-gray-300 rounded-lg focus:outline-none border focus:ring-2 focus:ring-blue-500 transition-border-color duration-300 ease-in-out box-border '
          />
          <div className='p-0 max-w-[416px] flex items-baseline justify-baseline gap-1'>
            <img src={info} alt="" />
            <p className='text-[13px] text-black opacity-40 leading-[13px]'>
              All information can be edited once you have created your account.          </p>
          </div>
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

export default PersonalnfoForm