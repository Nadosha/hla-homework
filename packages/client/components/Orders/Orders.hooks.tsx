"use client";
import { useEffect, useState } from "react";
import { OrderI } from "./Orders.types";
import { socket } from "../../utils/socket";

const GET_ORDERS_URL = "http://localhost:3001/order";
const useOrder = () => {
	const [orders, setOrders] = useState<OrderI[]>([]);
	//   responseable to fetch intital data through api.
	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await fetch(GET_ORDERS_URL);
				const data: OrderI[] = await response.json();
				setOrders(data);
			} catch (e) {
				console.log("ERRROR", e);
			}
		};

		fetchOrders();
	}, []);

	useEffect(() => {
		socket.on("order-added", (newData: OrderI) => {
			setOrders((prevData) => [...prevData, newData]);
		});
	}, []);

	return {
		orders,
	};
};

export default useOrder;
