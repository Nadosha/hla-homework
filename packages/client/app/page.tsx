"use client";
import CreateOrder from "@/components/CreateOrder";
import Orders from "@/components/Orders";

const Home = () => {
	return (
		<>
			<h1 className="font-bold text-2xl text-center mt-3">Orders</h1>
			<Orders />
			<CreateOrder />
		</>
	);
};

export default Home;
