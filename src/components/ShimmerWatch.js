import React from "react";
import YouTube from "react-youtube";



const ShimmerWatch = () => {
    return (
        <>
        <div className="block">
            <div className="w-[570px] ml-10 bg-gray-900 h-[350px]">
            <YouTube />
            </div>

            <div className="w-[570px] ml-10 mt-10">
                <div className=" block h-32 w-[640px] border-1 border-gray-500 bg-gray-200">
                    <div >

                    </div>


                </div>
                
            </div>


        </div>

   <div className="block ml-10 w-[590px]">

   
    <div className="flex ml-10">
        <div className="flex p-2 0">
        <span className="float-left"><img src="https://via.placeholder.com/200" alt="video" /></span>
        <div className="pl-10 ">
        <span className="mt-2 block border-1 border-gray-200 bg-gray-100 w-56 h-6"></span>
        <span className="mt-2 block border-1 border-gray-200 bg-gray-100 w-56 h-6"></span>
        <span className="mt-2 block border-1 border-gray-200 bg-gray-100 w-56 h-6"></span>

        </div>
        
        </div>
        
        
    </div>

    <div className="flex ml-10">
        <div className="flex p-2 0">
        <span className="float-left"><img src="https://via.placeholder.com/200" alt="video" /></span>
        <div className="pl-10 ">
        <span className="mt-2 block border-1 border-gray-200 bg-gray-100 w-56 h-6"></span>
        <span className="mt-2 block border-1 border-gray-200 bg-gray-100 w-56 h-6"></span>
        <span className="mt-2 block border-1 border-gray-200 bg-gray-100 w-56 h-6"></span>

        </div>
        
        </div>
        
        
    </div>
    

    
</div>
</>
    );
}

export default ShimmerWatch;