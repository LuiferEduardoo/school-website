import {Tabs, Tab} from "@nextui-org/react";
import Information from "./Information";
import AdmissionRequirements from "./AdmissionRequirements";

const TabsComponent = () => {
    return (
        <Tabs 
                aria-label="Options" 
                color="primary" 
                variant="underlined"
                classNames={{
                tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-[#22d3ee]",
                tab: "max-w-fit px-0 h-12",
                tabContent: "group-data-[selected=true]:text-[#06b6d4]"
                }}
            >
                <Tab
                    key="information"
                    title={
                        <div className="flex items-center space-x-2">
                        <span>Información</span>
                        </div>
                    }
                >
                    <Information />
                </Tab>

                <Tab
                    key="admissionRequirements"
                    title={
                        <div className="flex items-center space-x-2">
                        <span>Requisitos para admisiones</span>
                        </div>
                    }
                >
                    <AdmissionRequirements />
                </Tab>
            </Tabs>
    )
}

export default TabsComponent