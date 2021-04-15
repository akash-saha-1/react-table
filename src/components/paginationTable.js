import React ,{useMemo,Fragment} from 'react'
import {useTable,usePagination} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json'
import {Columns} from './columns';
import './table.css';

const PaginationTable = () => {

	const columns=useMemo(() => Columns,[]);
	const data=useMemo(() => MOCK_DATA,[])

	const tableInstance=useTable({
		columns,
		data,
    intialState: { pageIndex: 2 }
	},usePagination)
	const {getTableProps,getTableBodyProps,headerGroups,prepareRow,
    canNextPage,canPreviousPage,pageOptions,state,previousPage,setPageSize,
    gotoPage,pageCount,nextPage,page}=tableInstance

    const {pageIndex,pageSize}=state;

  return (
    <Fragment>
  		<table className="table table-border table-striped table-hover" {...getTableProps()}>
  		  <thead>
  	    	{headerGroups.map((headerGroup)=>(
  	    		<tr {...headerGroup.getHeaderGroupProps()}>
  	    		{headerGroup.headers.map(column=>(
  	    			<th {...column.getHeaderProps()} key={Math.random(0,100000)}>{column.render('Header')}</th>
  	    		))}
  	    		</tr>
  	    	))}
  	    </thead>
  			<tbody {...getTableBodyProps()}>
  	    	{page.map((row)=>{
  					prepareRow(row);
  					return (
  						<tr {...row.getRowProps} key={Math.random(0,100000)}>
  							{row.cells.map(cell=>{
  								return <td {...cell.getCellProps()} key={Math.random(0,100000)}>{cell.render('Cell')}</td>
  							})}
  						</tr>
  					)
  				})}
  	    </tbody>
  		</table>
      <div>
        <span>
          Page: {' '}
          <strong>
            {pageIndex+1} of {pageOptions.length}
          </strong>
          {' '}
        </span>
        <span>
          | Go to page
          <input type="number" defaultValue={pageIndex+1} onChange={e=>{
            const pageNumber=e.target.value? Number(e.target.value)-1:0;
            gotoPage(pageNumber)
          }} style={{'width':'50px'}}/>
        </span>
        <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
          {
            [10,20,25,50].map(pageSize=>(
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))
          }
        </select>
        <button type="button" className='btn btn-info' onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button className="btn btn-primary" type="button" onClick={previousPage} disabled={!canPreviousPage}>
          Previous
        </button>
        <button className='btn btn-primary' type='button' onClick={nextPage} disabled={!canNextPage}>Next</button>
        <button type="button" className='btn btn-info' onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>
          {'>>'}
        </button>
      </div>
    </Fragment>
  )
};

export default PaginationTable
