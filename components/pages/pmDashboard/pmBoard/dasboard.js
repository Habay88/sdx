import React, { useState, useEffect } from 'react'
import './dashboard.css'
import { AiOutlineSearch } from "react-icons/ai";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';
import Loader from "react-loader-spinner";
import {Link} from "react-router-dom";



let arr = []
const Dashboard = () => {

  const [board, setBoard] = useState([])
  const [load, setLoad] = useState(false)
  const [loading, setLoading] = useState(false)

  const arrr = [
    {
      id: 1,
      pname: 'computer',
      category: 'electronics',
      price: 20000
    },
    {
      id: 2,
      pname: 'computer',
      category: 'electronics',
      price: 20000
    },
    {
      id: 3,
      pname: 'computer',
      category: 'electronics',
      price: 20000
    },
    {
      id: 4,
      pname: 'computer',
      category: 'electronics',
      price: 20000
    },
  ]

  const arrrs = [
    {
      id: 1,
      pname: '20/07/2020',
      category: 'Television',
      price: 'good product'
    },
    {
      id: 2,
      pname: '20/07/2020',
      category: 'Laptop',
      price: 'Nice product'
    },
    {
      id: 3,
      pname: '20/07/2020',
      category: 'Make up',
      price: 'bad product'
    },
    {
      id: 4,
      pname: '20/07/2020',
      category: 'Appliances',
      price: 'Top Product'
    },
  ]

  useEffect(() => {
    getDashboard()
  }, [])

  const getDashboard = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API}dashboard/dashboard/CSE/`)
      // console.log(response.data.CSE)
      setBoard(response.data.CSE)
      arr = response.data.CSE
      console.log(arr[1])
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='dashh'>

        <div className='dashk-item1'>
          <h2> Pm Dashboard</h2>
          <div className='okon'>

            <nav className='barr'>
              <input placeholder='search' />
              <span ><AiOutlineSearch size={20} /> </span>
            </nav>

            <div className='dblast'>
              <button className='kontt'>Demand Blast</button>
            </div>

            <div className='dblast2'>
              <Link to="/quickorder" className='pmTendertable'>Quick Order</Link>
            </div>
          </div>
          <br />
          <h5>Supplier Location</h5>
          {/* {loading ? (
              <div style={{textAlign: 'center', marginTop: '5%'}}> <Loader
              type="Circles"
               color="gray"
                height={130}
                 width={130}
              /> </div>
            ): */}
          <div className='afrik'>
            <div className='afrikk'>
              <p className='tvp'>MAP</p>
            </div>
            <div className='afrikkk'>
              <p className='tvp'>Top States</p>
            </div>
          </div>
          {/* } */}
          <div className='tvps'>
            <nav className='tvps1'>
              <p className='tvp'>Too Viewed Products</p>

              <div className='tvpss1'>
                <table className='tvtable'>
                  <thead className='tvhead'>
                    <td>No.</td>
                    <td>Product Name</td>
                    <td>Category</td>
                    <td>Price</td>
                  </thead>

                  <tbody >
                    {arrr && arrr.map(item => (
                      <tr key={item.id}>
                        <td className='tvr'>{item.id} </td>
                        <td className='tvr'>{item.pname} </td>
                        <td className='tvr'>{item.category} </td>
                        <td className='tvr'>#{item.price}/kg </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </nav>

            <nav className='tvps2'>
              <p className='tvp'>Latest Reviews</p>
              <div className='tvpss2' >
                <table className='tvtable'>
                  <thead className='tvhead'>
                    <td>No.</td>
                    <td>Date</td>
                    <td>Product</td>
                    <td>Comment</td>
                  </thead>

                  <tbody >
                    {arrrs && arrrs.map(item => (
                      <tr key={item.id}>
                        <td className='tvrr'>{item.id} </td>
                        <td className='tvrr'>{item.pname} </td>
                        <td className='tvrr'>{item.category} </td>
                        <td className='tvrr'>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </nav>
          </div>
        </div>

        <div className='dashk-item2'>
          <h5 className='regpro'>Top Suppliers</h5>
          <div className='pea'>

          </div>
        </div>

        <div className='dashk-item3'>
          <h5>Recent Activities</h5>
          <div className='ddashk-item2'>
            <div className='daash-time'>
              <nav className='ddash-time'>
                <p>23/05/2020 <br /> <span>5:30pm</span></p>
              </nav>

              <nav className='ddash-time'>
                <p>23/05/2020 <br /> <span>5:30pm</span></p>
              </nav>

              <nav className='ddash-time'>
                <p>23/05/2020 <br /> <span>5:30pm</span></p>
              </nav>

              <nav className='ddash-time'>
                <p>23/05/2020 <br /> <span>5:30pm</span></p>
              </nav>
            </div>

            <div className='linerr' />

            <div>

            </div>

            <div className='daash-timee'>
              <nav className='ddash-timee'>
                <p>Copper Ltd Approved <br /> <span>By Patricia Ojo</span></p>
              </nav>

              <nav className='ddash-timee'>
                <p>form 4356 rejected <br /> <span>By Patricia Ojo</span></p>
              </nav>

              <nav className='ddash-timee'>
                <p>form 7256 accepted <br /> <span>By Patricia Ojo</span></p>
              </nav>

              <nav className='ddash-timee'>
                <p>form 4926 rejected<br /> <span>By Patricia Ojo</span></p>
              </nav>
            </div>
          </div>

          <h4 style={{ marginLeft: 13, fontSize: 19, marginTop: 35 }}>Supplier</h4>
          <div className='ddashk-item1'>
            <div className='avar'>
              <p>22 Pending Approvals</p>
              <p>327 Pending Enquires</p>
              <p>43 Expiration Warnings</p>
              <p>10 Reactivation Reminder</p>
              <p>8 Pending Chats</p>
            </div>
          </div>
        </div>

        <div>

        </div>

      </div>
    </>
  )
}

export default Dashboard;


