'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomePart } from './home-part';
import { motionVariant } from '@/lib/motion-variants';

export function PopularVacancies() {
    return (
        <HomePart title="Most Popular Vacancies">
            <motion.div
                className="grid gap-x-10 gap-y-12 grid-cols-2 lg:grid-cols-4 text-center md:text-left"
                variants={motionVariant.containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {vacancies.map((column, i) => (
                    <motion.div key={i} className="space-y-4" variants={motionVariant.itemVariants}>
                        {column.map((job, j) => (
                            <Link
                                key={j}
                                href="#"
                                className="block text-lg hover:text-primary transition-colors duration-300"
                            >
                                {job}
                            </Link>
                        ))}
                    </motion.div>
                ))}
            </motion.div>
        </HomePart>
    );
}

const vacancies = [
    ['Accommodation', 'Manufacture Engineer', 'Financial Manager'],
    ['Engineer', 'Software Developer', 'Management Analysis'],
    ['Receptionist', 'Psychologist', 'IT Manager'],
    ['Data Scientist', 'Operations Research Analysis', 'Other'],
];
