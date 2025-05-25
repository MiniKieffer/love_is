'use client';

import Image from 'next/image';
import logo from './../assets/welcome/logo.png';
import crown from './../assets/welcome/crown_1.png';
import avatar1 from './../assets/welcome/avatar1.png';
import avatar2 from './../assets/welcome/avatar2.png';
import avatar3 from './../assets/welcome/avatar3.png';
import avatar4 from './../assets/welcome/avatar4.png';
import avatar5 from './../assets/welcome/avatar5.png';
import avatar6 from './../assets/welcome/avatar6.png';
import avatar7 from './../assets/welcome/avatar7.png';
import avatar8 from './../assets/welcome/avatar8.png';
import avatar9 from './../assets/welcome/avatar9.png';
import toplight from './../assets/welcome/toplight.png';
import toplight2 from './../assets/welcome/toplight2.png';
import bottomlight from './../assets/welcome/bottomlight.png';
import boom3 from './../assets/welcome/boom3.png';
import snt1 from './../assets/welcome/snt1.png';
import hearts from './../assets/welcome/hearts.png';
import redheart from './../assets/welcome/redheart.png';
import smartphone1 from './../assets/welcome/smartphone1.png';
import tinder1 from './../assets/welcome/tinder1.png';
import russia1 from './../assets/welcome/russia1.png';
import anonimous1 from './../assets/welcome/anonimous1.png';
import yandex from './../assets/welcome/yandex.png';
import facebook from './../assets/welcome/facebook.png';
import twitter from './../assets/welcome/twitter.png';
import google from './../assets/welcome/google.png';
import boom2 from './../assets/welcome/boom2.png';
import hearts2 from './../assets/welcome/hearts2.png';
import smartphone2 from './../assets/welcome/smartphone2.png';
import Rectangle63 from './../assets/welcome/Rectangle63.png';
import logo2 from './../assets/welcome/logo2.png';
import tips from './../assets/welcome/tips.png';
import Starbadge from './../assets/welcome/Starbadge.png';
import Crownbadge from './../assets/welcome/Crownbadge.png';
import { useState, useEffect } from 'react';
import RippleButton from '../components/RippleButton';

type Ripple = {
    x: number;
    y: number;
    size: number;
    id: number;
  };

export default function Welcome() {
    const [activeTab, setActiveTab] = useState('login');
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Trigger fade-in after component mounts
        setIsVisible(true);
      }, []);

    return (
        <div>
          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-row flex-col min-h-screen flex">
            {/* Sidebar */}
            <div className="relative lg:w-[25%] w-full bg-white p-6 lg:min-h-[100%] px-[38px] py-[46px]">
                <Image
                  src={logo} 
                  alt="Logo"
                  width={216}  
                  height={30}
                />
                {/* Sidebar content */}
                <div className="flex items-center mt-[36px]">
                  {/* Login Tab */}
                  <button
                    className={`text-left w-[20%] pb-[9px] font-montserrat font-[400] tracking-[0] text-[14px] leading-[10px] ${activeTab === 'login' ? 'text-black border-b-2 border-red-500' : 'text-[rgba(141,141,141,1)] border-b-2 border-[rgba(141,141,141,1)]'}`}
                    onClick={() => setActiveTab('login')}
                  >
                    Вход
                  </button>

                  {/* Registration Tab */}
                  <button
                    className={`pl-[10%] text-left w-[80%] pb-[9px] font-montserrat font-[400] tracking-[0] text-[14px] leading-[10px] ${activeTab === 'register' ? 'text-black border-b-2 border-red-500' : 'text-[rgba(141,141,141,1)] border-b-2 border-[rgba(141,141,141,1)]'}`}
                    onClick={() => setActiveTab('register')}
                  >
                    Регистрация
                  </button>
                </div>
                <div className="mt-[19px]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="pl-[20px] placeholder-[rgba(158,158,158,1)] font-[400] text-[14px] font-montserrat w-full p-2 mb-4 text-black rounded-[50px] border-[1px] border-[rgba(216,216,216,1)]"
                  />
                 <input
                    type="Пароль"
                    placeholder="Пароль"
                    className="pl-[20px] placeholder-[rgba(158,158,158,1)] font-[400] text-[14px] font-montserrat w-full p-2 mb-4 text-black rounded-[50px] border-[1px] border-[rgba(216,216,216,1)]"
                  />
                  <RippleButton className="w-full h-[41px] bg-[rgba(253,76,76,1)] text-white rounded-[50px] font-montserrat font-[600] tracking-[0] text-[13px] leading-[10px]">
                    ВОЙТИ
                  </RippleButton>
                </div>
                <div className='flex items-center justify-between mt-[12px]'>
                    {/* Social Media Links */}
                    <div className="flex justify-center space-x-1">
                        <button className="bg-blue-500"><Image src={twitter} width={20} height={20} alt="twitter" /></button>
                        <button className="bg-red-500"><Image src={facebook} width={20} height={20} alt="facebook" /></button>
                        <button className="bg-yellow-500 "><Image src={google} width={20} height={20} alt="google" /></button>
                        <button className="bg-white-500"><Image src={yandex} width={20} height={20} alt="yandex" /></button>
                    </div>
                    <p className="text-center font-montserrat font-[400] text-[13px] leading-[10px] text-[rgba(153,153,153,1)]">Забыли пароль?</p>
                </div>
               
                <div className='mt-[39px]'>
                    <div className="inline-flex items-center space-x-1">
                        <Image
                          src={crown} 
                          alt="crown"
                          width={14}  
                          height={14}
                        />
                        <span className="text-[rgb(109,109,109)] font-montserrat font-[600] tracking-[0] text-[13px]">Ищут свою половинку</span>
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-[15px]">
                      <div className='relative'>
                        <Image src={avatar1} alt="Image 1" className="w-[84px] h-auto" />
                        <div className='absolute left-[5px] top-[7px] w-[14px] h-[14px] rounded-[50px] bg-[rgba(239,149,3,1)]'>
                            <Image src={Crownbadge} alt="Crownbadge" className="w-full h-auto" />
                        </div>
                      </div>
                      <div className='relative'>
                        <Image src={avatar2} alt="Image 2" className="w-[84px] h-auto" />
                        <div className='absolute left-[5px] top-[7px] w-[14px] h-[14px] rounded-[50px] bg-[rgba(239,149,3,1)]'>
                            <Image src={Starbadge} alt="Starbadge" className="w-full h-auto" />
                        </div>
                      </div>
                      <div className='relative'>
                        <Image src={avatar3} alt="Image 3" className="w-[84px] h-auto" />
                        <div className='absolute left-[5px] top-[7px] w-[14px] h-[14px] rounded-[50px] bg-[rgba(107,74,204,1)]'>
                            <Image src={Starbadge} alt="Starbadge" className="w-full h-auto" />
                        </div>
                      </div>
                      <div className='relative'><Image src={avatar4} alt="Image 4" className="w-full h-auto" /></div>
                      <div className='relative'>
                        <Image src={avatar5} alt="Image 5" className="w-[84px] h-auto" />
                        <div className='absolute left-[5px] top-[7px] w-[14px] h-[14px] rounded-[50px] bg-[rgba(239,149,3,1)]'>
                            <Image src={Starbadge} alt="Starbadge" className="w-full h-auto" />
                        </div>
                      </div>
                      <div className='relative'>
                        <Image src={avatar6} alt="Image 6" className="w-[84px] h-auto" />
                        <div className='absolute left-[5px] top-[7px] w-[14px] h-[14px] rounded-[50px] bg-[rgba(107,74,204,1)]'>
                            <Image src={Starbadge} alt="Starbadge" className="w-full h-auto" />
                        </div>
                      </div>
                      <div className='relative'>
                        <Image src={avatar7} alt="Image 7" className="w-[84px] h-auto" />
                        <div className='absolute left-[5px] top-[7px] w-[14px] h-[14px] rounded-[50px] bg-[rgba(107,74,204,1)]'>
                            <Image src={Starbadge} alt="Starbadge" className="w-full h-auto" />
                        </div>
                      </div>
                      <div className='relative'><Image src={avatar3} alt="Image 8" className="w-[84px] h-auto" /></div>
                      <div className='relative'><Image src={avatar9} alt="Image 9" className="w-[84px] h-auto" /></div>
                    </div>
                    <p className="text-center mt-[22px] text-[rgb(134,134,134)] font-montserrat font-[400] tracking-[0] leading-[12px] text-[13px]">658 056 человек ищут  половинку</p>
                </div>
                <div className="absolute left-[42px] bottom-[46px] mt-6 text-left">
                  <p className='text-[rgb(164,164,164)] font-montserrat font-[400] tracking-[0] leading-[20px] text-[13px]'>© 2025 Loveis</p>
                  <p className='text-[rgb(164,164,164)] font-montserrat font-[400] tracking-[0] leading-[20px] text-[13px]'>О сервисе Правила</p>
                  <p className='text-[rgb(164,164,164)] font-montserrat font-[400] tracking-[0] leading-[20px] text-[13px]'>Конфиденциальность 18+</p>
                  <p className='text-[rgb(164,164,164)] font-montserrat font-[400] tracking-[0] leading-[20px] text-[13px]'>18+</p>
                </div>
            </div>
  
            {/* Main Content */}
            <div className="lg:flex-1 flex-1 bg-[rgba(64,25,180,1)] p-10 text-white relative" 
                    style={{ backgroundImage: `url(${toplight.src}), url(${bottomlight.src}), url(${hearts.src}), url(${redheart.src}), url(${boom3.src}), url(${snt1.src})`, 
                                backgroundPosition: 'top, bottom, right bottom 170px, right 610px bottom 440px, right bottom 358px, right top', 
                                backgroundRepeat: 'repeat-x, repeat-x, no-repeat, no-repeat, no-repeat, no-repeat' }}
            >
                <div style={{ width: 'calc(75vw - 534px)', height: '100%'}} className='flex flex-col justify-center'>
                    <div style={{ marginBottom:'13%'}}>
                        <p style={{ fontSize: 'calc((100vw - 858px) * 0.062)', lineHeight:'calc((100vw - 858px) * 0.075)' }} className={`text-[rgb(255,255,255)] font-montserrat font-[600] tracking-[0] transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Знакомства для людей <br />в поиске второй половинки</p>
                        <p className={`mt-[9px] text-[rgb(255,255,255)] font-montserrat font-[400] tracking-[0] text-[24px] leading-[32px] transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        Love is — это настоящие знакомства, где Вы <br />
                        можете найти равного себе партнера <br />
                        для жизни
                        </p>
                        <RippleButton className="mt-[41px] bg-[rgba(253,76,76,1)] text-white rounded-[15px] h-[51px] w-[271px] font-montserrat font-[400] tracking-[0] text-[20px] leading-[30px]">
                            Гостевой доступ
                        </RippleButton>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0"><Image src={smartphone1} alt="smartphone1" /></div>
                <div style={{ width: 'calc(100% - 42px)' }} className="absolute bottom-[41px] left-[21px] flex">
                    <RippleButton className="bg-[rgba(23,23,23,0.2)] text-white rounded-[15px] h-[82px] w-[27%] min-w-[279px] mr-[1%] ">
                      <div className="flex items-center justify-center h-full w-full">
                        <div className="flex-shrink-0 mr-[14px]">
                          <Image src={tinder1} width={44} height={44} alt="tinder1" />
                        </div>
                        <div>
                          <p className="text-left font-montserrat font-[700] tracking-[0] text-[20px] leading-[20px] ">2650 пар</p>
                          <p className="text-left font-montserrat font-[400] tracking-[0] text-[14px] leading-[14px] ">нашли друг друга за сутки</p>
                        </div>
                      </div>
                    </RippleButton>
                    <RippleButton className="bg-[rgba(23,23,23,0.2)] text-white rounded-[15px] h-[82px] w-[30%] min-w-[333px] mr-[1.7%]">
                      <div className="flex items-center justify-center h-full w-full">
                        <div className="flex-shrink-0 mr-[14px]">
                          <Image src={russia1} width={64} height={64} alt="russia1" />
                        </div>
                        <div>
                          <p className="text-left font-montserrat font-[700] tracking-[0] text-[20px] leading-[20px] ">Вся Россия и СНГ</p>
                          <p className="text-left font-montserrat font-[400] tracking-[0] text-[14px] leading-[14px] ">миллионы проверенных анкет</p>
                        </div>
                      </div>
                    </RippleButton>
                    <RippleButton className="bg-[rgba(23,23,23,0.2)] text-white rounded-[15px] h-[82px] w-[33%] min-w-[356px]">
                      <div className="flex items-center justify-center h-full w-full">
                        <div className="flex-shrink-0 mr-[14px]">
                          <Image src={anonimous1} width={52} height={52} alt="anonimous1" />
                        </div>
                        <div>
                          <p className="text-left font-montserrat font-[700] tracking-[0] text-[20px] leading-[20px] ">Безопасные знакомства</p>
                          <p className="text-left font-montserrat font-[400] tracking-[0] text-[14px] leading-[14px] ">проверка анкет, только достоверные</p>
                        </div>
                      </div>
                    </RippleButton>
            
                </div>
            </div>
          </div>
  
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div>
                <div className='relative max-w-[402px] mx-auto min-h-[100vh] bg-[rgba(64,25,180,1)] px-[46px] pt-[66px]'
                     style={{ 
                        backgroundImage: `url(${toplight2.src}), url(${hearts2.src}), url(${redheart.src}), url(${tips.src}), url(${boom2.src})`,
                        backgroundPosition: 'top, right bottom 380px, left -10px top -23px, right 8px bottom 555px, right bottom 340px', 
                        backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat',
                     }}
                >
                    <div className='flex justify-center align-center'>
                        <div className="relative inline-block">
                            <Image
                              src={logo2} 
                              alt="Logo"
                              width={104}  
                              height={25}
                            />
                            <div className="absolute top-[-10px] right-[-20px] font-montserrat font-[400] tracking-[0] text-[10px] leading-[10px] bg-red-500 text-white px-[2px] py-[2px] rounded-r-[50px] rounded-tl-[30px]">
                              .pro
                            </div>
                        </div>
                        <p className='pt-[9px] text-[rgb(255,255,255)] font-montserrat font-[400] tracking-[0] text-[10px] leading-[10px] ml-[27px]'>
                        найди <br />
                        свою половинку
                        </p>
                    </div>
                    <p className={`text-center mt-[19px] text-[rgb(255,255,255)] font-montserrat font-[600] tracking-[0] text-[25px] leading-[30px] transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    Знакомства для людей<br />
                    в поиске второй <br />
                    половинки
                    </p>
                    <div className="absolute top-[80px] left-0"><Image src={smartphone2} alt="smartphone2" /></div>
                    <div className="pt-[57px] absolute left-0 bottom-[103px] w-[100%] h-[302px] z-1000 px-[58px]" style={{ backgroundImage: `url(${Rectangle63.src})` }}>
                        <p className="text-[rgba(255,255,255,0.8)] font-montserrat font-[400] tracking-[0] text-[15px] leading-[15px]">
                            Love is — это настоящие знакомства, где вы можете найти равного себе партнера для жизни
                        </p>
                        <div>
                            <RippleButton className="w-full py-4 mt-6 bg-[rgba(253,76,76,1)] rounded-[15px] text-[rgb(255,255,255)] font-montserrat font-[400] tracking-[0] text-[20px] leading-[15px]">Гостевой доступ</RippleButton>
                        </div>
                        <div>
                            <RippleButton className="w-full py-4 mt-6 border-[1px] border-white rounded-[15px] text-[rgb(255,255,255)] font-montserrat font-[400] tracking-[0] text-[20px] leading-[15px]">Войти</RippleButton>
                        </div>
                    </div>
                    
                    <div style={{marginTop:'calc(100vh - 280px)'}} className="text-center">
                    <p className='text-[rgba(164,164,164,1)] font-montserrat font-[400] tracking-[0] text-[13px] leading-[16px]'>
                        © 2025 Loveis О сервисе Правила<br />
                        Конфиденциальность 18+
                    </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    
    );
  }

    