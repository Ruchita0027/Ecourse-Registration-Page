import "./form.css"
import { useForm } from 'react-hook-form';

function Form() {
  const{ register, formState: {errors}, handleSubmit, } = useForm();
  const onSubmit = (data) => console.log(data);
  return <>
  <body>
      <br />
  <h1>E-Course Registration</h1>
  <form onSubmit={handleSubmit(onSubmit)}>
    <table border="2">

      <tr>
        <th><label htmlFor="name">Name :</label></th>
        <td><input type="text" name="name" id="name" placeholder="Enter Your Name" 
        {...register("name", {required: true})} /><br />
        <small>
        {errors.name?.type === "required" && "Name is required" }
        </small>
        </td>
      </tr>

      <tr>
        <th><label htmlFor="email">Email ID :</label></th>
        <td><input type="text" name="email" id="email" placeholder="Enter Your E-Mail" 
        {...register("email", {required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})} /><br />
        <small>
        {errors.email?.type === "required" && "Email is required" }
        {errors.email?.type === "pattern" && "Entered email is in wrong format" }
        </small>
        </td>
      </tr>

      <tr>
        <th><label htmlFor="mobile">Mobile Number :</label></th>
        <td><input type="number" name="mobile" id="mobile" placeholder="Enter Your mobile" 
        {...register("number", {
          required: true,
          minLength: 10,
          maxLength: 10
        })} /><br />
        <small>
          {errors.number?.type === "required" && "Mobile no. is required" }
          {errors.number?.type === "minLength" && "Entered number is less than 10 digits"}
          {errors.number?.type === "maxLength" && "Entered number is more than 10 digits"}
        </small>
        </td>
      </tr>

      <tr>
        <th><label htmlFor="dob">Date of Birth :</label></th>
        <td><input type="date" name="dob" id="dob" placeholder="Enter Your DOB" required /></td>
      </tr>

      <tr>
        <th><label htmlFor="add">Address :</label></th>
        <td><input type="text" id="add" placeholder="Enter Your Address" 
          {...register("add", {required: true})} /><br />
          <small>
        {errors.add?.type === "required" && "Address is required" }
        </small>
         </td>
      </tr>

      <tr>
        <th><label htmlFor="gender">Gender :</label></th>
        <td>
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="female"> Female</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="other"> Other</label>
          <input type="radio" name="gender" id="other" value="other" />
        </td>
      </tr>

      <tr>
        <th><label htmlFor="status">Marital Status :</label></th>
        <td>
          <label htmlFor="male">Married</label>
          <input type="radio" name="status" id="married" value="married" />
          <label htmlFor="female"> Unmarried</label>
          <input type="radio" name="status" id="unmarried" value="unmarried" />
          <label htmlFor="other"> Other</label>
          <input type="radio" name="status" id="other" value="other" />
        </td>
      </tr>

      <tr>
        <th><label htmlFor="con">Country :</label></th>
        <td>
          <select>
            <option>India</option>
            <option>USA</option>
            <option>China</option>
            <option>France</option>
            <option>London</option>
            <option>Europe</option>
            <option>Brazil</option>
            <option>Canada</option>
            <option>Colombia</option>
            <option>Egypt</option>
            <option>Greece</option>
            <option>Iran</option>
            <option>Russia</option>
          </select>
        </td>
      </tr>

      <tr>
        <th><label htmlFor="state">State :</label></th>
        <td><input type="text" name="state" id="state" placeholder="Enter Your State" 
          {...register("text", {required: true})} /><br />
          <small>
        {errors.text?.type === "required" && "State is required" }
        </small>
         </td>
      </tr>

      <tr>
        <th><label htmlFor="no">Pincode :</label></th>
        <td><input type="number" name="no" id="no" placeholder="Enter Your Pincode"
         {...register("number", {required: true})} /><br />
         <small>
        {errors.name?.type === "required" && "Pincode is required" }
        </small>
        </td>
      </tr>

      <tr>
        <th><label htmlFor="course">Course you want to join :</label></th>
        <td>
          <select>
            <option></option>
            <option>Full Stack</option>
            <option>Data Science</option>
            <option>Software Testing</option>
            <option>Product Management</option>
            <option>Digital Marketing</option>
          </select>
        </td>
      </tr>

      <tr>
        <th><label htmlFor="pass">Password: </label></th>
        <td><input type="password" name="pass" id="pass" placeholder="Enter Your Password"
        {...register("password", {
        required: true,
        minLength: 8,
        maxLength: 20
      })} /><br />
      <small>
          {errors.password?.type === "required" && "Password is required" }
          {errors.password?.type === "minLength" && "Entered password is less than 10 digits"}
          {errors.password?.type === "maxLength" && "Entered password is more than 20 digits"}
        </small>
        </td>
      </tr>
      
      <tr>
        <th colspan="2" style={{ textAlign: "center" }}>
          <input type="submit" value="Submit" className="btn btn-success" />
          <input type="reset" value="Reset" style={{ marginLeft: "10px" }} className="btn btn-light" />
        </th>
      </tr>
      
    </table>
    </form>
    </body>
  </>
}

export default Form;