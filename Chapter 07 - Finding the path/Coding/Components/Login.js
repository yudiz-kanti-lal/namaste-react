import { Formik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  // Creating schema
  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Email is a required field')
      .email('Invalid email format'),
    password: Yup.string()
      .required('Password is a required field')
      .min(8, 'Password must be at least 8 characters'),
  });
  return (
    <div className='login-container'>
      <Formik
        validationSchema={schema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          // alert(JSON.stringify(values));
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className='login-form'>
            <div className='form'>
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='Enter email Address'
                  className='form-control inp_text'
                  id='email'
                />
                <p className='error'>
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder='Enter password'
                  className='form-control'
                />
                <p className='error'>
                  {errors.password && touched.password && errors.password}
                </p>
                <button type='submit'>Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
