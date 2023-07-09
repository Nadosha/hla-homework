import React from "react";
import useOrder from "./Orders.hooks";

const Orders = () => {
	const { orders } = useOrder();

	return (
		<div className="max-w-lg mx-auto">
			{orders.map(({ _id, customer, price, address }) => (
				<div key={_id} className="p-2 rounded border-black border my-2">
					<p>Customer: {customer}</p>
					<p>Price: {price}</p>
					<p>Address: {address}</p>
				</div>
			))}
		</div>
	);
};

export default Orders;
