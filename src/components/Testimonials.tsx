import React from 'react';

import {CustomerCard, Customer} from './CustomerCard';
import LabelText from './LabelText';
import data  from '../../content/home/reviews.json'



export const Testimonials = () => <section id="testimonials" className="pt-20">
    <div className="container mx-auto">
        <LabelText className="text-center text-xl alt-font">{data.title}</LabelText>
        <div className="mt-10 flex flex-col lg:flex-row">
            {data.reviews.map((customer: Customer,i: number) => (
                <CustomerCard key={i} customer={customer} />
            ))}
        </div>
    </div>
</section>