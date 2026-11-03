
import { useState, useEffect } from "react";
import "./studentForm.css";

function StudentRegistration() {
  const initialForm = {
    studentName: "",
    email: "",
    department: "",
    year: "",
    password: "",
    attendance: "In person",
    event: "",
    accessibility: false,
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Receive selected event from Event Card
  useEffect(() => {
    const handleSelectEvent = (e) => {
      setFormData((previous) => ({
        ...previous,
        event: e.detail.eventTitle,
      }));

      setSelectedEventId(e.detail.eventId);
      setSubmitted(false);
    };

    window.addEventListener(
      "selectEventForRegistration",
      handleSelectEvent
    );

    return () => {
      window.removeEventListener(
        "selectEventForRegistration",
        handleSelectEvent
      );
    };
  }, []);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Submit Registration
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedEventId === null) {
      alert("Please select an event from the Events section.");
      return;
    }

    // Notify EventList only after successful form submission
    window.dispatchEvent(
      new CustomEvent("registrationCompleted", {
        detail: {
          eventId: selectedEventId,
        },
      })
    );

    setSubmitted(true);
  };

  // Reset Form
  const handleReset = () => {
    setFormData(initialForm);
    setSelectedEventId(null);
    setSubmitted(false);
  };

  return (
    <section className="registration-container">
      <div className="registration-card">

        <p className="registration-label">SAVE YOUR SEAT</p>

        <h2>Student Event Registration</h2>

        <p className="registration-description">
          Complete the required fields to register for a campus event.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="registration-grid">

            <div className="form-group">
              <label>Student name *</label>
              <input
                type="text"
                name="studentName"
                placeholder="Enter your full name"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email address *</label>
              <input
                type="email"
                name="email"
                placeholder="student@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Department *</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select your department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Computer Science and Business Systems">
                  Computer Science and Business Systems
                </option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Electronics and Communication">
                  Electronics and Communication
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Civil Engineering">
                  Civil Engineering
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Year of study *</label>
              <input
                type="number"
                name="year"
                placeholder="Example: 2"
                min="1"
                max="5"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Create a demo password (optional)</label>
              <input
                type="password"
                name="password"
                placeholder="Password input example"
                value={formData.password}
                onChange={handleChange}
              />
              <small>
                This is a teaching example only; no password is saved or sent.
              </small>
            </div>

            <div className="form-group">
              <label>How will you attend?</label>

              <div className="attendance-options">
                <label>
                  <input
                    type="radio"
                    name="attendance"
                    value="In person"
                    checked={formData.attendance === "In person"}
                    onChange={handleChange}
                  />
                  In person
                </label>

                <label>
                  <input
                    type="radio"
                    name="attendance"
                    value="Online"
                    checked={formData.attendance === "Online"}
                    onChange={handleChange}
                  />
                  Online
                </label>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Choose an event *</label>

              <select
                name="event"
                value={formData.event}
                onChange={handleChange}
                required
              >
                <option value="">Select a campus event</option>
                <option value="Cultural Day">Cultural Day</option>
                <option value="Sports Meet">Sports Meet</option>
                <option value="Tech Symposium">Tech Symposium</option>
                <option value="Web Design Session">Web Design Session</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label className="accessibility-label">
                <input
                  type="checkbox"
                  name="accessibility"
                  checked={formData.accessibility}
                  onChange={handleChange}
                />
                I would like the team to contact me about accessibility support.
              </label>
            </div>

            <div className="form-group full-width">
              <label>Message (optional)</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Any questions or notes for the event team?"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="registration-actions">
            <button type="submit" className="submit-registration">
              Submit Registration
            </button>

            <button
              type="button"
              className="reset-registration"
              onClick={handleReset}
            >
              Reset Form
            </button>
          </div>

        </form>

        {submitted && (
          <div className="registration-success">
            <h3>Registration complete!</h3>

            <p>
              This is a local demonstration. Your details have not been sent
              to a server.
            </p>

            <ul>
              <li><strong>Student:</strong> {formData.studentName}</li>
              <li><strong>Email:</strong> {formData.email}</li>
              <li><strong>Department:</strong> {formData.department}</li>
              <li><strong>Event:</strong> {formData.event}</li>
              <li><strong>Attendance:</strong> {formData.attendance}</li>
            </ul>
          </div>
        )}

      </div>
    </section>
  );
}

export default StudentRegistration;
