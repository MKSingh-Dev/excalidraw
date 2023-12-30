import React, { useState } from 'react';

import { cn } from '~/lib/utils';
const Sidebar = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                id="mySidebar"
                className={cn('absolute left-0 top-0 z-10 h-full w-0 overflow-x-hidden bg-black pt-14', open && 'w-80')}
            >
                <button className="absolute right-0 top-0 ml-12 text-4xl" onClick={() => setOpen(false)}>
                    x
                </button>
                <div className="sidebar-links">
                    <button>Dummy Home</button>
                    <button>Dummy About</button>{' '}
                </div>
            </div>
            <div className={cn(open && 'ml-80')}>
                <button
                    className="ml-12 flex cursor-pointer border-none bg-black px-4 py-2 text-xl text-white"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    Open Sidebar
                </button>
                {children}
            </div>
        </>
    );
};

export default Sidebar;
