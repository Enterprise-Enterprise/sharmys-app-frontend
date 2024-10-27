'use client';
import * as React from 'react';
import OrderCard from './order-card';

export default function OrderSummary({ className }) {
    const orders = [
        {
            id: '1',
            title: 'BIG Sandwich',
            quantity: 1,
            options: ['Extra cheese', 'No onions'],
            total: 29.0
        }
    ];
    return (
        <div className={className}>
            {orders.map((order) => (
                <OrderCard key={order.id} order={order} onEdit={() => {}} onDelete={() => {}} />
            ))}
        </div>
    );
}
