import info from '../../../assets/info.svg'

function CreateAccountForm() {
  return (
    <>
      <div className="flex items-center justify-center">
        <form action=""
          className="max-w-[416px] space-y-3 w-full max-md:px-5 poppins-regular"
        >
          <h1 style={{
            zIndex: 60
          }} className="relative poppins-regular text-[16px] opacity-60 text-black leading-[16px]">
            Contact details
          </h1>

          <div className="relative max-w-[416px] z-50">
            <input
              type="text"
              required
              autoComplete="off"
              className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
            />
            <label className="poppins-regular absolute left-0 px-4 text-black text-[14px] h-[52px] leading-[52px] pointer-events-none transition-all duration-300 ease-in-out  peer-focus:translate-y-[-50%] peer-focus:scale-[0.9] peer-focus:ml-[1.3em] peer-focus:px-2 peer-focus:text-[#0075FF]  peer-focus:top-0 peer-focus:bg-white peer-valid:translate-y-[-50%] peer-valid:scale-[0.9] peer-valid:ml-[1.3em] peer-valid:px-1 peer-valid:bg-white">
              Name
            </label>
          </div>

          <div className="relative  max-w-[416px] z-49"> 
            <input
              type="text"
              required
              autoComplete="off"
              className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
            />
            <label className="poppins-regular absolute left-0 px-4 text-black text-[14px] h-[52px] leading-[52px] pointer-events-none transition-all duration-300 ease-in-out  peer-focus:translate-y-[-50%] peer-focus:scale-[0.9] peer-focus:ml-[1.3em] peer-focus:px-2 peer-focus:text-[#0075FF] peer-focus:bg-white peer-valid:translate-y-[-50%] peer-valid:scale-[0.9] peer-valid:ml-[1.3em] peer-valid:px-2 peer-valid:bg-white">
              Name
            </label>
          </div>

          <h1 style={{
            zIndex: 48
          }} className="relative poppins-regular text-[16px] opacity-60 text-black leading-[16px]">
            Set a password
          </h1>

          <div className="relative  max-w-[416px] z-[47]">
            <input
              type="text"
              required
              autoComplete="off"
              className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
            />
            <label className="poppins-regular absolute left-0 px-4 text-black text-[14px] h-[52px] leading-[52px] pointer-events-none transition-all duration-300 ease-in-out  peer-focus:translate-y-[-50%] peer-focus:scale-[0.9] peer-focus:ml-[1.3em] peer-focus:px-2 peer-focus:text-[#0075FF] peer-focus:bg-white peer-valid:translate-y-[-50%] peer-valid:scale-[0.9] peer-valid:ml-[1.3em] peer-valid:px-2 peer-valid:bg-white">
              Name
            </label>
          </div>


          <div className="relative  max-w-[416px] z-[46]"> 
            <input
              type="text"
              required
              autoComplete="off"
              className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
            />
            <label className="poppins-regular absolute left-0 px-4 text-black text-[14px] h-[52px] leading-[52px] pointer-events-none transition-all duration-300 ease-in-out  peer-focus:translate-y-[-50%] peer-focus:scale-[0.9] peer-focus:ml-[1.3em] peer-focus:px-2 peer-focus:text-[#0075FF] peer-focus:bg-white peer-valid:translate-y-[-50%] peer-valid:scale-[0.9] peer-valid:ml-[1.3em] peer-valid:px-2 peer-valid:bg-white">
              Name
            </label>
          </div>

          <div className=' max-w-[416px] flex items-baseline justify-baseline gap-1'>
            <img src={info} alt="" />
            <p className='text-[13px] text-black opacity-40 leading-[16px]'>
              We need a password to keep your information safe. But don’t worry, we’ll also send your custom RentlyPass URL via email.
            </p>
          </div>

          <button className='poppins-semibold text-white max-w-[416px] w-full bg-[#0075FF] h-[52px] rounded-[10px]'>
            Create  your account
          </button>

          <p className='max-w-[416px] space-y-0 text-[14px] leading-[16px] text-black opacity-40'>
            By clicking ‘Create your account’, you are agreeing to our Terms & Conditions and Privacy Policy.
          </p>
        </form>
      </div>
    </>
  )
}

export default CreateAccountForm