

export default function Header(){
    return(
        <nav className="w-screen h-20 bg-slate-900 p-2 flex flex-row justify-between items-center">
            <div className="text-white text-sm 	w-28 ml-4 ">The best foods in the shortest time</div>
            <div className="flex flex-row items-center  gap-0">
                <h2 className="text-white">Online FastFood</h2>
                <img src="begurlogo.png" alt="" className="size-32 " />
            </div>
        </nav>
    )
}