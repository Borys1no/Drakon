/* eslint-disable no-undef */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.onOrderCreated = functions.firestore
    .document('orders/{orderId}')
    .onCreate((snap, context) => {
        const newOrder = snap.data();
        const orderId = context.params.orderId;

        console.log(`Nuevo pedido creado: ${orderId}, Trago: ${newOrder.drink}, Cliente: ${newOrder.customerName}`);

        return null;
    });
/* eslint-enable no-undef */
