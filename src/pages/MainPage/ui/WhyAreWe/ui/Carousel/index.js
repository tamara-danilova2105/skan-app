import { CarouselItem } from '../CarouselItem';
import { data } from '../lib/data';
import { BackIcon, NextIcon } from '../lib/icons';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const Carousel = () => {

    const [index, setIndex] = useState(0);
    const [dataCarousel, setDataCarousel] = useState([]);

    const width = window.innerWidth;
    const breakpoint = 620;

    useEffect(() => {
        setDataCarousel(width > breakpoint ? data : data.flat());
    }, [width])


    const getCarousel = () => {
        if (width > breakpoint) {
            return data[index].map((item, index) => {
                return <CarouselItem
                    key={index}
                    icon={item.icon}
                    text={item.text}
                />
            })
        } else {
            const parseData = data.flat();
            return <CarouselItem
                icon={parseData[index].icon}
                text={parseData[index].text}
            />
        }
    }

    const previos = () => {
        setIndex((index => {
            index--
            if (index < 0) return dataCarousel.length - 1
            return index
        }))
    }

    const next = () => {
        setIndex((index => {
            index++
            if (index > dataCarousel.length - 1) index = 0
            return index
        }))
    }

    return (
        <div className={styles.main}>

            <button
                onClick={previos}
                className={styles.button}
            >
                {BackIcon()}
            </button>

            {getCarousel()}
            
            <button
                onClick={next}
                className={styles.button}
            >
                {NextIcon()}
            </button>
        </div>
    )
}