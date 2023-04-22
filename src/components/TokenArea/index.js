import React, { useEffect, useState } from 'react';
import {
  Main,
  Item,
  ItemLeft,
  ItemRight,
  SwapContent,
  MainArea,
} from './styles';
import BNB from '../../assets/images/bnb.png';
import EPX from '../../assets/images/epx.png';
import USDT from '../../assets/images/usdt.svg';
import CountDown from '../CountDown';
import { useTranslation } from 'react-i18next';
import { SelectWrapper } from './styles';
import { Select } from '../Shared/Select';
import { Option } from '../Shared/Select/styles';
import { ethers } from 'ethers';
import zmzabi from '../../abis/ZMZ_Sell.json';
import usdt from '../../abis/USDT_token.json';
import { ToastContainer, toast } from 'react-toastify';
import bigInt from 'big-integer';
import BigNumber from 'big-number';
const ZMZ_CONTRACT_ADDRESS = '0x2791F9476cb9dD74a4B44d6530FB08475dFA47b6';
const USDT_TETHER_TOKEN_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
export default function LevelsArea() {
  const { t } = useTranslation();
  const [creatorInfo, setCreatorInfo] = useState('bnb');

  const [userInputValue, setUserInputValue] = useState('0');
  const [estimateValue, setEstimateValue] = useState('');
  const [buttonStatus, setButtonStatus] = useState('approve');
  const categoryOptions = [
    { value: 'bnb', content: <Option>BNB</Option>, bnb: BNB },
    { value: 'usdt', content: <Option>USDT</Option>, usdt: USDT },
  ];

  // const provider = new ethers.providers.JsonRpcProvider(
  //   'https://data-seed-prebsc-1-s1.binance.org:8545'
  // );
  const ZmzContract = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const ZmzContract = new ethers.Contract(
        ZMZ_CONTRACT_ADDRESS,
        zmzabi,
        signer
      );
      return ZmzContract;
    } catch (error) {
      console.log(error);
    }
  };

  const UsdtContract = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const UsdtContract = new ethers.Contract(
        USDT_TETHER_TOKEN_ADDRESS,
        usdt,
        signer
      );
      return UsdtContract;
    } catch (error) {
      console.log(error);
    }
  };

  const handleEstimate = async (val) => {
    // console.log('val', val, ZmzContract());
    let _ZmzContract = await ZmzContract();
    console.log('contract---', _ZmzContract);
    setUserInputValue(val);
    if (!val) {
      setEstimateValue('0');
    }
   if (val > 0) {
   /*   if (creatorInfo === 'bnb') {
        console.log('bnb function');

        let _getEstimate = await _ZmzContract.estimateWithBnb(
          ethers.utils.parseEther(val)
        );
        console.log('val', _getEstimate.toString());
        console.log('getetet', (_getEstimate.toString() / 10 ** 18).toFixed(6));
        setEstimateValue(_getEstimate.toString());
      }
      if (creatorInfo === 'usdt') { */
        let _getEstimate = await _ZmzContract.estimateWithUsdt(
          ethers.utils.parseEther(val)
        );
        console.log('val', _getEstimate.toString());
        console.log('getetet', (_getEstimate.toString() / 10 ** 18).toFixed(6));
        setEstimateValue( (_getEstimate.toString() / 10 ** 18).toFixed(6));
     // } //
     } 
  };


  const handleEstimateZIMAX = async (val) => {
    // console.log('val', val, ZmzContract());
    if (!val) {
      setUserInputValue('0');
    }
        let zimaxVal = 5*(val) * 10 ** 18;
        setUserInputValue( (zimaxVal.toString() / 10 ** 18).toFixed(0) )
        setEstimateValue(val);
     // } //
    
   
  };


  const handleBuyBNB = async () => {
    if (!estimateValue || !userInputValue) {
      return toast.error('Please enter value.');
    }
    try {
      let _ZmzContract = await ZmzContract();
      let _buy = await _ZmzContract.buyWithBNB(
        ethers.utils.parseEther(userInputValue),
        {
          value: await _ZmzContract.estimateWithBnb(
            ethers.utils.parseEther(userInputValue)
          )
        }
      );
      let waitForTx = await _buy.wait();
      if (waitForTx) {
        toast.success('Transaction successfull.');
      }
      console.log('wait handleBuyBNB', waitForTx);
    } catch (error) {
      console.log(error);
    }
  };
  const handleApproveUSDT = async () => {
    console.log("estimate", estimateValue)
    try {
      let _UsdtContract = await UsdtContract();
      let _approve = await _UsdtContract.approve(
        ZMZ_CONTRACT_ADDRESS,
        estimateValue
      );
      let waitForTx = await _approve.wait();
      if (waitForTx) {
        console.log('wait handleApproveUSDT', waitForTx);
        setButtonStatus('buy');
        toast.success('Approved successfull.');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleBuyUsdt = async () => {
    console.log('userinput', userInputValue <= 0);

    try {
      let _ZmzContract = await ZmzContract();

      if (userInputValue <= 0) {
        return toast.error('Value should be positive.');
      }
      let _buy = await _ZmzContract.buyWithUsdt(
        ethers.utils.parseEther(userInputValue)
      );
      let waitForTx = await _buy.wait();
      if (waitForTx) {
        toast.success('Transaction successfull.');
      }
      console.log('wait handleBuyUsdt', waitForTx);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <SwapContent>
        <h2>
          {t('Buy Zimax and earn 36,5% APY')} <br />
        </h2>
        <h1>
          {' '}
          {t('Next Rewards in')} <CountDown />{' '}
        </h1>
        <p>
          {t(
            'Simply buy, hold and watch your ZiMax in your wallet grow every 15 minutes.'
          )}
        </p>
      </SwapContent>
      <MainArea>
        <Main>
          <Item>
            <ItemLeft>
           {/*   {console.log(
                'creatorinfo',
                creatorInfo !== 'usdt' ? (
                  <img src={BNB} alt='bnb' />
                ) : (
                  <img src={USDT} alt='usdt' />
                )
              )}
    {creatorInfo !== 'usdt' ? (
                <img src={BNB} alt='bnb' />
              ) : (
                <img src={USDT} alt='usdt' />
              )}*/}

<img src={USDT} alt='usdt' />
{t('USDT')}
             {/*  <SelectWrapper>
                <Select
                  notReload
                  isCustomArrow
                  // placeholder={<Option>{t('Select Category')}</Option>}
                  options={categoryOptions}
                  defaultValue={creatorInfo}
                  onChange={(val) => {
                    setCreatorInfo(val);
                    setEstimateValue('');
                    setUserInputValue('0');
                  }}
                />
                </SelectWrapper> */}
            </ItemLeft>
            <ItemRight>
              <input
                placeholder='0'
                type='number'
                value={estimateValue  }
             //   disabled
               onChange={(e) => handleEstimateZIMAX(e.target.value)}
              />
              <span>{t('Balance 0')}</span>
            </ItemRight>
          </Item>
          <Item>
            <ItemLeft>
              <img src={EPX} alt='ZiMax Token' />
              {t('ZIMAX')}
            </ItemLeft>
            <ItemRight>
              <input
                placeholder='0'
                type='number'
                value={userInputValue }
                onChange={(e) => handleEstimate(e.target.value)}
              />
              <span>{t('Balance 0')}</span>
            </ItemRight>
          </Item>
          <h3 >
            <h3>
              {t('1 ZIMAX = 0.2 USDT')}
            </h3>
            <h3>

              {t('Transfer Tax: 14% buy, 16% sell')}
            </h3>
          </h3>

          {/* <h3> */}
          {/* {t('Price')}
            <strong>
              <span>
                {t('1BNB')} <img src={BNB} alt='bnb' /> -{'>'}
              </span>
              <span>
                {t('1385')} <img src={EPX} alt='ZiMax Token' />
              </span>
            </strong> */}
          {/* </h3> */}
        {/*  {creatorInfo === 'bnb' ? (
            <button onClick={handleBuyBNB}>{t('BUY')}</button>
        ) : ( */}
            <>
              {buttonStatus === 'approve' ? (
                <button onClick={handleApproveUSDT}>{t('APPROVE')}</button>
              ) : (
                <button onClick={handleBuyUsdt}>{t('BUY')}</button>
              )}
            </>
         {/*  )} */}
        </Main>
      </MainArea>
    </>
  );
}
