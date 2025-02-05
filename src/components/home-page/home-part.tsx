import { CircleUser, Upload, Search, Send } from 'lucide-react';
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
                <div
                    className={clsx(
                        'mb-8 flex items-center',
                        linkNode ? 'justify-between' : 'justify-center md:justify-between'
                    )}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-medium text-center md:text-left"
                    >
                        {title}
                    </motion.h2>
                    {linkNode}
                </div>
                <div>{children}</div>
            </div>
        </section>
    );
}
