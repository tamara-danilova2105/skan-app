import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../../../../AuthPage/services/slice';
import apply from '../../../../../../assets/apply.png';
import './styles.css';

export const RateItem = ({ rate }) => {

    const {
        header,
        image,
        style,
        description,
        current,
        new_price,
        old_price,
        text,
        include,
    } = rate

    const authStatus = useSelector(getAuthStatus);

    return (
        <div className={(current && authStatus) ? `main ${style}_main` : 'main'}>
            <div className={`${style}`}>
                <div>
                    <p className='header'>{header}</p>
                    <p className='description'>{description}</p>
                </div>
                <img className='image_rate' src={image} alt={header} />
            </div>

            <div className='current'>
                {(current && authStatus) && <span className='span_current'>Текущий тариф</span>}
            </div>

            <div className='container_price'>
                <div>
                    <span className='new_price'>{new_price} ₽</span>
                    <span className='old_price'>{old_price} ₽</span>
                </div>
                <p className='text'>{text}</p>
            </div>

            <div className='include'>
                <p className='include_par'>В тариф входит:</p>
                {
                    include.map((item, index) => {
                        return <div key={index} className='include_list'>
                            <img className='apply' src={apply} alt='apply' />
                            <p className='item'>{item}</p>
                        </div>
                    })
                }
            </div>

            <div className='container_btn'>
                <button className={current && authStatus ? 'button_auth' : 'button'}>
                    {
                        current && authStatus
                            ? 'Перейти в личный кабинет'
                            : 'Подробнее'
                    }
                </button>
            </div>
        </div>
    );
};