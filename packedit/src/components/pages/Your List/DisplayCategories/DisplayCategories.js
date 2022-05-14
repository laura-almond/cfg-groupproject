import "../../../../styles/YourList-DisplayCategories/DisplayCategories.scss";

function DisplayCategories(props) {
  // console.log(props.data);

  function DeleteCategory() {
    //function to delete category from firebase
  }

  function AddCategory() {
    //function to add categoryto firebase
  }

  return (
    <div className="container-fluid">
      <h3>List Categories</h3>
      {props.data.listCategories.map((category) => (
        <div className="row">
          <div className="col-10">
            <p>{category.categoryName}</p>
          </div>
          <div className="col-2">
            <button onClick={DeleteCategory}>X</button>
          </div>
        </div>
      ))}
      <button onClick={AddCategory}>Add Category</button>
    </div>
  );
}

export default DisplayCategories;
