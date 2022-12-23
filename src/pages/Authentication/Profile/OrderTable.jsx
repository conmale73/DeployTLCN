import { useState, Fragment } from "react";
import { numberWithCommas } from "../../../utils";
import { Table } from "flowbite-react";
import "./table.scss";
import OrderDetail from "./OrderDetail";
import clsx from "clsx";
import { orderService } from "../../../service/order.service";

const OrderTable = (props) => {
    const style = (text) => {
        switch (text) {
            case "Order Placed":
                return "text-black-500 uppercase font-bold";
            case "Shipping":
                return "text-blue-400 uppercase font-bold";
            case "Cancelled":
                return "text-red-500 uppercase font-bold";
            case "Received":
                return "text-green-400 uppercase font-bold";
        }
    };
    const [orderDetail, setOrderDetail] = useState({ index: -1, id: null });
    const [status, setStatus] = useState(() => {
        return (
            props.data.map((order) => ({
                id: order.id,
                status: order.status,
            })) || []
        );
    });
    const handleReceived = async (e) => {
        e.preventDefault();
        if (confirm("Confirm order received?")) {
            const id = e.target.id;
            const data = JSON.stringify({ status: "Received" });
            const res = await orderService.updateOrder(id, data);
            if (res) {
                alert("Confirm order successfully");
                setStatus((e) => {
                    const data = e.map((order) => {
                        return order.id == id
                            ? { id: order.id, status: "Received" }
                            : { id: order.id, status: order.status };
                    });
                    return data;
                });
            }
            window.location.reload();
        }
    }
    const handleCancel = async (e) => {
        if (confirm("Are you sure to cancel this order?")) {
            const id = e.target.id;
            const data = JSON.stringify({ status: "Cancelled" });
            const res = await orderService.updateOrder(id, data);
            if (res) {
                alert("Cancel order successfully");
                setStatus((e) => {
                    const data = e.map((order) => {
                        return order.id == id
                            ? { id: order.id, status: "Cancelled" }
                            : { id: order.id, status: order.status };
                    });
                    return data;
                });
            }
        }
    };
    return (
        <Table hoverable={true} className="">
            <caption className="text-left p-4 font-semibold text-2xl">
                Your Recent Orders
            </caption>
            <Table.Head>
                <Table.HeadCell> Order ID </Table.HeadCell>
                <Table.HeadCell>Product</Table.HeadCell>
                <Table.HeadCell>Quantity</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell> Date Create</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y overflow-hidden">
                {props.data.map((order, index) => {
                    const styleStatus = style(order.status);
                    const displayDetail = index === orderDetail.index;
                    const displayCancelBtn = order.status != "Order Placed";
                    const displayReceivedBtn = order.status != "Shipping";
                    const styleDisable = "bg-gray-100";
                    return (
                        <Fragment key={index}>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
                                <Table.Cell className="text-blue-400">
                                    #{order.id}
                                </Table.Cell>
                                <Table.Cell className="text-blue-400 hover:text-blue-700 select-none">
                                    <button
                                        onClick={() =>
                                            setOrderDetail((current) => {
                                                return current.index === index
                                                    ? {
                                                          index: -1,
                                                          id: order.id,
                                                      }
                                                    : { index, id: order.id };
                                            })
                                        }
                                    >
                                        Detail
                                    </button>
                                </Table.Cell>
                                <Table.Cell>{order.totalQuantity}</Table.Cell>
                                <Table.Cell className="text-red-400">
                                    ${numberWithCommas(order.totalPrice)}
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="">{order.createdAt}</p>
                                </Table.Cell>
                                <Table.Cell className={styleStatus}>
                                    <span className="mr-4">{order.status}</span>
                                    {/* {order.payment.paid ? (
                                        <span className="text-white text-xl bg-green-500 p-2 rounded-lg">
                                            Đã thanh toán
                                        </span>
                                    ) : (
                                        <span className="text-white text-xl bg-gray-500 p-2 rounded-lg">
                                            Chưa thanh toán
                                        </span>
                                    )} */}
                                </Table.Cell>
                                <Table.Cell>
                                    <button
                                        disabled={displayReceivedBtn}
                                        id={order.id}
                                        className={clsx(
                                            "bg-green-500 mr-3 text-2xl font-medium p-4 rounded-lg  text-white",
                                            displayReceivedBtn &&
                                                "!bg-gray-100 !text-gray-700"
                                        )}
                                        onClick={handleReceived}
                                    >Confirm Received</button>
                                    <button
                                        disabled={displayCancelBtn}
                                        id={order.id}
                                        onClick={handleCancel}
                                        className={clsx(
                                            "bg-red-500 text-2xl font-medium p-4 rounded-lg  text-white",
                                            displayCancelBtn &&
                                                "!bg-gray-100 !text-gray-700"
                                        )}
                                    >
                                        Cancel
                                    </button>
                                </Table.Cell>
                            </Table.Row>
                            {displayDetail && (
                                <Table.Row>
                                    <Table.Cell className="" colSpan="7">
                                        <OrderDetail {...order} />
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Fragment>
                    );
                })}
            </Table.Body>
        </Table>
    );
};

export default OrderTable;
