import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LuArrowRight } from 'react-icons/lu';

export function CTASection() {
    return (
        <section>
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-12 bg-gray-100">
                        <h3 className="text-3xl font-medium mb-4">Become a Candidate</h3>
                        <p className="text-muted-foreground mb-6">
                            Create your profile and let employers find you. Apply to jobs with just one click.
                        </p>
                        <Button variant="third" size='xl' className='group transition-all'>Register Now <LuArrowRight className="group-hover:translate-x-2 transition-all duration-100" /></Button>
                    </Card>
                    <Card className="p-12 bg-primary text-primary-foreground">
                        <h3 className="text-3xl font-medium mb-4">Become an Employer</h3>
                        <p className="text-primary-foreground/80 mb-6">
                            Post jobs and find the perfect candidate. Streamline your hiring process.
                        </p>
                        <Button variant="third" size='xl' className='group transition-all'>Register Now <LuArrowRight className="group-hover:translate-x-2 transition-all duration-100" /></Button>
                    </Card>
                </div>
            </div>
        </section>
    );
}
