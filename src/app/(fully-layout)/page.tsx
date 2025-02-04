'use client';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Search, MapPin, Building2, Users, ArrowRight, Star } from 'lucide-react';
import CountUp from 'react-countup';
import _ from 'lodash';

import illustration from '@/assets/images/flags/Illustration.jpg';
import default_avatar from '@/assets/images/avatar/default-avatar.jpg';
import PopularVacancies from '@/components/home-page/popular-vacancies';
import HowItWorks from '@/components/home-page/how-it-works';
import TopCompanies from '@/components/home-page/top-companies';
import PopularCategory from '@/components/home-page/popular-categories';
export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-50 py-16">
                <section className="container max-w-screen-xl mx-auto px-4 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Find a job that suits
                                <br />
                                your interest & skills.
                            </h1>
                            <p className="text-muted-foreground text-lg">
                                Choose from thousands of jobs available to match your skills and interests. Apply to
                                your dream job today!
                            </p>
                            <div className="flex gap-2 max-w-xl">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <Input className="pl-10" placeholder="Job title or keyword" />
                                </div>
                                <Button size="lg">Find Jobs</Button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Image
                                src={illustration}
                                alt="Job search illustration"
                                width={500}
                                height={400}
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-2xl font-bold text-primary">
                                    <CountUp start={0} end={stat.number} duration={2.5} separator="," />
                                </h3>
                                <p className="text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </section>

            {/* vacancies session */}
            <section className="py-16">
                <PopularVacancies></PopularVacancies>
            </section>

            {/* How it works */}
            <HowItWorks></HowItWorks>

            {/* Popular Categories */}
            <PopularCategory categories={categories}></PopularCategory>
            {/* <section className=" py-16">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold">Popular category</h2>
                        <Link href="#" className="text-primary flex items-center gap-2">
                            View all <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map((category, index) => (
                            <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3">
                                    {category.icon}
                                    <div>
                                        <h3 className="font-semibold">{category.name}</h3>
                                        <p className="text-sm text-muted-foreground">{category.jobs} Open positions</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Featured Jobs */}
            <section className="py-16 bg-slate-50">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold">Featured jobs</h2>
                        <Link href="#" className="text-primary flex items-center gap-2">
                            View all <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {jobs.map((job, index) => (
                            <Card key={index} className="p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                            <Building2 className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{job.title}</h3>
                                            <div className="flex gap-4 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Building2 className="h-4 w-4" /> {job.company}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="h-4 w-4" /> {job.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Users className="h-4 w-4" /> {job.applicants} Applicants
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button>Apply Now</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <TopCompanies></TopCompanies>
            {/* Testimonials */}
            <section className=" py-16 bg-slate-50">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-12">Clients Testimonial</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="p-6">
                                <div className="flex gap-1 mb-4">
                                    {_.times(5, (i: Testimonial[]) => (
                                        <Star key={i.toString()} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
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
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTAs */}
            <section className="py-16 ">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-8">
                            <h3 className="text-xl font-bold mb-4">Become a Candidate</h3>
                            <p className="text-muted-foreground mb-6">
                                Create your profile and let employers find you. Apply to jobs with just one click.
                            </p>
                            <Button variant="outline">Register Now</Button>
                        </Card>
                        <Card className="p-8 bg-primary text-primary-foreground">
                            <h3 className="text-xl font-bold mb-4">Become an Employer</h3>
                            <p className="text-primary-foreground/80 mb-6">
                                Post jobs and find the perfect candidate. Streamline your hiring process.
                            </p>
                            <Button variant="secondary">Register Now</Button>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
}

const categories = [
    { name: 'Design & Creative', jobs: '235', icon: <Building2 className="h-6 w-6 text-primary" /> },
    { name: 'Development', jobs: '427', icon: <Building2 className="h-6 w-6 text-primary" /> },
    { name: 'Marketing', jobs: '264', icon: <Building2 className="h-6 w-6 text-primary" /> },
    { name: 'Finance', jobs: '154', icon: <Building2 className="h-6 w-6 text-primary" /> },
    { name: 'Design & Creative', jobs: '235', icon: <Building2 className="h-6 w-6 text-primary" /> },
    { name: 'Development', jobs: '427', icon: <Building2 className="h-6 w-6 text-primary" /> },
    { name: 'Marketing', jobs: '264', icon: <Building2 className="h-6 w-6 text-primary" /> },
    { name: 'Finance', jobs: '154', icon: <Building2 className="h-6 w-6 text-primary" /> },
];

const jobs = [
    {
        title: 'Senior UX Designer',
        company: 'Google Inc',
        location: 'Mountain View, CA',
        applicants: '56',
    },
    {
        title: 'Software Engineer',
        company: 'Microsoft',
        location: 'Seattle, WA',
        applicants: '43',
    },
    {
        title: 'Product Manager',
        company: 'Apple',
        location: 'Cupertino, CA',
        applicants: '38',
    },
];
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

const stats = [
    { number: 175324, label: 'Live Jobs' },
    { number: 97354, label: 'Companies' },
    { number: 3847154, label: 'Job Seekers' },
    { number: 7532, label: 'New Jobs' },
];
