import React from "react";
import { student } from "../Data/Student";
function Member(student){
    return(
        <div id="student-menu">
        
           <h6>Id:{student.id}</h6> 
           <h6>Name:{student.name}</h6>
           <h6>RollNo:{student.rollno}</h6>
        </div>
    )
}
export default Member;