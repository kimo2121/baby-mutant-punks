import React, { Component } from "react";
import Slider from "react-slick";
import roadmap from "../../assets/roadmap.png";
import "./styles.css";

const Roadmap = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <div className="roadmap">
      <h1>Roadmap</h1>
      <p>
        Our Roadmap below Shows exactly what we’re working towards in the short
        term. Each milestone unlocks when a certain % of Baby Mutant Punks have
        been minted. Additional future developments will be decided and voted
        upon by the Baby Mutant Punk community as a whole.
      </p>
      <Slider {...settings}>
        <div className="each-road">
          <h1>10%</h1>
          <p>
            The <strong>Pre-Sale Drop</strong> is scheduled for{" "}
            <strong>mid-November</strong> @ 3:00 PM (EST). 2,000 Baby Mutant
            Punks will be released on the Solana blockchain at the Pre-Sale
            Mint, price will be 0.75 Solana.
          </p>
        </div>
        <div className="each-road">
          <h1>20%</h1>
          <p>
            <strong>After selling out of Pre-Sales</strong> , we will be giving
            away a <strong>Rolex Submariner</strong> with box and papers or
            <strong>Mutant Ape Yacht Club NFT</strong>
            off the floor. 1 Rolex raffle ticket will be awarded for each NFT
            purchased.{" "}
            <strong>
              We will also airdrop 20 NFTs to early Pre-Sale minters.
            </strong>
          </p>
        </div>
        <div className="each-road">
          <h1>30%</h1>
          <p>
            The <strong>General Public Mint</strong> will be held{" "}
            <strong>late November</strong> @ 3:00 PM (EST). 8,000 Baby Mutant
            Punks will be released at the Mint price of 0.75 Solana.
          </p>
        </div>
        <div className="each-road">
          <h1>40%</h1>
          <p>
            Once 50% of the General Mint has been released, we will be giving
            away{" "}
            <strong>
              2 Degenerate Ape Academy NFTs — one to each lucky winner
            </strong>{" "}
            . 1 raffle ticket will be awarded for each Baby Mutant Punk
            purchased. Plus, 10 lucky minters will receive an airdrop of 1 Baby
            Mutant Punke.
          </p>
        </div>
        <div className="each-road">
          <h1>50%</h1>
          <p>
            Following the release of 75% of the General Mint,
            <strong>
              20 lucky minters will receive an airdrop of 1 Rare Baby Mutant
              Punk.
            </strong>
          </p>
        </div>
        <div className="each-road">
          <h1>60%</h1>
          <p>
            After <strong>100% of Baby Mutant Punks have been minted</strong> ,
            we will give away another
            <strong>
              Rolex or Mutant Ape Yacht Club NFT to one lucky winner
            </strong>
            , Each NFT purchased will be awarded 1 raffle ticket for the
            giveaway
          </p>
        </div>
        <div className="each-road">
          <h1>70%</h1>
          <p>
            Less than 72 hours after the public sale,
            <strong>we will list Baby Mutant Punks</strong>
            on multiple marketplaces.
          </p>
        </div>
        <div className="each-road">
          <h1>80%</h1>
          <p>
            <strong>Club members</strong>
            can expect a Baby Mutant Punk Merch drop.
          </p>
        </div>
        <div className="each-road">
          <h1>90%</h1>
          <p>
            We will award 500% of the 5% Royalties from the secondary sales to a
            few <strong>Lucky Holders</strong> each week. And a portion of the
            leftover royalties will be deposited into the community wallet!
            Securing our community's longevity is our highest priority.
          </p>
        </div>
        <div className="each-road">
          <h1>100%</h1>
          <p>
            <strong>300 NFTs</strong>
            will be retained for future giveaways, with the goal of providing
            long-term benefits to the community.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Roadmap;
