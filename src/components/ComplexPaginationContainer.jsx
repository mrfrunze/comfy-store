import { useLoaderData, useLocation, useNavigate } from "react-router-dom"

const ComplexPaginationContainer = () => {
    const { meta } = useLoaderData()
    console.log(meta);
    const { pageCount, page } = meta.pagination;
    
  
    // const pages = Array.from({ length: pageCount }, (_, index) => {
    //   return index + 1;
    // });

    // console.log(pages);
    const { search, pathname } = useLocation();
    const navigate = useNavigate();
  
    const handlePageChange = (pageNumber) => {
      const searchParams = new URLSearchParams(search);
      searchParams.set('page', pageNumber);
      navigate(`${pathname}?${searchParams.toString()}`);
    };

    const addPageButton = ({pageNumber, activeClass}) => {
        return (
            <button 
                onClick={() => handlePageChange(pageNumber)}
                key={pageNumber} 
                className={`btn btn-xs sm:btn-md border-none join-item ${
                    activeClass ? 'bg-base-300 border-base-300' : ''
                }`}
                >
                {pageNumber}
            </button>
        )
    }

    const renderPageButtons = () => {
        const pageButtons = []
        // first button
        pageButtons.push(addPageButton({pageNumber: 1, activeClass: page === 1 }))

        // dots 
        pageButtons.push(<button className="join-item btn btn-xs sm:btn-sm" key="dots-1">
            ...
        </button>)

        // active/current page 
        if (page !== 1 && page !== pageCount) {
            pageButtons.push(addPageButton({pageNumber: page, activeClass: true }))
        }

        // dots 
        pageButtons.push(<button className="join-item btn btn-xs sm:btn-sm" key="dots-2">
            ...
        </button>)
       
        // last button
        pageButtons.push(addPageButton({pageNumber: pageCount, activeClass: page === pageCount }))
        return pageButtons
    }
  
    if(pageCount < 2) return null
  
    return (
      <div className="mt-16 flex justify-end">
        <div className="join">
          <button 
          className='btn btn-xs sm:btn-md join-item'
            onClick={() => {
              let prevPage = page - 1;
              if (prevPage < 1) prevPage = pageCount;
              handlePageChange(prevPage);
            }}
           >
            Prev
          </button>
          {renderPageButtons()}
          <button 
            className='btn btn-xs sm:btn-md join-item'
            onClick={() => {
              let nextPage = page + 1;
              if (nextPage > pageCount) nextPage = 1;
              handlePageChange(nextPage);}}
            >
            Next
          </button>
        </div>
      </div>
    )
}

export default ComplexPaginationContainer