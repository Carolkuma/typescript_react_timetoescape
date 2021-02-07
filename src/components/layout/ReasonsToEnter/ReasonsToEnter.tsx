
import React from "react";
import { Columns } from './Columns';


import {title , reasons} from '../../../../content/home/reasons-to-enter.json'
export const ReasonsToEnter = () => <section id="features" className="py-10 container mx-auto">
        <h2 className="text-3xl lg:text-4xl alt-font text-center px-3">{title}</h2>
        <Columns reasons={reasons}/>
</section>