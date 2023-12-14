function Filter({filterData}){


    return(
        <div className="p-2 flex justify-center items-center gap-4 flex-wrap">
            {
                filterData.map((data)=> {
                    return <button className="text-white font-bold text-sm
                    border py-2 px-3 bg-[#232D3F]">{data.title}</button>;
                })
            }

        </div>
    );

}

export default Filter;