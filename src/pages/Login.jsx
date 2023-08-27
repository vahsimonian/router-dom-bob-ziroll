import React from 'react'
import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom'
import { loginUser } from '../api'

export function loginLoader({ request }) {
  return new URL(request.url).searchParams.get('message')
}

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const pathname =
    new URL(request.url).searchParams.get('redirectTo') || '/host'
  try {
    const data = await loginUser({ email, password })
    localStorage.setItem('loggedin', true)
    return redirect('/host')
  } catch (error) {
    return error.message
  }
}

export default function Login() {
  const errorMessage = useActionData()
  const message = useLoaderData()
  const navigate = useNavigation()

  return (
    <div className='login-container'>
      <h1>Sign in to your account</h1>
      {message && <h3 className='red'>{message}</h3>}
      {errorMessage && <h3 className='red'>{errorMessage.message}</h3>}
      <Form method='post' className='login-form'>
        <input type='text' name='email' />
        <input type='password' name='password' />
        <button
          className={`login-btn ${
            navigate.state === 'submitting' ? ' btn-disabled' : ''
          }`}
          disabled={navigate.state === 'submitting'}
        >
          {navigate.state === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </Form>
    </div>
  )
}
