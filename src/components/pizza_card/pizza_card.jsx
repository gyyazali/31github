import css from "./pizza_card.module.css"
import pizza1 from "../../assets/pizza1.png"

export const Pizza_card = () => {
    return (
        <div className={css.card}>
            <img src={pizza1} alt="" className={css.card_img} />
            <p className={css.card_name}>Чизбургер-пицца</p>
            <div className={css.card_kind}>
                <p className={`${css.card_kind_name} ${css.card_kind_name_active}`}>тонкое</p>
                <p className={css.card_kind_name}>традиционное</p>
            </div>
            <div className={css.card_size}>
                <p className={`${css.card_size_sm} ${css.card_size_sm_active}`}>26см</p>
                <p className={css.card_size_sm}>30см</p>
                <p className={css.card_size_sm}>40см</p>
            </div>
            <div className={css.card_price}>
                <div className={css.price_num}>
                    от 399 с
                </div>
                <div className="price">
                    Добавить
                    <span>2</span>
                </div>
            </div>
        </div>
    )
}