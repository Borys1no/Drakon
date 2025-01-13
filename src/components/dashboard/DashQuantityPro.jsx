import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Milk } from 'lucide-react';
import './DashQuantityPro.css'; 

const DashQuantityPro = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "carts"),
            (snapshot) => {
                const productData = snapshot.docs.flatMap((doc) => {
                    const data = doc.data();
                    // Asegúrate de que items existe y tiene contenido
                    if (data.items && Array.isArray(data.items)) {
                        return data.items.map((item) => ({
                            id: doc.id,
                            name: item.name || "Producto Desconocido",
                            quantity: item.quantity || 0,
                        }));
                    }
                    return [];
                });
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
        return <p>Cargando productos...</p>;
    }

    return (
        <div>
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <Milk className="product-icon" />
                    <h3>{product.name}</h3>
                    <p>Cantidad Total: {product.quantity}</p>
                </div>
            ))}
        </div>
    );
};

export default DashQuantityPro;
