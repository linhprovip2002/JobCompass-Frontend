'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PopularVacancies() {
    const vacancies = [
        ['Accommodation', 'Manufacture Engineer', 'Financial Manager'],
        ['Engineer', 'Software Developer', 'Management Analysis'],
        ['Receptionist', 'Psychologist', 'IT Manager'],
        ['Data Scientist', 'Operations Research Analysis', 'Other'],
    ];

    // Animation variants for framer-motion
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
        <section className="container max-w-screen-xl mx-auto px-4 py-12">
            <h2 className="mb-8 text-2xl font-bold text-center md:text-left">Most Popular Vacancies</h2>
            <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {vacancies.map((column, i) => (
                    <motion.div key={i} className="space-y-4" variants={itemVariants}>
                        {column.map((job, j) => (
                            <Link
                                key={j}
                                href="#"
                                className="block text-sm hover:text-primary transition-colors duration-300"
                            >
                                {job}
                            </Link>
                        ))}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
