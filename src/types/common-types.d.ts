import { StaticImageData } from 'next/image';

export interface Language {
    imageUrl: string | StaticImageData;
    title: string;
}
