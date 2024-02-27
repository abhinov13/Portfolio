import "./Table.css";

const Table = ({ views }) => {

    return <div className="CustomTable">
        {views.map((view) => view)}
    </div>
}

export default Table;