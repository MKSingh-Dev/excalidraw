// import { Button } from '@excalidraw/excalidraw';
import { IconBrandWechat } from '@tabler/icons-react';

import { Button } from '~/components/ui/button';

const CustomFooter = () => {
    return (
        <>
            <Button onClick={() => alert('General Kenobi!')} size="icon" variant="secondary" className="ml-2">
                <IconBrandWechat className="h-4 w-4" />
            </Button>
        </>
    );
};

export default CustomFooter;
