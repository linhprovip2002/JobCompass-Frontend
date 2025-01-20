'use client';

import React, { useId, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import Image from 'next/image';
import { languages } from '@/lib/data/languages';

export function Search() {
    const [select, setSelect] = useState<string>('en');

    const inputId = useId();

    return (
        <div className="group h-12 w-[668px] flex items-center border border-input rounded-sm focus-within:border-primary-200">
            <Select onValueChange={setSelect}>
                <SelectTrigger className="max-w-44 h-full border-1 border-transparent shadow-none rounded-sm focus:ring-0 group-hover::border-primary-200">
                    <div className="flex items-center gap-2">
                        <Image
                            src={languages[select].imageUrl}
                            alt={languages[select].title}
                            className="h-full w-full object-center object-cover"
                            height={16}
                            width={24}
                        />
                        <span className="text-soft-mist-foreground">{languages[select].title}</span>
                    </div>
                </SelectTrigger>
                <SelectContent defaultValue={select}>
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
            <Separator orientation="vertical" className="h-3/5" />
            <label htmlFor={inputId} className="p-2">
                <HiMiniMagnifyingGlass className="size-6 text-primary" />
            </label>
            <Input
                id={inputId}
                className="h-full border-none shadow-none focus-visible:ring-0 text-base font-normal"
                placeholder="Job title, keyword, company"
            />
        </div>
    );
}
