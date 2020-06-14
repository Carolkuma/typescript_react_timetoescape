import React from 'react';
import Card from './Card';
export interface Customer {
  customerImage: string,
  customerName: string,
  customerTitle: string,
  title: string,
  content: string,
}
interface props {
  customer: Customer,
}


export const CustomerCard = ({ customer }: props) => (
  <Card className="mb-8 p-12">
    <p className="text-xl font-semibold">{customer.title}</p>
    <p className="mt-6">{customer.content}</p>
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <div>
        <p>{customer.customerName}</p>
        <p className="text-sm">{customer.customerTitle}</p>
      </div>
    </div>
  </Card>
);


