import { useState } from 'react';
import info from '../../../assets/info.svg'
import Dropdown from '../../Dropdown/Dropdown';

function PersonalnfoForm() {
  const [date, setDate] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = ['Mr', 'Mrs'];


  return (
    <div className="flex items-center justify-center w-full overflow-y-hidden">
      <form action=""
        className="max-w-[416px] space-y-2.5 w-full max-md:px-5 poppins-regular "
      >
        <div className='flex max-w-[416px] gap-2.5 h-[52px] '>

          <Dropdown className='w-1/5' options={options} selected={selectedOption} setSelected={setSelectedOption} />

          <div className="relative w-4/5 z-50">
            <input
              type="text"
              // required
              className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none " // Added peer class
            />
            <label className="poppins-regular absolute left-0 px-4 text-black opacity-40 text-[14px] h-[30px] leading-[52px]">
              Name
            </label>
          </div>

        </div>

        <div className="relative max-w-[416px] z-49">
          <input
            type="date"
            value={date}
            required
            placeholder="Date"
            className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border opacity-40 border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer"
          />
          {/* <label className="poppins-regular absolute left-0 px-4 text-black text-[14px] h-[30px] leading-[52px] pointer-events-none transition-all duration-300 ease-in-out  peer-focus:translate-y-[-80%] peer-focus:scale-[0.9] peer-focus:ml-[1.3em] peer-focus:px-2 peer-focus:text-[#0075FF]  peer-focus:top-0 peer-focus:bg-white peer-valid:translate-y-[-80%] peer-valid:scale-[0.9] peer-valid:ml-[1.3em] peer-valid:px-1 peer-valid:bg-white">
            Date of birth
          </label> */}
        </div>


        <div className="relative max-w-[416px] z-48">
          <input
            type="text"
            required
            autoComplete="off"
            className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
          />
          <label className="poppins-regular absolute left-0 px-4 text-black opacity-40 text-[14px] h-[30px] leading-[52px] ">
            Current address
          </label>
        </div>


        <div className="relative max-w-[416px] z-47">
          <input
            type="text"
            required
            autoComplete="off"
            className="px-4 text-[14px] h-[52px] rounded-[10px] w-full border border-[#0000001A] focus-within:border-[#0075FF] focus-within:outline-none peer" // Added peer class
          />
          <label className="poppins-regular absolute left-0 px-4 text-black opacity-40 text-[14px] h-[30px] leading-[52px] ">
            How long you lived at this address
          </label>
        </div>



        <div className="relative max-w-[416px] z-47 ">
          <textarea
            placeholder="Tell us a bit about yourself (what are you like as a person, do you have any hobbies, etc.)"
            name=""
            id=""
            className='text-black opacity-40 leading-[16px] px-4 py-3 w-full h-[80px]  border-gray-300 rounded-lg focus:outline-none border focus:ring-2 focus:ring-blue-500 transition-border-color duration-300 ease-in-out box-border '
          />
          <div className='p-0 max-w-[416px] flex items-baseline justify-baseline gap-1'>
            <img src={info} alt="" />
            <p className='text-[13px] text-black opacity-40 leading-[13px]'>
              All information can be edited once you have created your account.          </p>
          </div>
        </div>


        <button className='poppins-semibold text-white max-w-[416px] w-full bg-[#0075FF] h-[52px] rounded-[10px]'>
          Save and continue
        </button>
      </form>
    </div>
  )
}

export default PersonalnfoForm