import React, { useState } from "react";
import { Food } from "../App";

type CartItem = {
    food: Food;
    count: number;
};

type CartProps = {
    cart: CartItem[];
    removeFromCart: (id: number) => void;
    increaseCount: (id: number) => void;
    decreaseCount: (id: number) => void;
};

const Cart = ({ cart, removeFromCart, increaseCount, decreaseCount }: CartProps) => {
    const [showForm, setShowForm] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: '', phone: '', address: '' });

    const totalprice = cart.reduce((total, item) => total + item.food.price * item.count, 0);
    const totalTime = cart.reduce((total, item) => total + item.food.time * item.count, 0);

    const handlePayment = () => {
        setShowForm(true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Your order has been registered! Preparation time: " + totalTime);
        setShowForm(false);
    };

    return (
        <div className="bg-slate-200 flex flex-col items-end text-xl pr-4 w-[400px] ml-2  rounded-md   md:w-[740px] lg:w-[1400px]">
            <h2 className='text-center text-xl font-bold text-orange-950 m-2 lg:mb-10'>Shopping Cart</h2>
            <div className='flex flex-col items-center 	'>
                {cart.length === 0 ? (
                    <p>Your shopping cart is empty</p>
                ) : (
                    cart.map(item => (
                        <div key={item.food.id} className='flex justify-between w-80 lg:my-6 '>
                            <span className="text-xs lg:text-xl		">{item.food.name}</span>
                            <div >
                                <button className="bg-black text-white size-7  rounded-md  "
                                 onClick={() => increaseCount(item.food.id)}
                                 >+</button>
                                <span className="mx-3">{item.count}</span>
                                <button
                                className="bg-slate-400	  size-7 rounded-md  "
                                 onClick={() => decreaseCount(item.food.id)}
                                 >-</button>
                                <span className="mx-3">{item.food.price * item.count}$</span>
                            </div>
                            <button onClick={() => removeFromCart(item.food.id)} className='bg-cover bg-center size-7 text-white rounded px-2'
                                style={{backgroundImage:"url('garbage.png')"}}
                                ></button>
                        </div>
                    ))
                )}
            </div>
            <h2 className="my-5 text-xl bg-orange-600 p-2 rounded-md lg:my-7	">Total Price: {totalprice}$</h2>
            <button className="mb-5 bg-green-300	p-2 rounded-md	" onClick={handlePayment}>Payment</button>
            {showForm && (
                <form className="flex flex-col"
                onSubmit={handleSubmit}>
                    <input className="border-2 border-zinc-700 rounded-md outline-none	" type="text" placeholder="Name" value={userInfo.name}
                        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                        required
                    />
                    <input className="border-2 border-zinc-700 rounded-md outline-none	" type="tel" placeholder="Phone" value={userInfo.phone}
                        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                        required
                    />
                    <input className="border-2 border-zinc-700 rounded-md outline-none	" type="text" placeholder="Address" value={userInfo.address}
                        onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                        required
                    />
                    <button className="bg-green-600	" type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Cart;