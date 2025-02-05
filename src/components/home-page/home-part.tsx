'use client'

import { motion } from 'framer-motion';
import clsx from 'clsx';

export function HomePart({
    title,
    children,
    linkNode,
}: {
    title: string;
    linkNode?: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <section>
            <div className="container max-w-screen-xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={clsx(
                        'mb-8 flex items-center',
                        linkNode ? 'justify-between' : 'justify-center md:justify-between'
                    )}
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-center md:text-left">{title}</h2>
                    {linkNode}
                </motion.div>
                <div>{children}</div>
            </div>
        </section>
    );
}
