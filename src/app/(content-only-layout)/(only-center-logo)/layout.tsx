import { ButtonHome } from '@/components/custom-ui/button-home';
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-dvh flex flex-col">
            <div className="pt-10 pb-24 flex items-center justify-center">
                <ButtonHome />
            </div>
            <div className="flex-1">{children}</div>
        </div>
    );
}
