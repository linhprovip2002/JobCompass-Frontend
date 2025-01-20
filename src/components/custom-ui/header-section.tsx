import { Nav } from '@/components/custom-ui/nav';
import { PiPhoneCall } from 'react-icons/pi';
import { SelectLanguage } from '@/components/custom-ui/select-language';
import { ButtonHome } from '@/components/custom-ui/button-home';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search } from '@/components/custom-ui/search';

export function HeaderSection() {
    return (
        <header>
            <div className="bg-soft-mist">
                <div className="mx-auto container max-w-screen-xl flex items-center justify-between">
                    <Nav />
                    <div className="flex items-center gap-6">
                        <div>
                            <div className="flex items-center gap-1 text-sm font-medium">
                                <PiPhoneCall className="size-6" />
                                <span className="text-nowrap">+1-202-555-0178</span>
                            </div>
                        </div>
                        <SelectLanguage />
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto py-5 container max-w-screen-xl flex items-center">
                    <ButtonHome />
                    <div className="ml-8">
                        <Search />
                    </div>
                    <div className="ml-auto space-x-3">
                        <Link href="/sign-in">
                            <Button variant="outline-primary" size="xl">
                                Sign in
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="default" size="xl">
                                Post a Job
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
