import KEY from '@/constants/key';
import { useQuery } from 'react-query';
import { getExportForm, getSchoolList } from './api';

export const useSchoolListQuery = (school: string) => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.FORM_SCHOOL_LIST, school],
        queryFn: () => getSchoolList(school),
    });

    return { data: data?.dataList, ...restQuery };
};

export const useExportFormQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.EXPORT_FORM],
        queryFn: () => getExportForm(),
        enabled: true,
    });

    return { data, ...restQuery };
};
