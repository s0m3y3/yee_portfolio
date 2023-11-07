export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0 text-center text-md-left">
              &copy;2023 Yee Yang
            </p>
          </div>
          <div className="col-md-6">
            <p className="mb-0 text-center text-md-right">
              <a
                href="https://github.com/s0m3y3/"
                target="_blank"
                className="btn btn-primary mr-3"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/yee-yang-44375354"
                target="_blank"
                className="btn btn-primary"
              >
                Linkedin
              </a>
              


            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
