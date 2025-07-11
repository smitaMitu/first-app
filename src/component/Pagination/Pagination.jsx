
import "./Pagination.css"
const Pagination = ({currentPage,setCurrentPage, arrayList, limitPerPage}) => {
    const pageCount = Math.ceil(arrayList.length/limitPerPage)
    const handleClick = (number) =>{
        setCurrentPage(number+1)
    }
    const handleArrowClick= (e, value) =>{
        e.preventDefault()
        if(value === "left"){
            if(currentPage === 1) return;
            setCurrentPage(currentPage - 1)
        }else{
            if(currentPage === pageCount) return setCurrentPage(pageCount);
            setCurrentPage(currentPage + 1);
        }
        console.log(currentPage)
    }
    
    // ----- Logic for showing max 5 pages -----
    const getPageNumbers = () => {
        const maxPagesToShow = 5;
        let start = Math.max(currentPage - 3, 0);
        let end = Math.min(start + maxPagesToShow, pageCount);

        if (end - start < maxPagesToShow) {
            start = Math.max(end - maxPagesToShow, 0);
        }

        return Array.from({ length: end - start }, (_, i) => start + i);
    };

    const pageNumbers = getPageNumbers();
  return (
    <div>
        <div className="pagination">
            <button className="page back" onClick={(e) => handleArrowClick(e,"left")}>{"<"}</button>
       {/* {
        Array.from({length : pageCount}, (_, index) => {
            return <button className={`page ${currentPage === index+1 ? "active": ""} ${(index >= currentPage+2) || (index <= currentPage - 4) ? "hide":null}`} onClick={() => handleClick(index)}>{index+1}</button>
        })
       } */}
       
                {pageNumbers.map((pageNum) => (
                    <button
                        key={pageNum}
                        className={`page ${currentPage === pageNum + 1 ? "active" : ""}`}
                        onClick={() => handleClick(pageNum)}
                    >
                        {pageNum + 1}
                    </button>
                ))}
       <button className="page back" onClick={(e) => handleArrowClick(e,"right")}>{">"}</button>
       </div>
        </div>
  )
}

export default Pagination