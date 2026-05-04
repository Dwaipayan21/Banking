import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';



const Home = () => {

  const loggedIn = {firstName:'Dwaipayan' , lastName:
    'Barui', email:'dwaipayanbarui99209@gmail.com'};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className = 'home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and 
              transaction efficiently. '
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks ={1}
          totalCurrentBalance={10001.69}
          />

        </header>
RECENT TRANSACTIONS
        
      </div>
    {/* right side of the pageg */}

    <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.69},
        {currentBalance: 123.56}]}
    />

    </section>
  )
}

export default Home