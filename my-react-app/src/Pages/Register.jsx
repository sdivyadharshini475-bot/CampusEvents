
import StudentRegistration from "../StudentRegistration/studentForm";

function Register() {
  return (
    <div className="register-page">

      {/* Registration Heading */}
      <div className="register-heading">

        <p>JOIN YOUR CAMPUS</p>

        <h1>Event Registration</h1>

        <p>
          Register for exciting campus events and participate.
        </p>

      </div>

      {/* Student Registration Form */}
      <StudentRegistration />

    </div>
  );
}

export default Register;
