function Card({course}){

    return(
        <div>
            <img src={course.image.url}/>
        </div>
    );

}

export default Card;