import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function CTASection() {
    return (
        <section>
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
    );
}
