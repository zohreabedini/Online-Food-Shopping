

export default function Header(){
    return(
        <nav className=" bg-slate-900 p-2 flex flex-row justify-between items-center fixed top-0 z-20 w-screen h-20 md:h-28 mb-48	 ">
            <div className="text-white ml-4  text-sm  w-28 lg:text-xl	w-40 ">The best foods in the shortest time</div>
            <div className="flex flex-row items-center  gap-0">
                <h2 className="text-white lg:text-xl">Online FastFood</h2>
                <img src="begurlogo.png" alt="" className="size-32 lg:size-44 " />
            </div>
        </nav>
    )
}