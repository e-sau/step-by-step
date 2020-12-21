import { connect } from "react-redux";
import { MessagesBlock } from "../components/MessagesBlock";

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @return { Object }
 **/
function mapStateToProps() {
  return {
    /** @todo доработать */
    chats: [
      { id: 1, fullName: "Максим Петров", message: "Какой ответ у тебя в задании №2?", dateTime: "1 декабря 12:00", unread: true },
      { id: 2, fullName: "Ваня Иванов", message: "Какой ответ у тебя в задании №2?", dateTime: "1 декабря 12:00", },
    ]
  };
}

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps )( MessagesBlock );
