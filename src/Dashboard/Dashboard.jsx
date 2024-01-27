import React, { useContext } from 'react'
import Chart from './Chart'
import Lastorder from './Lastorder'
import GraphCards from './GraphCards'
import GraphItemsList from './GraphItemsList'
import { authContext } from '../ContextApi/ContextProvider'



const Dashboard = () => {

  const { toggleTheme } = useContext(authContext);




  return (
    <div className='general'>
      <main className={`dashboard-content-wrapper ${!toggleTheme ? "darkMode" : ""}`}>
        <div className="container">
          <div className="dashboard-content">
            <div className={`chart-lastOrder-box ${!toggleTheme ? "darkMode" : ""}`}>
              <article className='chart-lastOrder-wrapper'>
                <div className="chart-box-content">
                  <Chart />
                </div>

                <div className={`last-order-box  ${!toggleTheme ? "darkMode" : ""} `}>
                  <Lastorder />
                </div>

              </article>
            </div>

            <div className={`aside-orders-box  ${!toggleTheme ? "darkMode" : ""} `}>
              <aside>
                <section className='aside-wrapper'>
                  <article className="aside-top">
                    <GraphCards />
                  </article>

                  <article className="aside-bottom">
                    <GraphItemsList />
                  </article>
                </section>

              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard