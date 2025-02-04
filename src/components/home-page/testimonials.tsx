import { Star } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            content: 'Great platform for job seekers. Found my dream job within weeks!',
            author: 'Sarah Parker',
            role: 'UI Designer',
        },
        {
            content: "The best job board I've used. Very user friendly and effective.",
            author: 'John Cooper',
            role: 'Software Engineer',
        },
        {
            content: 'Excellent service and support. Highly recommended for job seekers!',
            author: 'Mike Thompson',
            role: 'Product Manager',
        },
    ];

    return (
        <section className="bg-muted py-12">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 text-center text-2xl font-bold">Clients Testimonial</h2>
                <div className="relative">
                    <div className="flex gap-6 overflow-hidden">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="min-w-full rounded-lg bg-background p-6 md:min-w-[calc(33.333%-1rem)]"
                            >
                                <div className="mb-4 flex text-yellow-400">
                                    {Array(5)
                                        .fill(null)
                                        .map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current" />
                                        ))}
                                </div>
                                <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-muted" />
                                    <div>
                                        <div className="font-semibold">{testimonial.author}</div>
                                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
