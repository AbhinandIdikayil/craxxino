import { useState } from "react"
import Dropdown from "../../Dropdown/Dropdown"

function FinancialInfoForm() {
  const options = ['Employed', 'Unemployed']
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  return (
    <div className="flex items-center justify-center w-full overflow-y-hidden">
      <form action=""
        className="max-w-[416px] space-y-2.5 w-full max-md:px-5 poppins-regular "
      >
        <div className='flex max-w-[416px] gap-2.5 h-[52px] '>

          <Dropdown className='w-full' options={options} selected={selectedOption} setSelected={setSelectedOption} />


        </div>



        <div className="relative max-w-[416px] z-48">
          <input
            type="text"
            required
            autoComplete="off"
            className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
          />
          <label className="poppins-regular absolute left-0 px-4 text-black opacity-40 text-[14px] h-[30px] leading-[52px] ">
            Additional savings/investments
          </label>
        </div>





        <button className='poppins-semibold text-white max-w-[416px] w-full bg-[#0075FF] h-[52px] rounded-[10px]'>
          Save and continue
        </button>
      </form>
    </div>
  )
}

export default FinancialInfoForm