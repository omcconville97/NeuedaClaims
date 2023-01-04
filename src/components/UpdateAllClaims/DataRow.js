const DataRow = ({details, index, onDelete, onEdit, hanldeClick}) => {

    return (
        <tr>
            <td>{details.policyNumber}</td>
            <td>{details.title}</td>
            <td>{details.firstName}</td>
            <td><button onClick={() => hanldeClick(details)}className="tableButton" type="button" name="registerButton">OPEN</button></td>
            <td>
                <button onClick={() => {
                    onEdit(index)
                }}>Edit</button>
                <button onClick={() => {
                    onDelete(index)
                }}>Delete</button>
            </td>
        </tr>
    )
}
export default DataRow;