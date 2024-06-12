import React, { useState, useContext, useEffect } from "react";
import { FormContext } from ".";
import { getAcademicLevels } from "../../../services/academicLevels.service";
import { Autocomplete, AutocompleteItem, useDisclosure, Checkbox } from "@nextui-org/react";
import Modal from "./Modal";

const AcademicInformation = () => {
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [dateAcademicLevel, setDateAcademicLevel] = useState([]);

    const {
        academicLevels,
        setAcademicLevels,
        grade,
        setGrade,
        setIsDisabledNext,
    } = useContext(FormContext);

    const [selectAcademicLevel, setSelectAcademicLevel] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if (!academicLevels || !grade)
            setIsDisabledNext(true);
        else setIsDisabledNext(false);
    }, [academicLevels, grade]);

    useEffect(() => {
        const callAPI = async () => {
            try {
                setIsLoadingPage(true);
                const { elements } = await getAcademicLevels(
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    true
                );
                setDateAcademicLevel(elements);
            } finally {
                setIsLoadingPage(false);
            }
        };
        callAPI();
    }, []);

    const onSelectionAcademicLevels = (id) => {
        if (id) {
            setSelectAcademicLevel(dateAcademicLevel.filter((a) => a.id == id));
            onOpen();
        }
        setAcademicLevels(id);
        setGrade('');
    };
    return (
        <>
            <Autocomplete
                isLoading={isLoadingPage}
                isRequired
                variant="bordered"
                label="Nivel academico"
                defaultItems={dateAcademicLevel?.map((academic) => ({
                    value: academic.id,
                    label: `${academic.nameLevel} - sede ${academic.campus.campusNumber} (${academic.educationDay.educationDay})`,
                }))}
                selectedKey={academicLevels}
                onSelectionChange={onSelectionAcademicLevels}
            >
                {(item) => (
                    <AutocompleteItem key={item.value}>
                        {item.label}
                    </AutocompleteItem>
                )}
            </Autocomplete>
            <Autocomplete
                isLoading={isLoadingPage}
                isRequired
                variant="bordered"
                label="Grado"
                defaultItems={dateAcademicLevel
                    ?.filter(
                        (academic) =>
                            academic.id === parseInt(academicLevels)
                    )
                    ?.map((academic) => academic.schoolGrade)
                    ?.flat()
                    ?.map((grade) => ({ value: grade.id, label: grade.grade }))}
                selectedKey={grade}
                onSelectionChange={setGrade}
            >
                {(item) => (
                    <AutocompleteItem key={item.value}>
                        {String(item.label)}
                    </AutocompleteItem>
                )}
            </Autocomplete>
            <Modal
                title={`Información ${selectAcademicLevel[0]?.nameLevel} - sede ${selectAcademicLevel[0]?.campus?.campusNumber} (${selectAcademicLevel[0]?.educationDay?.educationDay})`}
                isOpen={isOpen}
                onClose={onClose}
                continue
                isDisable={isSelected}
                selectAcademicLevel={selectAcademicLevel}
            >
                <section className="text-gray-500 space-y-4">
                    <p>
                        Sede: {selectAcademicLevel[0]?.campus?.campusNumber} (
                        {selectAcademicLevel[0]?.campus?.campus})
                    </p>
                    <p>Modalidad: {selectAcademicLevel[0]?.modality.modality}</p>
                    <p>
                        Jornada:{" "}
                        {selectAcademicLevel[0]?.educationDay?.educationDay}
                    </p>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-500">
                            Requerimientos
                        </h2>
                        <div
                            className="prose text-gray-500"
                            dangerouslySetInnerHTML={{
                                __html: selectAcademicLevel[0]
                                    ?.admissionRequirements,
                            }}
                        />
                    </div>
                    <Checkbox
                        className="text-gray-500"
                        isSelected={isSelected}
                        onValueChange={setIsSelected}
                    >
                        <span className="text-gray-500">
                            He leido la Información
                        </span>
                    </Checkbox>
                </section>
            </Modal>
        </>
    );
};

export default AcademicInformation;
