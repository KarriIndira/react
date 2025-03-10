import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../components/SignUpForm.css';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(data);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    alert('Registration successful!');
    navigate('/home');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input {...register('username')} className="signup-input" />
        {errors.username && <p className="error-text">{errors.username.message}</p>}

        <label>Email</label>
        <input {...register('email')} className="signup-input" />
        {errors.email && <p className="error-text">{errors.email.message}</p>}

        <label>Password</label>
        <input type="password" {...register('password')} className="signup-input" />
        {errors.password && <p className="error-text">{errors.password.message}</p>}

        <label>Confirm Password</label>
        <input type="password" {...register('confirmPassword')} className="signup-input" />
        {errors.confirmPassword && <p className="error-text">{errors.confirmPassword.message}</p>}

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
      <p className="signup-footer">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default SignUpForm;



