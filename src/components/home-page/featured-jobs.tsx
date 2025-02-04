import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedJobs() {
    const jobs = [
        {
            company: 'UI/UX Designer',
            logo: '/placeholder.svg',
            title: 'Senior UX Designer',
            location: 'New York, USA',
            salary: '$45K - $55K',
            type: 'Full time',
        },
        {
            company: 'Software Engineer',
            logo: '/placeholder.svg',
            title: 'Full Stack Developer',
            location: 'San Francisco, USA',
            salary: '$75K - $85K',
            type: 'Full time',
        },
        {
            company: 'Product Designer',
            logo: '/placeholder.svg',
            title: 'Product Manager',
            location: 'London, UK',
            salary: '$60K - $75K',
            type: 'Full time',
        },
    ];

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Featured job</h2>
                <Link href="#" className="text-sm text-primary hover:underline">
                    View all
                </Link>
            </div>
            <div className="space-y-4">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between gap-4 rounded-lg border p-6 sm:flex-row sm:items-center"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-lg bg-muted" />
                            <div>
                                <h3 className="font-semibold">{job.title}</h3>
                                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                                    <span>{job.company}</span>
                                    <span>•</span>
                                    <span>{job.location}</span>
                                    <span>•</span>
                                    <span>{job.salary}</span>
                                    <span>•</span>
                                    <span>{job.type}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon">
                                <Bookmark className="h-4 w-4" />
                            </Button>
                            <Button>Apply Now</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
