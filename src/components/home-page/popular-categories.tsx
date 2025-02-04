'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PopularCategoryProps, Category } from '@/types/categories-home-page.types';

export default function PopularCategory({ categories }: PopularCategoryProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 },
        },
    };

    return (
        <section className="py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Popular category</h2>
                    <Link href="#" className="text-primary flex items-center gap-2">
                        View all <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {categories.map((category: Category, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="p-4 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3">
                                    {category.icon}
                                    <div>
                                        <h3 className="font-semibold">{category.name}</h3>
                                        <p className="text-sm text-muted-foreground">{category.jobs} Open positions</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
