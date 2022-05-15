function ListInfo(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5">
          <h3>{props.data.listName}</h3>
        </div>
        <div className="col-5">
          <h4>{props.data.destination}</h4>
        </div>
        <div className="col-2">
          <h4>{props.data.date}</h4>
        </div>
      </div>
    </div>
  );
}

export default ListInfo;
