import { useCallback, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";

export default function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);
  const [preview, setPreview] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    const previewFile = acceptedFiles[0];
    const URLObject = URL.createObjectURL(previewFile);
    setPreview(URLObject);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
    },
    maxFiles: 1,
  });

  const handleSubmission = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NavBar />
      <form className="signUpForm" onSubmit={handleSubmission}>
        <h1 className="title">Sign Up</h1>
        <div className="inputContainer">
          <label htmlFor="firstname">First Name</label>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            name="firstname"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="lastname">Last Name</label>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            name="lastname"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="Email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="confirm_password"
            required
          />
        </div>
        <div className="checkboxContainer">
          <input type="checkbox" name="isAuthor" />
          <label
            value={isAuthor}
            onChange={(e) => setIsAuthor(e.target.value)}
            htmlFor="isAuthor"
          >
            Author?
          </label>
        </div>
        <div className="inputContainer">
          <label htmlFor="">Profile Picture</label>
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            {!isDragActive && <p>Drag & Drop Here, or Click to Select Files</p>}
            {isDragAccept && <p>Valid File Type</p>}
            {isDragReject && (
              <p>Invalid File Type, only .png, .jpg and .jpeg is accepted</p>
            )}
          </div>
        </div>
        {preview && (
          <div className="previewImgContainer">
            <img className="previewImg" src={preview} alt="" />
          </div>
        )}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <button className="actionBtn">Submit</button>
      </form>
      <Footer />
    </>
  );
}
