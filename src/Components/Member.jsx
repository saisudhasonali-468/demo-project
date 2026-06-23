import React from "react";
import { student } from "../Data/Student";
function Member(student){
    return(
        <>
        
           <h6>Id:{student.id}</h6> 
           <h6>Name:{student.name}</h6>
           <h6>RollNo:{student.rollno}</h6>
        </>
    )
}
export default Member;