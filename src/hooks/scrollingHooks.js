import { useEffect, useState } from 'react';

export const useScrollPosition = (ref, deps = []) => {
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const checkScroll = () => {
        const el = ref.current;
        if (!el) return;

        setAtStart(el.scrollLeft <= 1);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        checkScroll();
        el.addEventListener('scroll', checkScroll);

        return () => el.removeEventListener('scroll', checkScroll);
    }, [ref, ...deps]);

    return { atStart, atEnd, checkScroll };
};

export const useIsOverflowing = (ref, deps = []) => {
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const checkOverflow = () => {
            setIsOverflowing(el.scrollWidth > el.clientWidth);
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);

        return () => {
            window.removeEventListener('resize', checkOverflow);
        };
    }, [ref, ...deps]);

    return isOverflowing;
};
