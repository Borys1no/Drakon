import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
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
  TextField,
} from "@mui/material";
import Layout from "../Layout";
import "./Pedidos.css";

const PedidosAdmin = () => {
  const [pedidos, setPedidos] = useState([]);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
  const [estado, setEstado] = useState("");
  const [trackingUrl, setTrackingUrl] = useState("");
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
              ? data.timestamp.toDate()
              : new Date(0),
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
            estado: data.status || "Pendiente", // Si agregaste un estado
            telefono: data.userPhone || "No especificado",
            cedula: data.userIdentification || "No especificado",
            direccion: data.userAddress || "No especificado",
          };
        });

        pedidosData.sort((a, b) => b.fecha - a.fecha);

      // Convertir las fechas a un formato legible después de ordenar
      const pedidosFormateados = pedidosData.map((pedido) => ({
        ...pedido,
        fecha: pedido.fecha.toLocaleString(),
      }));


        setPedidos(pedidosFormateados);
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    };

    fetchPedidos();
  }, []);

  const handleVerDetalle = (pedido) => {
    setPedidoSeleccionado(pedido);
    setEstado(pedido.estado);
    setTrackingUrl(pedido.trackingUrl || "");
    setModalOpen(true);
  };
  const handleGuardarEstado = async () => {
    if (pedidoSeleccionado) {
      try {
        const pedidoRef = doc(db, "orders", pedidoSeleccionado.id);
        await updateDoc(pedidoRef, { status: estado, trackingUrl });
        setPedidos((prevPedidos) =>
          prevPedidos.map((p) =>
            p.id === pedidoSeleccionado.id ? { ...p, estado, trackingUrl } : p
          )
        );
        alert("Estado actualizado correctamente");
        setModalOpen(false);
      } catch (error) {
        console.error("Error al actualizar el estado del pedido:", error);
      }
    }
  };

  return (
    <Layout>
      <div className="dashboard-container">
        <div className="content-container">
          <Box sx={{ width: "100%", overflowX: "auto"  }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
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
                      <TableCell colSpan={6} align="center">
                        No hay pedidos disponibles.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>

        {/* Modal para ver detalles del pedido */}
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%", // Más flexible en pantallas pequeñas
              maxWidth: 600, // Limita el ancho máximo
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
                <Typography>
                  Dirección: {pedidoSeleccionado.direccion}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
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

                {/* Campo para ingresar el tracking solo si el estado es "Enviado" */}
                {estado === "Enviado" && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Link de Tracking:</Typography>
                    {trackingUrl ? (
                      <Typography>
                        <a href={trackingUrl} target="_blank" rel="noopener noreferrer">
                          {trackingUrl}
                        </a>
                      </Typography>
                    ) : (
                      <TextField
                        fullWidth
                        placeholder="Ingrese el link de tracking"
                        value={trackingUrl}
                        onChange={(e) => setTrackingUrl(e.target.value)}
                      />
                    )}
                  </Box>
                )}

                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}
                >
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
    </Layout>
  );
};

export default PedidosAdmin;
