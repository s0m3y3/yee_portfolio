export default function Contact() {
    return (
        <form>
        <h3>Contact me:</h3>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="First Last"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="me@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Add your message!"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
  