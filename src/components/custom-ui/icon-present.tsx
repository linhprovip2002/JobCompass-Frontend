import { cn } from '@/lib/utils';
import clsx from 'clsx';
import React from 'react';

export const IconPresent = {
    Group: ({
        className,
        animation = true,
        children,
    }: {
        className?: string;
        animation?: boolean;
        children: React.ReactNode;
    }) => {
        return (
            <div
                className={cn(
                    'group',
                    className,
                    animation
                        ? 'transition-all  [&_svg]:transition-all [&_div]:transition-all duration-300 [&_div]:duration-300 [&_svg]:duration-300'
                        : ''
                )}
            >
                {children}
            </div>
        );
    },
    Icon: ({ Icon, size = 'md' }: { Icon: any; size: 'sm' | 'md' | 'lg' }) => {
        return (
            <div className="p-4 bg-primary-50 rounded-md group-hover:bg-primary">
                <Icon
                    className={clsx(
                        size === 'sm'
                            ? 'size-4 lg:size-6'
                            : size === 'md'
                              ? 'size-6 lg:size-8'
                              : size === 'lg'
                                ? 'size-8 lg:size-10'
                                : '',
                        'text-primary group-hover:text-white'
                    )}
                />
            </div>
        );
    },
};
