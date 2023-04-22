import React from 'react';
import {
  MainArea,
  Header,
  Item,
  Profile,
  ProfileContent,
  Nav,
  Body,
  LockArea,
  LockInner,
  LockInnerLeft,
  LockInnerRight,
  YourLock,
  UnLockArea,
  InfoArea,
  LockInput,
  LockInnerButton,
  SwapContent,
  MainContainer,
} from './styles';
import EPX from '../../assets/images/epx.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
export default function MultiplyArea() {
  const [lock, setLock] = useState(true);
  const [unlock, setUnlock] = useState(false);
  const [info, setInfo] = useState(false);
  const{t}=useTranslation()
  const ShowLock = () => {
    setLock(true);
    setUnlock(false);
    setInfo(false);
  };
  const ShowUnlock = () => {
    setUnlock(true);
    setLock(false);
    setInfo(false);
  };
  const ShowInfo = () => {
    setInfo(true);
    setUnlock(false);
    setLock(false);
  };
  return (
    <>
      <SwapContent>
        <h2>
          {t("Lock your ZiMax earn up to 60% more profit")}
        </h2>
      </SwapContent>
      <MainContainer>
        <MainArea>
          <Header>
            <Item>
              <Profile>
                <img src={EPX} width="31" height="33" alt="ZiMax Price" />
                <ProfileContent>
                  <h2>{t("ZiMax")}</h2>
                  <p>{t("LOCK ZiMax")}</p>
                </ProfileContent>
              </Profile>
            </Item>
            <Item>
              <ul>
                <li>
                  <span>{t("Bonus APR")}</span>
                  <p>{t("15 to 60%")}</p>
                </li>
                <li>
                  <span>{t("Locked ZiMax")}</span> <strong>{t("0.0 ZiMax")}</strong>
                </li>
                <li>
                  <span>{t("TVL")}</span>
                  <h2>{t("$0.00")}</h2>
                </li>
                <li>
                  <span>{t("Claimable")}</span>
                  <strong>{t("$0.00")}</strong>
                </li>
              </ul>
            </Item>
            <Item>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 192 512"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path>
              </svg>
            </Item>
          </Header>
          <Nav>
            <button className={lock ? 'active' : ''} onClick={ShowLock}>
              {t("LOCK")}
            </button>
            <button className={unlock ? 'active' : ''} onClick={ShowUnlock}>
              {t("UNLOCK")}
            </button>
            <button className={info ? 'active' : ''} onClick={ShowInfo}>
              {t("INFO")}
            </button>
          </Nav>
          <Body>
            {lock && (
              <LockArea>
                <h4>
                  {t("lock your ZiMax tokens any period from 6 month to 2 years to receive higher APY.")} <br /> <br />
                  <label>
                    <input type="checkbox" /> {t("6 Months 15% Bonus")}
                  </label>
                  <label>
                    <input type="checkbox" /> {t("1 Year 40% Bonus")}
                  </label>
                  <label>
                    <input type="checkbox" /> {t("2 Years 60% Bonus")}
                  </label>
                </h4>
                <LockInner>
                  <LockInnerLeft>
                    <h5>
                      {t("Lock Your Zimax")}
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="action-icon"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="416"
                            height="288"
                            x="48"
                            y="144"
                            fill="none"
                            stroke-linejoin="round"
                            stroke-width="32"
                            rx="48"
                            ry="48"
                          ></rect>
                          <path
                            fill="none"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
                          ></path>
                          <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                        </svg>
                        {t("Your Wallet ZiMax Balance 0.00")}
                      </span>
                    </h5>
                    <LockInput>
                      <input type="number" />
                      <button>{t("MAX")}</button>
                    </LockInput>
                  </LockInnerLeft>
                  <LockInnerRight>
                    <strong>
                      <svg
                        x="25%"
                        stroke="#38C948"
                        fill="#38C948"
                        stroke-width="0"
                        viewBox="0 0 40 40"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <circle cx="20" cy="20" r="20"></circle>
                          <text
                            fill="white"
                            font-weight="700"
                            text-anchor="middle"
                            x="50%"
                            y="50%"
                            alignment-baseline="middle"
                            font-size="18px"
                          >
                            1
                          </text>
                        </g>
                      </svg>
                      <span></span>
                      <svg
                        x="25%"
                        stroke="#38C948"
                        fill="#38C948"
                        stroke-width="0"
                        viewBox="0 0 40 40"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <circle cx="20" cy="20" r="20"></circle>
                          <text
                            fill="white"
                            font-weight="700"
                            text-anchor="middle"
                            x="50%"
                            y="50%"
                            alignment-baseline="middle"
                            font-size="18px"
                          >
                            2
                          </text>
                        </g>
                      </svg>
                    </strong>
                    <LockInnerButton>
                      <button>{t("APPROVE")}</button>
                      <button>{t("LOCK")}</button>
                    </LockInnerButton>
                  </LockInnerRight>
                </LockInner>
                <YourLock>
                  <h6>{t("Your Locked ZiMax")}</h6>
                  <ul>
                    <li>{t("Locked On")}</li>
                    <li>{t('Locked')}</li>
                    <li>{t("Total Value")}</li>
                    <li>{t("Unlocks On")}</li>
                  </ul>
                </YourLock>
              </LockArea>
            )}
            {unlock && (
              <UnLockArea>
                <h4>
                  {t("You can select and claim your unlocked ZiMax below.")} <br />
                  {t("This will be sent to your wallet and can be staked or locked again.")}
                </h4>
                <p>
                  {t("Note: You can choose to leave your ZiMax locked and you will continue to earn higher rewards.")}
                  <br />
                  <br />
                  {t("Early Withdraw Fee 80%")}
                </p>
                <ul>
                  <li>{t("Locked Date")} </li>
                  <li>{t("Locked")}</li>
                  <li>{t("Total Value")} </li>
                  <li>{t("Unlocked On")}</li>
                  <li>{t("Amount To Unlock")}</li>
                </ul>
                <button>{t("UNLOCK MY ZiMax")}</button>
              </UnLockArea>
            )}
            {info && (
              <InfoArea>
                <ul>
                  <li>
                    <strong>{t("ZiMax Contract:")}</strong>
                    {t("0x5817d4f0b62a59b17f75207da1848c2ce75e7af4")}
                  </li>
                  <li>
                    <strong> {t("Locking Contract:")}</strong>
                    {t("0x574679Ec54972cf6d705E0a71467Bb5BB362919D")}
                  </li>
                  <li>
                    <strong>{t("Depositor Contract:")}</strong>
                    {t("0x423D0FE33031aA4456a17b150804aA57fc157d97")}
                  </li>
                </ul>
              </InfoArea>
            )}
          </Body>
        </MainArea>
      </MainContainer>
    </>
  );
}
