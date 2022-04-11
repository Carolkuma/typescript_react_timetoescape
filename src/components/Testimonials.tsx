import React from "react";
import { CustomerCard, Customer } from "./CustomerCard";
import LabelText from "./LabelText";
import data from "../../content/home/reviews.json";
import "twin.macro";

export const Testimonials = () => (
  <section id="testimonials" tw="pt-20">
    <div className="container mx-auto">
      <LabelText className="text-center text-xl alt-font">
        {data.title}
      </LabelText>
      <div tw="mt-10 flex flex-col lg:flex-row">
        {data.reviews.slice(0, 3).map((customer: Customer, i: number) => (
          <CustomerCard key={i} customer={customer} />
        ))}
      </div>
    </div>
  </section>
);
