import React, { useState, useEffect, useRef } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";
import { ethers } from "ethers";
import styles from "../styles/Wallet.module.css";

const ONBOARD_TEXT = "Click here to install MetaMask!";
const CONNECT_TEXT = "Connect";

const Wallet = (props: {
  handleWalletConnected: any;
  accountConnected: any;
  setBalance: any;
}) => {
  const { handleWalletConnected, setBalance, accountConnected } = props;
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const onboarding = useRef<MetaMaskOnboarding>();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        getBalance(accounts[0]);
        setDisabled(true);
        handleWalletConnected();
        onboarding?.current?.stopOnboarding();
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accounts]);

  const getBalance = async (address: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    const firstAccount: string = accounts[0];
    setButtonText(
      `${firstAccount.slice(0, 5)} - ETH ${balanceInEth.slice(0, 5)}`
    );
    setBalance(balanceInEth);
  };

  useEffect(() => {
    function handleNewAccounts(newAccounts: React.SetStateAction<never[]>) {
      setAccounts(newAccounts);
      accountConnected(newAccounts);
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(handleNewAccounts);
      window.ethereum.on("accountsChanged", handleNewAccounts);
      return () => {
        window.ethereum.removeListener("accountsChanged", handleNewAccounts);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts: React.SetStateAction<never[]>) =>
          setAccounts(newAccounts)
        );
    } else {
      onboarding?.current?.startOnboarding();
    }
  };

  return (
    <button className={styles.button} disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Wallet;
