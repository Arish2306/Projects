export const checkValidate=(email,password)=>{

    let isEmailVaild=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

    let isPassWordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if(!isEmailVaild) return "Email id is not vaild"

    if(!isPassWordValid) return "Password is not vaild "

     return null
}