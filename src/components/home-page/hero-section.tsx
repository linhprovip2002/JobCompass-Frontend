'use client'

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';
import CountUp from 'react-countup';
import { PiBriefcaseDuotone } from 'react-icons/pi';
import { BiBuildings } from 'react-icons/bi';

import { SvgBanner } from '@/components/custom-ui/svg-banner';
import { IconPresent } from '../custom-ui/icon-present';

export function HeroSection() {
    return (
        <section>
            <section className="container max-w-screen-xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-[56px] md:leading-[64px] font-medium tracking-wide text-center md:text-left">
                            Find a job that suits
                            <br />
                            your interest & skills.
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg">
                            Choose from thousands of jobs available to match your skills and interests. Apply to your
                            dream job today!
                        </p>
                        <div className="p-3 flex gap-2 max-w-screen-md h-20 bg-white rounded-lg border border-gray-100 drop-shadow-sm">
                            <div className="flex items-center border-r">
                                <Search className="sm:mx-2 h-6 w-6 text-primary" />
                                <Input
                                    className="flex-1 h-full border-none shadow-none focus-visible:ring-0 text-base font-normal"
                                    placeholder="Job title, keyword..."
                                />
                            </div>
                            <div className="flex items-center">
                                <MapPin className="sm:mx-2 h-6 w-6 text-primary" />
                                <Input
                                    className="flex-1 h-full border-none shadow-none focus-visible:ring-0 text-base font-normal"
                                    placeholder="Your location"
                                />
                            </div>
                            <Button size="xl" className="h-full text-base">
                                Find Jobs
                            </Button>
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-end">
                        <SvgBanner />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <IconPresent.Group
                                key={index}
                                className="p-5 flex items-center gap-4 lg:gap-9 bg-white rounded-md border border-gray-100 hover:shadow-primary-100 hover:shadow-lg cursor-default"
                            >
                                <IconPresent.Icon Icon={Icon} size="lg" />
                                <div>
                                    <h3 className="text-2xl font-medium text-black">
                                        <CountUp start={0} end={stat.number} duration={2.5} separator="," />
                                    </h3>
                                    <p className="text-gray-600 text-base">{stat.label}</p>
                                </div>
                            </IconPresent.Group>
                        );
                    })}
                </div>
            </section>
        </section>
    );
}

const stats = [
    { number: 175324, label: 'Live Jobs', icon: PiBriefcaseDuotone },
    { number: 97354, label: 'Companies', icon: BiBuildings },
    { number: 3847154, label: 'Job Seekers', icon: PiBriefcaseDuotone },
    { number: 7532, label: 'New Jobs', icon: PiBriefcaseDuotone },
];
