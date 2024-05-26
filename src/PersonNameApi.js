import './PersonNameApi.css'


function PersonNameApi (props) {
    const {personName} = props;
    return (
        <div>
            <h2>{personName}</h2>
        </div>
    )
}

export default PersonNameApi;