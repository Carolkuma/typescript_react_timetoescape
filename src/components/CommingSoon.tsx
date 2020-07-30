import React from "react";
import Button from "./Button";


const style = {
    backgroundImage: `url("intro-bg.jpg")`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    minHeight: `calc(100vh - 9.1rem)`
}


export const CommingSoon = () => <section className="py-20" style={style}>
        <div className="container mx-auto lg:flex">
            <div className="text-center flex-1 lg:w-1/2">
                <h1 className="text-4xl lg:text-4xl xl:text-6xl font-bold leading-none">
                    Nezabudnuteľný zážitok
            </h1>
                <p className="text-xl lg:text-2xl mt-6 font-light">
                    Zaži dobrodružstvo spolupracuj a unikni.
                    Už čoskoro otvárame. 
            </p>
                <p className="mt-8 md:mt-12">
                   
                </p>
            </div>
        </div>
    </section>
