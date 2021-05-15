import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card';
import { updateOrder } from '../../redux/actions';


import "./style.css";

const Orders = (props) => {
    const order = useSelector((state) => state.order);
    const [type, setType] = useState('');
    const dispatch = useDispatch();

    const onOrderUpdate = (orderId, items) => {
        const payload = {
            orderId,
            type,
            items 
        };
        dispatch(updateOrder(payload));
    }

    const formatDate = (date) => {
        console.log(date, 'DATE');
        if(date){
            const d = new Date(date);
            return (
                <>
                    <p style={{ margin: 0 }}>{d.getDate()}-{d.getMonth() + 1}-{d.getFullYear()}</p>
                    <p>{d.getHours()}:{d.getMinutes()}</p>
                </>
            );
        }
        return "";
    };
    return (
        <Layout sidebar>
            {
                order.orders.map((orderItem, index) => (
                    <Card
                        style={{
                            margin: "10px 0"
                        }} 
                        key={index} 
                        headerLeft={orderItem._id}
                    >
                        <div
                            style={{
                                justifyContent: "space-between",
                                padding: "50px 50px",
                                display: "flex",
                            }}
                        >
                            <div>
                                <div className="title">Items</div>
                                {orderItem.items.map((item, index) => (
                                    <div className="value" key={index}>
                                        {item.productId.name}
                                    </div>
                                ))}
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <span className="title">Quantity</span>
                                {orderItem.items.map((item, index) => (
                                    <div className="value" key={index}>
                                        {item.purchasedQty}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <span className="title">Total Price</span>
                                <br/>
                                <span className="value">{orderItem.totalAmount}</span>
                            </div>
                            <div>
                                <span className="title">Payment Type</span>
                                <br/>
                                <span className="value">{orderItem.paymentType}</span>
                            </div>
                            <div>
                                <span className="title">Payment Status</span>
                                <br/>
                                <span className="value">{orderItem.paymentStatus}</span>
                            </div>
                        </div>
                        <div
                            style={{
                                boxSizing: "border-box",
                                padding: "100px",
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <div className="orderTrack">
                                {orderItem.orderStatus.map((status) => (
                                    <div 
                                        className={`orderStatus ${
                                            status.isCompleted ? "active" : ""
                                        }`}
                                    >
                                        <div 
                                            className={`point ${status.isCompleted ? "active" : ""}`}
                                        ></div>
                                        <div className="orderInfo">
                                            <div className="status">{status.type}</div>
                                            <div className="date">{formatDate(status.date)}</div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                            {/* select input to apply order action */}
                            <div style={{
                                padding: '0 50px',
                                boxSizing: 'border-box'
                            }}>
                                <select onChange={(e) => setType(e.target.value)}>
                                    <option value={""}>Select status</option>
                                    {orderItem.orderStatus.map((status) => {
                                        return (
                                            <>
                                                {
                                                    !status.isCompleted ? (
                                                        <option                                                         
                                                            key={status.type} 
                                                            value={status.type}
                                                        >
                                                            {status.type}
                                                        </option>
                                                    ) : null
                                                }                        
                                            </>
                                        );
                                    })}
                                </select>
                            </div>
                            {/* button confirm */}
                            <div style={{
                                padding: "0 50px",
                                boxSizing: "border-box"
                            }}>
                                <button onClick={() => onOrderUpdate(orderItem._id, orderItem.items)}>Confirm</button>
                            </div>
                        </div>
                    </Card>
                ))
            }
        </Layout>
    )
}

export default Orders
