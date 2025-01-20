'use client';

import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { languages } from '@/lib/data/languages';
import Image from 'next/image';
import { useState } from 'react';

export function SelectLanguage() {
    const [select, setSelect] = useState<string>('en');

    return (
        <Select onValueChange={setSelect}>
            <SelectTrigger className="border-transparent shadow-none focus:ring-0">
                <div className="flex items-center gap-2">
                    <Image src={languages[select].imageUrl} alt={languages[select].title} height={16} width={24} />
                    <span className="text-soft-mist-foreground">{languages[select].title}</span>
                </div>
            </SelectTrigger>
            <SelectContent defaultValue={select} side="bottom" align="end">
                {Object.entries(languages).map((language) => (
                    <SelectItem key={language[0]} value={language[0]} className="flex items-center">
                        <div className="flex items-center gap-2">
                            <Image src={language[1].imageUrl} alt={language[1].title} height={16} width={24} />
                            <span className="text-soft-mist-foreground">{language[1].title}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
