import React, { useContext, useState } from 'react'
import { authContext } from '../ContextApi/ContextProvider';

const graphListData = [
    {
        commodity: "Book Bazaar",
        value: "77",
        amount: "$2,500,000",
        rate: "+15%",
        className: "range-one"
    },
    {
        commodity: "Artisan Aisle",
        value: "55",
        amount: "$1,800,000",
        rate: "+10%",
        className: "range-two"
    },
    {
        commodity: "Toy Troop",
        value: "30",
        amount: "$1,200,000",
        rate: "+8%",
        className: "range-three"
    },
    {
        commodity: "XStore",
        value: "10",
        amount: "$1,200,000",
        rate: "+8%",
        className: "range-four"
    },
    {
        commodity: "David Herbert Gp Stock",
        value: "19",
        amount: "$15,200,000",
        rate: "+18%",
        className: "range-five"
    },
    {
        commodity: "Geegpay Digital Assets",
        value: "22",
        amount: "$11,200,000",
        rate: "+34%",
        className: "range-six"
    },
]

const GraphItemsList = () => {

    const [sliderValues, setSliderValues] = useState(graphListData);

    const { toggleTheme } = useContext(authContext);



    const handleChange = (event, index) => {
        const newValues = [...sliderValues];
        newValues[index].value = event.target.value;
        setSliderValues(newValues);
    };


    return (
        <div className={`aside-bottom-section ${!toggleTheme ? "darkMode" : ""}`}>
            <div className="aside-bottom-content">
                <div className="aside-bottom-header">
                    <h3>Top Platform</h3>
                    <h3 className='green'>See All</h3>
                </div>
                <ul className="aside-graph-list">
                    {
                        sliderValues.map((val, i) => (
                            <li key={i} className='graph-list'>
                                <h3>{val.commodity}</h3>
                                <div className="graph-range-box">
                                    <input
                                    key={i}
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={val.value}
                                        onChange={event => handleChange(event, index)}
                                        className={val.className}
                                    />
                                </div>
                                <div className="graph-footer">
                                    <span>{val.amount}</span>
                                    <span>{val.rate}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>


        </div>
    )
}

export default GraphItemsList