import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../slices/userSlice';

const Users = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    console.log(useSelector((state) => state), '!!!!!!!!!!!!!');
    const users = useSelector((state) => state.users.users);
    console.log(users, '$$$$$$$$$$$')


    return (
        <div className="mt-3 close ">
            <button type="button">
                <span>&times;</span>
            </button>
            {users.map(({ id, firstName, lastName, maidenName, age }) => (
                <div>
                    <p className="mr-auto">name: {firstName}</p>
                    <p className="mr-auto">last name: {lastName}</p>
                    <p className="mr-auto">maidenName: {maidenName}</p>
                    <p className="mr-auto">age: {age}</p>
                    <br className="userBr" />
                </div>
            ))}
        </div>
    )
};
export default Users;


