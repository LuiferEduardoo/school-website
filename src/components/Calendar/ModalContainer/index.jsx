import React, { useState, useEffect, useContext } from "react";
import { CalendarContext } from "..";
import { AuthContext } from "../../../providers/AuthContext";
import { getCalendar } from "../../../services/calendar.service";
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter } from "@nextui-org/react";
import { MdEventNote } from "react-icons/md";
import moment from 'moment';
import CreateOrEdit from './CreateOrEdit';
import ReadOnly from './ReadOnly';
import Footer from './Footer';

const ModalContainer = (props) => {
    const { isOpen, onClose, idSelectEvent, selectCalendar, isReadOnly, withoutToken } = useContext(CalendarContext);

    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext)
    
    const [calendar, setCalendar] = useState({});

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [visible, setVisible] = useState(false);
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        setStart(moment(selectCalendar?.start).format('YYYY-MM-DDTHH:mm'));
        setEnd(moment(selectCalendar?.end).format('YYYY-MM-DDTHH:mm'));

    }, [selectCalendar]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callToAPI = async() => {
            if(isOpen){
                if(idSelectEvent){
                    try{
                        setIsLoading(true);
                        const response = await getCalendar(accessToken, setAccessToken, refreshToken, setRefreshToken, idSelectEvent, withoutToken);
                        setCalendar(response);
                        setTitle(response.title);
                        setDescription(response.description);
                        setVisible(response.visible)
                        setStart(response.startDate);
                        setEnd(response.endDate);
                    } catch(error){
                        onClose();
                    } finally{
                        setIsLoading(false);
                    }
                } else {
                    setIsLoading(false);
                    setCalendar({});
                    setTitle('');
                    setDescription('');
                    setVisible(false);
                }
            } else {
                setIsLoading(true);
            }
        }
        callToAPI()
    }, [isOpen, idSelectEvent]);

    return (
        <>
            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                isDismissable={false}
            >
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex gap-1 items-center text-xl"><MdEventNote /> Evento</ModalHeader>
                        <ModalBody>
                            {isReadOnly ? (
                                <ReadOnly 
                                    title={title}
                                    description={description}
                                    start={start}
                                    end={end}
                                    isLoading={isLoading}
                                />
                            ) : (
                                <CreateOrEdit 
                                    setStart={setStart}
                                    setEnd={setEnd}
                                    start={start}
                                    end={end}
                                    setError={setError}
                                    title={title}
                                    setTitle={setTitle}
                                    description={description}
                                    setDescription={setDescription}
                                    isLoading={isLoading}
                                />
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <Footer 
                                currentTitle={title}
                                ancientTitle={calendar?.title}
                                currentStart={start}
                                ancientStart={calendar?.startDate}
                                currentEnd={end}
                                ancientEnd={calendar?.endDate}
                                currentDescription={description}
                                ancientDescription={calendar?.description}
                                currentVisible={visible}
                                ancientVisible={calendar?.visible}
                                error={error}
                                isLoading={isLoading}
                            />
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalContainer