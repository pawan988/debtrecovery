import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
// import ErrorComponent from "../../../component/ErrorBoundary/ErrorBoundary";
import LoaderComponent from "../../../component/Loader/Loader";

const Signin = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username field can not be empty"),
    password: Yup.string().required("Password field can not be empty"),
  });

  const onSubmit = async (values, { resetForm }) => {
    setIsSubmitted(true);
    resetForm();
    navigate("/");
  };

  if (loading) {
    return <LoaderComponent />;
  }

  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-md p-8">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary">
            Login
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6 mt-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Field
                  name="username"
                  type="username"
                  className={`px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${
                    isSubmitted ? "disabled" : ""
                  }`}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className={`px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${
                    isSubmitted ? "disabled" : ""
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex justify-end">
                <Link to="/forgotPassword">
                  <p className="text-primary font-normal text-lg cursor-pointer">
                    Forgot password ?
                  </p>
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  disabled={isSubmitted}
                >
                  Login
                </button>
              </div>
            </Form>
          </Formik>

          <div className="mt-3 flex justify-center items-center">
            <p className="text-primary">
              New user?
              <Link to="/signup">
                <span className="cursor-pointer text-lg ml-2">
                  Register here
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
