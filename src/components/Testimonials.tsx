import React from 'react';

import {CustomerCard, Customer} from './CustomerCard';
import LabelText from './LabelText';

interface props {
    customerData: Customer[]
} 

export const Testimonials = ({customerData}: props) => <section id="testimonials" className="mt-20">
    <div className="container mx-auto">
        <LabelText className="text-center text-xl alt-font">Čo vravia naši zákazníci</LabelText>
        <div className="mt-10 flex flex-col lg:flex-row">
            {customerData.map((customer,i) => (
                <CustomerCard key={i} customer={customer} />
            ))}
        </div>
    </div>
</section>