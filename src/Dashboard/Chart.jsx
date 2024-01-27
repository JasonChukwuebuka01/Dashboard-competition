import React, { useContext } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { authContext } from '../ContextApi/ContextProvider';

const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Sep',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Oct',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Nov',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Dec',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Chart = () => {

    const {toggleTheme} = useContext(authContext);

    return (
        <div>
            <div className={`chart-header-content ${!toggleTheme? "darkMode": "" }`}>
                <h3 className='title'>Sales Trends</h3>
                <div className="chart-select-group">
                    <span >Sort by : </span>
                    <select name="fitler" id="filter" className='select'>
                        <option value="daily">Daily</option>
                        <option value="Weekly" selected>Weekly</option>
                    </select>
                </div>
            </div>
            <div className="chart-box">
                <ResponsiveContainer width="100%" height="100%"  className="chartt">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart