import React from 'react';

import {CustomerCard, Customer} from './CustomerCard';
import LabelText from './LabelText';

interface props {
    customerData: Customer[]
} 



export const Testimonials = ({customerData}: props) => <section id="testimonials" className="mt-20">
    <div className="container mx-auto">
        <LabelText className="text-center">Čo vravia naši zákazníci</LabelText>
        <div className="mt-10 flex flex-col md:flex-row md:-mx-5">
            {customerData.map(customer => (
                <div key={customer.customerName} className="flex-1 px-5">
                    <CustomerCard customer={customer} />
                </div>
            ))}
        </div>
    </div>
</section>