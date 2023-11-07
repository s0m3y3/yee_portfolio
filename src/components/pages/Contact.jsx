export default function Contact() {
    return (
        <div className="container mt-4">
            <form className="col-12 col-md-8 col-lg-6">
                <h3 className="text-center">Contact Me:</h3>
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
                </div >

                <div  className="text-center">
                    <button type="submit" className="btn btn-primary"> Submit </button>
                </div>

            </form>
        </div>
    );
  }
  