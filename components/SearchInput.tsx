'use client';

import React from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';



const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get( 'topic') || '';

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
    
        if(searchQuery) {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "topic", 
            value: searchQuery,
        });

        router.push(newUrl, {scroll: false});
    } else {
        if(pathname === '/companions') {
            const newUrl =removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["topic"],
            });

            router.push(newUrl, {scroll: false});
        }
    }
    }, 500) // Adjust the debounce time as needed (Common Debounce Values- Search inputs: 300-500ms, API calls: 500-1000ms, Resize events: 100-250ms))

}, [searchQuery, router, SearchParamsContext, pathname]);
  
    return (
    <div className="relative border border-black rounded-lg items center flex gap-2 px-2 h-fit">
        <Image src="/icons/search.svg" alt="search" width={15} height={15} 
        />
        <input
            placeholder="Search companions ..."
            className="outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
  )
}

export default SearchInput


