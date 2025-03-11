'use client';
import type React from 'react';
import { useActionState, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LuArrowRight } from 'react-icons/lu';
import RichTextEditor from '@/components/custom-ui/rich-text-editor';
import { postJob } from '@/lib/action';
import { Tag } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { queryKey } from '@/lib/react-query/keys';
import clsx from 'clsx';
import { toast } from 'sonner';
import { successKeyMessage } from '@/lib/message-keys';
import { useRouter } from 'next/navigation';
import MultiSelectSearchInput from '@/components/custom-ui/selected-tags';
import { DialogAddTag } from '@/components/custom-ui/dialog-add-tag';
import { CategoryService } from '@/services/categories.service';
import { AddressService } from '@/services/address.service';

export default function PostJobForm() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const router = useRouter();
    const [state, onSubmit] = useActionState(postJob, {
        title: '',
        tags: [] as Tag[],
        minSalary: '',
        maxSalary: '',
        description: '',
        responsibilities: '',
        categories: '',
        address: '',
    });
    const [description, setDescription] = useState(state.description);
    const [responsibilities, setResponsibility] = useState(state.responsibilities);
    const [categories, setCategories] = useState(state.categories);
    const [address, setAddress] = useState(state.address);
    const { data: resultQuery } = useQuery({
        queryKey: [queryKey.listCategory],
        queryFn: async () => {
            try {
                const payload = await CategoryService.getAllCategories();
                const temp = await AddressService.getAllAddressByEnterprise();
                return { payload, temp };
            } catch (error: any) {
                console.log(error);
            }
        },
        staleTime: 1000 * 60,
        refetchInterval: 1000 * 60,
        retry: 2,
        enabled: true,
    });
    useEffect(() => {
        if (state.success) {
            toast.success(successKeyMessage.POST_JOB_SUCCESSFULL);
            router.push('/');
        }
    }, [state.success, state.errors]);
    const handleDescription = (content: string) => {
        setDescription(content);
    };
    const handleResponsibility = (content: string) => {
        setResponsibility(content);
    };

    return (
        <div className="container mx-auto p-6 ">
            <h1 className="text-2xl font-bold mb-6">Post a job</h1>
            <form
                action={(formData) => {
                    formData.set('description', description);
                    formData.set('responsibilities', responsibilities);
                    selectedTags.forEach((tagId) => {
                        formData.append('tags[]', tagId);
                    });
                    return onSubmit(formData);
                }}
                className="space-y-4 bg-white"
            >
                <div className="flex flex-col gap-y-2">
                    <h1>Job Title</h1>
                    <Input
                        className={clsx(
                            'h-12 rounded-sm',
                            state.errors?.title
                                ? 'border-2 border-danger ring-danger'
                                : ' focus-visible:border-primary focus-visible:ring-primary'
                        )}
                        defaultValue={state.title}
                        name="title"
                    />
                    <p className=" text-red-500 text-[12px] font-medium ">
                        {state.errors?.title && state.errors.title[0]}
                    </p>
                </div>

                <div className="flex flex-col gap-y-2">
                    <h1>Tag</h1>
                    <div className="flex flex-grow gap-x-2">
                        <MultiSelectSearchInput
                            onChange={(newTagIds: string[]) => setSelectedTags(newTagIds)}
                            error={state.errors?.tags}
                        />

                        <div className="flex-grow basis-1/3 max-w-[30%]">
                            <DialogAddTag />
                        </div>
                    </div>
                    <p className=" text-red-500 text-[12px] font-medium ">
                        {state.errors?.tags && state.errors.tags[0]}
                    </p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h1>Address</h1>
                    <Select
                        value={address}
                        onValueChange={(value) => {
                            setAddress(value);
                            state.address = value;
                        }}
                        name="address"
                    >
                        <SelectTrigger
                            className={clsx(
                                'h-12 text-base rounded-sm',
                                state.errors?.address
                                    ? 'border-2 border-danger focus:border-danger focus:ring-0'
                                    : 'focus:border-primary focus:ring-primary'
                            )}
                        >
                            <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                            {resultQuery?.temp?.map((temp) => (
                                <SelectItem key={temp.addressId} value={temp.addressId}>
                                    {temp.country} - {temp.city}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className=" text-red-500 text-[12px] font-medium ">
                        {state.errors?.address && state.errors.address[0]}
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-bold mt-8 mb-4">Salary</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-y-2">
                            <h1>Min Salary</h1>
                            <Input
                                className={clsx(
                                    'h-12 rounded-sm',
                                    state.errors?.minSalary
                                        ? 'border-2 border-danger ring-danger'
                                        : 'focus-visible:border-primary focus-visible:ring-primary'
                                )}
                                type="number"
                                defaultValue={state.minSalary}
                                name="minSalary"
                            />
                            <p className=" text-red-500 text-[12px] font-medium ">
                                {state.errors?.minSalary && state.errors.minSalary[0]}
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1>Max Salary</h1>
                            <Input
                                className={clsx(
                                    'h-12 rounded-sm',
                                    state.errors?.maxSalary
                                        ? 'border-2 border-danger ring-danger'
                                        : 'focus-visible:border-primary focus-visible:ring-primary'
                                )}
                                type="number"
                                defaultValue={state.maxSalary}
                                name="maxSalary"
                            />
                            <p className=" text-red-500 text-[12px] font-medium ">
                                {state.errors?.maxSalary && state.errors.maxSalary[0]}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-bold mt-8 mb-4">Advance Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-y-2">
                            <h1>Education</h1>
                            <Select name="education">
                                <SelectTrigger
                                    className={clsx(
                                        'h-12 text-base rounded-sm',
                                        state.errors?.education
                                            ? 'border-2 border-danger focus:border-danger focus:ring-0'
                                            : 'focus:border-primary focus:ring-primary'
                                    )}
                                >
                                    <SelectValue placeholder="Select..." className="text-[#767F8C]" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="bachelor">Bachelors Degree</SelectItem>
                                    <SelectItem value="master">Masters Degree</SelectItem>
                                    <SelectItem value="phd">Ph.D.</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-red-500 text-[12px] font-medium">
                                {state.errors?.education && state.errors.education[0]}
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1>Experience</h1>
                            <Input
                                className={clsx(
                                    'h-12 rounded-sm',
                                    state.errors?.experience
                                        ? 'border-2 border-danger ring-danger'
                                        : 'focus-visible:border-primary focus-visible:ring-primary'
                                )}
                                type="number"
                                defaultValue={state.experience}
                                name="experience"
                            />
                            <p className=" text-red-500 text-[12px] font-medium ">
                                {state.errors?.experience && state.errors.experience[0]}
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1>Job Type</h1>
                            <Select name="jobType">
                                <SelectTrigger
                                    className={clsx(
                                        'h-12 text-base rounded-sm',
                                        state.errors?.jobType
                                            ? 'border-2 border-danger focus:border-danger focus:ring-0'
                                            : 'focus:border-primary focus:ring-primary'
                                    )}
                                >
                                    <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="fulltime">Full Time</SelectItem>
                                    <SelectItem value="parttime">Part Time</SelectItem>
                                    <SelectItem value="contract">Contract</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className=" text-red-500 text-[12px] font-medium ">
                                {state.errors?.jobType && state.errors.jobType[0]}
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1>Expiration Date</h1>
                            <div className="relative">
                                <Input
                                    type="date"
                                    className={clsx(
                                        'h-12 rounded-sm',
                                        state.errors?.expirationDate
                                            ? 'border-2 border-danger ring-danger'
                                            : 'focus-visible:border-primary focus-visible:ring-primary'
                                    )}
                                    name="expirationDate"
                                    defaultValue={state.expirationDate}
                                />
                            </div>
                            <p className=" text-red-500 text-[12px] font-medium ">
                                {state.errors?.expirationDate && state.errors.expirationDate[0]}
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1>Job Level</h1>
                            <Select name="jobLevel">
                                <SelectTrigger
                                    className={clsx(
                                        'h-12 text-base rounded-sm',
                                        state.errors?.jobLevel
                                            ? 'border-2 border-danger focus:border-danger focus:ring-0'
                                            : 'focus:border-primary focus:ring-primary'
                                    )}
                                >
                                    <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="junior">Junior</SelectItem>
                                    <SelectItem value="mid">Mid-Level</SelectItem>
                                    <SelectItem value="senior">Senior</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className=" text-red-500 text-[12px] font-medium ">
                                {state.errors?.jobLevel && state.errors.jobLevel[0]}
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1>Category</h1>
                            <Select
                                value={categories}
                                onValueChange={(value) => {
                                    setCategories(value);
                                    state.categories = value;
                                }}
                                name="category"
                            >
                                <SelectTrigger
                                    className={clsx(
                                        'h-12 text-base rounded-sm',
                                        state.errors?.category
                                            ? 'border-2 border-danger focus:border-danger focus:ring-0'
                                            : 'focus:border-primary focus:ring-primary'
                                    )}
                                >
                                    <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {resultQuery?.payload?.map((categories) => (
                                        <SelectItem key={categories.categoryId} value={categories.categoryId}>
                                            {categories.categoryName}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <p className=" text-red-500 text-[12px] font-medium ">
                                {state.errors?.category && state.errors.category[0]}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-bold mt-8 mb-4">Description & Responsibility</h2>
                    <div className="space-y-6">
                        <div className="flex flex-col gap-y-2">
                            <h1>Description</h1>
                            <div className="focus-visible:border-primary focus-visible:ring-primary">
                                <RichTextEditor
                                    onChange={handleDescription}
                                    initialContent={description}
                                    hasError={!!state.errors?.description}
                                />
                                <p className=" text-red-500 text-[12px] font-medium ">
                                    {state.errors?.description && state.errors.description[0]}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <h1>Responsibilities</h1>
                            <div className="focus-visible:border-primary focus-visible:ring-primary">
                                <RichTextEditor
                                    onChange={handleResponsibility}
                                    initialContent={responsibilities}
                                    hasError={!!state.errors?.responsibilities}
                                />
                            </div>
                            <p className=" text-red-500 text-[12px] font-medium ">
                                {state.errors?.responsibilities && state.errors.responsibilities[0]}
                            </p>
                        </div>
                    </div>
                </div>

                <Button type="submit" className="group w-full md:w-auto">
                    Post Job <LuArrowRight className="group-hover:translate-x-2 transition-all duration-100" />
                </Button>
            </form>
        </div>
    );
}
