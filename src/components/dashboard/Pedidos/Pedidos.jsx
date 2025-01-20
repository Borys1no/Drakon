import React from "react";
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

// Datos de ejemplo, cambiar por los datos reales
const pedidosMock = [
  {
    id: "001",
    fecha: "2025-01-15",
    cliente: "Juan Perez",
    productos: "Drakon doble destilado",
    cantidad: 3,
    total: "$150.00",
    estado: "Pendiente",
  },
  {
    id: "002",
    fecha: "2025-01-15",
    cliente: "Maria Lopez",
    productos: "Drakon triple destilado",
    cantidad: 1,
    total: "$50.00",
    estado: "Procesado",
  },
];

const Pedidos = () => {
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
          {pedidosMock.map((pedido) => (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
</div>

    
  );
};

export default Pedidos;
