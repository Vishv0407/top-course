import { useState } from "react";
import Card from "./Card";

function Cards(props){
    const courses = props.courses;
    let category = props.category;
    // const likedCourses = props.likedCourses; // Use likedCourses from props
    // const setLikedCourses = props.setLikedCourses; // Use setLikedCourses from props
    
    const [likedCourses, setLikedCourses] = useState([]);

    // returns the list of all course which get from api request
    // busines: , , , , 
    // development: , , , ,
    // lifestyle: , , , , 
    
    // push them all into one single array allCourses
    
    let allCourses = [];
    const getCourses = () => {
        if(category === "All"){

            Object.values(courses).forEach( (courseCategory) => {

                courseCategory.forEach((course) => {
                    allCourses.push(course);
                }); 
            })
            return allCourses;
        }
        else if(category === "Liked") { // Condition to check for liked courses
            if (likedCourses.length === 0) {
                return "no liked course"; // Return message if no liked courses
            } else {
                allCourses = likedCourses.map(courseId => {
                    return Object.values(courses).flat().find(course => course.id === courseId);
                });
                return allCourses;
            }
        }
        else {
            return courses[category];
        }
    }
    console.log(allCourses);

    const courseList = getCourses();
    
    return(
        <div className="cards-container">
        {
            courseList === "no liked course" ? (
                <div className="error-container">
                    <p>Course not found</p>
                </div>
            ) : (
                courseList.map( (course) => {
                    return(
                        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                    )
                })
            )
        }
        </div>
    )
}

export default Cards;