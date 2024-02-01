import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../website/Context/UserContext";

function CreateProduct() {
  // Variables
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  console.log(image);
  const [accept, setAccept] = useState(false);
  const nav = useNavigate();

  // Context Variable
  const context = useContext(User);
  const token = context.auth.token;

  // Submit Function
  async function submit(event) {
    //
    event.preventDefault();
    //
    setAccept(true); // Errors <p> Appear `After` Clicking On Submit Button
    // Send Data
    try {
      // Form Data
      let formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      console.log(formData);
      //
      let result = await axios.post("http://127.0.0.1:8000/api/product/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      nav("/dashboard/products");
    } catch (error) {
      console.log(error);
      setAccept(true);
    }
  }
  //
  //TODO Email has already been taken --> appear after correcting it (Problem)
  //
  //
  return (
    <div className="inside-form inner-form">
      <form onSubmit={submit}>
        <h2 className="title">Create Product</h2>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {title.length <= 1 && accept && (
          <p className="error">Title should be more than 1 letter.</p>
        )}

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {description.length < 4 && accept && (
          <p className="error">The Description should be more than 4 letters</p>
        )}

        <label htmlFor="image" className="upload-image" style={{ display: "flex" }}>
          <span>
            <i className="fas fa-upload"></i>
            <span>Upload Image</span>
          </span>
        </label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files.item(0))}
          style={{
            border: "none",
            padding: "10px",
            backgroundColor: "#0077ff39",
            width: "200px",
            height: "50px",
            marginTop: "-5px",
            border: "2px solid #ccc",
            borderTop: "none",
            borderRadius: "0px 0px 5px 5px",
          }}
        />
        {image === '' && accept && <p className="error">You Should Upload Image For Your Product</p>}

        <button type="submit" className="btn">
          Create Product
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
