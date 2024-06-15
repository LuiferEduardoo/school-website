import { useContext } from "react";
import { PublicationsContext } from "../..";
import moment from 'moment';
import 'moment/locale/es';

const DateComponet = () => {
    const {createdAt} = useContext(PublicationsContext);

    const formatDate = (dateString) => {
        return moment(dateString).locale('es').format('LL'); // Formatea la fecha a "13 de junio de 2024"
    };

    return (
        <div>
            <p>
                {createdAt
                    ? formatDate(createdAt)
                    : formatDate(moment().format("YYYY-MM-DD"))}
            </p>
        </div>
    );
};

export default DateComponet
