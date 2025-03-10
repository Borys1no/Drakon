import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Users } from "lucide-react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { blue } from "@mui/material/colors";

const DashboardStats = () => {
  const [TotalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      setTotalUsers(snapshot.size);
    });

    return () => unsubscribe();
  }, []);

  const stats = [
    {
      title: "Total de usuarios",
      icon: <Users size={32} color={blue[600]} />, // Tamaño y color del icono
      value: TotalUsers,
    },
  ];

  return (
    <Box display="flex" gap={2}>
      {stats.map((stat, index) => (
        <Card key={index} sx={{ minWidth: 275, boxShadow: 3 }}>
          <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {stat.icon}
            <Box>
              <Typography variant="h6" color="text.primary">
                {stat.title}
              </Typography>
              <Typography variant="h4" color="text.secondary">
                {stat.value}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default DashboardStats;