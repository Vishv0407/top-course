function Filter(props){
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    let setLikedCourses = props.setLikedCourses; // Added prop for setLikedCourses

    function filterHandler(title){
        setCategory(title);
    }

    function showLikedCourses() {
        setCategory("Liked");
    }

    return(
        <div className="filter-btn-container">
            {filterData.map( (filter) => {
                return (
                    <button key={filter.id} onClick={() => filterHandler(filter.title)}> {filter.title} </button>
                )
            })} 
            <button onClick={showLikedCourses}> Liked</button>
        </div> 
    )
}

export default Filter;