import React ,{useMemo} from 'react'
import {useTable} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json'
import {Columns} from './columns';
import './table.css';

const RowSelection = () => {

	const columns=useMemo(() => Columns,[]);
	const data=useMemo(() => MOCK_DATA,[])

	const tableInstance=useTable({
		columns,
		data
	})
	const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance

  const firstPageRows=rows.slice(0,10)

  return (
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
	    	{firstPageRows.map((row)=>{
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
  )
};

export default RowSelection
