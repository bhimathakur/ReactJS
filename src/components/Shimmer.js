const Shimmer = () => {
 
    return (
        <div className="block"> 
            {
            Array(6).fill(" ").map((e, index) => {
                return (
                    <div key={index} className="p-3 m-3 border border-black-100 bg-gray-100 w-72 h-60 inline-block" ></div>
                    );
            })
            }
    </div>

    );
}

export default Shimmer;