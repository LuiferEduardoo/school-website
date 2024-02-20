import React, { useEffect } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { campus, educationalDay, modality } from './data'

const InformationBasic = (props) => {
    useEffect(() => {
        if (!props.name || !props.code || props.valueCampus.size === 0 || props.valueModality.size === 0 || props.valueEducationalDay.size === 0)
            props.setIsDisabledNext(true);
        else 
            props.setIsDisabledNext(false);
    }, [props.name, props.code, props.valueCampus, props.valueModality, props.valueEducationalDay, props.setIsDisabledNext]);
    return (
        <>
            <div className="flex flex-col gap-4 lg:flex-row col-span-5">
                <Input isRequired type="text" label="Nombre" value={props.name}  onChange={(e) => props.setName(e.target.value)} defaultValue={props.name} />
                <Input isRequired type="number" label="Codigo" value={props.code}  onChange={(e) => props.setCode(e.target.value)} defaultValue={props.code} />
                <Select
                    isRequired
                    items={campus}
                    selectedKeys={props.valueCampus}
                    label="Sede"
                    onSelectionChange={props.setValueCampus}
                >
                    {(campu) => <SelectItem key={campu.value}>{campu.label}</SelectItem>}
                </Select>
            </div>
            <div className="col-span-5 flex gap-4">
                <Select
                    isRequired
                    items={modality}
                    selectedKeys={props.valueModality}
                    label="Modalidad"
                    onSelectionChange={props.setValueModality}
                >
                    {(modality) => <SelectItem key={modality.value}>{modality.label}</SelectItem>}
                </Select>
                <Select
                    isRequired
                    items={educationalDay}
                    selectedKeys={props.valueEducationalDay}
                    label="Jornada"
                    onSelectionChange={props.setValueEducationalDay}
                >
                    {(educationalDay) => <SelectItem key={educationalDay.value}>{educationalDay.label}</SelectItem>}
                </Select>
            </div>
        </>
    )
}

export default InformationBasic