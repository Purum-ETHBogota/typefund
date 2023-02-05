import { useState } from 'react';
import Header from './Header'
// import Footer from './footer'

type Props = { children: any }

const Layout = (props: Props) => {
  const { children } = props;

  const [isConnected, setIsConnected] = useState(false);
  const [accounts, setAccounts] = useState('');

  const handleWalletConnected = () => {
    setIsConnected(true);
  }

  console.log('isConnected', isConnected)

  const accountConnected = (e: any) => {
    setAccounts(e);
  }
  
  return (
    <>
      <Header handleWalletConnected={handleWalletConnected} accountConnected={accountConnected} isMember={false} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout;
