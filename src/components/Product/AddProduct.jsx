import Layout from "../Layout";
import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDesc] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = (e) => {
    e.preventDefault();

    axios
      .post("https://fakestoreapi.com/products", {
        title: title,
        price: parseInt(price),
        description: description,
        category: category,
        image: image,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    alert("Berhasil Tambah Produk!");
    // console.log(data);
  };

  return (
    <Layout>
      <section id="addproduct">
        <h2>Tambah Produk</h2>
        <form>
          <div className="form-group">
            <label htmlFor="image">Foto Produk</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={(e) => setImage(e.target.files[0].name)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Nama Produk</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Harga</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Deskripsi</label>
            <textarea
              id="desc"
              name="desc"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category">Kategori</label>
            <select
              htmlFor="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="default">Pilih Kategori</option>
              <option value="men's clothing">Pakaian Pria</option>
              <option value="women's clothing">Pakaian Wanita</option>
              <option value="jewelery">Perhiasan</option>
              <option value="electronics">Elektronik</option>
            </select>
          </div>
          <div className="form-btn">
            <button type="submit" onClick={addProduct}>
              Tambah
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default AddProduct;
