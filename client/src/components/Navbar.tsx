import companyLogo from '../assets/company-logo.svg'
import companyLogo2 from '../assets/company-logo2.svg'
import questionMark from '../assets/question.svg'
import craxxino from '../assets/craxxino.svg'
function Navbar() {
  return (
    <nav className="px-16 max-md:px-5 flex w-screen justify-between items-center h-[60px] border-b border-[#0000000D]">
      <div className='h-full flex justify-baseline items-center gap-4 w-1/2'>
        <div className='flex h-fit'>
          <img src={companyLogo} />
          <img src={companyLogo2} />
        </div>
        <div className='max-md:hidden'>
          <img src={craxxino} />
        </div>
      </div>
      <div className='flex justify-end items-center w-1/2 h-full'>
        <img src={questionMark} />
      </div>
    </nav>
  )
}

export default Navbar