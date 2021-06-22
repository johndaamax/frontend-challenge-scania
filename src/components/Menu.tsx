import * as React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

type MenuProps = {
    options: Array<string>,
    selectedIndex: number,
    handleChangedIndex: (index: number) => void
}

export default function CustomMenu({ options, selectedIndex, handleChangedIndex }: MenuProps) {

    function handleMenuItemClick(
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) {
        handleChangedIndex(index);
    };

    return (
        <div className="w-56 text-right rounded-sm bg-white ">
            <Menu as="div" className="w-full relative inline-block text-left ">
                {({ open }) => (
                    <>
                        <div className=''>
                            <Menu.Button
                                className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium rounded-sm bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus:ring-1 focus:ring-[#A4A6AB]">
                                {selectedIndex > -1 ? options[selectedIndex] : `Distance`}
                                <ChevronDownIcon
                                    className={`${open && 'transform rotate-180'} transition w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100`}
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Menu.Items className="absolute right-0 w-56 mt-[1px] origin-top-right bg-white divide-y divide-gray-100 focus:outline-none shadow">
                            {options.map((option, index) => (
                                <div
                                    key={option}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                >
                                    <Menu.Item>
                                        {({ active }) => (
                                            <div className={`${active && 'bg-[#C1C6D8]'} px-4 py-2`}>
                                                {option}
                                            </div>
                                        )}
                                    </Menu.Item>
                                </div>
                            ))}
                        </Menu.Items>
                    </>
                )}
            </Menu>
        </div>
    )
}