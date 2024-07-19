
import logoImage from './Logo.png';
import { logout } from '../Store/userDataSlice';
import { useDispatch } from 'react-redux';

const SideBar = ({ onRequest, onSend }) => {
  const dispatch = useDispatch()
  const onLogout = ()=>
  {
    dispatch(logout())
  }
  return (
    <div className='flex flex-col bg-[#b09cd3] p-6 rounded-xl items-center text-2xl font-bold h-full'>
      <div className='p-10'>
        <img className='rounded-full max-h-[100px] max-w-[100px]' src={logoImage} alt='Logo'></img>
      </div>
      <div className="flex flex-col flex-1 justify-between w-full">
        <div className='flex flex-col space-y-4'>
          <button className="p-5 bg-[#3f205d] text-white rounded-xl" onClick={onRequest}>
            Request Money
          </button>
          <button className="p-5 bg-[#3f205d] text-white rounded-xl" onClick={onSend}>
            Send Money
          </button>
        </div>
        <button className="p-5 bg-[#3f205d] text-white rounded-xl" onClick={onLogout}>
            Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
