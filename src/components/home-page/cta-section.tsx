import { Button } from '@/components/ui/button';

export default function CTASection() {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-muted p-8">
                    <h3 className="mb-4 text-xl font-bold">Become a Candidate</h3>
                    <p className="mb-6 text-muted-foreground">
                        Create your profile and let employers find you. Apply to jobs with a single click.
                    </p>
                    <Button className="w-full sm:w-auto">Register Now</Button>
                </div>
                <div className="rounded-lg bg-primary p-8 text-primary-foreground">
                    <h3 className="mb-4 text-xl font-bold">Become a Employers</h3>
                    <p className="mb-6 text-primary-foreground/80">
                        Post jobs and find the perfect candidate. Streamline your hiring process.
                    </p>
                    <Button variant="secondary" className="w-full sm:w-auto">
                        Register Now
                    </Button>
                </div>
            </div>
        </section>
    );
}
