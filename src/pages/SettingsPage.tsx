import TopNavBar from '../components/TopNavBar';
import UserInfo from '../components/UserInfo';
import useDrawerStore from '../zustand/MenuBarStore';
import { useState } from 'react';


function SettingPage() {
  const { openDrawer } = useDrawerStore();
  const [selectedMenu, setSelectedMenu] = useState("myinfo");
  return (
    <>
      <div className={`w-full transition-all duration-300 ${openDrawer ? 'mr-[325px]' : 'mr-[65px]'}`}>
        <TopNavBar color={'white'} />
        <div className="w-full h-[30px]"></div>
        <div className="flex justify-center ">
          <div className="w-[95%] flex justify-around min-w-[800px] max-w-[1200px] border">
            <div className='w-[20%] border'>
                <div className={`w-[90%] m-[5px] p-[10px] rounded-[10px] cursor-pointer ${selectedMenu === "myinfo" ? "bg-Box-gray" : "bg-white"}`} onClick={()=>setSelectedMenu("myinfo")}>내 정보</div>
                <div className={`w-[90%] m-[5px] p-[10px] rounded-[10px] cursor-pointer ${selectedMenu === "account" ? "bg-Box-gray" : "bg-white"}`} onClick={()=>setSelectedMenu("account")}>계좌 관리</div>
            </div>
            <div className='w-[80%] border'>
                <UserInfo/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingPage;
