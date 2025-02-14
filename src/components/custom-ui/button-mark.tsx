import React from 'react';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';

export const ButtonMark = ({
    onClick,
    variant = 'third',
}: {
    variant?: 'third' | 'secondary';
    onClick?: () => void;
}) => {
    return (
        <Button
            type="button"
            className="[&_svg]:size-6 p-2 h-10 lg:p-3 lg:h-12"
            size="xl"
            variant={variant}
            onClick={onClick}
        >
            <Bookmark />
        </Button>
    );
};
