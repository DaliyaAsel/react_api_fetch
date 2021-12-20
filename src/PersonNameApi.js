import './PersonNameApi.css'


function PersonNameApi (props) {
    const {personName} = props;
    return (
        <div>
            <h2>{personName}</h2>
            <p>Это страница разных людей из api</p>
        </div>
    )
}

export default PersonNameApi;