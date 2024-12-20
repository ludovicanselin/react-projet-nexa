import {useParams} from "react-router";

function UserPage() {

    const {id} = useParams();

    return (
        <div>User id : {id}</div>
    );
}

export default UserPage;