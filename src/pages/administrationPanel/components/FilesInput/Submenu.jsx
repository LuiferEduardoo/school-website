import {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from "@tremor/react";
import { MdOutlineImportantDevices, MdOutlineSettingsSystemDaydream  } from "react-icons/md";


const Submenu = ({ panels  }) => {
    return (
        <>
            <TabGroup>
                <TabList className="mt-8">
                    <Tab className="flex items-center ">
                        <MdOutlineImportantDevices className="inline-block mr-2" /> 
                        <span>Cargar desde el dispositivo</span>
                    </Tab>
                    <Tab className="flex items-center">
                        <MdOutlineSettingsSystemDaydream className="inline-block mr-2" /> 
                        <span>Cargar desde la aplicación</span>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className="mt-10">
                            {panels && panels ['tab1']}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-10">
                            {panels && panels ['tab2']}
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </>
    )
}

export default Submenu