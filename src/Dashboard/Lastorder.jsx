import React, { useContext } from 'react'
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { authContext } from '../ContextApi/ContextProvider';

const tableData = [
    {
        imgUrl: "/images/LastOrders/img_01.png",
        name: "Marcus Bergson",
        date: "Nov 15, 2023",
        amount: "$80,000",
        status: "Paid",
        viewUrl: "/images/LastOrders/view.png",
        viewText: "View",
        className: "green"
    },
    {
        imgUrl: "/images/LastOrders/img_02.png",
        name: "Jaydon Vaccaro",
        date: "Nov 15, 2023",
        amount: "$150,000",
        status: "Refund",
        viewUrl: "/images/LastOrders/view.png",
        viewText: "View",
        className: "red"
    },
    {
        imgUrl: "/images/LastOrders/img_03.png",
        name: "Corey Schleifer",
        date: "Nov 14, 2023",
        amount: "$87,000",
        status: "Paid",
        viewUrl: "/images/LastOrders/view.png",
        viewText: "View",
        className: "green"
    },
    {
        imgUrl: "/images/LastOrders/img_04.png",
        name: "Cooper Press",
        date: "Nov 14, 2023",
        amount: "$100,000",
        status: "Refund",
        viewUrl: "/images/LastOrders/view.png",
        viewText: "View",
        className: "red"
    },
    {
        imgUrl: "/images/LastOrders/img_05.png",
        name: "Phillip Lubin",
        date: "Nov 13, 2023",
        amount: "$78,000",
        status: "Paid",
        viewUrl: "/images/LastOrders/view.png",
        viewText: "View",
        className: "green"
    },

]
const Lastorder = () => {

    const { toggleTheme } = useContext(authContext);


    return (
        <div>
            <div className={`chart-header-content ${!toggleTheme ? "darkMode" : ""}`}>
                <h3 className='title'>Last Orders</h3>
                <h3 className="last-orders-see-all green">See All</h3>
            </div>

            <div className="table-content">
                <table>

                    <tr className='table-heading'>
                        <th className='name'>Name</th>
                        <th className='date'>Date</th>
                        <th className='amountt'>Amount</th>
                        <th className='status'>Status</th>
                        <th className='invoice'>Invoice</th>
                    </tr>

                    {
                        tableData.map((val, i) => (
                            <tr key={i}>
                                <td className='table-group'>
                                    <div className="image-thumbs">
                                        <img src={val.imgUrl} alt="" />
                                    </div>
                                    <p>{val.name}</p>
                                </td>
                                <td>{val.date}</td>
                                <td>{val.amount}</td>
                                <td className={val.className}>{val.status}</td>
                                <td className='table-group-2'>
                                    <div className='image-tb'>
                                        <HiOutlineDocumentPlus />
                                    </div>

                                    <p className='viewText'>{val.viewText}</p>
                                </td>

                            </tr>
                        ))
                    }

                </table>
            </div>
        </div>
    )
}

export default Lastorder