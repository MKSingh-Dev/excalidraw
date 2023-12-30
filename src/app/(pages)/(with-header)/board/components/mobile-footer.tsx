import { Footer, useDevice } from '@excalidraw/excalidraw';

import CustomFooter from './custom-footer';

const MobileFooter = () => {
    const device = useDevice();
    if (device.viewport.isMobile) {
        return (
            <Footer>
                <CustomFooter />
            </Footer>
        );
    }
    return null;
};
export default MobileFooter;
