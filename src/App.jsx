import "./App.css";
import { useFormik } from "formik";
import {formSchema} from "./schemas/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { submitForm, resetState } from "./redux/formSlice";

function App() {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.form);

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      age: "",
      gender: "",
      TnC: false,
    },
    validationSchema: formSchema,
   onSubmit: (values, actions) => {
      dispatch(submitForm(values));
      actions.resetForm();
    },
  });

  

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-2">Registration From</h1>
         {loading && <p className="mb-2 text-blue-500">Submitting...</p>}
        {success && <p className="mb-2 text-green-600">Registration Successful!</p>}
        {error && <p className="mb-2 text-red-600">Error: {error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
          <label htmlFor="name">Name</label>
          <input
            className="border-2 border-gray-500 p-2 outline-none rounded-lg"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { errors.name && touched.name ? (<p className="text-red-400 text-xs">{errors.name}</p>): null}
          <label htmlFor="email">Email</label>
          <input
            className="border-2 border-gray-500 p-2 outline-none rounded-lg"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
         { errors.email && touched.email ? (<p className="text-red-400 text-xs">{errors.email}</p>): null}
          <label htmlFor="password">Password</label>
          <input
            className="border-2 border-gray-500 p-2 outline-none rounded-lg"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { errors.password && touched.password ? (<p className="text-red-400 text-xs">{errors.password}</p>): null}
          <label htmlFor="comfirm_password">Confirm Password</label>
          <input
            className="border-2 border-gray-500 p-2 outline-none rounded-lg"
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Your Password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { errors.confirm_password && touched.confirm_password ? (<p className="text-red-400 text-xs">{errors.confirm_password}</p>): null}
          <label htmlFor="age">Age</label>
          <input
            className="border-2 border-gray-500 p-2 outline-none rounded-lg"
            type="number"
            name="age"
            id="age"
            placeholder="Enter Your Age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { errors.age && touched.age ? (<p className="text-red-400 text-xs">{errors.age}</p>): null}
          <label htmlFor="gender">Gender</label>
          <select
            className="border-2 border-gray-500 p-2 outline-none rounded-lg"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
          >

            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          { errors.gender && touched.gender ? (<p className="text-red-400 text-xs">{errors.gender}</p>): null}
          <div className="flex items-center gap-2 ">
            <label htmlFor="TnC">Terms & Conditins</label>
            <input type="checkbox" name="TnC" id="TnC" 
            value={values.TnC}
            onBlur={handleBlur}
            onChange={handleChange}
            />
           { errors.TnC && touched.TnC ? (<p className="text-red-400 text-xs">{errors.TnC}</p>): null}
          </div>
        <button
          className="mt-6 rounded-full bg-green-600 hover:bg-green-700 text-white
 px-5 py-3 cursor-pointer"
 type="submit"
        >
         {loading ? "Submitting..." : "Submit"}
        </button>
        </form>
      </div>
    </>
  );
}

export default App;
