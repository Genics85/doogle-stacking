import { NavLink } from "react-router-dom";
import nav_logo from "./assets/doogle_nav_logo.png";
import eth_logo from "./assets/eth_logo.svg";
import eth_simp_logo from "./assets/eth_simple_logo.svg";

function App() {
  return (
    <main className=" text-white min-h-screen bg-[#030600]">
      <nav className="relative text-[18px] px-4 py-2 w-full border-b-[1px] border-b-[#031502] ">
        <div className=" flex px-4 items-center justify-between 2xl:justify-center  2xl:gap-32">
          <div className="logo flex items-center gap-2">
            <div className="size-[60px] rounded-full bg-[#A0968A] flex justify-center">
              <img className="h-[53px] " src={nav_logo} alt="" />
            </div>
            <p className="text-[24px] font-bold text-nowrap 2xl:text-[28px]">
              DOOGLE INU
            </p>
          </div>
          <ul className=" gap-4 hidden lg:flex font-bold">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#cafc01]" : "")}
              to="home"
            >
              Staking
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#cafc01]" : "")}
              to="doogle-swap"
            >
              Wallets
            </NavLink>
          </ul>
          {/* Account Details */}
          <div className=" flex gap-10">
            <div className="flex gap-2 items-center">
              <img src={eth_logo} alt="" />
              <p>0.98ETH</p>
            </div>
            <div className="flex rounded-full bg-[#1a1f2e] px-2 py-1 items-center gap-4">
              <p className="text-[16px]">0xNeffdh.....xkx</p>
              <div className="size-6 rounded-full bg-grad-circle"></div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full">
        <div className="container mx-auto p-4 flex justify-center items-center gap-30">
          <div className="flex flex-col lg:w-[50%]">
            <h3 className="text-[46px] font-bold ">Earn with Doogle Inu</h3>
            <p className="lg:w-[80%]">
              <span className="text-[#cafc01]">$Doogle</span> is a dog meme
              coin. As Dooglers, you get to experience a world where humans and
              dogs become completely one. Transform into one with your dog
            </p>
          </div>
          <div className="rounded-lg p-6 flex flex-col gap-8 box-gradient w-[400px]">
            <div className="flex justify-between items-center">
              <p className="font-bold">Doogle Inu</p>
              <div className="size-[60px] rounded-full bg-[#A0968A] flex justify-center">
                <img className="h-[53px] " src={nav_logo} alt="" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="text-[#9b9999]">Total asserts</p>
                <p className="text-[18px] font-semibold">$50,400</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <p className="text-[#6cc800]">APY</p>
                <p className="text-[#f06e10]">+4.09%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-[80%] mx-auto">
        <div className="container rounded-xl mx-auto flex flex-col gap-5 box-gradient p-6">
          <div className="flex rounded-full px-2 py-1">
            <div>
              <p>Stake</p>
            </div>
            <div>
              <p>Unstake</p>
            </div>
          </div>
          {/* Stake */}
          <div className="flex gap-7 items-center justify-center">
            {/* Stake Amount */}
            <div className="bg-grad-circle overflow-hidden w-[400px] rounded-2xl p-[1px]">
              <div className="p-5 relative rounded-2xl flex flex-col bg-black gap-4">
                <div className=" z-0 absolute opacity-20 -top-10 size-[600px]  left-1/2 -translate-x-1/2  blur-md radial-light"></div>

                <div className="flex border-b-[1px] border-b-[#cafc01] justify-between pb-3 items-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#868491]">Available to stake</p>
                    <p className="text-[20px] font-bold">0.01 ETH</p>
                  </div>
                  <div className=" z-10 flex rounded-full bg-[#030600] px-2 py-1 items-center gap-4">
                    <p className="text-[16px] text-[#d1cdcd]">
                      0xNeffdh.....xkx
                    </p>
                    <div className="size-6 rounded-full bg-grad-circle"></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#868491]">Stake amount</p>
                    <p className="text-[20px] font-bold">0.01 ETH</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#868491]">APY</p>
                    <p className="text-[20px] font-bold">40%</p>
                  </div>
                </div>
                <div className="z-10 rounded-xl bg-black p-3 flex flex-col gap-2">
                  <div className="w-full relative">
                    <input
                      className="bg-black rounded-lg outline-none border border-[#302923] pl-24 p-2 w-full"
                      type="text"
                    />
                    <div className="rounded-md bg-grad-circle px-1 absolute right-2 top-1/2 -translate-y-1/2">
                      Max
                    </div>
                    <div className="flex gap-1 absolute left-2 top-1/2 -translate-y-1/2">
                      <img src={eth_simp_logo} alt="" />
                      <p>Amount</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="button">Stake</button>
                    <button className="button">Restake</button>
                  </div>
                  <button className="button">Claim</button>
                </div>
              </div>
            </div>
            {/* Stake receipt */}
            <div className="bg-grad-circle overflow-hidden w-[400px] rounded-2xl p-[1px]">
              <div className="bg-black w-full p-4 rounded-2xl gap-3 flex flex-col">
                <div className="flex justify-between">
                  <p className="text-[#868491]">You Wil Receive</p>
                  <p className="font-bold">OstETH</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#868491]">Exchange Rate</p>
                  <p className="font-bold">1ETH = 1stETH</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#868491]">Transactional Cost</p>
                  <p className="font-bold">$1.34</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#868491]">Reward Fee</p>
                  <p className="font-bold">10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
