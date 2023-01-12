import React from "react";
import "./Card.css";
import bnb from "../assets/Binance Coin (BNB).svg";
import eth from "../assets/Ethereum (ETH).svg";
import sol from "../assets/Solana (SOL).svg";
import shibig from "../assets/shibig.svg"

function Card5() {
  return (
    <div className="cardLayout">
    <div className="flex flex-col content-center items-center text-center customCard">
      <div className="iconBox">
        <div className="icon">
            <div className="coinLogo5">
                <img width={60} src={shibig} alt="bitcoinLogo"/>
            </div>
        </div>
      </div>
      <h1 className="text-xs text-[#FF4D4D] variationText">-8.1%</h1>
      <h1 className="text-xs text-[#737BAE]">Shiba Inu (SHIB))</h1>
      <div className="borderDiv mt-4">
        <div className="bg-[#14172B] text-base text-[#ECF0FF]  priceBox">
          <h1 className="text-semibold">$0.00001948</h1>
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

export default Card5;
