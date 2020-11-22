import { connect } from "react-redux";
import { SubjectSelect } from '../components/indexPage/blockSubjects';

/**Маппинг стейта для компонента, и передача этих данных в виде props */
function mapStateToProps( state ) {
    const { subject: { previewList } } = state;
    return {
        subjects: previewList
    }
}

/** Возвращаем из файла компонент в который передали нужные пропсы ( свойства и действия ) */
export default connect( mapStateToProps )( SubjectSelect );
