import { numberWithCommas } from "../../../utils";
import { CheckCircleFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { postOrder } from "../../../redux/order/orderSlice";
import { Link, useNavigate } from "react-router-dom";

function OrderDetail(props) {
    const { customer } = props;
    const orderItems = props.order_items.data;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deliveryTime = props?.deliveryTime || "20/12/2022";
    const amountPaid = props.totalPrice;
    const surcharge = props?.surcharge || 1.2;
    const style = (text) => {
        switch (text) {
            case "Order Placed":
                return "text-gray-500 uppercase font-bold";
            case "Shipping":
                return "text-blue-400 uppercase font-bold";
            case "Cancelled":
                return "text-red-500 uppercase font-bold";
            case "Received":
                return "text-green-400 uppercase font-bold";
        }
    };
    const handlePayment = () => {
        dispatch(postOrder(props));
        navigate("/order");
    };
    return (
        <div>
            <div className="p-8 border-b">
                <div className="flex justify-between">
                    <h2 className="font-bold text-3xl">
                        Order Detail: #{props.id}
                    </h2>
                    <p className="text-2xl">
                        Status:{" "}
                        <span className={style(props.status)}>
                            {props.status}
                        </span>
                    </p>
                </div>
                <p className="text-3xl">From MR.PORTER</p>
            </div>
            {orderItems.map((item, index) => {
                return (
                    <div
                        className="flex justify-between py-4 border-b"
                        key={index}
                    >
                        <div className="flex">
                            <div className="w-56 h-70">
                                <img
                                    className="object-cover"
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>
                            <div>
                                <p className="font-bold text-3xl ml-2">
                                    {item.designer}
                                </p>
                                <p className="font-semibold text-3xl ml-2">
                                    {item.name}
                                </p>
                                <p className="text-left text-x1 ml-2">
                                    Size: {item.selectedSize?.label}
                                </p>
                                <p className="text-left text-x1 ml-2">
                                    Quantity: {item.quantity}
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-red-400">
                                $
                                {numberWithCommas(
                                    item.price * (1 - item.discount / 100)
                                )}
                            </p>
                            <p className="line-through">
                                ${numberWithCommas(item.price)}
                            </p>
                        </div>
                    </div>
                );
            })}
            <div className="border-b p-4 text-3xl leading-[40px]">
                <p>Sub-total: ${numberWithCommas(props.totalPrice)}</p>
                <p>
                    <span className="">Surcharge: </span>{" "}
                    <span>+${numberWithCommas(surcharge)}</span>
                </p>
                <p>
                    <span className="font-bold">Total: </span>
                    <span className="text-red-500">
                        ${numberWithCommas(amountPaid + surcharge)}
                    </span>
                </p>
                <p>
                    <CheckCircleFill className="text-blue-500" />
                    <span className="font-bold"> Paid: </span>

                    <span className="text-red-400">
                        ${numberWithCommas(amountPaid + surcharge)}
                    </span>
                </p>
            </div>
            <div className="border-b p-4 text-3xl leading-[40px]">
                <p className="font-bold text-3xl">
                    Customer Address and Information
                </p>
                <ul>
                    <li>
                        {customer.name} - {customer.phone}
                    </li>
                    <li>
                        Address: {customer.address.ward}{" "}
                        {customer.address.district} {customer.address.city}
                    </li>
                    <li>Delivery Time: {deliveryTime}</li>
                </ul>
            </div>
            <div className="hidden flex justify-center py-4">
                <button className="bg-blue-400 rounded-xl p-4">
                    Back to Order List
                </button>
            </div>
        </div>
    );
}

export default OrderDetail;
