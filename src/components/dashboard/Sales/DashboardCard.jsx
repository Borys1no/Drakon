import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export const DashboardCard = ({ title, value, icon, color }) => (
  <Card sx={{ minWidth: 275, borderLeft: `5px solid ${color}`, boxShadow: 3 }}>
    <CardContent>
      <Box display="flex" alignItems="center" gap={2}>
        {icon}
        <Box>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h4">{value}</Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export const AdminDashboard = () => {
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [orderStatus, setOrderStatus] = useState({
    pendiente: 0,
    procesando: 0,
    enviado: 0,
    entregado: 0,
  });

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersCollection = collection(db, "orders");
      const ordersSnapshot = await getDocs(ordersCollection);
      const ordersData = ordersSnapshot.docs.map((doc) => doc.data());

      // Calcular total de pedidos
      setTotalOrders(ordersData.length);

      // Calcular total de ventas
      const totalSalesAmount = ordersData.reduce((sum, order) => {
        if (typeof order.totalAmount === "number") {
          return sum + order.totalAmount;
        }
        return sum;
      }, 0);
      setTotalSales(totalSalesAmount);

      // Calcular cantidad de pedidos por estado
      const statusCounts = { pendiente: 0, procesando: 0, enviado: 0, entregado: 0 };
      ordersData.forEach((order) => {
        if (order.status) {
          // Convertir el estado a minúsculas para evitar problemas de mayúsculas/minúsculas
          const status = order.status.toLowerCase();
          if (statusCounts.hasOwnProperty(status)) {
            statusCounts[status]++;
          }
        }
      });
      setOrderStatus(statusCounts);
    };

    fetchOrders();
  }, []);

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Panel de Administración
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <DashboardCard
            title="Total de Pedidos"
            value={totalOrders}
            icon={<ShoppingCartIcon fontSize="large" color="primary" />}
            color="#3f51b5"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DashboardCard
            title="Ventas Totales"
            value={`$${totalSales.toFixed(2)}`}
            icon={<MonetizationOnIcon fontSize="large" color="success" />}
            color="#4caf50"
          />
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            title="Resumen de Pedidos"
            value={`Pendientes: ${orderStatus.pendiente}, Procesando: ${orderStatus.procesando}, Enviados: ${orderStatus.enviado}, Entregados: ${orderStatus.entregado}`}
            icon={<AssignmentTurnedInIcon fontSize="large" color="warning" />}
            color="#ff9800"
          />
        </Grid>
      </Grid>
    </Box>
  );
};