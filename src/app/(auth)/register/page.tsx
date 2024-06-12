import RegisterForm from "./register-form"




const RegisterPage = () => {
  return (
    <div>
      <h1  className="text-center font-semibold text-xl" >Sign Up</h1>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </div>

  )
}

export default RegisterPage