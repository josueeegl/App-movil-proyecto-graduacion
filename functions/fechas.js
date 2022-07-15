import * as fns from 'date-fns';

export const FilterDates = () => {
    const result = fns.sub(new Date(), { months: 1 });
    console.log(new Date());
    console.log(result);
}