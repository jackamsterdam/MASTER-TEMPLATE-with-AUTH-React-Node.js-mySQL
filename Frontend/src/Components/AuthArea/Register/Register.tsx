import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import notify from "../../../Services/NotifyService";
import "./Register.css";

function Register(): JSX.Element {

    const { register, handleSubmit, formState, setFocus } = useForm<UserModel>()
    const navigate = useNavigate()

    useEffect(() => {
        setFocus("firstName");
    }, [setFocus]);

    async function submit(user: UserModel): Promise<void> {
        try {
            await authService.register(user)
            notify.success('You are now registered!')
            navigate('/home')
        } catch (err: any) {
            notify.error(err)
        }

    }

    return (
        <div className="Register Box">
            <form onSubmit={handleSubmit(submit)}>
                <h1>Register</h1>

                <label>First Name:</label>
                <input type="text" {...register('firstName', {
                    required: { value: true, message: "Missing first name" },
                    minLength: { value: 2, message: "First Name must be more than 2 characters" },
                    maxLength: { value: 100, message: "First Name must not exceed 100 characters" }
                })} />
                <span>{formState.errors?.firstName?.message}</span>

                <label>Last Name:</label>
                <input type="text" {...register('lastName', {
                    required: { value: true, message: "Missing last name" },
                    minLength: { value: 2, message: "Last Name must be more than 2 characters" },
                    maxLength: { value: 100, message: "Last Name must not exceed 100 characters" }
                })} />
                <span>{formState.errors?.lastName?.message}</span>

                <label>Username:</label>
                <input type="text" {...register('username', {
                    required: { value: true, message: "Missing username" },
                    minLength: { value: 2, message: "Username must be more than 2 characters" },
                    maxLength: { value: 100, message: "Username must not exceed 100 characters" }
                })} />
                <span>{formState.errors?.username?.message}</span>

                <label>Password:</label>
                <input type="text" {...register('password', {
                    required: { value: true, message: "Missing password" },
                    minLength: { value: 2, message: "Password must be more than 2 characters" },
                    maxLength: { value: 100, message: "Password must not exceed 100 characters" }
                })} />
                <span>{formState.errors?.password?.message}</span>

                <button>Register</button>
                <p>Have an account already? <NavLink to="/login">Log in</NavLink></p>
            </form>

        </div>
    );
}

export default Register;
