export interface Category {
    icon: JSX.Element;
    name: string;
    jobs: number;
}

export interface PopularCategoryProps {
    categories: Category[];
}
