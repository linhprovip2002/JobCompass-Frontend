import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import * as React from 'react';

interface InputPasswordProps {
    hide: boolean;
    setHide: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps & React.ComponentProps<'input'>>(
    ({ className, hide, setHide, ...props }, ref) => {
        const handleTogglePasswordVisibility = (status: boolean) => {
            setHide(status);
        };

        return (
            <div
                className={cn(
                    `relative flex h-9 w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 
                    file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none 
                    disabled:cursor-not-allowed disabled:opacity-50 md:text-sm overflow-hidden`,
                    className
                )}
            >
                <Input
                    {...props}
                    ref={ref}
                    type={hide ? 'password' : 'text'}
                    className="shadow-none pr-12 h-full rounded-sm border-none"
                />
                <BsEye
                    className={clsx('absolute top-1/2 right-[18px] -translate-y-1/2 size-[22px]', hide ? 'hidden' : '')}
                    onClick={() => handleTogglePasswordVisibility(false)}
                />
                <BsEyeSlash
                    className={clsx(
                        'absolute top-1/2 right-[18px] -translate-y-1/2 size-[22px]',
                        !hide ? 'hidden' : ''
                    )}
                    onClick={() => handleTogglePasswordVisibility(true)}
                />
            </div>
        );

        InputPassword.displayName = 'InputPassword';
    }
);
