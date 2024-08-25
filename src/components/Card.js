import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props){
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)) {
            // pehle se like hai
            setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed!");
        }
        
        else {
            // pehle se like nai hai so insert karna padega
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else {
                // pela thi kaik hatu
                setLikedCourses( (prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully!")
        }
    }

    return(
        <div className="card">   
            <div className="card-img">
                <img src={course.image.url}></img>
                <div className="card-like-btn">
                    <button onClick={clickHandler} className="like-icon">
                        {
                            likedCourses.includes(course.id) ? (<FcLike />) : (<FcLikePlaceholder />)
                        }
                    </button>
                </div>
            </div>
            <div>
                <p className="card-title">{course.title}</p>
                <p className="card-description">
                    {
                        course.description.length > 100 ?
                        (course.description.substr(0,100)) + "...":
                        (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;