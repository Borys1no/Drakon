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
  Box,
  Typography,
} from "@mui/material";
import Layout from "../Layout";

const StatusOrder = () => {
  const [pedidos, setPedidos] = useState([]);

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
              ? data.products.map((p) => `${p.name} (x${p.quantity})`).join(", ")
              : "No especificado",
            estado: data.status || "Pendiente",
          };
        });
        setPedidos(pedidosData);
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    };
    fetchPedidos();
  }, []);

  return (
    <Layout>
      <div className="dashboard-container">
        <Typography variant="h6" gutterBottom>
          Estado del Pedido
        </Typography>
        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Productos</TableCell>
                  <TableCell>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pedidos.length > 0 ? (
                  pedidos.map((pedido) => (
                    <TableRow key={pedido.id}>
                      <TableCell>{pedido.fecha}</TableCell>
                      <TableCell>{pedido.cliente}</TableCell>
                      <TableCell>{pedido.productos}</TableCell>
                      <TableCell>{pedido.estado}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No hay pedidos disponibles.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </Layout>
  );
};

export default StatusOrder;
