import { useState } from 'react';
import Header from './Header'
import Footer from './Footer'

type Props = { children: any }

const Layout = (props: Props) => {
  const { children } = props;

  const [isConnected, setIsConnected] = useState(false);
  const [accounts, setAccounts] = useState('');

  const handleWalletConnected = () => {
    setIsConnected(true);
  }

  const accountConnected = (e: any) => {
    setAccounts(e);
  }
  
  return (
    <>
      <Header handleWalletConnected={handleWalletConnected} accountConnected={accountConnected} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
