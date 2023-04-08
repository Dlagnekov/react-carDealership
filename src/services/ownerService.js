import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/cars';

export const ownerService = () => {

    const request = requestFactory();

    const getAll = async (userId) => {
        const searchQuery = encodeURIComponent(`ownerId="${userId}"`);

        const result = await request.get(`${baseUrl}?where=${searchQuery}`);
        const ownedCars = Object.values(result);

        return ownedCars;
    };

    return getAll;

}