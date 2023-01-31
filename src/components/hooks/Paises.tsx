import {useState, useRef, useEffect} from 'react'
import { ID, IReqRestApi } from '../interfaces/IReqRestApiusers';
import ReqRestApi from '../api/ReqRestApi';
const DEFAULT_PAGE = 1;
export const Country = () => {
    const [countrys, setCountrys] = useState<ID[]>([]);
    const currentPage = useRef(DEFAULT_PAGE);
        const getData = async () => {
            const response = await ReqRestApi.get<IReqRestApi>(
                '/Country', { params: { page: currentPage.current } }).then(
                    ({ data }) => data
                ).catch(console.log);
            response ? setCountrys(response.data): setCountrys([]);
        }
    useEffect(() => { getData(); }, []);
    return {
        countrys
    }
}