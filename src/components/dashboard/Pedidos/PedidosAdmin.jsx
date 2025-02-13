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
} from "@mui/material";
import SideBar from "../SideBar";
import "./Pedidos.css";

const PedidosAdmin = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const pedidosData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          console.log("Datos de la orden:", data); // Verifica los datos en la consola

          return {
            id: doc.id,
            fecha: data.timestamp?.toDate
              ? data.timestamp.toDate().toLocaleString()
              : "Fecha no disponible",
            cliente: data.userName || "Desconocido",
            productos: Array.isArray(data.products)
              ? data.products.map((p) => `${p.name} (x${p.quantity})`).join(", ")
              : "No especificado",
            cantidad: data.products
              ? data.products.reduce((acc, p) => acc + p.quantity, 0)
              : 0,
            total: data.totalAmount ? `$${data.totalAmount.toFixed(2)}` : "$0.00",
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

  const handleVerDetalle = (id) => {
    alert(`Ver detalle del pedido ${id}`);
  };

  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="content-container">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Productos</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Teléfono</TableCell>
                <TableCell>Cédula</TableCell>
                <TableCell>Dirección</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.length > 0 ? (
                pedidos.map((pedido) => (
                  <TableRow key={pedido.id}>
                    <TableCell>{pedido.id}</TableCell>
                    <TableCell>{pedido.fecha}</TableCell>
                    <TableCell>{pedido.cliente}</TableCell>
                    <TableCell>{pedido.productos}</TableCell>
                    <TableCell>{pedido.total}</TableCell>
                    <TableCell>{pedido.estado}</TableCell>
                    <TableCell>{pedido.telefono}</TableCell>
                    <TableCell>{pedido.cedula}</TableCell>
                    <TableCell>{pedido.direccion}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleVerDetalle(pedido.id)}
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
    </div>
  );
};

export default PedidosAdmin;