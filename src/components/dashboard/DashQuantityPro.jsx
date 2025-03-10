import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Milk } from 'lucide-react';
import { Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import { blue } from '@mui/material/colors';

const DashQuantityPro = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "products"),
            (snapshot) => {
                const productData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name || "Producto Desconocido",
                    quantity: doc.data().availableQuantity || 0,
                }));
                setProducts(productData);
                setLoading(false);
            },
            (error) => {
                console.error("Error al obtener los datos de Firestore:", error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />;
    }

    return (
        <Box display="flex" flexWrap="wrap" gap={2}>
            {products.length > 0 ? (
                products.map((product) => (
                    <Card key={product.id} sx={{ minWidth: 275, boxShadow: 3 }}>
                        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Milk size={32} color={blue[600]} />
                            <Box>
                                <Typography variant="h6" color="text.primary">
                                    {product.name}
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                    Cantidad Total: {product.quantity}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography variant="h6" sx={{ textAlign: "center", width: "100%" }}>
                    No hay productos disponibles.
                </Typography>
            )}
        </Box>
    );
};

export default DashQuantityPro;
