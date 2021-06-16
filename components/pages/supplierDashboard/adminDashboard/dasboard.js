import React,{useState, useEffect} from 'react'
import './dashboard.css'
import { AiOutlineSearch} from "react-icons/ai";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import { API } from '../../../Helpers/environment/backend';
import Loader from "react-loader-spinner";

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
let arr = []
const Dashboard = ()=>{

  const [board, setBoard] = useState([])
  const [load, setLoad] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getDashboard()
  }, [])

  const getDashboard = async ()=>{

    
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
    return(
        <>
        <div className='dashh'>
          
            <div className='dash-item1'>
            <h2> Supplier Dashboard</h2>
            <nav className='barr'>
                <input  placeholder='search' />
                <span ><AiOutlineSearch size={20} /> </span>
            </nav>
            {/* <div className='active'>

          </div> */}
            <br/>
            <h5>Demand Blasts</h5>
            {loading ? (
              <div style={{textAlign: 'center', marginTop: '5%'}}> <Loader
              type="Circles"
               color="gray"
                height={130}
                 width={130}
            
              /> </div>
            ):
            <div className='afrikaa'>
             {/* { board.map((item, i) =>(
                
                <a key={i}>
                <nav className='regg'>
                    <p>{item.label} <br/><span>{item.value}</span></p>
                </nav>
                </a>
                
              ))} */}
              </div>
            }
            
            </div>
           
            <div className='dash-item2'>
            <h5 className='regpro'>Available Products</h5>
            <div className='peanutt'>
  
            </div>
            </div>
            
            <div className='dash-item3'>
            <h5>Tasks</h5>
              <div className='ddash-item11'>
                <div className='avar'>
                <p>22 Pending Approvals</p>
                <p>327 Pending Enquires</p>
                <p>43 Expiration Warnings</p>
                <p>10 Reactivation Reminder</p>
                <p>8 Pending Chats</p>
                </div>
              </div>

              <h4 style={{marginLeft: 13, fontSize: 19, marginTop: 35}}>Recent Activities</h4>
              <div className='ddash-item22'>
                <div className='daash-time'>
                  <nav className='ddash-time'>
                    <p>23/05/2020 <br/> <span>5:30pm</span></p>
                  </nav>

                  <nav className='ddash-time'>
                    <p>23/05/2020 <br/> <span>5:30pm</span></p>
                  </nav>

                  <nav className='ddash-time'>
                    <p>23/05/2020 <br/> <span>5:30pm</span></p>
                  </nav>

                  <nav className='ddash-time'>
                    <p>23/05/2020 <br/> <span>5:30pm</span></p>
                  </nav>
                </div>

                <div className='linerr'/>

                <div>

                </div>

                <div className='daash-timee'>
                <nav className='ddash-timee'>
                    <p>Copper Ltd Approved <br/> <span>By Patricia Ojo</span></p>
                  </nav>

                  <nav className='ddash-timee'>
                    <p>form 4356 rejected <br/> <span>By Patricia Ojo</span></p>
                  </nav>

                  <nav className='ddash-timee'>
                    <p>form 7256 accepted <br/> <span>By Patricia Ojo</span></p>
                  </nav>

                  <nav className='ddash-timee'>
                    <p>form 4926 rejected<br/> <span>By Patricia Ojo</span></p>
                  </nav>
                </div>
              </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;


  {/* {loading ?  <div style={{textAlign: 'center', marginTop: '5%'}}> <Loader
                type="Circles"
                 color="gray"
                  height={130}
                   width={130}
              
                /> </div>:(
                 <div className='afrika'>
              <a>
            <nav className='regg'>
                <p>{board && board[0].label} <br/><span>{board && board[0].value}</span></p>
            </nav>
            </a>
            <a>
            <nav className='regg reg1'>
            <p>{board && board[1].label} <br/><span>{board && board[1].value}</span></p>
            </nav>
            </a>
            <a>
            <nav className='regg reg2'>
            <p>{board && board[2].label} <br/><span>{board && board[2].value }</span></p>
            </nav>
            </a>
            <a>
            <nav className='regg reg3'>
            <p>{board && board[3].label} <br/><span>{board && board[3].value} </span></p>
            </nav>
            </a>
            <a>
            <nav className='regg reg4' >
            <p>{board && board[4].label} <br/><span>{board && board[4].value} </span></p>
            </nav> 
            </a>
            <a>
            <nav className='regg reg5'>
            <p>{board && board[5].label} <br/><span>{board && board[5].value} </span></p>
            </nav>
            </a>
            <a>
            <nav className='regg reg6'>
            <p>{board && board[6].label} <br/><span>{board && board[6].value} </span></p>
            </nav>
            </a>
            <a>
            <nav className='regg reg7'>
            <p>{board && board[7].label} <br/><span>{board && board[7].value} </span></p>
            </nav>
            </a>
            </div> 
                )} */}