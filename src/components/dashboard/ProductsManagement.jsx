import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  getDoc
} from "firebase/firestore";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Swal from 'sweetalert2';
import "./ProductsManagement.css";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    availableQuantity: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.availableQuantity)
      return;
    await addDoc(collection(db, "products"), {
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      availableQuantity: parseInt(newProduct.availableQuantity),
    });
    setNewProduct({ name: "", price: "", availableQuantity: "" });
  };

  const updateProduct = async (id) => {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);
    if (!productSnap.exists()) {
      console.error("El producto no existe en firestore");
      return;
    }
    await updateDoc(productRef, {
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      availableQuantity: parseInt(newProduct.availableQuantity),
    });
    setEditingProduct(null);
    setNewProduct({ name: "", price: "", availableQuantity: "" });
  };

  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Estas seguro?",
      text: "Esta acción no se puede deshacer!.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    });
    if(result.isConfirmed){
      try{
        await deleteDoc(doc(db, "products", id));
        Swal.fire({
          title: "Producto eliminado!",
          text: "El producto ha sido eliminado correctamente.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (error){
        console.error("Error al eliminar el producto", error);
        Swal.fire({
          title: "Error!",
          text: "Ha ocurrido un error al eliminar el producto.",
          icon: "error"
          
        });
          
      }
    }
    
    
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gestión de Productos
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Nombre"
        name="name"
        value={newProduct.name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Precio"
        name="price"
        type="number"
        value={newProduct.price}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Cantidad"
        name="availableQuantity"
        type="number"
        value={newProduct.availableQuantity}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={
          editingProduct ? () => updateProduct(editingProduct) : addProduct
        }
      >
        {editingProduct ? "Actualizar" : "Agregar"}
      </Button>
      <List>
        {products.map((product) => (
          <ListItem
            key={product.id}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  color="primary"
                  onClick={() => {
                    setNewProduct({
                      name: product.name,
                      price: product.price,
                      availableQuantity: product.availableQuantity,
                    });
                    setEditingProduct(product.id);
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  color="secondary"
                  onClick={() => deleteProduct(product.id)}
                >
                  <Delete />
                </IconButton>
              </>
            }
          >
            <ListItemText
              primary={`${product.name} - $${product.price}`}
              secondary={`Cantidad: ${product.availableQuantity}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ProductManagement;
