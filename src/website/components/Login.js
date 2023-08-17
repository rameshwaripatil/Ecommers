import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    console.log('Login')
    return (
        <div>
            <div class="user-form-card">
            <div class="user-form-title">
                <h2>welcome To VS Mart</h2>
                <p>Use your credentials to access</p>
            </div>
            <div class="user-form-group">

                <form method="POST" class="user-form">
                    <input type="hidden" name="_token" />
                    <div class="form-group">
                        <input name="email" type="text" class="form-control" placeholder="Enter your User Id | Mobile Numbar | Email Id " />
                    </div>
                    <div class="form-group">
                        <input name="password" type="password" class="form-control" placeholder="Enter your password" />
                    </div>

                    <div class="form-check mb-3"><input class="form-check-input" type="checkbox" value="" id="check" /><label class="form-check-label" for="check">Remember Me</label></div>

                    <div class="form-button"><button type="submit" value="Login">login</button>
                        <p>Forgot your password?<a href="/forgot-password">reset here</a></p>
                    </div>
                </form>
            </div>
        </div>
            <div class="user-form-remind">
                <p>Don't have any account?<Link to="/registration">register here</Link></p>
            </div>

        </div>
    )
}

export default Login