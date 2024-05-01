import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import ErrorComponent from "../../../component/ErrorBoundary/ErrorBoundary";
import LoaderComponent from "../../../component/Loader/Loader";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email field can not be empty")
      .email("Invalid email address"),
  });

  const onSubmit = async (values, { resetForm }) => {
    setIsSubmitted(true);
    resetForm();
  };

  if (loading) {
    return <LoaderComponent />;
  }

  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-md p-8">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary">
            Reset Password
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6 mt-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className={`px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${
                    isSubmitted ? "disabled" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  disabled={isSubmitted}
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
