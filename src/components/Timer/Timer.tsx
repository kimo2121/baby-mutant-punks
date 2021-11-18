import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./timer.css";
import { ReactComponent as TimerDivider } from "../../assets/icons/top.svg";
import Mint from "../Mint/Mint";
import CircularProgress from "../CircularProgress/CircularProgress";

const RowContainer = styled.div`
  color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: center;
  gap: 1.4vmax;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-radius: 50%;
`;

const ItemValue = styled.span`
  color: white;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 0px;
  text-align: center;
`;
const ItemLabel = styled.p`
  color: white;
  font-size: 14px;
  margin-bottom: 3px;
  letter-spacing: 0;
`;

const Card = styled.div`
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  text-align: center;
  padding-bottom: 70px;
  margin-left: auto;
  margin-right: auto;
`;

const Timer = ({ mintStartAt }: any) => {
  const [title, setTitle] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerVisible, setTimerVisible] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now() / 1000;
      if (now < mintStartAt) {
        setTitle(`Countdown`);
        setDays(Math.floor((mintStartAt - now) / (60 * 60 * 24)));
        setHours(Math.floor((mintStartAt - now) / (60 * 60)) % 24);
        setMinutes(Math.floor((mintStartAt - now) / 60) % 60);
        setSeconds(Math.floor(mintStartAt - now) % 60);
        setTimerVisible(true);
      } else {
        setTimerVisible(false);
      }
    }, 0);
    return () => clearInterval(timer);
  }, [mintStartAt]);

  return timerVisible ? (
    <div className="timer-mint-container">
      <Card>
        <RowContainer className="timer-container">
          <Item className="days-cirlce">
            <CircularProgress
              unit={30}
              unitName="Days"
              size={150}
              strokeWidth={20}
              percentage={days.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
              color="#00FFA3"
            />
          </Item>
          <Item className="hours-cirlce">
            <CircularProgress
              unitName="Hours"
              unit={24}
              size={150}
              strokeWidth={20}
              percentage={hours.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
              color="#728BD3"
            />
          </Item>
          <Item className="minutes-cirlce">
            <CircularProgress
              unitName="Minutes"
              unit={60}
              size={150}
              strokeWidth={20}
              percentage={minutes.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
              color="#A953EA"
            />
          </Item>
          <Item className="seconds-cirlce">
            <CircularProgress
              unitName="Seconds"
              unit={60}
              size={150}
              strokeWidth={20}
              percentage={seconds.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
              color="#DC1FFF"
            />
          </Item>
        </RowContainer>
      </Card>
      <Mint />
    </div>
  ) : (
    <>
      <Mint />
    </>
  );
};

export default Timer;
