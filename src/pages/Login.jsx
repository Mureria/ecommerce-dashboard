import React from 'react'

function Login() {
  return (
   <>
      <div className="flex min-h-full flex-1 flex-row  gap-10 justify-center px-6 py-12 md:mt-16 lg:px-8">
        <div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Log in
                </button>
              </div>
              <div className="text-sm">
                    <a href="#forgot" className="font-semibold text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </a>
                  </div>
            </form>
          </div>
        </div>
        <div className='hidden  h-auto md:flex'>
          <img className='w-[400px] h-full object-cover object-center' src="https://img.freepik.com/free-vector/ecommerce-campaign-concept-illustration_114360-8432.jpg?w=740&t=st=1692911039~exp=1692911639~hmac=0ae6b5968e625bcc4e502780954be43e3e21fa12354c853b6603b75e17b556ea" alt="" />
        </div>
      </div>
       
    </>
  )
}

export default Login