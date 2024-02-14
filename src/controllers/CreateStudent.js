import { student } from "../schema/studentModal.js"


export const createStud = async(req, res)=>{
let newStudent= await student.create(req.body)
if(!newStudent){
    return res.status(404).json({message: "Something went wrong!!"})
}
return res.status(200).json({
    message: "Registation of student made successfull!!",
    student: newStudent
})
}