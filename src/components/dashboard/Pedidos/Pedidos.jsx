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

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const pedidosData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          
          return {
            id: doc.id,
            fecha: data.FechaHora?.toDate 
              ? data.FechaHora.toDate().toLocaleString()
              : "Fecha no disponible",
            cliente: data.NombreUsuario || "Desconocido",
            productos: Array.isArray(data.Producto)
              ? data.Producto.map(p => p.nombre).join(", ")
              : typeof data.Producto === "string"
                ? data.Producto
                : "No especificado",
            cantidad: data.Cantidad || 0,
            total: data.TotalPagado ? `$${data.TotalPagado}` : "$0.00",
            estado: data.EstadoPedido || "Pendiente",
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
                  <TableCell colSpan={7} align="center">
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

export default Pedidos;