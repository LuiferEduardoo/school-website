import {Tabs, Tab} from "@nextui-org/react";

const Content = ({nameLevel, modality, educationalDay, campus, educationObjectives, admissionRequirements }) => {
    return (
        <div className="mt-20">
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
                    <div className="flex flex-col gap-6 md:flex-row items-start">
                        <div className="md:w-1/2 md:pr-4">
                            <div className='prose max-w-none' dangerouslySetInnerHTML={{__html: educationObjectives}} />
                        </div>
                        <div className="md:w-1/2 mt-4 md:mt-0">
                            <ul>
                                <li><strong>Nombre del nivel académico:</strong> {nameLevel}</li>
                                <li><strong>Modalidad:</strong> {modality}</li>
                                <li><strong>Jornada:</strong> {educationalDay}</li>
                                <li><strong>Sede:</strong> {campus}</li>
                            </ul>
                        </div>
                    </div>
                </Tab>

                <Tab
                    key="admissionRequirements"
                    title={
                        <div className="flex items-center space-x-2">
                        <span>Requisitos para admisiones</span>
                        </div>
                    }
                >
                    <div className='prose max-w-none'>
                        <div dangerouslySetInnerHTML={{__html: admissionRequirements}} />
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Content