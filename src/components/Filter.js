function Filter({filterData, category, setCategory}){

    function clickhandler(category){
        setCategory(category);
    }


    return(
        <div className="p-2 flex justify-center items-center gap-4 flex-wrap mt-5">
            {
                filterData.map((data)=> {
                    return <button key={data.id} 
                    className={`text-white font-bold text-sm border rounded-md
                    ${ category === data.title ? 
                    " border-white" : 
                    "bg-opacity-40 border-transparent"}
                    py-2 px-3 bg-[#232D3F]`} onClick={()=>clickhandler(data.title)}>{data.title}</button>;
                })
            }

        </div>
    );

}

export default Filter;