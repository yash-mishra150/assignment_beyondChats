"use client";

import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import InboxBar from './components/inboxBar';
import MessageSection from './components/messageSection';
import ChatbotSection from './components/ChatbotSection';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { IoArrowBackOutline } from "react-icons/io5";
import { clearCurrentItem } from './redux/slices/currentSelector';

// Component that uses Redux for mobile view switching
const AppContent = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const currentItem = useAppSelector((state) => state.currentSelector.value);
  const dispatch = useAppDispatch();
  
  // Check if a chat is currently selected (for mobile view)
  const isChatSelected = currentItem?.id !== 0;
  
  const handleBackToInbox = () => {
    dispatch(clearCurrentItem());
  };
  
  const handleOpenChatbot = () => {
    setIsChatbotOpen(true);
  };
  
  const handleCloseChatbot = () => {
    setIsChatbotOpen(false);
  };
  
  // Adjust main content width when chatbot is open
  const mainContentClass = isChatbotOpen 
    ? "w-full md:w-2/3 transition-all duration-300" 
    : "w-full transition-all duration-300";
  
  return (
    <div className="flex w-full h-[100svh] overflow-hidden">
      {/* Desktop View - Side by side */}
      <div className="hidden md:block w-72 min-w-72 border-r border-gray-200 h-[100svh]">
        <InboxBar />
      </div>
      
      <div className={`hidden md:block ${mainContentClass} h-[100svh]`}>
        <MessageSection onClickOpen={handleOpenChatbot} />
      </div>
      
      {/* Mobile View - Show based on Redux state */}
      <div className={`md:hidden w-full h-[100svh] ${isChatSelected ? 'hidden' : 'block'}`}>
        <InboxBar />
      </div>
      
      <div className={`md:hidden w-full h-[100svh] ${isChatSelected ? 'block' : 'hidden'}`}>
        {isChatSelected && (
          <>
            <div className="flex items-center p-3 border-b">
              <button 
                onClick={handleBackToInbox} 
                className="flex items-center text-sm font-nunito"
              >
                <IoArrowBackOutline className="h-5 w-5 mr-2" />
                Back to inbox
              </button>
            </div>
            <div className="h-[calc(100svh-49px)]">
              <MessageSection onClickOpen={handleOpenChatbot} />
            </div>
          </>
        )}
      </div>
      
      {/* Chatbot section with slide-in animation */}
      <ChatbotSection isOpen={isChatbotOpen} onClose={handleCloseChatbot} />
      
      {/* Semi-transparent overlay on mobile only */}
      {isChatbotOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={handleCloseChatbot}
        />
      )}
    </div>
  );
};

export default function Home() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}