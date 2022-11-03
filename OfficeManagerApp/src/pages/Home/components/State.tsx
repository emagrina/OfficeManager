import { SharingInformationService } from '../../../services/SharingInformationService';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const State = ({ title }: any) => {
    const subscription$ = SharingInformationService.getSubject();
    const { t } = useTranslation();

    const btnBook = t('BtnBook');
    const btnCancel = t('BtnCancel');
    useEffect(() => {
        subscription$.subscribe(data => {
            let currentDate = new Date();

            // @ts-ignore
            data.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);

            // @ts-ignore
            if (data.getTime() >= currentDate.getTime()) {
                // @ts-ignore
                document.getElementById('btn-book').classList.remove('btn-inactive');
                // @ts-ignore
                document.getElementById('btn-book').classList.add('btn-primary');
                // @ts-ignore
                document.getElementById('div-btn-book').classList.remove('tooltip');
                // @ts-ignore
                document.getElementsByClassName('tooltiptext')[0].innerHTML = '';
            } else {
                // @ts-ignore
                document.getElementById('btn-book').classList.remove('btn-primary');
                // @ts-ignore
                document.getElementById('btn-book').classList.add('btn-inactive');
                // @ts-ignore
                document.getElementById('btn-cancel').classList.remove('btn-danger');
                // @ts-ignore
                document.getElementById('btn-cancel').classList.add('btn-inactive');
                // @ts-ignore
                document.getElementById('div-btn-book').classList.add('tooltip');
                // @ts-ignore
                document.getElementsByClassName('tooltiptext')[0].innerHTML =
                    t('WarningLastDate');
            }
        });
    });

    return (
        <div className={'stateBody'}>
            <h3>{title}</h3>

            <div id='div-btn-book' className={''}>
                <button id='btn-book' className={'btn-primary'}>
                    {btnBook}
                </button>
                <span className='tooltiptext'></span>
            </div>

            <div id='div-btn-cancel' className={''}>
                <button id='btn-cancel' className={'btn-inactive'}>
                    {btnCancel}
                </button>
                <span className={'tooltiptext'}></span>
            </div>
        </div>
    );
};

export default State;
