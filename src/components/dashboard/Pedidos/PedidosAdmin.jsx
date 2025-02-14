import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
  Modal,
  Select,
  MenuItem,
} from "@mui/material";
import SideBar from "../SideBar";
import "./Pedidos.css";

const PedidosAdmin = () => {
  const [pedidos, setPedidos] = useState([]);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
  const [estado, setEstado] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const pedidosData = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            fecha: data.timestamp?.toDate
              ? data.timestamp.toDate().toLocaleString()
              : "Fecha no disponible",
            cliente: data.userName || "Desconocido",
            productos: Array.isArray(data.products)
              ? data.products
                  .map((p) => `${p.name} (x${p.quantity})`)
                  .join(", ")
              : "No especificado",
            cantidad: data.products
              ? data.products.reduce((acc, p) => acc + p.quantity, 0)
              : 0,
            total: data.totalAmount
              ? `$${data.totalAmount.toFixed(2)}`
              : "$0.00",
            estado: data.orderStatus || "Pendiente", // Si agregaste un estado
            telefono: data.userPhone || "No especificado",
            cedula: data.userIdentification || "No especificado",
            direccion: data.userAddress || "No especificado",
          };
        });

        setPedidos(pedidosData);
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    };

    fetchPedidos();
  }, []);

  const handleVerDetalle = (pedido) => {
    setPedidoSeleccionado(pedido);
    setEstado(pedido.estado);
    setModalOpen(true);
  };
  const handleGuardarEstado = async () => {
    if (pedidoSeleccionado) {
      try {
        const pedidoRef = doc(db, "orders", pedidoSeleccionado.id);
        await updateDoc(pedidoRef, { orderStatus: estado });
        setPedidos((prevPedidos) =>
          prevPedidos.map((p) =>
            p.id === pedidoSeleccionado.id ? { ...p, estado } : p
          )
        );
        alert("Estado actualizado correctamente");
        setModalOpen(false);
      } catch (error) {
        console.error("Error al actualizar el estado del pedido:", error);
      }
    }
  };
  console.log("pedidos seleccionados", pedidoSeleccionado);

  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="content-container">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Productos</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.length > 0 ? (
                pedidos.map((pedido) => (
                  <TableRow key={pedido.id}>
                    <TableCell>{pedido.fecha}</TableCell>
                    <TableCell>{pedido.cliente}</TableCell>
                    <TableCell>{pedido.productos}</TableCell>
                    <TableCell>{pedido.total}</TableCell>
                    <TableCell>{pedido.estado}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleVerDetalle(pedido)}
                      >
                        Ver Detalles
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={10} align="center">
                    No hay pedidos disponibles.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Modal para ver detalles del pedido */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Detalles del Pedido
          </Typography>
          {pedidoSeleccionado && (
            <>
              <Typography>ID: {pedidoSeleccionado.id}</Typography>
              <Typography>Fecha: {pedidoSeleccionado.fecha}</Typography>
              <Typography>Cliente: {pedidoSeleccionado.cliente}</Typography>
              <Typography>Teléfono: {pedidoSeleccionado.telefono}</Typography>
              <Typography>Cédula: {pedidoSeleccionado.cedula}</Typography>
              <Typography>Dirección: {pedidoSeleccionado.direccion}</Typography>
              <Typography variant="subtitle1" sx={{mt:2}}>
                Productos:
              </Typography>
              <Typography>{pedidoSeleccionado.productos}</Typography>

              <Typography>Total: {pedidoSeleccionado.total}</Typography>

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Estado:
              </Typography>
              <Select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                fullWidth
              >
                <MenuItem value="Pendiente">Pendiente</MenuItem>
                <MenuItem value="Procesando">Procesando</MenuItem>
                <MenuItem value="Enviado">Enviado</MenuItem>
                <MenuItem value="Entregado">Entregado</MenuItem>
              </Select>

              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleGuardarEstado}
                >
                  Guardar
                </Button>
                <Button
                  variant="outlined"
                  sx={{ ml: 2 }}
                  onClick={() => setModalOpen(false)}
                >
                  Cerrar
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default PedidosAdmin;
