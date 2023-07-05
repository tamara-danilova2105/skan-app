import beginner from '../../../../../assets/beginner.png';
import pro from '../../../../../assets/pro.png';
import business from '../../../../../assets/business.png';

export const rates = [
    {
        header: 'Beginner',
        image: beginner,
        style: 'orange',
        description: 'Для небольшого исследования',
        current: true,
        new_price: 799,
        old_price: 1200,
        text: 'или 150 ₽/мес. при рассрочке на 24 мес.',
        include: [
            'Безлимитная история запросов',
            'Безопасная сделка',
            'Поддержка 24/7',
        ]
    },
    {
        header: 'Pro',
        image: pro,
        style: 'blue',
        description: 'Для HR и фрилансеров',
        current: false,
        new_price: 1299,
        old_price: 2600,
        text: 'или 279 ₽/мес. при рассрочке на 24 мес.',
        include: [
            'Все пункты тарифа Beginner',
            'Экспорт истории',
            'Рекомендации по приоритетам',
        ]
    },
    {
        header: 'Business',
        image: business,
        style: 'black',
        description: 'Для корпоративных клиентов',
        current: false,
        new_price: 2799,
        old_price: 3700,
        text: '',
        include: [
            'Все пункты тарифа Pro',
            'Безлимитное количество запросов',
            'Приоритетная поддержка',
        ]
    },
]