import React from 'react';
import Card from './Card';
import StarRatings from 'react-star-ratings';
import {lightFormat} from 'date-fns'
export interface Customer {
  rating: number,
  scale: number,
  source: number,
  date: string,
  customerImage: string,
  customerName: string,

  title: string,
  content: string,
}
interface props {
  customer: Customer,
}


const formatDate = (date: string): string => lightFormat(new Date(date), 'dd.MM.yyyy')

export const CustomerCard = ({ customer }: props) => (
  <Card className="mb-8 p-10">
    <div className="mb-8">
    <StarRatings
    rating={customer.rating}
    starDimension="1.5rem"
      starSpacing=".5rem"
      starRatedColor="#f6ad55"
      starEmptyColor="rgba(26, 32, 44,.3)"
      numberOfStars={customer.scale}
      name="hodnotenie"
      />
      <div className="float-right">
      {customer.rating}/{customer.scale}
      </div>
    </div>  
    <q>{customer.content}</q>
    <br/><small>Zdroj:Facebook</small>
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <div>
        <p>{customer.customerName}</p>
        <p className="text-sm">{formatDate(customer.date)}</p>
      </div>
    </div>
  </Card>
);


