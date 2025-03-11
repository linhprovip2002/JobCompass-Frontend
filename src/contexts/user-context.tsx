'use client';

import { clearLoginCookie, clearTokenInfo } from '@/lib/auth';
import { queryKey } from '@/lib/react-query/keys';
import { handleErrorToast } from '@/lib/utils';
import { AuthService } from '@/services/auth.service';
import { User } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext<{ userInfo: User | null; refreshMe: () => void; logoutHandle: () => void }>({
    userInfo: null,
    refreshMe: () => {},
    logoutHandle: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [localUser, setLocalUser] = useState<User | null>(null);
    const [isHydrated, setIsHydrated] = useState(false);
    const queryClient = useQueryClient();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        setLocalUser(storedUser ? JSON.parse(storedUser) : null);
        setIsHydrated(true);
    }, []);

    const { data: fetchedUser, refetch: refreshMe } = useQuery({
        queryKey: [queryKey.me],
        queryFn: async () => {
            const data = await AuthService.getMe();
            localStorage.setItem('user', JSON.stringify(data.value));
            if (data.value) {
                setLocalUser(data.value);
            }
            return data.value;
        },
        staleTime: 1000 * 60 * 5,
        retry: 2,
        enabled: isHydrated && JSON.parse(localStorage.getItem('logged') ?? 'false'),
        refetchInterval: 1000 * 60 * 5,
    });

    const logoutMutation = useMutation({
        mutationFn: AuthService.logout,
        onSuccess: () => {
            clearTokenInfo();

            // clear user info and cookie logged
            setLocalUser(null);
            localStorage.removeItem('user');
            clearLoginCookie();

            // Clear cache
            queryClient.setQueryData([queryKey.me], null); // Immediately clear cache
        },
        onError: (error) => {
            handleErrorToast(error);
        },
    });

    if (!isHydrated) return null; // or loading spinner

    return (
        <UserContext.Provider
            value={{ userInfo: fetchedUser ?? localUser, refreshMe: refreshMe, logoutHandle: logoutMutation.mutate }}
        >
            {children}
        </UserContext.Provider>
    );
}
