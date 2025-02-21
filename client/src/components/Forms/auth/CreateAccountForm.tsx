import { useDispatch } from 'react-redux'
import info from '../../../assets/info.svg'
import { AppDispatch } from '../../../store/srote'
import { useForm } from 'react-hook-form';
import { AccountFormData, accountSchema } from '../../../utils/validation/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { AXIOS_INSTANCE } from '../../../constants/axios';
import { setAccountInfo, setCurrentStep } from '../../../store/userSlice';
import { AxiosError } from 'axios';
import { Loader } from 'lucide-react';

function CreateAccountForm() {
  const dispath = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState<{
    password: boolean,
    confirmPassword: boolean
  }>({ password: false, confirmPassword: false })

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema)
  })

  async function onSubmit(formData: AccountFormData) {
    try {
      const form = {
        email: formData.email,
        password: formData.password,
        mobileNumber: formData.mobileNumber
      }
      const { data } = await AXIOS_INSTANCE.post('/auth/account', form);
      console.log(data)
      dispath(setAccountInfo(data.data))
      dispath(setCurrentStep(1))
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log('Axios, axios----')
        console.log(error)

      }
      console.log(error)
    }
  }
  console.log(errors)
  return (
    <>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[416px] space-y-3 w-full max-md:px-5 poppins-regular"
        >
          <h1 style={{
            zIndex: 60
          }} className="relative poppins-regular text-[16px] opacity-60 text-black leading-[16px]">
            Contact details
          </h1>

          <div className="relative max-w-[416px] z-50">
            <input
              type="email"
              required={true}
              autoComplete="off"
              {...register('email')}
              className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
            />
            <label className="poppins-regular absolute left-0 px-4 text-gray-400  text-[14px] h-[52px] leading-[52px] pointer-events-none transition-all duration-300 ease-in-out peer-focus:opacity-100 peer-focus:translate-y-[-80%] peer-focus:scale-[0.9] peer-focus:ml-[1.3em] peer-focus:h-[30px] peer-focus:px-2 peer-focus:text-[#0075FF]  peer-focus:top-0 peer-focus:bg-white peer-valid:translate-y-[-80%] peer-valid:h-[30px] peer-valid:scale-[0.9] peer-valid:ml-[1.3em] peer-valid:px-1 peer-valid:bg-white">
              Email
              {
                errors.email && (
                  <span className='ml-1 text-red-500 text-[12px]'>
                    {errors.email.message}
                  </span>
                )
              }
            </label>
          </div>

          <div className="relative  max-w-[416px] z-49">
            <input
              type="text"
              {...register('mobileNumber')}
              autoComplete="off"
              className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
            />
            <label className="poppins-regular absolute left-0 px-4 text-gray-400  text-[14px] h-[52px] leading-[52px] pointer-events-none transition-all duration-300 ease-in-out peer-focus:opacity-100 peer-focus:translate-y-[-80%] peer-focus:scale-[0.9] peer-focus:ml-[1.3em] peer-focus:h-[30px] peer-focus:px-2 peer-focus:text-[#0075FF]  peer-focus:top-0 peer-focus:bg-white peer-valid:translate-y-[-80%] peer-valid:h-[30px] peer-valid:scale-[0.9] peer-valid:ml-[1.3em] peer-valid:px-1 peer-valid:bg-white">
              Mobile number
              {
                errors.mobileNumber && (
                  <span className='ml-1 text-red-500 text-[12px]'>
                    {errors.mobileNumber.message}
                  </span>
                )
              }
            </label>
          </div>

          <h1 style={{
            zIndex: 48
          }} className="relative poppins-regular text-[16px] opacity-60 text-black leading-[16px]">
            Set a password
          </h1>

          <div className="relative max-w-[416px] z-[47]">
            <input
              type="text"
              {...register('password')}
              autoComplete="off"
              className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
            />
            <label className="poppins-regular absolute left-0 px-4 text-gray-400  text-[14px] h-[52px] leading-[52px] pointer-events-none transition-all duration-300 ease-in-out peer-focus:opacity-100 peer-focus:translate-y-[-80%] peer-focus:scale-[0.9] peer-focus:ml-[1.3em] peer-focus:h-[30px] peer-focus:px-2 peer-focus:text-[#0075FF]  peer-focus:top-0 peer-focus:bg-white peer-valid:translate-y-[-80%] peer-valid:h-[30px] peer-valid:scale-[0.9] peer-valid:ml-[1.3em] peer-valid:px-1 peer-valid:bg-white">
              Create a password
              {
                errors.password && (
                  <span className='ml-1 text-red-500 text-[12px] break-words '>
                    {errors.password.message}
                  </span>
                )
              }
            </label>
          </div>


          <div className="relative max-w-[416px] z-[46]">
            <input
              type="text"
              {...register('confirmPassword')}
              autoComplete="off"
              className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
            />
            <label className="poppins-regular absolute left-0 px-4 text-gray-400  text-[14px] h-[52px] leading-[52px] pointer-events-none transition-all duration-300 ease-in-out peer-focus:opacity-100 peer-focus:translate-y-[-80%] peer-focus:scale-[0.9] peer-focus:ml-[1.3em] peer-focus:h-[30px] peer-focus:px-2 peer-focus:text-[#0075FF]  peer-focus:top-0 peer-focus:bg-white peer-valid:translate-y-[-80%] peer-valid:h-[30px] peer-valid:scale-[0.9] peer-valid:ml-[1.3em] peer-valid:px-1 peer-valid:bg-white">
              Confirm you password
              {
                errors.confirmPassword && (
                  <span className='ml-1 text-red-500 text-[12px]'>
                    {errors.confirmPassword.message}
                  </span>
                )
              }
            </label>
          </div>

          <div className=' max-w-[416px] flex items-baseline justify-baseline gap-1'>
            <img src={info} alt="" />
            <p className='text-[13px] text-black opacity-40 leading-[16px]'>
              We need a password to keep your information safe. But don’t worry, we’ll also send your custom RentlyPass URL via email.
            </p>
          </div>

          {
            isSubmitting ? (
              <button type='button' className='poppins-semibold flex items-center justify-center text-white max-w-[416px] w-full bg-[#0075FF] h-[52px] rounded-[10px]'>
                <Loader className='animate-spin' />
              </button>
            ) : (
              <button type='submit' className='poppins-semibold flex items-center justify-center text-white max-w-[416px] w-full bg-[#0075FF] h-[52px] rounded-[10px]'>
                Create  your account
              </button>
            )
          }
    
          <p className='max-w-[416px] space-y-0 text-[14px] leading-[16px] text-black opacity-40'>
            By clicking ‘Create your account’, you are agreeing to our Terms & Conditions and Privacy Policy.
          </p>
        </form>
      </div>
    </>
  )
}

export default CreateAccountForm