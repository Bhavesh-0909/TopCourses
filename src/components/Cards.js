import React, { useState } from "react";
import Card from "./Card";
import { computeHeadingLevel } from "@testing-library/react";

function Cards(props){
    const courses = props.courses;
    const category = props.category;
    const setCategory = props.setCategory;
    const [like, setLike] = useState([]);

    const getcourses = ()=> {
        if( category === "All"){
            let allcourses = [];
            Object.values(courses).forEach((array)=>{
                array.forEach(courseData =>{
                    allcourses.push(courseData);
                })
            })
            console.log(allcourses);
            return allcourses;
        }
        else{
            return courses[category];
        }
    }

    return(
        <div className="flex flex-wrap justify-evenly mt-10 gap-5 w-[80%] mx-auto">
        {
            getcourses().map((course)=><Card key={course.id} course={course} like={like} setLike={setLike}/>)
            
        }
        
        </div>
    );
}

export default Cards;
