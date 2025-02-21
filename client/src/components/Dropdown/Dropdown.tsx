import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface DropDownProps {
    options: string[];
    className: string;
    selected: string | null
    setSelected: React.Dispatch<React.SetStateAction<string | null>>
}

function Dropdown({ options, className, selected, setSelected }: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef?.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`} ref={dropdownRef} >
            <button
                onClick={toggleDropdown}
                className="h-full w-full px-4 py-2 text-left text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 flex items-center justify-between"
            >
                <span className={'opacity-40 text-black'}>
                    {selected || 'Mr'}
                </span>
                <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="w-full px-2 py-2 text-left text-gray-700 hover:bg-gray-100 focus:outline-none"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown