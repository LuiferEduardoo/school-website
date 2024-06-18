import moment from 'moment';
import 'moment/locale/es'; // Importa el locale español para moment
import truncateContent from "./../../utils/truncateContent";

const Information = (props) => {
    const formatDate = (dateString) => {
        return moment(dateString).locale('es').format('LL'); // Formatea la fecha a "13 de junio de 2024"
    };

    return (
        <section className="p-3 space-y-3">
            <p className="text-xs text-gray-500">
                {formatDate(props.createdAt)}
            </p>
            <h4 className="text-base font-semibold">{props.title}</h4>
            <div className="text-sm	text-gray-500">
                {truncateContent(props.content, 59)}
            </div>
        </section>
    );
};

export default Information