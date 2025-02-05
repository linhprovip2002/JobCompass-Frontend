'use client';

import _ from 'lodash';
import { Building2 } from 'lucide-react';
import { PopularVacancies } from '@/components/home-page/popular-vacancies';
import { HowItWorks } from '@/components/home-page/how-it-works';
import { TopCompanies } from '@/components/home-page/top-companies';
import { PopularCategory } from '@/components/home-page/popular-categories';
import { Category } from '@/types/categories-home-page.types';
import { HeroSection } from '@/components/home-page/hero-section';
import { FeatureJobs } from '@/components/home-page/feature-jobs';
import { Testimonials } from '@/components/home-page/testimonials';
import { CTASection } from '@/components/home-page/cta-section';

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <div className="py-16 md:py-24 bg-gray-50">
                <HeroSection />
            </div>

            {/* vacancies session */}
            <div className="py-16 md:py-24">
                <PopularVacancies />
            </div>

            {/* How it works */}
            <div className="py-16 md:py-24 bg-gray-50">
                <HowItWorks />
            </div>

            {/* Popular Categories */}
            <div className="py-16 md:py-24">
                <PopularCategory categories={categories} />
            </div>

            {/* Featured Jobs */}
            <div className="py-16 md:py-24 bg-gray-50">
                <FeatureJobs />
            </div>
            <div className="py-16 md:py-24">
                <TopCompanies />
            </div>
            {/* Testimonials */}
            <div className="py-16 md:py-24 bg-gray-50">
                <Testimonials />
            </div>

            {/* CTAs */}
            <div className="py-16 md:py-24">
                <CTASection />
            </div>
        </main>
    );
}

const categories: Category[] = [
    { name: 'Design & Creative', jobs: 235, icon: Building2 },
    { name: 'Development', jobs: 427, icon: Building2 },
    { name: 'Marketing', jobs: 264, icon: Building2 },
    { name: 'Finance', jobs: 154, icon: Building2 },
    { name: 'Design & Creative', jobs: 235, icon: Building2 },
    { name: 'Development', jobs: 427, icon: Building2 },
    { name: 'Marketing', jobs: 264, icon: Building2 },
    { name: 'Finance', jobs: 154, icon: Building2 },
];
