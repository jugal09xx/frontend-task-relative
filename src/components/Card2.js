import React from "react";
import "./Card.css";
import bnb from "../assets/Binance Coin (BNB).svg";
import eth from "../assets/Ethereum (ETH).svg";
import sol from "../assets/Solana (SOL).svg";
import solbig from "../assets/solbig.svg"

function Card2() {
  return (
    <div className="cardLayout">
    <div className="flex flex-col content-center items-center text-center customCard">
      <div className="iconBox">
        <div className="icon">
            <div className="coinLogo2">
                <img width={60} src={solbig} alt="bitcoinLogo"/>
            </div>
        </div>
      </div>
      <h1 className="text-xs text-[#FF4D4D] variationText">-12.32%</h1>
      <h1 className="text-xs text-[#737BAE]">Solana (SOL)</h1>
      <div className="borderDiv mt-4">
        <div className="bg-[#14172B] text-base text-[#ECF0FF]  priceBox">
          <h1 className="text-semibold">$32.83</h1>
        </div>
      </div>

      <div className="mt-2">
        <h1 className="text-xs text-[#5A5F7D]">Price</h1>
      </div>
      <div className="borderDiv mt-2">
        <div className="bg-[#14172B] text-base text-[#ECF0FF]  priceBox">
          <h1 className="text-semibold">$60,000</h1>
        </div>
      </div>
      <div className="mt-2">
        <h1 className="text-xs text-[#5A5F7D]">TVL</h1>
      </div>
      <div className="mt-4 popularPairDiv bg-[#14172B] text-base flex flex-row text-[#ECF0FF] justify-around">
        <div>
          <img src={sol} alt="sol" />
        </div>
        <div>
          <img src={bnb} alt="bnb" />
        </div>
        <div>
          <img src={eth} alt="eth" />
        </div>
      </div>
      <h1 className="mt-2 text-xs text-[#5A5F7D]">Popular pairs</h1>
    </div>
    </div>
  );
}

export default Card2;
