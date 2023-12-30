import { Suspense } from 'react';

import ExcalidrawComponent from './components/excalidraw';

const BoardPage = () => (
    <Suspense>
        <ExcalidrawComponent />
    </Suspense>
);

export default BoardPage;
