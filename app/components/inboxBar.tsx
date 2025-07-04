import * as React from 'react';
import { useEffect } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/Dropdown"
import { Button } from './ui/button';
import { IoIosArrowDown } from "react-icons/io";
import { data, dataType } from '../constants/data';
import { useAppDispatch } from '../redux/hooks';
import { setCurrentItem } from '../redux/slices/currentSelector';

const InboxBar = () => {
    const dispatch = useAppDispatch()
    const truncateText = (text: string, maxLength: number = 25) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    const handleItemClick = (item: dataType) => {
        // Update Redux state only
        dispatch(setCurrentItem(item));
    };

    // Auto-select first item on desktop only
    useEffect(() => {
        const isDesktop = window.innerWidth >= 768;

        if (isDesktop && data.length > 0) {
            const firstItem = data[0];

            // If you've already converted to a string, parse it back to a Date
            const serializedItem = {
                ...firstItem,
                // No need to convert if it's already a Date
                lastMessageTime: typeof firstItem.lastMessageTime === 'string'
                    ? new Date(firstItem.lastMessageTime)
                    : firstItem.lastMessageTime
            };
            dispatch(setCurrentItem(serializedItem));
        }
    }, [dispatch, data]);


    return (
        <div className='flex flex-col w-full md:w-72 h-screen md:border-r-2 md:border-neutral-300 p-3'>
            <h1 className='text-lg font-nunito font-bold'>Your inbox</h1>
            <DropMenu />
            <div className="overflow-y-auto">
                {
                    data.map((item, index) => (
                        <Button
                            onClick={() => handleItemClick(item)}
                            key={index}
                            variant='ghost'
                            className='w-full h-16 flex flex-row justify-between items-center my-2'
                        >
                            <div className='flex flex-row items-center w-full'>
                                <div className='w-10 h-10 md:w-12 md:h-10 bg-neutral-300 flex justify-center items-center rounded-full mr-2 text-lg'>
                                    {item.name.charAt(0).toUpperCase()}
                                </div>
                                <div className='text-left w-full'>
                                    <div className="flex flex-row justify-between items-center">
                                        <h1 className='text-sm font-nunito font-semibold truncate'>{item.name} • {item.clinetCompany}</h1>
                                        {item.unreadcount > 0 && (
                                            <div className='flex items-center justify-center min-w-4 h-4 px-1 ml-2 bg-black rounded-full'>
                                                <span className='text-xs text-white font-nunito font-semibold'>{item.unreadcount}</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className='text-xs font-nunito text-neutral-500'>{truncateText(item.lastMessage)}</p>
                                </div>
                            </div>
                        </Button>
                    ))
                }
            </div>
        </div>
    );
};

const DropMenu = () => {
    return (
        <div className='flex flex-row justify-between items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className='focus:outline-none' variant="ghost">5 Open<IoIosArrowDown /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuItem className='font-nunito'>5</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className='focus:outline-none font-nunito font-semibold' variant="ghost">Waiting Longest<IoIosArrowDown /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuItem className='font-nunito'>Waiting Longest</DropdownMenuItem>
                    <DropdownMenuItem className='font-nunito'>Latest Clients</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default InboxBar;