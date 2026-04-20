"use client";

import React from "react";
import Hero from "../Components/product/Hero";
import ProductGrid from "../Components/product/ProductGrid";
import Features from "../Components/Leder/Features";



export default function ProductsPage() {
    return (
        <main >
            {/* سكشن الهيرو الخاص بالمنتجات */}
            <Hero />
            <ProductGrid />
            <Features />

        </main>
    );
}