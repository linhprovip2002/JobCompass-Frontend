'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import _ from 'lodash';
import { motion } from 'framer-motion';
import default_avatar from '@/assets/images/avatar/default-avatar.jpg';
import { HomePart } from './home-part';
import { motionVariant } from '@/lib/motion-variants';
import { Rating } from '../custom-ui/rating';

type Testimonial = {
    text: string;
    name: string;
    role: string;
    avatarUrl?: string;
};

const testimonials: Testimonial[] = [
    {
        text: 'Found my dream job through this platform. The process was smooth and the support team was very helpful.',
        name: 'Sarah Johnson',
        role: 'UI Designer',
        avatarUrl: '',
    },
    {
        text: 'As an employer, I was able to find qualified candidates quickly. The platform is intuitive and powerful.',
        name: 'Michael Chen',
        role: 'HR Manager',
        avatarUrl: '',
    },
    {
        text: 'Great platform for job seekers. Lots of opportunities and easy to use interface.',
        name: 'Emily Brown',
        role: 'Software Engineer',
        avatarUrl: '',
    },
];

export function Testimonials() {
    return (
        <HomePart title="Clients Testimonial">
            <motion.div
                className="grid md:grid-cols-3 gap-8"
                variants={motionVariant.itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {testimonials.map((testimonial, index) => (
                    <Card
                        key={index}
                        className="p-6 flex flex-col justify-between border-gray-100 shadow-sm drop-shadow-sm"
                    >
                        <div>
                            <div className="flex gap-1 mb-4">
                                <Rating size="xs" interactive={false} value={5} />
                            </div>
                            <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
                                {testimonial.avatarUrl?.trim() ? (
                                    <Image
                                        src={testimonial.avatarUrl}
                                        alt={`${testimonial.name}'s Avatar`}
                                        width={40} // Đặt kích thước cố định để tránh layout shift
                                        height={40}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <Image
                                        src={default_avatar}
                                        alt="Default Avatar"
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div>
                                <p className="font-medium">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </motion.div>
        </HomePart>
    );
}
