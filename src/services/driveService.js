import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/testDrives';

export const driveServiceFactory = (token) =>{

    const request = requestFactory(token);

    const getAll = async (userId) => {
        const searchQuery = encodeURIComponent(`userId="${userId}"`);
    
        const result = await request.get(`${baseUrl}?where=${searchQuery}`);
        const testDrives = Object.values(result);
    
        return testDrives;
    };
    
    const book = async (carId, carManufacturer, carModel, userId, userUsername, userEmail) => {

        const result = await request.post(baseUrl, { carId, carManufacturer, carModel, userId, userUsername, userEmail });
    
        return result;
    };

    return {
        getAll,
        book,
    }

};
