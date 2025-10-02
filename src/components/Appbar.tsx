export const Appbar = () => {
    return <div className="flex justify-between pr-4 pt-2 pl-4 h-16 bg-gray-400">
        <div className="h-9 p-1">
            <h3 className="font-display text-3xl">
                Futuremee
            </h3>
        </div>
        <div className="">
            <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-500 border-4">
                About Me
            </button>
        </div>
    </div>
}