import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { requests } from '../../../../app/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../../../pages/AuthPage/services/slice';
import { getAccountInfo, setAccountInfo } from '../../services/slice';

export const AccountInfo = () => {

    const token = useSelector(getToken);
    const accountInfo = useSelector(getAccountInfo)
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const getAccountInfo = async () => {
            const respons = await fetch(requests.account.get.info, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${token.accessToken}`
                },
            })

            const data = await respons.json();
            dispatch(setAccountInfo(data.eventFiltersInfo));
            setLoader(false);
        }
        getAccountInfo();
    }, [token.accessToken, dispatch])

    return (
        <div className={styles.main}>
            {
                loader
                    ? <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
                    : <>
                        <p className={styles.text}>
                            Использовано компаний
                            <span className={styles.used}>
                                {accountInfo?.usedCompanyCount}
                            </span>
                        </p>
                        <p className={styles.text}>
                            Лимит по компаниям
                            <span className={styles.limit}>
                                {accountInfo?.companyLimit}
                            </span>
                        </p>
                    </>
            }
        </div>
    )
}