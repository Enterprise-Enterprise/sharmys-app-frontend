'use client';
import { Trash2, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/lib/currency';

interface OrderProps {
    order?: {
        id: string;
        title: string;
        quantity: number;
        options: string[];
        total: number;
    };
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}

export default function OrderCard({ order, onEdit = null, onDelete = null }: OrderProps) {
    if (!order) {
        return null; // or return a placeholder/error message component
    }

    return (
        <Card className="w-full overflow-hidden">
            <CardContent className="p-0">
                <div className="flex items-start justify-between p-4 bg-muted">
                    <div className="flex items-center">
                        <span className="text-lg font-semibold mr-2">x{order.quantity}</span>
                        <h3 className="text-lg font-bold">{order.title}</h3>
                    </div>
                </div>
                <div className="p-4">
                    <ul className="space-y-1">
                        {order.options.map((option, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-lg font-semibold">{formatCurrency(order.total)}</span>
                    </div>
                </div>
                <div className="flex justify-end space-x-2 p-4 bg-muted">
                    {onEdit && (
                        <Button variant="outline" size="sm" onClick={() => onEdit(order.id)}>
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                        </Button>
                    )}
                    {onDelete && (
                        <Button variant="destructive" size="sm" onClick={() => onDelete(order.id)}>
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
