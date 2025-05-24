import * as React from 'react';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { Button } from './ui/button';
import { FaRobot } from "react-icons/fa";
import { IoChevronUp } from "react-icons/io5";
import { useAppSelector } from '../redux/hooks';

interface ChatbotSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotSection = ({ isOpen, onClose }: ChatbotSectionProps) => {
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState('ai');
  const dataState = useAppSelector((state) => state.currentSelector.value);

  return (
    <div 
      className={`fixed inset-y-0 right-0 w-72 md:w-1/3 bg-gray-50 border-l border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header with tabs */}
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('ai')}
          className={`flex-1 py-3 px-2 flex justify-center items-center ${
            activeTab === 'ai' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
          }`}
        >
          <FaRobot className="h-4 w-4 mr-2" />
          <span className="font-medium text-sm">AI Copilot</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('details')}
          className={`flex-1 py-3 px-2 flex justify-center items-center ${
            activeTab === 'details' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
          }`}
        >
          <span className="font-medium text-sm">Details</span>
        </button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="h-10 w-10 text-gray-500 self-center"
        >
          <IoMdClose className="h-5 w-5" />
        </Button>
      </div>
      
      {/* AI Copilot Tab Content - Using flex with justify-center for vertical alignment */}
      {activeTab === 'ai' && (
        <div className="flex flex-col flex-1 justify-between">
          {/* Main content area with scrolling */}
          <div className="flex-1 overflow-y-auto flex flex-col justify-center items-center px-4 py-8">
            <div className="bg-black rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
              <FaRobot className="h-6 w-6 text-white" />
            </div>
            <p className="text-center font-medium mb-2">Hi, I&apos;m Fin AI Copilot</p>
            <p className="text-center text-gray-500 text-sm">
              Ask me anything about this conversation.
            </p>
          </div>
          
          {/* Suggested questions and input at bottom - fixed position */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="mb-3">
              {/* <span className="text-xs text-gray-500 font-medium">Suggested</span> */}
              <div className="bg-gray-200 dark:bg-gray-100 rounded-lg py-1 px-3 mt-1 inline-block">
                <span className="text-sm">How do I get a refund?</span>
              </div>
            </div>
            
            {/* Input area */}
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="w-full border border-gray-300 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <IoChevronUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Details Tab Content */}
      {activeTab === 'details' && (
        <div className="flex-1 p-4 overflow-y-auto">
          <h3 className="font-medium mb-3">Conversation Details</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Customer</p>
              <p className="text-sm">{dataState.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Issue</p>
              <p className="text-sm">Refund Request</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Purchase Date</p>
              <p className="text-sm">November 2024</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotSection;