import { NavLink } from "react-router-dom";
import nav_logo from "./assets/doogle_nav_logo.png";
import eth_logo from "./assets/eth_logo.svg";
import bars from "./assets/bars.svg";
import doogle_hero_logo from "./assets/doogle_hero_img.png";
import eth_simp_logo from "./assets/eth_simple_logo.svg";
import { useState } from "react";
import walletAddressTruncate from "./util/walletAddressTruncate";

const unstake_percentages: number[] = [10, 25, 50, 75, 100];
const dummyWalletAddress: string =
  "0xabcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";

function App() {
  const [stake, setStake] = useState<boolean>(true);

  return (
    <main className=" text-white min-h-screen bg-[#030600] pb-10 space-y-12">
      <nav className="z-10 relative text-[18px] px-4 py-2 w-full border-b-[1px] border-b-[#031502] ">
        <div className=" flex flex-col lg:flex-row gap-2 px-4 items-center justify-between 2xl:justify-center  2xl:gap-36">
          <div className="logo flex items-center gap-2">
            <div className="size-[60px] rounded-full bg-[#A0968A] flex justify-center">
              <img className="h-[53px] " src={doogle_hero_logo} alt="" />
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
              <p className="text-[16px]">
                {walletAddressTruncate(dummyWalletAddress)}
              </p>
              <div className="size-6 rounded-full bg-grad-circle"></div>
            </div>
          </div>
        </div>
      </nav>
      <section className=" z-10 w-full">
        <div className="container relative mx-auto p-4 flex space-y-4 flex-col-reverse lg:flex-row justify-center items-center gap-30">
          <div className="absolute -z-0 hidden lg:block">
            <img src={bars} alt="" />
          </div>
          <div className="z-10 flex flex-col lg:w-[50%]">
            <h3 className="text-[36px] lg:text-[46px] font-bold ">
              Earn with Doogle Inu
            </h3>
            <p className="lg:w-[80%]">
              <span className="text-[#cafc01] text-[20px]">$Doogle</span> is a
              dog meme coin. As Dooglers, you get to experience a world where
              humans and dogs become completely one. Transform into one with
              your dog
            </p>
          </div>
          <div className="z-10 rounded-lg p-6 flex flex-col gap-8 box-gradient w-full lg:w-[400px]">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[20px]">Doogle Inu</p>
              <div className="size-[60px] rounded-full bg-[#A0968A] flex justify-center">
                <img className="h-[53px] " src={doogle_hero_logo} alt="" />
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
      <section className=" w-full p-2 lg:w-[80%] mx-auto">
        <div className="container rounded-xl mx-auto flex flex-col items-center gap-10 box-gradient p-3">
          <div className="z-10 flex box-gradient w-fit gap-5 rounded-full px-2 py-1">
            <button
              onClick={() => setStake(true)}
              className={`${
                stake ? "bg-[#f06e10]" : ""
              } w-[90px] py-1 rounded-full `}
            >
              <p className="text-center">Stake</p>
            </button>
            <button
              onClick={() => setStake(false)}
              className={`${
                !stake ? "bg-[#f06e10]" : ""
              } w-[90px] py-1 rounded-full `}
            >
              <p className="text-center">Unstake</p>
            </button>
          </div>
          {/* Stake */}
          <div className="flex flex-col lg:flex-row gap-7 items-center justify-center">
            {/* Stake Amount */}
            <div className="bg-grad-circle overflow-hidden lg:w-[400px] rounded-2xl p-[1px]">
              <div className="p-3 relative rounded-2xl flex flex-col bg-black gap-4">
                <div className=" z-0 absolute opacity-20 -top-10 size-[600px]  left-1/2 -translate-x-1/2  blur-md radial-light"></div>

                <div className="flex border-b-[1px] border-b-[#cafc01] justify-between pb-3 items-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#868491]">Available to stake</p>
                    <p className="text-[20px] font-bold">0.01 ETH</p>
                  </div>
                  <div className=" z-10 flex rounded-full bg-[#030600] px-2 py-1 items-center gap-4">
                    <p className="text-[16px] text-[#d1cdcd]">
                      {walletAddressTruncate(dummyWalletAddress)}
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

                <div className="z-10 rounded-xl bg-black p-3 flex flex-col gap-4">
                  {/* unstake percentages */}
                  <div
                    className={`${!stake ? "flex" : "hidden"} flex-col gap-2`}
                  >
                    <p className="text-[#868491]">
                      please select one of the percentage buttons, you wish to
                      unstack token.
                    </p>
                    <div className="flex justify-between gap-5">
                      {unstake_percentages.map((percent, i) => {
                        return (
                          <button
                            className="rounded-md bg-grad-circle w-full"
                            key={i}
                          >
                            <p className="text-center">{percent}%</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Stake amount input */}
                  <div className={`${stake ? "" : "hidden"} w-full relative`}>
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
                    <button className="button">Stack</button>
                    <button className="button">Restack</button>
                  </div>
                  <button className="button">Claim</button>
                </div>
              </div>
            </div>
            {/* Stake receipt */}
            <div className="bg-grad-circle relative overflow-hidden w-full lg:w-[400px] rounded-2xl p-[1px]">
              <div className=" z-0 absolute opacity-20 -top-10 size-[600px]  left-1/2 -translate-x-1/2  blur-md radial-light"></div>

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
