import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

function Card(props){
    let like = props.like;
    let setLike = props.setLike;
    let course = props.course;
    console.log(course);

    function clickHandler() {
        if(like.includes(course.id)) {
            setLike( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
            toast.warning("like removed");
        }
        else {
            
            if(like.length === 0 ) {
                setLike([course.id]);
            }
            else {
                setLike((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return(
        <div className="w-[30%] min-w-[300px] rounded-lg bg-[#512B81] overflow-hidden">
            <div className="relative">
                <img src={course.image.url}/>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
                grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            like.includes(course.id) ? 
                            (<FcLike fontSize="1.75rem" />)
                            :(<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>
            <div className="mt-2 flex flex-col gap-2 px-3 pb-2">
                <h4 className="text-yellow-500 text-lg font-bold ">{course.title}</h4>
                <p className="text-white">{
                    course.description.length >100 ? 
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
                }</p>
            </div>
        </div>
        
    );

}

export default Card;