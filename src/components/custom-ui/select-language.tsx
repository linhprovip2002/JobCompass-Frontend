'use client';

import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { languagesData } from '@/lib/data/languages.data';
import Image from 'next/image';
import { useState } from 'react';

export function SelectLanguage() {
    const [select, setSelect] = useState<string>('en');

    return (
        <Select onValueChange={setSelect}>
            <SelectTrigger className="border-transparent shadow-none focus:ring-0">
                <div className="flex items-center gap-2">
                    <Image
                        src={languagesData[select].imageUrl}
                        alt={languagesData[select].title}
                        height={16}
                        width={24}
                    />
                    <span className="text-gray-700">{languagesData[select].title}</span>
                </div>
            </SelectTrigger>
            <SelectContent defaultValue={select} side="bottom" align="end">
                {Object.entries(languagesData).map((language) => (
                    <SelectItem key={language[0]} value={language[0]} className="flex items-center">
                        <div className="flex items-center gap-2">
                            <Image src={language[1].imageUrl} alt={language[1].title} height={16} width={24} />
                            <span className="text-gray-700">{language[1].title}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
