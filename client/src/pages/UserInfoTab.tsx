import PersonalInfo from './PersonalInfo';
import FinancialInfo from './FinancialInfo';
import CreateAccount from './CreateAccount';
import { useSelector } from 'react-redux';
import { RootState } from '../store/srote';
import { setCurrentStep } from '../store/userSlice';
import { Navigate } from 'react-router-dom';

function UserInfoTab() {
  const state = useSelector((state: RootState) => state.user)
  const totalPages = 2;
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const renderStep = () => {
    switch (state.currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <FinancialInfo />;
      default:
        return <Navigate to={'/create'} />;
    }
  };

  function onPageChange(page: number) {
    setCurrentStep(page)
  }

  return (
    <>
      <div className='poppins-regular w-full flex items-center justify-center h-[50px] mt-2'>
        <div className="flex gap-4">
          {generatePageNumbers().map((page: number) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`
            px-4 py-2 rounded-[54px] w-[36px] h-[36px] text-center flex justify-center items-center
            ${page === state.currentStep ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-300'}
            focus:outline-none transition-colors duration-300
          `}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      {renderStep()}
    </>
  )
}

export default UserInfoTab