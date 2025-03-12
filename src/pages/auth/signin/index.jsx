import { useState } from "react";
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { PASSWORD_TYPE } from "src/consts/common";
import { Button, CircularProgress } from '@mui/material';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  // const [passwordVisibility, setPasswordVisibility] = useState(PASSWORD_TYPE.HIDE);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  // const { loading, loginApi } = authenticationAPI();
  const loginFormSchema = z.object({
    email: z.string()
      .min(1, { message: 'Email is required.' })
      .email({ message: 'Please enter a valid email.' }),
    password: z.string()
      .min(1, { message: 'Password is required.' })
  });

  // Form Handlers
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
    }
  });

  // Submit Form
  const submitLoginForm = async (formFields) => {
    // console.log("Form Fields: ", formFields)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/')
    }, 1500)
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f4f4f4",
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: 350,
          padding: "30px",
          paddingRight: '50px',
          borderRadius: "8px",
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Grievance Portal</h3>
        <form onSubmit={handleSubmit(submitLoginForm)}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              autoComplete="email"
              {...register('email')}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
            <div style={{ color: 'red' }}>{errors?.email?.message}</div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Password <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              autoComplete="password"
              {...register('password')}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
            <div style={{ color: 'red' }}>{errors?.password?.message}</div>
          </div>
          <Button
            type="submit"
            variant="contained"
            className="btn-common btn-common-login"
            startIcon={loading ? <CircularProgress size={20} thickness={5} /> : null}
            disabled={loading} // Optional: Disable button while loading
          >
            <span>{loading ? "Logging in..." : "Login"}</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
