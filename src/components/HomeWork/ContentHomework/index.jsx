import React from 'react';
import './styles.scss';
import picture1 from './package-lock.png';
import picture2 from './d-comments.png';

export default class  ContentMain extends React.Component {
    render() {
        const {textq, pointBal} = this.props;
        return (
        <div id="ContentHomework">
                  <p className="ContentHomework">{textq}</p>
        <div>
        <div className="d-rating">
            <form className="d-rating-form" action="#" method="post">
                <img src={picture1} alt="file"/>
                <input type="text" className="d-rating__choose" name="choose" placeholder="Ссылка на GitHub"></input>
                <button className="d-rating__done" type="submit" name="d-sub">Готово</button>
            </form>
        </div>
        <p className="d-rating__line">&lt;Оценка&gt;
                <span className="d-rating__digit"> {pointBal}/10 </span> 
                баллов</p>
        <div className="d-comments">
            <form className="d-comments-form" action="#" method="post">
                
                <img src={picture2} alt="file"/>
                <label className="d-comments__name"></label>
                <input className="d-comments__title" type="text" name="d-comments" value="" placeholder="Написать комментарий"></input>
                <button className="d-comments__send" type="submit" name="d-sub" value="sent">Отправить</button>
            </form>
        </div>
            

                        
        <div className="d-nav">
            <a href="#" className="d-nav__left">Вернуться к тестам</a>
            <a href="#" className="d-nav__right">Следующая тема</a>
        </div>
        </div>
        </div>
      );
      }
  }