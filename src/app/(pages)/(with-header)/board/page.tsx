'use client';
const Excalidraw = dynamic(async () => (await import('@excalidraw/excalidraw')).Excalidraw, {
    ssr: false,
});
import dynamic from 'next/dynamic';

import { Theme } from '@excalidraw/excalidraw/types/element/types';

import { useColorScheme } from '~/lib/hooks/useColorScheme';

const BoardPage = () => {
    const { theme } = useColorScheme();
    return (
        <div className="relative h-[calc(100svh-72px)] overflow-hidden">
            <Excalidraw theme={theme as Theme} />
        </div>
    );
};

export default BoardPage;
