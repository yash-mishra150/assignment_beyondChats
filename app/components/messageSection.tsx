import * as React from 'react';
import { useAppSelector } from '../redux/hooks';
import { Button } from './ui/button';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiMoonClearFill } from "react-icons/ri";
import { LuBot } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IoIosArrowDown } from "react-icons/io";
import { HiLightningBolt } from "react-icons/hi";
import { FiPaperclip } from "react-icons/fi";
import { FaFaceSmile } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";

interface messageSectionProps {
    onClickOpen?: () => void;
}

const MessageSection = ({ onClickOpen }: messageSectionProps) => {
    const dataState = useAppSelector((state) => state.currentSelector.value);

    return (
        <div className="flex flex-col h-screen w-full">
            {/* Header */}
            <div className='flex justify-between p-2 border-b w-full'>
                <h1 className='font-nunito font-bold text-lg truncate'>{dataState.name}</h1>
                <div className='flex gap-2 flex-shrink-0'>
                    <Button variant='outline' size='icon' className='h-8 w-8 flex-shrink-0'>
                        <BiDotsHorizontalRounded className="h-5 w-5" />
                    </Button>
                    <Button variant='outline' size='icon' className='h-8 w-8 flex-shrink-0'>
                        <RiMoonClearFill className="h-5 w-5" />
                    </Button>
                    <Button onClick={onClickOpen} variant='default' size='sm' className='bg-black text-white font-nunito rounded-md px-4 flex-shrink-0 whitespace-nowrap'>
                        <LuBot className="h-4 w-4 mr-1" />
                        Open
                    </Button>
                </div>
            </div>

            {/* Chat Messages Section - will grow/shrink with available space */}
            <div className="flex-1 p-4 overflow-y-auto w-full">
                <div className="flex mb-4 items-start w-full">
                    <div className="flex-shrink-0 mr-3">
                        <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
                            <AvatarFallback>{dataState.name?.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex flex-col max-w-full w-full">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-full md:max-w-md">
                            <p className="text-sm font-nunito">
                                I bought a product from your store in November as a Christmas gift for a
                                member of my family. However, it turns out they have something very similar
                                already. I was hoping you&apos;d be able to refund me, as it is un-opened.
                            </p>
                        </div>
                        <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 font-nunito">1:05pm</span>
                        </div>
                    </div>
                </div>

                <div className="flex mb-4 justify-end w-full">
                    <div className="flex flex-col items-end max-w-full w-full">
                        <div className="bg-blue-100 rounded-lg p-3 max-w-full md:max-w-md">
                            <p className="text-sm font-nunito">
                                Let me just look into this for you, Luis.
                            </p>
                        </div>
                        <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 font-nunito">1:07pm</span>
                            <span className="text-xs text-gray-500 font-nunito ml-2">Team</span>
                            <Avatar className="h-6 w-6 ml-1">
                                <AvatarImage src="/team-avatar.png" />
                                <AvatarFallback>T</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </div>

            {/* Message Input Area - fixed at bottom */}
            <div className="sticky bottom-3 border-2 border-gray-300 m-2 p-2 h-32 rounded-xl w-auto">
                    <Button variant='ghost' className='text-start'>
                        <FaMessage className="h-4 w-4 mr-1" />
                        Chat
                        <IoIosArrowDown />
                    </Button>
                    <input
                        placeholder='Use ⌘K for shortcuts' 
                        className='w-full font-nunito text-base h-10 px-3 rounded-md focus:outline-none' 
                    />
                    <div className='flex justify-between'>
                        <div className="flex items-center">
                            <Button variant='ghost' size='icon' className='h-8 w-8'>
                                <HiLightningBolt className="h-4 w-4" />
                            </Button>
                            <div className='w-0.5 h-6 bg-neutral-400 rounded'/>
                            <Button variant='ghost' size='icon' className='h-8 w-8'>
                                <FiPaperclip className="h-4 w-4" />
                            </Button>
                            <Button variant='ghost' size='icon' className='h-8 w-8'>
                                <FaFaceSmile className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex items-center">
                            <Button variant='ghost' className='font-nunito p-2'>
                                Send <div className='w-0.5 h-full bg-neutral-400 rounded'/> <IoIosArrowDown />
                            </Button>
                        </div>
                    </div>
                   
            </div>
        </div>
    );
};

export default MessageSection;